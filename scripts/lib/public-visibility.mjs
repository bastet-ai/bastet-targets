import { PUBLIC_GRAPHQL_URL, PublicSourceError } from './public-source.mjs';

const QUERY = 'query BastetWikiVisibility($handle: String!) { team(handle: $handle) { handle state submission_state offers_bounties } }';
const STATES = new Set(['inactive', 'sandboxed', 'da_mode', 'soft_launched', 'public_mode']);
const fail = code => { throw new PublicSourceError(code, 'Anonymous program visibility could not be safely established.'); };
const object = value => value && typeof value === 'object' && !Array.isArray(value);
const exact = (value, keys) => object(value) && Object.keys(value).sort().join(',') === [...keys].sort().join(',');
const validHandle = handle => typeof handle === 'string' && /^[a-z0-9][a-z0-9_-]{0,254}$/.test(handle);

// Publication errors are not deletion evidence. Only these narrow, independently
// observed API shapes establish that a program is not publicly visible.
export function classifyVisibility(document, handle) {
  if (!validHandle(handle)) fail('INVALID_VISIBILITY_HANDLE');
  if (!object(document) || !exact(document.data, ['team'])) fail('VISIBILITY_SCHEMA_ERROR');
  if (Object.hasOwn(document, 'errors')) {
    const errors = document.errors;
    if (!exact(document, ['data', 'errors']) || document.data.team !== null || !Array.isArray(errors) || errors.length !== 1 ||
        !object(errors[0]) || Object.keys(errors[0]).some(key => !['message', 'locations', 'path', 'type'].includes(key)) ||
        errors[0]?.type !== 'NOT_FOUND' || errors[0]?.message !== 'Team does not exist' ||
        JSON.stringify(errors[0]?.path) !== '["team"]') fail('VISIBILITY_UPSTREAM_ERROR');
    return { handle, visibility: 'missing', reason: 'team_not_found', state: null };
  }
  if (!exact(document, ['data'])) fail('VISIBILITY_SCHEMA_ERROR');
  const team = document.data.team;
  if (team === null) return { handle, visibility: 'missing', reason: 'team_not_visible', state: null };
  if (!exact(team, ['handle', 'state', 'submission_state', 'offers_bounties']) || team.handle !== handle) fail('VISIBILITY_SCHEMA_ERROR');
  if (team.state === null && team.submission_state === null && team.offers_bounties === null)
    return { handle, visibility: 'non_public', reason: 'not_publicly_visible', state: null };
  if (!STATES.has(team.state)) fail('VISIBILITY_SCHEMA_ERROR');
  if (team.state === 'public_mode') {
    if (typeof team.submission_state !== 'string' || !/^[a-z_]{1,64}$/.test(team.submission_state) || typeof team.offers_bounties !== 'boolean') fail('VISIBILITY_SCHEMA_ERROR');
    return { handle, visibility: 'public', reason: 'public_mode', state: team.state };
  }
  if ((team.submission_state !== null && (typeof team.submission_state !== 'string' || !/^[a-z_]{1,64}$/.test(team.submission_state))) ||
      (team.offers_bounties !== null && typeof team.offers_bounties !== 'boolean')) fail('VISIBILITY_SCHEMA_ERROR');
  return { handle, visibility: 'non_public', reason: 'non_public_state', state: team.state };
}

export async function fetchPublicVisibility(handle, { fetchImpl = globalThis.fetch } = {}) {
  if (!validHandle(handle)) fail('INVALID_VISIBILITY_HANDLE');
  let response;
  try {
    response = await fetchImpl(PUBLIC_GRAPHQL_URL, { method: 'POST', credentials: 'omit', redirect: 'manual', cache: 'no-store', referrerPolicy: 'no-referrer',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json', 'User-Agent': 'Bastet-Public-Wiki/1.0' },
      signal: AbortSignal.timeout(20000), body: JSON.stringify({ operationName: 'BastetWikiVisibility', query: QUERY, variables: { handle } }) });
  } catch { fail('VISIBILITY_UNAVAILABLE'); }
  if (response?.status !== 200 || response.redirected || !response.body || !response.headers.get('content-type')?.toLowerCase().includes('application/json')) {
    await response?.body?.cancel().catch(() => {}); fail('VISIBILITY_UNAVAILABLE');
  }
  const reader = response.body.getReader(), chunks = []; let bytes = 0;
  try {
    for (;;) {
      const { value, done } = await reader.read(); if (done) break;
      bytes += value.byteLength; if (bytes > 65536) fail('VISIBILITY_RESOURCE_LIMIT'); chunks.push(value);
    }
    return classifyVisibility(JSON.parse(Buffer.concat(chunks).toString('utf8')), handle);
  } catch (error) {
    await reader.cancel().catch(() => {});
    if (error instanceof PublicSourceError) throw error;
    fail('VISIBILITY_SCHEMA_ERROR');
  } finally { reader.releaseLock(); }
}

export async function confirmRetirement(handle, { fetchVisibility = fetchPublicVisibility } = {}) {
  const control = handle === 'coinbase' ? 'gitlab' : 'coinbase';
  const firstControl = await fetchVisibility(control);
  if (firstControl.handle !== control || firstControl.visibility !== 'public') fail('RETIREMENT_CONTROL_FAILED');
  const first = await fetchVisibility(handle), second = await fetchVisibility(handle);
  const lastControl = await fetchVisibility(control);
  if (lastControl.handle !== control || lastControl.visibility !== 'public') fail('RETIREMENT_CONTROL_FAILED');
  if (first.handle !== handle || second.handle !== handle || JSON.stringify(first) !== JSON.stringify(second)) fail('RETIREMENT_VISIBILITY_CHANGED');
  if (!['non_public', 'missing'].includes(first.visibility)) fail('RETIREMENT_PROGRAM_PUBLIC');
  return first;
}
