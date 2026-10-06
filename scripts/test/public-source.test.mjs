import assert from 'node:assert/strict';
import test from 'node:test';
import { fetchPublicSource, publicSourceDigest, validatePublicSource, renderPublicSection, PUBLIC_GRAPHQL_URL, PublicSourceError } from '../lib/public-source.mjs';

const NOW = Date.parse('2026-10-06T20:00:00.000Z');
const program = () => ({ handle: 'synthetic', name: 'Synthetic Program', state: 'public_mode', submission_state: 'open', offers_bounties: true,
  policy: 'Synthetic public policy.\nUse only authorized test accounts.', structured_scope_versions: { max_updated_at: '2026-10-06T12:00:00.000Z' } });
const asset = (id, eligible = true) => ({ id: `Scope/${id}`, asset_identifier: `${id}.example.test`, asset_type: 'URL', instruction: 'Synthetic public restriction.', eligible_for_submission: eligible, eligible_for_bounty: eligible, max_severity: eligible ? 'critical' : 'none' });
function api({ pages = [[asset('a'), asset('b', false)]], change, response, cursor, check } = {}) {
  let count = 0; let pageCount = 0;
  const calls = [];
  const fetchImpl = async (url, options) => {
    const body = JSON.parse(options.body); const verify = body.operationName === 'BastetPublicWikiVerify';
    calls.push({ url, options, body }); check?.(url, options, body);
    if (response) return response(count++, verify);
    const team = program();
    if (!verify) {
      const index = pageCount++;
      team.structured_scopes = { edges: (pages[index] ?? []).map(node => ({ node })),
        pageInfo: { hasNextPage: index < pages.length - 1, endCursor: cursor ? cursor(index) : String(index + 1) } };
    }
    change?.(team, count++, verify);
    return Response.json({ data: { team } });
  };
  return { fetchImpl, calls };
}
const get = async options => fetchPublicSource('synthetic', { ...api(options), now: NOW });
const clone = value => JSON.parse(JSON.stringify(value));
const redigest = source => { source.provenance.sha256 = publicSourceDigest(source); return source; };

test('only fixed anonymous reads are sent; all active scopes including ineligible records are retained', async () => {
  const mock = api({ pages: [[asset('a')], [asset('b', false)]], check(url, options, body) {
    assert.equal(url, PUBLIC_GRAPHQL_URL); assert.equal(options.method, 'POST'); assert.equal(options.redirect, 'manual');
    assert.equal(options.credentials, 'omit'); assert.equal(options.cache, 'no-store'); assert.equal(options.referrerPolicy, 'no-referrer');
    const headers = new Headers(options.headers);
    assert.equal(headers.has('Authorization'), false); assert.equal(headers.has('Cookie'), false);
    assert.deepEqual([...headers.keys()].sort(), ['accept', 'content-type', 'user-agent']);
    assert.equal(body.variables.handle, 'synthetic'); assert.doesNotMatch(body.query, /mutation|eligible_for_submission\s*:/);
    if (body.operationName === 'BastetPublicWikiSource') assert.match(body.query, /archived: false/);
    assert.ok(options.signal instanceof AbortSignal);
  } });
  const source = await fetchPublicSource('synthetic', { ...mock, now: NOW });
  assert.equal(source.assets.length, 2); assert.equal(source.assets[1].eligible_for_submission, false);
  assert.equal(source.provenance.pages, 2); assert.equal(mock.calls.length, 3);
  assert.equal(source.exclusions.status, 'not_represented'); assert.equal(source.provenance.authenticated, false);
  assert.equal(source.provenance.fetched_at, new Date(NOW).toISOString());
  assert.equal(source.provenance.sha256, publicSourceDigest(source));
  assert.equal(validatePublicSource(source, { now: NOW, expectedHandle: 'synthetic' }), source);
});

test('invalid or nonexact handles fail before network and returned identities cannot redirect a campaign', async () => {
  let calls = 0;
  for (const handle of ['../secret', 'https://hackerone.com/example', 'UPPER', 'a/b', '', 'a'.repeat(256), 'a\n', { handle: 'synthetic' }])
    await assert.rejects(fetchPublicSource(handle, { fetchImpl: () => { calls++; } }), PublicSourceError);
  assert.equal(calls, 0);
  await assert.rejects(get({ change: team => { team.handle = 'different'; } }), { code: 'IDENTITY_MISMATCH' });
});

test('only currently public_mode passes, regardless of public-looking historic metadata', async () => {
  for (const state of ['soft_launched', 'da_mode', 'inactive', 'sandboxed', 'public', null, undefined])
    await assert.rejects(get({ change: team => { team.state = state; team.publicly_available_at = '2020-01-01T00:00:00Z'; } }), { code: 'NOT_PUBLIC' });
  await assert.rejects(get({ response: () => Response.json({ data: { team: null } }) }), { code: 'NOT_PUBLIC' });
});

test('missing mandatory data never yields a publishable partial source', async () => {
  for (const missing of ['name', 'policy', 'offers_bounties', 'submission_state', 'structured_scope_versions', 'structured_scopes'])
    await assert.rejects(get({ change: team => { delete team[missing]; } }), PublicSourceError);
  for (const missing of ['id', 'asset_identifier', 'asset_type', 'instruction', 'eligible_for_submission', 'eligible_for_bounty', 'max_severity']) {
    const broken = asset('x'); delete broken[missing];
    await assert.rejects(get({ pages: [[broken]] }), PublicSourceError);
  }
  await assert.rejects(get({ change: team => { delete team.structured_scopes.pageInfo.endCursor; } }), PublicSourceError);
});

test('source digest is stable across order/time but covers policy, state-related metadata and scope flags', async () => {
  const a = await get({ pages: [[asset('a'), asset('b')]] });
  const b = await get({ pages: [[asset('b'), asset('a')]] });
  b.provenance.fetched_at = '2026-10-06T20:01:00.000Z';
  assert.equal(a.provenance.sha256, publicSourceDigest(b));
  for (const mutate of [s => { s.policy += ' changed'; }, s => { s.program.submission_state = 'paused'; }, s => { s.assets[0].eligible_for_submission = false; }]) {
    const changed = clone(a); mutate(changed); assert.notEqual(publicSourceDigest(changed), a.provenance.sha256);
    assert.throws(() => validatePublicSource(changed, { now: NOW }), { code: 'DIGEST_MISMATCH' });
  }
});

test('duplicate assets, cursor cycles, empty continued pages and source races fail closed', async () => {
  await assert.rejects(get({ pages: [[asset('a')], [asset('a')]] }), { code: 'SOURCE_CHANGED' });
  await assert.rejects(get({ pages: [[asset('a')], [asset('b')], [asset('c')]], cursor: () => 'repeat' }), { code: 'SOURCE_CHANGED' });
  await assert.rejects(get({ pages: [[], [asset('b')]] }), { code: 'SOURCE_CHANGED' });
  for (const mutate of [team => { team.policy += ' changed'; }, team => { team.structured_scope_versions.max_updated_at = '2026-10-06T13:00:00.000Z'; }]) {
    await assert.rejects(get({ pages: [[asset('a')], [asset('b')]], change: (team, call) => { if (call > 0) mutate(team); } }), { code: 'SOURCE_CHANGED' });
    await assert.rejects(get({ change: (team, call, verify) => { if (verify) mutate(team); } }), { code: 'SOURCE_CHANGED' });
  }
  await assert.rejects(get({ change: (team, call, verify) => { if (verify) team.state = 'soft_launched'; } }), { code: 'NOT_PUBLIC' });
});

test('API errors and hostile response bodies never become output or diagnostics', async () => {
  for (const status of [301, 302, 401, 403, 404, 429, 500])
    await assert.rejects(get({ response: () => new Response('secret upstream body', { status }) }), error => error instanceof PublicSourceError && !error.message.includes('secret'));
  for (const response of [() => Response.json({ errors: [{ message: 'secret' }], data: { team: program() } }),
    () => new Response('not-json secret', { headers: { 'content-type': 'application/json' } }),
    () => new Response('<h1>200 login page</h1>', { headers: { 'content-type': 'text/html' } })])
    await assert.rejects(get({ response }), error => error instanceof PublicSourceError && !error.message.includes('secret'));
  await assert.rejects(fetchPublicSource('synthetic', { fetchImpl: () => { throw new Error('secret credential'); } }),
    error => error.code === 'UNAVAILABLE' && !error.message.includes('credential'));
});

test('resource caps reject large responses, oversized pages and oversized policy', async () => {
  await assert.rejects(get({ response: () => new Response('x'.repeat(8 * 1024 * 1024 + 1), { headers: { 'content-type': 'application/json' } }) }), { code: 'RESOURCE_LIMIT' });
  await assert.rejects(get({ pages: [Array.from({ length: 101 }, (_, i) => asset(String(i)))] }), PublicSourceError);
  await assert.rejects(get({ change: team => { team.policy = 'x'.repeat(512 * 1024 + 1); } }), PublicSourceError);
  const pages = Array.from({ length: 101 }, (_, i) => [asset(String(i))]);
  await assert.rejects(get({ pages }), { code: 'RESOURCE_LIMIT' });
  const oversized = await get();
  oversized.assets = Array.from({ length: 70 }, (_, i) => ({ ...asset(String(i)), instruction: 'x'.repeat(128 * 1024) }));
  assert.throws(() => validatePublicSource(oversized, { now: NOW }), { code: 'RESOURCE_LIMIT' });
});

test('validation rejects extra fields recursively including REST-only exclusions and campaign material', async () => {
  const source = await get();
  for (const inject of [s => { s.reports = ['private']; }, s => { s.program.private_notes = 'private'; },
    s => { s.assets[0].credential = 'private'; }, s => { s.provenance.authorization = 'private'; },
    s => { s.exclusions.details = 'REST private exclusion'; }]) {
    const changed = clone(source); inject(changed);
    assert.throws(() => validatePublicSource(changed, { now: NOW }), PublicSourceError);
  }
  const nullInstruction = clone(source); nullInstruction.assets[0].instruction = null;
  assert.throws(() => validatePublicSource(nullInstruction, { now: NOW }), PublicSourceError);
});

test('validation requires anonymous provenance, identity, bounded freshness and digest integrity', async () => {
  const source = await get();
  for (const mutate of [s => { s.provenance.authenticated = true; }, s => { s.provenance.complete = false; },
    s => { s.provenance.program_url = 'https://evil.example'; }, s => { s.provenance.graphql_url = 'https://api.hackerone.com'; },
    s => { s.provenance.pages = 0; }, s => { s.provenance.sha256 = 'bad'; }, s => { s.provenance.fetched_at = 'yesterday'; }]) {
    const changed = clone(source); mutate(changed);
    assert.throws(() => validatePublicSource(changed, { now: NOW }), PublicSourceError);
  }
  assert.throws(() => validatePublicSource(source, { now: NOW + 48 * 60 * 60 * 1000 + 1 }), { code: 'STALE_SOURCE' });
  assert.throws(() => validatePublicSource(source, { now: NOW - 31000 }), { code: 'STALE_SOURCE' });
  assert.throws(() => validatePublicSource(source, { now: NOW, maxAgeMs: Infinity }), { code: 'STALE_SOURCE' });
  assert.throws(() => validatePublicSource(source, { now: NOW, expectedHandle: 'other' }), { code: 'IDENTITY_MISMATCH' });
  const changed = clone(source); changed.policy += ' changed';
  assert.throws(() => validatePublicSource(changed, { now: NOW }), { code: 'DIGEST_MISMATCH' });
});

test('renderer emits deterministic inert text, canonical links and explicit completeness limits', async () => {
  const source = await get();
  source.policy = '<script>alert(1)</script>\n![remote](https://evil.example/track)\n```\n<!-- bastet-public-scope:end -->\n# injected\n[link](javascript:alert(1))';
  source.assets[0].instruction = '{% include "secret" %}\n[private](https://evil.example)';
  redigest(source);
  const rendered = renderPublicSection(source, { now: NOW });
  assert.equal(rendered, renderPublicSection(clone(source), { now: NOW }));
  for (const line of source.policy.split('\n')) assert.ok(rendered.includes(`    ${line}`));
  assert.equal(rendered.split('\n').filter(line => /^<!-- bastet-public-scope:(begin|end) -->$/.test(line)).length, 2);
  assert.equal(rendered.split('\n').filter(line => line.startsWith('<script>')).length, 0);
  assert.match(rendered, /Public source digest: [a-f0-9]{64}/);
  assert.match(rendered, /Archived assets are not represented/);
  assert.match(rendered, /Separate scope-exclusion records are not exposed/);
  assert.match(rendered, /does not authorize disclosure of vulnerability findings/);
  assert.ok(rendered.includes('[HackerOne program](https://hackerone.com/synthetic)'));
});
