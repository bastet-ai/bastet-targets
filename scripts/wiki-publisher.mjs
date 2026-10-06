#!/usr/bin/env node
// Trusted-host publisher. Guests request immutable hashes, never author public text.
import { createHash, randomUUID } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { lstat, mkdir, readFile, realpath, rename, rmdir, writeFile } from 'node:fs/promises';
import { isAbsolute, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { fetchPublicSource, publicSourceDigest, renderPublicSection, validatePublicSource } from './lib/public-source.mjs';

export const REMOTE = 'https://github.com/bastet-ai/bastet-targets.git';
export const SITE = 'https://targets.bastet.ai';
export const RENDERER = 'public-scope-v1';
export const INTERVAL_MS = 6 * 60 * 60 * 1000;
export const HANDLES = Object.freeze({
  coinbase: 'coinbase', eternal: 'eternal', ferrero: 'ferrero', gitlab: 'gitlab',
  mediatek: 'mediatek', 'nba-public': 'nba', okg: 'okg', paypal: 'paypal',
  sheer_bbp: 'sheer', tiktok: 'tiktok', uber: 'uber', zooplus: 'zooplus',
  '1password': '1password', akamai: 'akamai', airlock: 'airlock', airbnb: 'airbnb',
  amazonvrp: 'amazonvrp', anduril_industries: 'anduril_industries',
  atlassian: 'atlassian', basecamp: 'basecamp', '000webhost': '000webhost',
});
const UUID = /^[a-f0-9]{8}-(?:[a-f0-9]{4}-){3}[a-f0-9]{12}$/;
const SHA = /^[a-f0-9]{64}$/;
const COMMIT = /^[a-f0-9]{40}$/;
const HEADER = '<!-- bastet-public-scope-link:v1 -->';
const LINK = `${HEADER}\n## Current public scope\n\n[Verified public scope and policy](public-scope.md)\n\nHistorical research notes on this page are not verified authorization or current scope. Consult the linked public snapshot and the current HackerOne policy before testing.\n<!-- /bastet-public-scope-link:v1 -->`;
const GENERATED = '<!-- bastet-public-scope-document:v1 -->';
const fail = code => { throw Object.assign(new Error(code), { code }); };
const digest = value => createHash('sha256').update(value).digest('hex');
const own = (object, key) => Object.prototype.hasOwnProperty.call(object, key);

export function validateConfig(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) fail('INVALID_CONFIG');
  const keys = ['repositoryPath', 'stateDirectory', 'databaseUrl', 'databaseCaPath', 'databaseServerName', 'databaseTransport', 'campaigns'];
  if (Object.keys(value).some(key => !keys.includes(key))) fail('UNKNOWN_CONFIG_FIELD');
  for (const key of ['repositoryPath', 'stateDirectory']) {
    if (typeof value[key] !== 'string' || !isAbsolute(value[key])) fail('ABSOLUTE_CONFIG_PATH_REQUIRED');
  }
  let url;
  try { url = new URL(value.databaseUrl); } catch { fail('INVALID_DATABASE_URL'); }
  if (!['postgres:', 'postgresql:'].includes(url.protocol) || !url.username || !url.password) fail('INVALID_DATABASE_URL');
  if (value.databaseTransport === 'ssh-loopback') {
    if (url.hostname !== '127.0.0.1' || url.port !== '6544' || url.username !== 'bastet_wiki_publisher_local' || url.search !== '?sslmode=disable' || value.databaseCaPath !== undefined || value.databaseServerName !== undefined) fail('UNSAFE_LOOPBACK_DATABASE_CONFIG');
  } else {
    if ((value.databaseTransport !== undefined && value.databaseTransport !== 'tls') || url.search) fail('INVALID_DATABASE_URL');
    if (typeof value.databaseCaPath !== 'string' || !isAbsolute(value.databaseCaPath)) fail('TLS_CA_PATH_REQUIRED');
    if (typeof value.databaseServerName !== 'string' || !/^[a-z0-9.-]+$/.test(value.databaseServerName)) fail('TLS_SERVER_NAME_REQUIRED');
  }
  if (!Array.isArray(value.campaigns) || !value.campaigns.length || value.campaigns.length > 21) fail('INVALID_CAMPAIGNS');
  const ids = new Set(), handles = new Set();
  for (const row of value.campaigns) {
    if (!row || Object.keys(row).sort().join(',') !== 'campaignId,handle' || !UUID.test(row.campaignId) || !own(HANDLES, row.handle)) fail('INVALID_CAMPAIGN');
    if (ids.has(row.campaignId) || handles.has(row.handle)) fail('DUPLICATE_CAMPAIGN');
    ids.add(row.campaignId); handles.add(row.handle);
  }
  const relation = relative(resolve(value.repositoryPath), resolve(value.stateDirectory));
  if (!relation || (!relation.startsWith('..' + '/') && relation !== '..' && !isAbsolute(relation))) fail('STATE_MUST_BE_OUTSIDE_REPOSITORY');
  return value;
}

export function wikiPaths(handle) {
  if (!own(HANDLES, handle)) fail('HANDLE_NOT_ALLOWLISTED');
  const base = `docs/programs/${HANDLES[handle]}`;
  return { scope: `${base}/public-scope.md`, readme: `${base}/README.md`, url: `${SITE}/programs/${HANDLES[handle]}/public-scope/` };
}

export function validateProposal(row, config) {
  if (!row || !UUID.test(row.id) || !UUID.test(row.campaign_id) || !UUID.test(row.lease_token) || !SHA.test(row.source_hash)) fail('INVALID_PROPOSAL');
  if (!config.campaigns.some(c => c.campaignId === row.campaign_id && c.handle === row.handle)) fail('CAMPAIGN_NOT_ALLOWLISTED');
  if (row.renderer_version !== RENDERER || row.wiki_path !== wikiPaths(row.handle).scope) fail('PROPOSAL_CONTRACT_MISMATCH');
  return row;
}

export function linkReadme(existing, handle) {
  const text = existing ?? `# ${handle}\n\nPublic program information from [HackerOne](https://hackerone.com/${handle}).\n`;
  if (text.includes(HEADER)) {
    if (text.split(HEADER).length !== 2 || !text.includes(LINK)) fail('HUMAN_LINK_SECTION_CHANGED');
    return text;
  }
  return `${text}${text.endsWith('\n') ? '\n' : '\n\n'}${LINK}\n`;
}

export async function safePath(root, path, { createParents = false } = {}) {
  if (typeof path !== 'string' || path.includes('\\') || isAbsolute(path) || path.split('/').some(p => !p || p === '.' || p === '..')) fail('UNSAFE_PATH');
  const canonical = await realpath(root);
  if (resolve(root) !== canonical) fail('REPOSITORY_SYMLINK');
  let current = canonical;
  const pieces = path.split('/');
  for (let index = 0; index < pieces.length; index++) {
    current = join(current, pieces[index]);
    let stat;
    try { stat = await lstat(current); } catch (error) {
      if (error.code !== 'ENOENT') throw error;
      if (index < pieces.length - 1 && createParents) { await mkdir(current); stat = await lstat(current); }
      else if (index < pieces.length - 1) continue;
      else return current;
    }
    if (stat?.isSymbolicLink() || (index < pieces.length - 1 && stat && !stat.isDirectory()) || (index === pieces.length - 1 && stat && !stat.isFile())) fail('UNSAFE_FILESYSTEM_ENTRY');
  }
  return current;
}

async function optionalRead(path) {
  try { return await readFile(path, 'utf8'); } catch (error) { if (error.code === 'ENOENT') return null; throw error; }
}

async function writeExact(root, path, before, after) {
  const target = await safePath(root, path, { createParents: true });
  if (await optionalRead(target) !== before) fail('CONCURRENT_FILE_EDIT');
  const temporary = `${target}.${randomUUID()}.tmp`;
  await writeFile(temporary, after, { flag: 'wx', mode: 0o644 });
  await safePath(root, path);
  if (await optionalRead(target) !== before) fail('CONCURRENT_FILE_EDIT');
  await rename(temporary, target);
}

export async function prepareFiles(root, proposal, source, { previousContentHash } = {}) {
  validatePublicSource(source);
  if (source.program.handle !== proposal.handle || source.program.state !== 'public_mode' || publicSourceDigest(source) !== proposal.source_hash) fail('PUBLIC_SOURCE_CHANGED');
  const paths = wikiPaths(proposal.handle);
  const beforeScope = await optionalRead(await safePath(root, paths.scope));
  const beforeReadme = await optionalRead(await safePath(root, paths.readme));
  if (beforeScope !== null && !beforeScope.startsWith(GENERATED + '\n')) fail('UNMANAGED_SCOPE_DOCUMENT');
  // A marker is not ownership proof. Only the exact bytes acknowledged after a
  // prior verified publication may be replaced without another human review.
  if (beforeScope !== null) {
    if (!SHA.test(previousContentHash ?? '')) fail('PUBLISHED_CONTENT_BASELINE_REQUIRED');
    if (digest(beforeScope) !== previousContentHash) fail('HUMAN_SCOPE_DOCUMENT_CHANGED');
  } else if (previousContentHash !== undefined) fail('PUBLISHED_SCOPE_REMOVED');
  // A fresh anonymous source is the ONLY content input. No proposal/DB prose is rendered.
  const scope = `${GENERATED}\n${renderPublicSection(source).trim()}\n`;
  const readme = linkReadme(beforeReadme, proposal.handle);
  return [
    { path: paths.scope, before: beforeScope, after: scope, hash: digest(scope) },
    { path: paths.readme, before: beforeReadme, after: readme, hash: digest(readme) },
  ];
}

export async function applyFiles(root, files) {
  for (const file of files) if (file.before !== file.after) await writeExact(root, file.path, file.before, file.after);
}

export function command(root, executable, args) {
  try { return execFileSync(executable, args, { cwd: root, encoding: 'utf8', timeout: 15 * 60 * 1000, maxBuffer: 8 * 1024 * 1024, windowsHide: true, shell: false, stdio: ['ignore', 'pipe', 'pipe'] }); }
  catch { fail(`COMMAND_FAILED_${executable.toUpperCase()}`); }
}

export function dirtyPaths(status) {
  return status.split('\0').filter(Boolean).map(entry => {
    if (entry.length < 4 || /[RC]/.test(entry.slice(0, 2))) fail('UNEXPECTED_RENAME');
    return entry.slice(3);
  });
}

export function assertOnlyPaths(paths, allowed) {
  if (paths.some(path => !allowed.includes(path))) fail('UNRELATED_WORKTREE_CHANGES');
}

function git(root, args, run = command) { return run(root, 'git', args).trim(); }
function remoteHead(root, run = command) {
  const lines = git(root, ['ls-remote', 'origin', 'refs/heads/main'], run).split('\n');
  if (lines.length !== 1 || !/^[a-f0-9]{40}\s+refs\/heads\/main$/.test(lines[0])) fail('REMOTE_MAIN_UNAVAILABLE');
  return lines[0].slice(0, 40);
}
export function checkRepository(root, mode, run = command) {
  if (git(root, ['remote', 'get-url', 'origin'], run) !== REMOTE) fail('UNEXPECTED_GIT_REMOTE');
  if (git(root, ['remote', 'get-url', '--push', '--all', 'origin'], run) !== REMOTE) fail('UNEXPECTED_GIT_PUSH_REMOTE');
  const branch = git(root, ['branch', '--show-current'], run);
  if (mode === 'publish' ? branch !== 'main' : !['main', 'codex/public-campaign-publishers'].includes(branch)) fail('UNEXPECTED_GIT_BRANCH');
  if (mode === 'publish' && run(root, 'git', ['status', '--porcelain=v1', '-z', '--untracked-files=all'])) fail('DIRTY_REPOSITORY');
  return git(root, ['rev-parse', 'HEAD'], run);
}

export function synchronizeRepository(root, run = command) {
  checkRepository(root, 'publish', run);
  run(root, 'git', ['fetch', '--no-tags', 'origin', 'main']);
  run(root, 'git', ['merge', '--ff-only', 'FETCH_HEAD']);
  const head = checkRepository(root, 'publish', run);
  if (remoteHead(root, run) !== head) fail('REMOTE_COMPARE_AND_SWAP_FAILED');
  return head;
}

export async function publicSmoke(handle, sourceHash, fetchImpl = fetch) {
  const response = await fetchImpl(wikiPaths(handle).url, { redirect: 'error', headers: { 'cache-control': 'no-cache' }, signal: AbortSignal.timeout(20_000) });
  if (!response.ok || !response.headers.get('content-type')?.includes('text/html')) fail('PUBLIC_SMOKE_HTTP_FAILED');
  const reader = response.body.getReader(); let bytes = 0; const chunks = [];
  while (true) { const { value, done } = await reader.read(); if (done) break; bytes += value.byteLength; if (bytes > 8 * 1024 * 1024) { await reader.cancel(); fail('PUBLIC_SMOKE_TOO_LARGE'); } chunks.push(value); }
  const html = Buffer.concat(chunks).toString('utf8');
  if (!html.includes('Public source digest:') || !html.includes(sourceHash)) fail('PUBLIC_SMOKE_DIGEST_MISMATCH');
  return wikiPaths(handle).url;
}

async function privateDirectory(path) {
  await mkdir(path, { recursive: true, mode: 0o700 });
  const stat = await lstat(path);
  if (!stat.isDirectory() || stat.isSymbolicLink() || (stat.mode & 0o077) || stat.uid !== process.getuid()) fail('STATE_DIRECTORY_NOT_PRIVATE');
  if (await realpath(path) !== resolve(path)) fail('STATE_DIRECTORY_SYMLINK');
}
async function readState(config) {
  const path = join(config.stateDirectory, 'publisher-state.json');
  const text = await optionalRead(path);
  if (text === null) return { version: 1, lastPublishedAt: null, staged: [], interrupted: null, publishedFiles: {} };
  const stat = await lstat(path);
  if (!stat.isFile() || stat.isSymbolicLink() || (stat.mode & 0o077) || stat.uid !== process.getuid()) fail('STATE_FILE_NOT_PRIVATE');
  const value = JSON.parse(text);
  if (value.version !== 1 || !Array.isArray(value.staged) || value.staged.length > 21) fail('INVALID_STATE');
  value.publishedFiles ??= {};
  if (typeof value.publishedFiles !== 'object' || Array.isArray(value.publishedFiles) || Object.keys(value.publishedFiles).length > 21) fail('INVALID_STATE');
  const scopePaths = Object.keys(HANDLES).map(handle => wikiPaths(handle).scope);
  for (const [path, hash] of Object.entries(value.publishedFiles)) if (!scopePaths.includes(path) || !SHA.test(hash)) fail('INVALID_STATE');
  return value;
}
async function saveState(config, state) {
  const path = join(config.stateDirectory, 'publisher-state.json');
  const temp = `${path}.${randomUUID()}.tmp`;
  await writeFile(temp, JSON.stringify(state), { flag: 'wx', mode: 0o600 });
  await rename(temp, path);
}

// The adapter grants access only to the separate public-source publication schema.
async function defaultStore() { return import('./lib/publication-store.mjs'); }

export async function runCycle(config, { mode = 'publish', limit = 21, db, store, run = command, fetchSource = fetchPublicSource, smoke = publicSmoke, deploy = deployExactCommit, now = Date.now() } = {}) {
  validateConfig(config);
  if (!['publish', 'stage', 'verify-staged', 'refresh'].includes(mode) || !Number.isInteger(limit) || limit < 1 || limit > 21) fail('INVALID_MODE_OR_LIMIT');
  await privateDirectory(config.stateDirectory);
  const lock = join(config.stateDirectory, 'publisher.lock');
  try { await mkdir(lock, { mode: 0o700 }); } catch (error) { if (error.code === 'EEXIST') fail('PUBLISHER_ALREADY_RUNNING_OR_INTERRUPTED'); throw error; }
  let locked = false;
  try {
    const result = await db.query('SELECT pg_try_advisory_lock($1,$2) AS locked', [1685024354, 1886741100]);
    locked = result.rows[0]?.locked === true;
    if (!locked) fail('ANOTHER_PUBLISHER_RUNNING');
    store ??= await defaultStore();
    if (mode === 'refresh') return await refreshSources(config, { db, store, fetchSource });
    const state = await readState(config);
    if (state.interrupted) fail('INTERRUPTED_PUBLICATION_REQUIRES_REVIEW');
    if (mode === 'verify-staged') return await verifyStaged(config, state, { db, store, run, fetchSource, smoke, now });
    if (mode === 'publish' && state.staged.length) fail('STAGED_PUBLICATION_REQUIRES_REVIEW');
    if (mode === 'publish' && state.lastPublishedAt && now - Date.parse(state.lastPublishedAt) < INTERVAL_MS) return { status: 'rate_limited', published: 0 };
    const base = mode === 'publish' ? synchronizeRepository(config.repositoryPath, run) : checkRepository(config.repositoryPath, mode, run);
    const output = [], batch = [], claimed = [];
    try {
    for (let index = 0; index < limit; index++) {
      const proposal = await store.claimProposal(db, { campaignIds: config.campaigns.map(c => c.campaignId) });
      if (!proposal) break;
      claimed.push(proposal);
        validateProposal(proposal, config);
        if (batch.some(entry => entry.proposal.campaign_id === proposal.campaign_id)) fail('DUPLICATE_BATCH_CAMPAIGN');
        const source = await fetchSource(proposal.handle);
        const files = await prepareFiles(config.repositoryPath, proposal, source, { previousContentHash: state.publishedFiles[wikiPaths(proposal.handle).scope] });
        await store.revalidatePublication(db, proposal);
        const entry = { proposal, files: files.map(({ path, hash }) => ({ path, hash })), contentHash: files[0].hash, preparedAt: new Date(now).toISOString() };
        // Persist the receipt BEFORE touching a file or making any external write.
        batch.push(entry);
        state.interrupted = { entries: mode === 'stage' ? [entry] : batch, phase: 'preparing' };
        await saveState(config, state);
        await applyFiles(config.repositoryPath, files);
        if (mode === 'stage') {
          state.staged.push(entry); state.interrupted = null; await saveState(config, state);
          output.push({ handle: proposal.handle, status: 'staged' });
          continue;
        }
    }
    if (mode === 'publish' && batch.length) {
      const allowed = batch.flatMap(entry => entry.files.map(file => file.path));
      assertOnlyPaths(dirtyPaths(run(config.repositoryPath, 'git', ['status', '--porcelain=v1', '-z', '--untracked-files=all'])), allowed);
      run(config.repositoryPath, 'npm', ['run', 'build']);
      for (const entry of batch) {
        const proposal = entry.proposal;
        await assertFiles(config.repositoryPath, entry.files);
        await store.revalidatePublication(db, proposal);
        // A second fresh anonymous read closes the build-time public-mode/hash gap.
        const lastSource = await fetchSource(proposal.handle);
        validatePublicSource(lastSource);
        if (lastSource.program.state !== 'public_mode' || publicSourceDigest(lastSource) !== proposal.source_hash) fail('PUBLIC_SOURCE_CHANGED_DURING_BUILD');
      }
      assertOnlyPaths(dirtyPaths(run(config.repositoryPath, 'git', ['status', '--porcelain=v1', '-z', '--untracked-files=all'])), allowed);
      if (remoteHead(config.repositoryPath, run) !== base) fail('REMOTE_COMPARE_AND_SWAP_FAILED');
      run(config.repositoryPath, 'git', ['add', '--', ...allowed]);
      assertOnlyPaths(run(config.repositoryPath, 'git', ['diff', '--cached', '--name-only', '-z']).split('\0').filter(Boolean), allowed);
      run(config.repositoryPath, 'git', ['diff', '--cached', '--check']);
      if (git(config.repositoryPath, ['diff', '--cached', '--name-only'], run)) {
        run(config.repositoryPath, 'git', ['commit', '-m', `Update verified public scope for ${batch.length} program${batch.length === 1 ? '' : 's'}`, '--', ...allowed]);
      }
      const commit = git(config.repositoryPath, ['rev-parse', 'HEAD'], run);
      if (!COMMIT.test(commit)) fail('INVALID_COMMIT');
      state.interrupted = { entries: batch, phase: 'committed', commit }; await saveState(config, state);
      run(config.repositoryPath, 'git', ['push', 'origin', 'HEAD:refs/heads/main']);
      if (remoteHead(config.repositoryPath, run) !== commit) fail('REMOTE_COMPARE_AND_SWAP_FAILED');
      state.interrupted.phase = 'pushed'; await saveState(config, state);
      checkRepository(config.repositoryPath, 'publish', run);
      for (const entry of batch) { await assertFiles(config.repositoryPath, entry.files); await store.revalidatePublication(db, entry.proposal); }
      await deploy(config, { commit, files: batch.flatMap(entry => entry.files), run });
      if (checkRepository(config.repositoryPath, 'publish', run) !== commit || remoteHead(config.repositoryPath, run) !== commit) fail('DEPLOYMENT_COMMIT_DRIFT');
      for (const entry of batch) {
        const proposal = entry.proposal;
        const url = await smoke(proposal.handle, proposal.source_hash);
        await store.completePublication(db, proposal, { content_hash: entry.contentHash, commit_sha: commit, deployment_url: url });
        state.publishedFiles[wikiPaths(proposal.handle).scope] = entry.contentHash;
        state.interrupted.entries = state.interrupted.entries.filter(item => item.proposal.id !== proposal.id);
        await saveState(config, state);
        output.push({ handle: proposal.handle, status: 'published', commit, url });
      }
      state.lastPublishedAt = new Date(now).toISOString(); state.interrupted = null; await saveState(config, state);
    }
    } catch (error) {
      for (const proposal of claimed) await store.holdPublication(db, proposal, safeError(error)).catch(() => {});
      throw error;
    }
    return { status: output.length ? mode : 'idle', entries: output };
  } finally {
    if (locked) await db.query('SELECT pg_advisory_unlock($1,$2)', [1685024354, 1886741100]).catch(() => {});
    await rmdir(lock);
  }
}

export async function deployExactCommit(config, { commit, files, run = command }) {
  if (!COMMIT.test(commit)) fail('INVALID_COMMIT');
  const releases = join(config.stateDirectory, 'releases'); await privateDirectory(releases);
  const checkout = join(releases, commit);
  try { await lstat(checkout); fail('RELEASE_CHECKOUT_ALREADY_EXISTS'); } catch (error) { if (error.code !== 'ENOENT') throw error; }
  // Dedicated immutable-source checkout prevents unrelated live checkout edits
  // from entering the build between clean-worktree checks and deployment.
  run(config.repositoryPath, 'git', ['worktree', 'add', '--detach', checkout, commit]);
  if (git(checkout, ['rev-parse', 'HEAD'], run) !== commit || git(checkout, ['branch', '--show-current'], run)) fail('RELEASE_COMMIT_DRIFT');
  await assertFiles(checkout, files);
  run(checkout, 'npm', ['ci', '--ignore-scripts', '--no-audit', '--no-fund']);
  if (run(checkout, 'git', ['status', '--porcelain=v1', '-z', '--untracked-files=all'])) fail('DIRTY_RELEASE_CHECKOUT');
  run(checkout, 'npm', ['run', 'deploy']);
  if (git(checkout, ['rev-parse', 'HEAD'], run) !== commit || run(checkout, 'git', ['status', '--porcelain=v1', '-z', '--untracked-files=all'])) fail('RELEASE_COMMIT_DRIFT');
  await assertFiles(checkout, files);
  // Retained for recovery. Operator cleanup must target this exact receipt path.
}

async function assertFiles(root, files) {
  for (const file of files) if (digest(await readFile(await safePath(root, file.path))) !== file.hash) fail('STAGED_FILE_CHANGED');
}
async function refreshSources(config, { db, store, fetchSource }) {
  const campaigns = await store.listMaintenanceCampaigns(db);
  const output = [];
  for (const row of campaigns) {
    const id = row.campaign_id ?? row.id;
    if (!config.campaigns.some(c => c.campaignId === id && c.handle === row.handle)) fail('CAMPAIGN_NOT_ALLOWLISTED');
    if (row.wiki_path !== wikiPaths(row.handle).scope) fail('PROPOSAL_CONTRACT_MISMATCH');
    try {
      const source = await fetchSource(row.handle);
      validatePublicSource(source);
      if (source.program.handle !== row.handle || source.program.state !== 'public_mode') fail('PUBLIC_SOURCE_UNAVAILABLE');
      await store.refreshSource(db, id, source);
      output.push({ handle: row.handle, status: 'refreshed' });
    } catch (error) {
      // An absent/changed public source disables publication, never falls back to authenticated data.
      await store.invalidateSource(db, id, 'anonymous_refresh_failed');
      output.push({ handle: row.handle, status: 'held', code: safeError(error) });
    }
  }
  return { status: 'refreshed', entries: output };
}
async function verifyStaged(config, state, { db, store, run, fetchSource, smoke, now }) {
  const commit = checkRepository(config.repositoryPath, 'publish', run);
  if (!COMMIT.test(commit) || remoteHead(config.repositoryPath, run) !== commit) fail('REMOTE_COMPARE_AND_SWAP_FAILED');
  const output = [];
  for (const entry of [...state.staged]) {
    const proposal = validateProposal(entry.proposal, config);
    await assertFiles(config.repositoryPath, entry.files);
    const source = await fetchSource(proposal.handle);
    validatePublicSource(source);
    if (source.program.state !== 'public_mode' || publicSourceDigest(source) !== proposal.source_hash) fail('PUBLIC_SOURCE_CHANGED');
    await store.revalidatePublication(db, proposal);
    const url = await smoke(proposal.handle, proposal.source_hash);
    await store.completePublication(db, proposal, { content_hash: entry.contentHash, commit_sha: commit, deployment_url: url });
    state.publishedFiles[wikiPaths(proposal.handle).scope] = entry.contentHash;
    state.staged = state.staged.filter(item => item.proposal.id !== proposal.id);
    state.lastPublishedAt = new Date(now).toISOString(); await saveState(config, state);
    output.push({ handle: proposal.handle, status: 'published', commit, url });
  }
  return { status: 'verified', entries: output };
}

export function safeError(error) { return /^[A-Z][A-Z0-9_]{0,79}$/.test(error?.code ?? '') ? error.code : 'PUBLICATION_FAILED'; }

async function main() {
  const [mode, flag, configPath, limitFlag, limitText] = process.argv.slice(2);
  if (flag !== '--config' || !configPath || (limitFlag && limitFlag !== '--limit') || process.argv.length > 7) fail('USAGE_MODE_CONFIG_LIMIT');
  const stat = await lstat(configPath);
  if (!stat.isFile() || stat.isSymbolicLink() || stat.uid !== process.getuid() || (stat.mode & 0o077)) fail('CONFIG_NOT_PRIVATE');
  const config = validateConfig(JSON.parse(await readFile(configPath, 'utf8')));
  const { default: pg } = await import('pg');
  const db = new pg.Client(await databaseOptions(config));
  try {
    await db.connect();
    console.log(JSON.stringify(await runCycle(config, { mode, limit: limitText === undefined ? 21 : Number(limitText), db })));
  } finally { await db.end(); }
}
export async function databaseOptions(config) {
  validateConfig(config);
  if (config.databaseTransport === 'ssh-loopback') {
    // Only the exact operator-managed SSH listener may use an unencrypted local
    // PostgreSQL socket. The remote leg is protected by that existing SSH tunnel.
    const url = new URL(config.databaseUrl); url.search = '';
    return { connectionString: url.href, ssl: false, connectionTimeoutMillis: 15_000 };
  }
  return { connectionString: config.databaseUrl, ssl: { ca: await readFile(config.databaseCaPath, 'utf8'), servername: config.databaseServerName, rejectUnauthorized: true }, connectionTimeoutMillis: 15_000 };
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main().catch(error => { console.error(JSON.stringify({ status: 'held', code: safeError(error) })); process.exitCode = 1; });
