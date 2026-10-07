import assert from 'node:assert/strict';
import test from 'node:test';
import { classifyVisibility, fetchPublicVisibility, confirmRetirement } from '../lib/public-visibility.mjs';

const stub = () => ({ data: { team: { handle: 'synthetic', state: null, submission_state: null, offers_bounties: null } } });
const publicDocument = () => ({ data: { team: { handle: 'synthetic', state: 'public_mode', submission_state: 'open', offers_bounties: true } } });
const visibility = (handle, value = 'public') => ({ handle, visibility: value, reason: value === 'public' ? 'public_mode' : 'not_publicly_visible', state: value === 'public' ? 'public_mode' : null });

test('complete anonymous null stubs, recognized nonpublic states and exact NOT_FOUND are distinguished', () => {
  assert.equal(classifyVisibility(stub(), 'synthetic').visibility, 'non_public');
  for (const state of ['inactive', 'da_mode', 'sandboxed', 'soft_launched']) {
    const doc = stub(); doc.data.team.state = state;
    assert.equal(classifyVisibility(doc, 'synthetic').reason, 'non_public_state');
  }
  assert.equal(classifyVisibility({ data: { team: null } }, 'synthetic').visibility, 'missing');
  assert.equal(classifyVisibility({ data: { team: null }, errors: [{ message: 'Team does not exist', path: ['team'], type: 'NOT_FOUND', locations: [{ line: 1, column: 44 }] }] }, 'synthetic').reason, 'team_not_found');
});

test('public-but-paused/disabled/VDP is not deletion evidence', () => {
  for (const state of ['open', 'paused', 'disabled']) {
    const doc = publicDocument(); doc.data.team.submission_state = state; doc.data.team.offers_bounties = false;
    assert.equal(classifyVisibility(doc, 'synthetic').visibility, 'public');
  }
});

test('schema errors, unknown states, identity drift and generic GraphQL errors do not authorize removal', () => {
  for (const mutate of [doc => { delete doc.data.team.state; }, doc => { doc.data.team.state = 'new_state'; },
    doc => { doc.data.team.handle = 'other'; }, doc => { delete doc.data.team.offers_bounties; },
    doc => { doc.data.team.policy = 'unrequested'; }, doc => { doc.data.team.state = null; }]) {
    const doc = publicDocument(); mutate(doc); assert.throws(() => classifyVisibility(doc, 'synthetic'));
  }
  for (const errors of [[{ message: 'Team does not exist' }], [{ type: 'NOT_FOUND', message: 'Team does not exist', path: ['other'] }],
    [{ type: 'INTERNAL', message: 'secret upstream diagnostic', path: ['team'] }]])
    assert.throws(() => classifyVisibility({ data: { team: null }, errors }, 'synthetic'));
});

test('fetch is anonymous and errors, redirects, HTML and oversized responses remain holds', async () => {
  let called = false;
  await fetchPublicVisibility('synthetic', { fetchImpl: async (url, options) => {
    called = true; assert.equal(url, 'https://hackerone.com/graphql'); assert.equal(options.credentials, 'omit'); assert.equal(options.redirect, 'manual');
    assert.equal(new Headers(options.headers).has('authorization'), false); assert.equal(new Headers(options.headers).has('cookie'), false);
    assert.doesNotMatch(JSON.parse(options.body).query, /policy|structured_scopes/);
    return Response.json(stub());
  } });
  assert.equal(called, true);
  for (const status of [301, 403, 404, 429, 500]) await assert.rejects(fetchPublicVisibility('synthetic', { fetchImpl: async () => new Response('private body', { status }) }), { code: 'VISIBILITY_UNAVAILABLE' });
  await assert.rejects(fetchPublicVisibility('synthetic', { fetchImpl: async () => { throw new Error('secret'); } }), { code: 'VISIBILITY_UNAVAILABLE' });
  await assert.rejects(fetchPublicVisibility('synthetic', { fetchImpl: async () => new Response('x'.repeat(65537), { headers: { 'content-type': 'application/json' } }) }), { code: 'VISIBILITY_RESOURCE_LIMIT' });
  await assert.rejects(fetchPublicVisibility('synthetic', { fetchImpl: async () => new Response('<html/>', { headers: { 'content-type': 'text/html' } }) }), { code: 'VISIBILITY_UNAVAILABLE' });
});

test('retirement requires matching repeated target reads bracketed by a known-public control', async () => {
  const calls = [];
  const fetchVisibility = async handle => { calls.push(handle); return visibility(handle, handle === 'synthetic' ? 'non_public' : 'public'); };
  assert.equal((await confirmRetirement('synthetic', { fetchVisibility })).visibility, 'non_public');
  assert.deepEqual(calls, ['coinbase', 'synthetic', 'synthetic', 'coinbase']);
  await assert.rejects(confirmRetirement('synthetic', { fetchVisibility: async h => visibility(h) }), { code: 'RETIREMENT_PROGRAM_PUBLIC' });
  await assert.rejects(confirmRetirement('synthetic', { fetchVisibility: async h => visibility(h, 'non_public') }), { code: 'RETIREMENT_CONTROL_FAILED' });
  let n = 0;
  await assert.rejects(confirmRetirement('synthetic', { fetchVisibility: async h => visibility(h, ++n === 2 ? 'non_public' : 'public') }), { code: 'RETIREMENT_VISIBILITY_CHANGED' });
});
