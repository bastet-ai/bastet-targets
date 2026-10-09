import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { BUILD_MARKER_PATH, waitForBuildCommit } from '../lib/git-deployment.mjs';

const COMMIT = 'a'.repeat(40), URL = `https://targets.bastet.ai${BUILD_MARKER_PATH}`;
const marker = commit => new Response(JSON.stringify({ schema_version: 1, commit }), { headers: { 'content-type': 'application/json' } });
function clock() {
  let milliseconds = 0;
  return { now: () => milliseconds, sleep: async delay => { milliseconds += delay; }, timeoutMs: 30, pollMs: 10 };
}

test('native wait retries missing, stale and transient deployment evidence before exact commit success', async () => {
  const responses = [new Response('missing', { status: 404 }), marker('b'.repeat(40)), new Response('temporary', { status: 503 }), new Error('temporary network'), marker(COMMIT)];
  let checks = 0, requests = 0;
  const result = await waitForBuildCommit(URL, COMMIT, { ...clock(), timeoutMs: 60,
    verifyCheckout: async () => { checks++; },
    fetchImpl: async (url, options) => {
      requests++;
      assert.equal(new globalThis.URL(url).searchParams.get('commit'), COMMIT);
      assert.equal(options.credentials, 'omit'); assert.equal(options.redirect, 'error'); assert.equal(options.cache, 'no-store');
      const response = responses.shift(); if (response instanceof Error) throw response; return response;
    } });
  assert.deepEqual(result, { commit: COMMIT, url: URL });
  assert.equal(requests, 5); assert.equal(checks, 6);
});

test('a failed or stale deployment reaches bounded timeout and is never accepted', async () => {
  for (const response of [() => marker('b'.repeat(40)), () => new Response('failed', { status: 500 }), () => { throw new Error('network failure'); }]) {
    let requests = 0;
    await assert.rejects(waitForBuildCommit(URL, COMMIT, { ...clock(), fetchImpl: async () => { requests++; return response(); } }), /GIT_DEPLOYMENT_TIMEOUT/);
    assert.equal(requests, 3);
  }
});

test('native wait rejects malformed evidence, oversized bodies, unexpected status and forbidden metadata', async () => {
  const responses = [
    new Response('not JSON', { headers: { 'content-type': 'application/json' } }),
    new Response('{}', { headers: { 'content-type': 'text/html' } }),
    new Response(JSON.stringify({ schema_version: 1, commit: COMMIT, private: 'not permitted' }), { headers: { 'content-type': 'application/json' } }),
    new Response(JSON.stringify({ schema_version: 2, commit: COMMIT }), { headers: { 'content-type': 'application/json' } }),
    new Response('x'.repeat(4097), { headers: { 'content-type': 'application/json' } }),
  ];
  for (const response of responses)
    await assert.rejects(waitForBuildCommit(URL, COMMIT, { ...clock(), fetchImpl: async () => response }), /DEPLOYMENT_MARKER_INVALID/);
  await assert.rejects(waitForBuildCommit(URL, COMMIT, { ...clock(), fetchImpl: async () => new Response('forbidden', { status: 403 }) }), /DEPLOYMENT_MARKER_HTTP_FAILED/);
});

test('native wait checks source identity before fetching and again before returning success', async () => {
  let requests = 0, checks = 0;
  const drift = () => { throw Object.assign(new Error('DEPLOYMENT_COMMIT_DRIFT'), { code: 'DEPLOYMENT_COMMIT_DRIFT' }); };
  await assert.rejects(waitForBuildCommit(URL, COMMIT, { ...clock(), verifyCheckout: async () => drift(), fetchImpl: async () => { requests++; return marker(COMMIT); } }), /DEPLOYMENT_COMMIT_DRIFT/);
  assert.equal(requests, 0);
  await assert.rejects(waitForBuildCommit(URL, COMMIT, { ...clock(), verifyCheckout: async () => { if (++checks === 2) drift(); }, fetchImpl: async () => marker(COMMIT) }), /DEPLOYMENT_COMMIT_DRIFT/);
});

test('build marker records the actual Git checkout commit without private publisher metadata', async t => {
  const root = await mkdtemp(join(tmpdir(), 'bastet-build-marker-test-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const git = args => execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim();
  git(['init', '-q']); await writeFile(join(root, 'page.md'), '# Public page\n'); git(['add', 'page.md']);
  git(['-c', 'user.name=Publisher Test', '-c', 'user.email=publisher-test@example.invalid', 'commit', '-qm', 'Public fixture']);
  await mkdir(join(root, 'site'));
  execFileSync(process.execPath, [fileURLToPath(new globalThis.URL('../write-build-marker.mjs', import.meta.url))], { cwd: root });
  const built = JSON.parse(await readFile(join(root, 'site', BUILD_MARKER_PATH.slice(1)), 'utf8'));
  assert.deepEqual(built, { schema_version: 1, commit: git(['rev-parse', 'HEAD']) });
});
