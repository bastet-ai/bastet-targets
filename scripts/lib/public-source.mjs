import { createHash } from 'node:crypto';

// This module deliberately has no credential/config/database dependency. Its
// only source is a fixed anonymous, read-only HackerOne GraphQL query.
export const PUBLIC_GRAPHQL_URL = 'https://hackerone.com/graphql';
export const PUBLIC_SOURCE_LIMITS = Object.freeze({ pages: 100, assets: 10000, bytes: 8 * 1024 * 1024, timeoutMs: 90000 });
const MAX_AGE_MS = 48 * 60 * 60 * 1000;
const EXCLUSIONS = Object.freeze({ status: 'not_represented', reason: 'Not exposed by anonymous public Team API; consult canonical policy.' });
const PROGRAM_FIELDS = 'handle name state submission_state offers_bounties policy structured_scope_versions { max_updated_at }';
const PAGE_QUERY = `query BastetPublicWikiSource($handle: String!, $cursor: String) {
  team(handle: $handle) { ${PROGRAM_FIELDS}
    structured_scopes(first: 100, after: $cursor, archived: false) {
      pageInfo { hasNextPage endCursor }
      edges { node { id asset_identifier asset_type instruction eligible_for_submission eligible_for_bounty max_severity } }
    }
  }
}`;
const VERIFY_QUERY = `query BastetPublicWikiVerify($handle: String!) { team(handle: $handle) { ${PROGRAM_FIELDS} } }`;

export class PublicSourceError extends Error {
  constructor(code, message) { super(message); this.name = 'PublicSourceError'; this.code = code; }
}
const fail = (code, message) => { throw new PublicSourceError(code, message); };
const invalid = () => fail('INVALID_SOURCE', 'Public source is invalid or incomplete. Nothing may be published.');
function object(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) invalid();
  return value;
}
function exact(value, keys) {
  object(value);
  if (Object.keys(value).length !== keys.length || keys.some(key => !Object.hasOwn(value, key))) invalid();
  return value;
}
function string(value, max, { empty = false, multiline = false } = {}) {
  if (typeof value !== 'string' || value.length > max || (!empty && !value.trim()) ||
      (multiline ? /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f\u202a-\u202e\u2066-\u2069]/u : /[\p{Cc}\p{Cf}]/u).test(value)) invalid();
  return value;
}
function boolean(value) { if (typeof value !== 'boolean') invalid(); return value; }
function handleValue(value) {
  if (typeof value !== 'string' || !/^[a-z0-9][a-z0-9_-]{0,254}$/.test(value)) invalid();
  return value;
}
function nowValue(value) {
  const raw = typeof value === 'function' ? value() : value;
  const result = raw === undefined ? Date.now() : raw instanceof Date ? raw.getTime() : typeof raw === 'number' ? raw : Date.parse(raw);
  if (!Number.isFinite(result)) invalid();
  return result;
}
function iso(value) {
  if (typeof value !== 'string' || !Number.isFinite(Date.parse(value)) || new Date(value).toISOString() !== value) invalid();
  return value;
}
function programFrom(value, expectedHandle) {
  object(value);
  const handle = handleValue(value.handle);
  if (handle !== expectedHandle) fail('IDENTITY_MISMATCH', 'Anonymous source returned a different program.');
  if (value.state !== 'public_mode') fail('NOT_PUBLIC', 'Program is not currently verified public. Nothing may be published.');
  const program = { handle, name: string(value.name, 512), state: 'public_mode',
    submission_state: string(value.submission_state, 64), offers_bounties: boolean(value.offers_bounties) };
  const policy = string(value.policy, 512 * 1024, { multiline: true });
  const marker = object(value.structured_scope_versions).max_updated_at;
  if (marker !== null && (typeof marker !== 'string' || !Number.isFinite(Date.parse(marker)))) invalid();
  return { program, policy, marker };
}
function assetFrom(value) {
  object(value);
  if (!Object.hasOwn(value, 'instruction')) invalid();
  return { id: string(value.id, 512), asset_identifier: string(value.asset_identifier, 8192),
    asset_type: string(value.asset_type, 128), instruction: string(value.instruction ?? '', 128 * 1024, { empty: true, multiline: true }),
    eligible_for_submission: boolean(value.eligible_for_submission), eligible_for_bounty: boolean(value.eligible_for_bounty),
    max_severity: value.max_severity === null ? null : string(value.max_severity, 64) };
}
const byId = (a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
function assertContent(source) {
  exact(source, ['schema_version', 'source', 'program', 'policy', 'assets', 'exclusions', 'provenance']);
  if (source.schema_version !== 1 || source.source !== 'hackerone-anonymous-graphql') invalid();
  const p = exact(source.program, ['handle', 'name', 'state', 'submission_state', 'offers_bounties']);
  handleValue(p.handle); string(p.name, 512); string(p.submission_state, 64); boolean(p.offers_bounties);
  if (p.state !== 'public_mode') fail('NOT_PUBLIC', 'Program is not currently verified public. Nothing may be published.');
  string(source.policy, 512 * 1024, { multiline: true });
  if (!Array.isArray(source.assets) || source.assets.length > PUBLIC_SOURCE_LIMITS.assets) invalid();
  const ids = new Set();
  let contentBytes = Buffer.byteLength(source.policy) + Buffer.byteLength(p.name);
  for (const a of source.assets) {
    exact(a, ['id', 'asset_identifier', 'asset_type', 'instruction', 'eligible_for_submission', 'eligible_for_bounty', 'max_severity']);
    string(a.instruction, 128 * 1024, { empty: true, multiline: true });
    assetFrom(a);
    contentBytes += Buffer.byteLength(a.id) + Buffer.byteLength(a.asset_identifier) + Buffer.byteLength(a.asset_type) + Buffer.byteLength(a.instruction) + 512;
    if (contentBytes > PUBLIC_SOURCE_LIMITS.bytes) fail('RESOURCE_LIMIT', 'Public source exceeds the bounded rendering limit.');
    if (ids.has(a.id)) invalid();
    ids.add(a.id);
  }
  exact(source.exclusions, ['status', 'reason']);
  if (source.exclusions.status !== EXCLUSIONS.status || source.exclusions.reason !== EXCLUSIONS.reason) invalid();
}
function content(source) {
  assertContent(source);
  return { schema_version: 1, source: source.source, program: {
    handle: source.program.handle, name: source.program.name, state: source.program.state,
    submission_state: source.program.submission_state, offers_bounties: source.program.offers_bounties,
  }, policy: source.policy, assets: [...source.assets].sort(byId).map(a => ({
    id: a.id, asset_identifier: a.asset_identifier, asset_type: a.asset_type, instruction: a.instruction,
    eligible_for_submission: a.eligible_for_submission, eligible_for_bounty: a.eligible_for_bounty, max_severity: a.max_severity,
  })), exclusions: { ...EXCLUSIONS } };
}
export function publicSourceDigest(source) {
  return createHash('sha256').update(JSON.stringify(content(source))).digest('hex');
}

/** Validate an already trusted, server-fetched projection. A hash is integrity,
 * not authentication: never accept a source or proof from an agent or browser. */
export function validatePublicSource(source, { now, maxAgeMs = MAX_AGE_MS, expectedHandle } = {}) {
  assertContent(source);
  if (expectedHandle !== undefined && source.program.handle !== handleValue(expectedHandle)) fail('IDENTITY_MISMATCH', 'Public source handle does not match its assigned campaign.');
  const p = exact(source.provenance, ['program_url', 'graphql_url', 'fetched_at', 'complete', 'authenticated', 'pages', 'sha256']);
  if (p.program_url !== `https://hackerone.com/${source.program.handle}` || p.graphql_url !== PUBLIC_GRAPHQL_URL ||
      p.complete !== true || p.authenticated !== false || !Number.isInteger(p.pages) || p.pages < 1 || p.pages > PUBLIC_SOURCE_LIMITS.pages ||
      typeof p.sha256 !== 'string' || !/^[a-f0-9]{64}$/.test(p.sha256)) invalid();
  const age = nowValue(now) - Date.parse(iso(p.fetched_at));
  if (!Number.isFinite(maxAgeMs) || maxAgeMs < 0 || maxAgeMs > MAX_AGE_MS || age < -30000 || age > maxAgeMs)
    fail('STALE_SOURCE', 'Public source is stale or has an invalid verification time.');
  if (p.sha256 !== publicSourceDigest(source)) fail('DIGEST_MISMATCH', 'Public source content does not match its digest.');
  return source;
}

async function readDocument(response, budget) {
  if (!response || !response.ok || response.status !== 200 || response.redirected) {
    await response?.body?.cancel().catch(() => {});
    fail('UNAVAILABLE', 'Anonymous public source is unavailable. Nothing may be published.');
  }
  if (!(response.headers.get('content-type') || '').toLowerCase().includes('application/json') || !response.body) {
    await response.body?.cancel().catch(() => {}); invalid();
  }
  const reader = response.body.getReader(); const chunks = [];
  try {
    while (true) {
      const { done, value } = await reader.read(); if (done) break;
      budget.bytes += value.byteLength;
      if (budget.bytes > PUBLIC_SOURCE_LIMITS.bytes) fail('RESOURCE_LIMIT', 'Anonymous source exceeds the bounded import limit.');
      chunks.push(value);
    }
    const document = object(JSON.parse(Buffer.concat(chunks).toString('utf8')));
    if (Object.hasOwn(document, 'errors')) fail('UPSTREAM_ERROR', 'Anonymous source returned GraphQL errors. Nothing may be published.');
    return object(document.data);
  } catch (error) {
    await reader.cancel().catch(() => {});
    if (error instanceof PublicSourceError) throw error;
    fail('INVALID_SOURCE', 'Anonymous source is unreadable or incomplete.');
  } finally { reader.releaseLock(); }
}

export async function fetchPublicSource(handle, { fetchImpl = globalThis.fetch, now, signal } = {}) {
  handleValue(handle);
  const budget = { bytes: 0 }; const assets = []; const ids = new Set(); const cursors = new Set();
  const timeout = AbortSignal.timeout(PUBLIC_SOURCE_LIMITS.timeoutMs);
  const boundedSignal = signal ? AbortSignal.any([signal, timeout]) : timeout;
  const request = async (verify, cursor) => {
    let response;
    try {
      response = await fetchImpl(PUBLIC_GRAPHQL_URL, { method: 'POST', redirect: 'manual', cache: 'no-store',
        credentials: 'omit', referrerPolicy: 'no-referrer', signal: boundedSignal,
        headers: { Accept: 'application/json', 'Content-Type': 'application/json', 'User-Agent': 'Bastet-Public-Wiki/1.0' },
        body: JSON.stringify({ operationName: verify ? 'BastetPublicWikiVerify' : 'BastetPublicWikiSource',
          query: verify ? VERIFY_QUERY : PAGE_QUERY, variables: verify ? { handle } : { handle, cursor } }),
      });
    } catch { fail('UNAVAILABLE', 'Anonymous public source could not be reached. Nothing may be published.'); }
    return (await readDocument(response, budget)).team;
  };
  let cursor = null; let first; let pages = 0;
  do {
    if (pages >= PUBLIC_SOURCE_LIMITS.pages) fail('RESOURCE_LIMIT', 'Anonymous scope pagination exceeds its bounded limit.');
    const team = await request(false, cursor);
    if (!team) fail('NOT_PUBLIC', 'Program is not anonymously visible. Nothing may be published.');
    const info = programFrom(team, handle);
    if (!first) first = info;
    else if (JSON.stringify(info) !== JSON.stringify(first)) fail('SOURCE_CHANGED', 'Public policy or scope changed during pagination; retry the complete read.');
    const scopes = object(team.structured_scopes); const page = object(scopes.pageInfo);
    boolean(page.hasNextPage);
    if (!Object.hasOwn(page, 'endCursor') || (page.endCursor !== null && typeof page.endCursor !== 'string')) invalid();
    if (!Array.isArray(scopes.edges) || scopes.edges.length > 100) invalid();
    for (const edge of scopes.edges) {
      const asset = assetFrom(object(edge).node);
      if (ids.has(asset.id)) fail('SOURCE_CHANGED', 'Anonymous scope contains duplicate resources; retry the complete read.');
      ids.add(asset.id); assets.push(asset);
      if (assets.length > PUBLIC_SOURCE_LIMITS.assets) fail('RESOURCE_LIMIT', 'Anonymous scope exceeds its bounded asset limit.');
    }
    pages += 1;
    if (!page.hasNextPage) { cursor = null; break; }
    cursor = string(page.endCursor, 2048);
    if (cursors.has(cursor) || scopes.edges.length === 0) fail('SOURCE_CHANGED', 'Anonymous scope pagination is incomplete or cyclic.');
    cursors.add(cursor);
  } while (cursor !== null);
  const finalTeam = await request(true);
  if (!finalTeam || JSON.stringify(programFrom(finalTeam, handle)) !== JSON.stringify(first))
    fail('SOURCE_CHANGED', 'Public visibility, policy or scope changed before verification completed.');
  const source = { schema_version: 1, source: 'hackerone-anonymous-graphql', program: first.program,
    policy: first.policy, assets: assets.sort(byId), exclusions: { ...EXCLUSIONS }, provenance: {
      program_url: `https://hackerone.com/${handle}`, graphql_url: PUBLIC_GRAPHQL_URL,
      fetched_at: new Date(nowValue(now)).toISOString(), complete: true, authenticated: false, pages, sha256: '0'.repeat(64),
    } };
  source.provenance.sha256 = publicSourceDigest(source);
  return validatePublicSource(source, { now, expectedHandle: handle });
}

// Indented plain-text blocks never interpret untrusted HTML, images, links,
// headings, fences or MkDocs directives. The only clickable URL is constructed
// from the validated exact handle, never copied from a policy or asset.
const literal = value => String(value).replace(/\r\n?/g, '\n').split('\n').map(line => `    ${line}`).join('\n');
export function renderPublicSection(source, options = {}) {
  validatePublicSource(source, options);
  const p = source.program;
  const lines = [
    '<!-- bastet-public-scope:begin -->',
    '## Verified public HackerOne scope', '',
    'This generated reference contains only an anonymously retrieved public policy and current non-archived scope. It is not authorization to test and does not disclose campaign findings, agent conversations or private reports.', '',
    `Canonical rules: [HackerOne program](https://hackerone.com/${p.handle}) · [Scope](https://hackerone.com/${p.handle}/policy_scopes)`, '',
    `Publicly verified: ${source.provenance.fetched_at}.`, '',
    `Public source digest: ${source.provenance.sha256}`, '',
    '### Program', '', literal(`${p.name}\nHandle: ${p.handle}\nProgram state: ${p.state}\nSubmission state: ${p.submission_state}\nOffers bounties: ${p.offers_bounties ? 'yes' : 'no'}`), '',
    '### Policy', '', literal(source.policy), '',
    '### Current non-archived assets', '',
    `Complete anonymous pagination: ${source.assets.length} assets across ${source.provenance.pages} pages, including ineligible assets. Archived assets are not represented.`, '',
  ];
  for (const a of [...source.assets].sort(byId)) {
    lines.push(literal(`${a.asset_identifier}\nType: ${a.asset_type}\nSubmission eligible: ${a.eligible_for_submission ? 'yes' : 'no'}\nBounty eligible: ${a.eligible_for_bounty ? 'yes' : 'no'}\nMaximum severity: ${a.max_severity ?? 'unspecified'}\nInstructions: ${a.instruction || 'Not specified in the public source.'}`), '');
  }
  lines.push('### Exclusions and completeness', '',
    'Separate scope-exclusion records are not exposed by the anonymous public Team API and are not copied from authenticated imports. Consult the canonical policy and scope for all exclusions, restrictions and updates. Public visibility does not authorize disclosure of vulnerability findings.', '',
    '<!-- bastet-public-scope:end -->', '');
  return lines.join('\n');
}
