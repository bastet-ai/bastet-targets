import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, rm, symlink, unlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { writeFileSync } from 'node:fs';
import { publicSourceDigest } from '../lib/public-source.mjs';
import { REMOTE, validateConfig, databaseOptions, wikiPaths, validateProposal, linkReadme, safePath, prepareFiles, dirtyPaths, assertOnlyPaths, checkRepository, publicSmoke, runCycle, deployExactCommit, command, safeError } from '../wiki-publisher.mjs';
import * as adapter from '../lib/publication-store.mjs';

const CAMPAIGN = '11111111-1111-4111-8111-111111111111';
const PROPOSAL = '22222222-2222-4222-8222-222222222222';
const LEASE = '33333333-3333-4333-8333-333333333333';
function source(handle = 'gitlab') {
  const value = { schema_version: 1, source: 'hackerone-anonymous-graphql',
    program: { handle, name: 'A public program', state: 'public_mode', submission_state: 'open', offers_bounties: true },
    policy: 'Only test authorized assets. <script>not executable</script>',
    assets: [{ id: 'scope-1', asset_identifier: '*.example.test', asset_type: 'WILDCARD', instruction: 'Safe public text', eligible_for_submission: true, eligible_for_bounty: false, max_severity: 'critical' }],
    exclusions: { status: 'not_represented', reason: 'Not exposed by anonymous public Team API; consult canonical policy.' },
    provenance: { program_url: `https://hackerone.com/${handle}`, graphql_url: 'https://hackerone.com/graphql', fetched_at: new Date().toISOString(), complete: true, authenticated: false, pages: 1, sha256: '0'.repeat(64) } };
  value.provenance.sha256 = publicSourceDigest(value); return value;
}
function proposal(value = source()) { return { id: PROPOSAL, proposal_id: PROPOSAL, campaign_id: CAMPAIGN, handle: value.program.handle, wiki_path: wikiPaths(value.program.handle).scope, renderer_version: 'public-scope-v1', source_hash: value.provenance.sha256, lease_token: LEASE }; }
async function fixture(t) {
  const base = await mkdtemp(join(tmpdir(), 'bastet-publisher-test-'));
  t.after(() => rm(base, { recursive: true, force: true }));
  const root = join(base, 'repo'); await mkdir(root);
  return { root, config: { repositoryPath: root, stateDirectory: join(base, 'state'), databaseUrl: 'postgres://publisher:test@127.0.0.1:6544/console', databaseCaPath: join(base, 'ca.crt'), databaseServerName: 'postgres.internal', campaigns: [{ campaignId: CAMPAIGN, handle: 'gitlab' }] } };
}
function fakeStore(value) {
  let available = true;
  const calls = [];
  return { calls, async claimProposal() { if (!available) return null; available = false; return proposal(value); },
    async revalidatePublication() { calls.push('revalidate'); },
    async completePublication(_db, _lease, receipt) { calls.push(['complete', receipt]); },
    async holdPublication(_db, _lease, code) { calls.push(['hold', code]); } };
}
const db = { async query(sql) { return { rows: sql.includes('try_advisory') ? [{ locked: true }] : [] }; } };
const testDeploy = async (config, { run }) => run(config.repositoryPath, 'npm', ['run', 'deploy']);
function fakeCommands({ mode = 'stage', failBuild = false, drift = false } = {}) {
  const calls = []; let head = 'a'.repeat(40), remote = head;
  const run = (_root, bin, args) => {
    calls.push([bin, ...args]); const text = args.join(' ');
    if (bin === 'npm') { if (failBuild) throw Object.assign(new Error('secret stderr'), { code: 'COMMAND_FAILED_NPM' }); if (drift) remote = 'c'.repeat(40); return ''; }
    if (text.startsWith('remote get-url')) return REMOTE;
    if (text === 'branch --show-current') return mode === 'stage' ? 'codex/public-campaign-publishers' : 'main';
    if (text === 'rev-parse HEAD') return head;
    if (text.startsWith('ls-remote')) return `${remote}\trefs/heads/main\n`;
    if (text === 'diff --cached --name-only -z') return `${wikiPaths('gitlab').scope}\0${wikiPaths('gitlab').readme}\0`;
    if (text === 'diff --cached --name-only') return wikiPaths('gitlab').scope;
    if (args[0] === 'commit') head = 'b'.repeat(40);
    if (args[0] === 'push') remote = head;
    return '';
  };
  return { run, calls };
}

test('configuration restricts campaign count, identity and external state', async t => {
  const { config } = await fixture(t); assert.equal(validateConfig(config), config);
  assert.throws(() => validateConfig({ ...config, campaigns: [...config.campaigns, ...config.campaigns] }), /DUPLICATE_CAMPAIGN/);
  assert.throws(() => validateConfig({ ...config, stateDirectory: join(config.repositoryPath, '.private') }), /STATE_MUST_BE_OUTSIDE/);
  assert.throws(() => validateConfig({ ...config, databaseUrl: config.databaseUrl + '?sslmode=disable' }), /INVALID_DATABASE_URL/);
  assert.throws(() => validateConfig({ ...config, deployCommand: 'arbitrary command' }), /UNKNOWN_CONFIG_FIELD/);
});
test('exact mapping rejects prototype properties and traversal', () => {
  assert.equal(wikiPaths('nba-public').scope, 'docs/programs/nba/public-scope.md');
  assert.equal(wikiPaths('sheer_bbp').scope, 'docs/programs/sheer/public-scope.md');
  for (const value of ['../lyft', 'lyft', '__proto__', 'constructor', 'GitLab']) assert.throws(() => wikiPaths(value));
});
test('unencrypted database mode is restricted to the exact dedicated SSH loopback socket', async t => {
  const { config } = await fixture(t);
  const tunnel = { ...config, databaseTransport: 'ssh-loopback', databaseUrl: 'postgres://bastet_wiki_publisher_local:secret@127.0.0.1:6544/console?sslmode=disable' };
  delete tunnel.databaseCaPath; delete tunnel.databaseServerName;
  assert.equal(validateConfig(tunnel), tunnel);
  const options = await databaseOptions(tunnel); assert.equal(options.ssl, false); assert.ok(!options.connectionString.includes('?'));
  for (const url of [
    tunnel.databaseUrl.replace('127.0.0.1', 'majin.example'),
    tunnel.databaseUrl.replace('127.0.0.1', 'localhost'),
    tunnel.databaseUrl.replace(':6544/', ':5432/'),
    tunnel.databaseUrl.replace('bastet_wiki_publisher_local', 'postgres'),
    tunnel.databaseUrl + '&application_name=anything',
    tunnel.databaseUrl.replace('?sslmode=disable', ''),
  ]) assert.throws(() => validateConfig({ ...tunnel, databaseUrl: url }), /UNSAFE_LOOPBACK_DATABASE_CONFIG/);
  assert.throws(() => validateConfig({ ...tunnel, databaseTransport: 'tls' }));
});
test('proposal cannot choose campaign, renderer, path or handle', async t => {
  const { config } = await fixture(t); const row = proposal(); assert.equal(validateProposal(row, config), row);
  assert.throws(() => validateProposal({ ...row, wiki_path: 'docs/index.md' }, config));
  assert.throws(() => validateProposal({ ...row, handle: 'uber' }, config));
  assert.throws(() => validateProposal({ ...row, renderer_version: 'evil' }, config));
});
test('human README is preserved byte-for-byte and linked only once', () => {
  const human = '# Human title\n\nA hand-written section.\n'; const linked = linkReadme(human, 'gitlab');
  assert.ok(linked.startsWith(human)); assert.equal(linkReadme(linked, 'gitlab'), linked);
  assert.ok(linked.includes('not verified authorization'));
  assert.throws(() => linkReadme(linked.replace('Verified public scope and policy', 'human change'), 'gitlab'), /HUMAN_LINK_SECTION_CHANGED/);
});
test('path checks reject directory and leaf symlinks, absolute and traversal', async t => {
  const { root } = await fixture(t); await mkdir(join(root, 'docs')); await symlink(tmpdir(), join(root, 'docs/programs'));
  await assert.rejects(safePath(root, 'docs/programs/gitlab/public-scope.md'), /UNSAFE_FILESYSTEM_ENTRY/);
  for (const path of ['../outside', '/tmp/outside', 'docs//bad', 'docs/./bad', 'docs\\bad']) await assert.rejects(safePath(root, path), /UNSAFE_PATH/);
  await symlink('/etc/passwd', join(root, 'docs/leaf')); await assert.rejects(safePath(root, 'docs/leaf'), /UNSAFE_FILESYSTEM_ENTRY/);
});
test('rendering only accepts matching fresh anonymous source; unmanaged pages are held', async t => {
  const { root } = await fixture(t); const value = source();
  const files = await prepareFiles(root, proposal(value), value);
  assert.equal(files.length, 2); assert.ok(files[0].after.includes(value.provenance.sha256));
  await assert.rejects(prepareFiles(root, { ...proposal(value), source_hash: 'f'.repeat(64) }, value), /PUBLIC_SOURCE_CHANGED/);
  await assert.rejects(prepareFiles(root, proposal(value), { ...value, private_report: 'must never render' }));
  await mkdir(join(root, 'docs/programs/gitlab'), { recursive: true }); await writeFile(join(root, wikiPaths('gitlab').scope), '# Human-owned file\n');
  await assert.rejects(prepareFiles(root, proposal(value), value), /UNMANAGED_SCOPE_DOCUMENT/);
});
test('git safeguards reject unrelated files, renames, remote and branch drift', () => {
  assert.deepEqual(dirtyPaths(' M docs/a.md\0?? docs/b.md\0'), ['docs/a.md', 'docs/b.md']);
  assert.throws(() => dirtyPaths('R  docs/a.md\0docs/b.md\0'));
  assert.throws(() => assertOnlyPaths(['docs/a.md', 'wrangler.jsonc'], ['docs/a.md']));
  assert.throws(() => checkRepository('/tmp', 'publish', (_r, _b, a) => a[0] === 'remote' ? REMOTE : 'feature'), /UNEXPECTED_GIT_BRANCH/);
  assert.throws(() => checkRepository('/tmp', 'publish', () => 'https://example.test/repo'), /UNEXPECTED_GIT_REMOTE/);
});
test('generated marker cannot authorize overwriting human changes or a page with no trusted baseline', async t => {
  const { root } = await fixture(t), value = source();
  const original = (await prepareFiles(root, proposal(value), value))[0];
  await mkdir(join(root, 'docs/programs/gitlab'), { recursive: true });
  await writeFile(join(root, original.path), original.after);
  await assert.rejects(prepareFiles(root, proposal(value), value), /PUBLISHED_CONTENT_BASELINE_REQUIRED/);
  const verified = await prepareFiles(root, proposal(value), value, { previousContentHash: original.hash });
  assert.equal(verified[0].after, original.after);
  const human = original.after + '\nHuman review: preserve this correction.\n';
  await writeFile(join(root, original.path), human);
  await assert.rejects(prepareFiles(root, proposal(value), value, { previousContentHash: original.hash }), /HUMAN_SCOPE_DOCUMENT_CHANGED/);
  assert.equal(await readFile(join(root, original.path), 'utf8'), human);
  await unlink(join(root, original.path));
  await assert.rejects(prepareFiles(root, proposal(value), value, { previousContentHash: original.hash }), /PUBLISHED_SCOPE_REMOVED/);
});
test('stage writes safe files but does not build, commit, push, deploy or acknowledge', async t => {
  const { root, config } = await fixture(t), value = source(), store = fakeStore(value), runner = fakeCommands();
  const result = await runCycle(config, { mode: 'stage', limit: 21, db, store, run: runner.run, fetchSource: async () => value });
  assert.equal(result.entries.length, 1); assert.equal(result.entries[0].status, 'staged');
  assert.ok((await readFile(join(root, wikiPaths('gitlab').scope), 'utf8')).includes(value.provenance.sha256));
  assert.ok(!runner.calls.some(([bin, op]) => bin === 'npm' || ['push', 'commit', 'add'].includes(op)));
  assert.ok(!store.calls.some(c => Array.isArray(c) && c[0] === 'complete'));
  const state = JSON.parse(await readFile(join(config.stateDirectory, 'publisher-state.json'), 'utf8'));
  assert.equal(state.staged.length, 1); assert.equal(state.interrupted, null);
});
test('hash mismatch holds proposal before source file writes', async t => {
  const { root, config } = await fixture(t), value = source(), store = fakeStore(value), runner = fakeCommands();
  const changed = source(); changed.policy += ' changed'; changed.provenance.sha256 = publicSourceDigest(changed);
  await assert.rejects(runCycle(config, { mode: 'stage', db, store, run: runner.run, fetchSource: async () => changed }), /PUBLIC_SOURCE_CHANGED/);
  await assert.rejects(readFile(join(root, wikiPaths('gitlab').scope)), { code: 'ENOENT' });
  assert.ok(store.calls.some(c => Array.isArray(c) && c[0] === 'hold'));
});
test('initial verify-staged records the trusted published content baseline for later maintenance', async t => {
  const { config } = await fixture(t), value = source(), store = fakeStore(value), staging = fakeCommands(), publishing = fakeCommands({ mode: 'publish' });
  await runCycle(config, { mode: 'stage', db, store, run: staging.run, fetchSource: async () => value });
  const before = JSON.parse(await readFile(join(config.stateDirectory, 'publisher-state.json'), 'utf8'));
  assert.deepEqual(before.publishedFiles, {});
  const result = await runCycle(config, { mode: 'verify-staged', db, store, run: publishing.run, fetchSource: async () => value, smoke: async handle => wikiPaths(handle).url });
  assert.equal(result.entries[0].status, 'published');
  const after = JSON.parse(await readFile(join(config.stateDirectory, 'publisher-state.json'), 'utf8'));
  assert.equal(after.publishedFiles[wikiPaths('gitlab').scope], before.staged[0].contentHash);
  assert.equal(after.staged.length, 0);
});
test('maintenance completes only after fresh source, build, CAS push, deploy and smoke', async t => {
  const { config } = await fixture(t), value = source(), store = fakeStore(value), runner = fakeCommands({ mode: 'publish' }); let reads = 0, smoked = false;
  const result = await runCycle(config, { db, store, run: runner.run, deploy: testDeploy, fetchSource: async () => { reads++; return value; }, smoke: async (handle, hash) => { assert.equal(hash, value.provenance.sha256); smoked = true; return wikiPaths(handle).url; } });
  assert.equal(result.entries[0].status, 'published'); assert.equal(reads, 2); assert.equal(smoked, true);
  assert.ok(runner.calls.some(c => c.join(' ') === 'git push origin HEAD:refs/heads/main'));
  assert.ok(runner.calls.some(c => c.join(' ') === 'npm run deploy'));
  assert.ok(store.calls.some(c => Array.isArray(c) && c[0] === 'complete'));
  const published = JSON.parse(await readFile(join(config.stateDirectory, 'publisher-state.json'), 'utf8'));
  assert.match(published.publishedFiles[wikiPaths('gitlab').scope], /^[a-f0-9]{64}$/);
  const again = await runCycle(config, { db, store, run: runner.run }); assert.equal(again.status, 'rate_limited');
});
test('later maintenance holds a committed human edit without overwriting it', async t => {
  const { root, config } = await fixture(t), first = source(), runner = fakeCommands({ mode: 'publish' });
  await runCycle(config, { db, store: fakeStore(first), run: runner.run, deploy: testDeploy, fetchSource: async () => first, smoke: async handle => wikiPaths(handle).url });
  const path = join(root, wikiPaths('gitlab').scope);
  const human = await readFile(path, 'utf8') + '\nHuman correction survives future source changes.\n'; await writeFile(path, human);
  const next = source(); next.policy += '\nNew public policy'; next.provenance.sha256 = publicSourceDigest(next);
  const store = fakeStore(next);
  await assert.rejects(runCycle(config, { db, store, run: runner.run, deploy: testDeploy, now: Date.now() + 6 * 60 * 60 * 1000 + 1000, fetchSource: async () => next }), /HUMAN_SCOPE_DOCUMENT_CHANGED/);
  assert.equal(await readFile(path, 'utf8'), human);
  assert.ok(store.calls.some(call => Array.isArray(call) && call[0] === 'hold' && call[1] === 'HUMAN_SCOPE_DOCUMENT_CHANGED'));
});
test('failed smoke preserves interruption record, holds proposal and never acknowledges', async t => {
  const { config } = await fixture(t), value = source(), store = fakeStore(value), runner = fakeCommands({ mode: 'publish' });
  await assert.rejects(runCycle(config, { db, store, run: runner.run, deploy: testDeploy, fetchSource: async () => value, smoke: async () => { throw new Error('failed'); } }));
  const state = JSON.parse(await readFile(join(config.stateDirectory, 'publisher-state.json'), 'utf8')); assert.equal(state.interrupted.phase, 'pushed');
  assert.ok(!store.calls.some(c => Array.isArray(c) && c[0] === 'complete'));
  await assert.rejects(runCycle(config, { db, store, run: runner.run }), /INTERRUPTED_PUBLICATION_REQUIRES_REVIEW/);
});
test('one maintenance batch publishes multiple campaigns with exactly one commit and deployment', async t => {
  const { config } = await fixture(t), values = [source('gitlab'), source('uber')], runner = fakeCommands({ mode: 'publish' });
  const secondId = '44444444-4444-4444-8444-444444444444';
  config.campaigns.push({ campaignId: secondId, handle: 'uber' });
  const proposals = [proposal(values[0]), { ...proposal(values[1]), id: '55555555-5555-4555-8555-555555555555', campaign_id: secondId }];
  const completed = [];
  const store = { async claimProposal() { return proposals.shift() ?? null; }, async revalidatePublication() {}, async holdPublication() {}, async completePublication(_db, row) { completed.push(row.handle); } };
  const result = await runCycle(config, { db, store, run: runner.run, deploy: testDeploy,
    fetchSource: async handle => values.find(value => value.program.handle === handle), smoke: async handle => wikiPaths(handle).url });
  assert.deepEqual(completed, ['gitlab', 'uber']); assert.equal(result.entries.length, 2);
  assert.equal(runner.calls.filter(c => c[1] === 'commit').length, 1);
  assert.equal(runner.calls.filter(c => c.join(' ') === 'npm run deploy').length, 1);
  assert.equal(runner.calls.filter(c => c[1] === 'push').length, 1);
});
test('exact-commit deployment uses a private detached worktree and excludes later normal-checkout edits', async t => {
  const { root, config } = await fixture(t); await mkdir(config.stateDirectory, { mode: 0o700 });
  command(root, 'git', ['init', '-q']);
  await mkdir(join(root, 'docs/programs/gitlab'), { recursive: true });
  const path = wikiPaths('gitlab').scope;
  await writeFile(join(root, path), 'pinned public content\n');
  command(root, 'git', ['add', '--', path]);
  command(root, 'git', ['-c', 'user.name=Publisher Test', '-c', 'user.email=publisher-test@example.invalid', 'commit', '-qm', 'Fixture']);
  const commit = command(root, 'git', ['rev-parse', 'HEAD']).trim();
  let deployedFrom;
  const run = (cwd, bin, args) => {
    if (bin !== 'npm') return command(cwd, bin, args);
    assert.notEqual(cwd, root);
    if (args.join(' ') === 'run deploy') {
      deployedFrom = cwd;
      writeFileSync(join(root, path), 'later human change must not deploy\n');
    }
    return '';
  };
  await deployExactCommit(config, { commit, files: [], run });
  assert.ok(deployedFrom.startsWith(config.stateDirectory));
  assert.equal(await readFile(join(deployedFrom, path), 'utf8'), 'pinned public content\n');
  assert.equal(await readFile(join(root, path), 'utf8'), 'later human change must not deploy\n');
  await assert.rejects(deployExactCommit(config, { commit, files: [], run }), /RELEASE_CHECKOUT_ALREADY_EXISTS/);
});
test('anonymous refresh never changes console data and invalidates unverifiable public sources', async t => {
  const { config } = await fixture(t), actions = [];
  const store = { async listMaintenanceCampaigns() { return [{ id: CAMPAIGN, handle: 'gitlab', wiki_path: wikiPaths('gitlab').scope }]; },
    async refreshSource() { actions.push('refresh'); }, async invalidateSource(_db, id, reason) { actions.push([id, reason]); } };
  const ok = await runCycle(config, { mode: 'refresh', db, store, fetchSource: async () => source() });
  assert.equal(ok.entries[0].status, 'refreshed');
  const held = await runCycle(config, { mode: 'refresh', db, store, fetchSource: async () => { throw new Error('unavailable'); } });
  assert.equal(held.entries[0].status, 'held'); assert.deepEqual(actions[1], [CAMPAIGN, 'anonymous_refresh_failed']);
});
test('remote advancement during build stops before Git commit/push/deploy', async t => {
  const { config } = await fixture(t), value = source(), store = fakeStore(value), runner = fakeCommands({ mode: 'publish', drift: true });
  await assert.rejects(runCycle(config, { db, store, run: runner.run, fetchSource: async () => value }), /REMOTE_COMPARE_AND_SWAP_FAILED/);
  assert.ok(!runner.calls.some(c => c[1] === 'push' || c[1] === 'commit' || c.join(' ') === 'npm run deploy'));
});
test('public smoke rejects status, wrong digest, redirects and non-HTML', async () => {
  const good = () => Promise.resolve(new Response('Public source digest: ' + 'a'.repeat(64), { headers: { 'content-type': 'text/html' } }));
  assert.equal(await publicSmoke('gitlab', 'a'.repeat(64), good), wikiPaths('gitlab').url);
  await assert.rejects(publicSmoke('gitlab', 'b'.repeat(64), good), /PUBLIC_SMOKE_DIGEST_MISMATCH/);
  await assert.rejects(publicSmoke('gitlab', 'a'.repeat(64), async () => new Response('no', { status: 404 })), /PUBLIC_SMOKE_HTTP_FAILED/);
});
test('adapter calls only narrow functions and holds any unallowlisted claim', async () => {
  const value = { ...proposal(), id: undefined }, calls = [];
  const conn = { async query(sql, values) { calls.push([sql, values]); return { rows: [{ value }] }; } };
  await assert.rejects(adapter.claimProposal(conn, { campaignIds: [] }), /CAMPAIGN_NOT_ALLOWLISTED/);
  assert.ok(calls.some(c => c[0].includes('hold_publication')));
  assert.ok(calls.every(c => !/FROM\s+(console|bastet)\./i.test(c[0])));
});
test('error logging never prints arbitrary upstream messages or credential strings', () => {
  assert.equal(safeError(new Error('postgres://user:password@host')), 'PUBLICATION_FAILED');
  assert.equal(safeError({ code: 'STAGED_FILE_CHANGED', message: 'secret' }), 'STAGED_FILE_CHANGED');
});
