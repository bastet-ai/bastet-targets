// Public build evidence only. Publication credentials remain outside the wiki.
export const BUILD_MARKER_PATH = '/.well-known/bastet-build.json';
export const DEPLOYMENT_TIMEOUT_MS = 20 * 60 * 1000;
const COMMIT = /^[a-f0-9]{40}$/;
const fail = code => { throw Object.assign(new Error(code), { code }); };

async function markerCommit(response) {
  if (!response.headers.get('content-type')?.match(/^application\/json(?:;|$)/i) || !response.body)
    fail('DEPLOYMENT_MARKER_INVALID');
  const reader = response.body.getReader(), chunks = []; let bytes = 0;
  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    bytes += value.byteLength;
    if (bytes > 4096) { await reader.cancel(); fail('DEPLOYMENT_MARKER_INVALID'); }
    chunks.push(value);
  }
  let marker;
  try { marker = JSON.parse(Buffer.concat(chunks).toString('utf8')); }
  catch { fail('DEPLOYMENT_MARKER_INVALID'); }
  if (!marker || Object.keys(marker).sort().join(',') !== 'commit,schema_version' || marker.schema_version !== 1 || !COMMIT.test(marker.commit))
    fail('DEPLOYMENT_MARKER_INVALID');
  return marker.commit;
}

export async function waitForBuildCommit(url, commit, {
  fetchImpl = fetch, now = Date.now,
  sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds)),
  verifyCheckout = async () => {}, timeoutMs = DEPLOYMENT_TIMEOUT_MS, pollMs = 15_000,
} = {}) {
  if (!COMMIT.test(commit)) fail('INVALID_COMMIT');
  if (!Number.isInteger(timeoutMs) || timeoutMs < 1 || timeoutMs > DEPLOYMENT_TIMEOUT_MS || !Number.isInteger(pollMs) || pollMs < 1 || pollMs > timeoutMs)
    fail('INVALID_DEPLOYMENT_WAIT');
  const deadline = now() + timeoutMs;
  for (;;) {
    if (now() >= deadline) fail('GIT_DEPLOYMENT_TIMEOUT');
    await verifyCheckout();
    const markerUrl = new URL(url);
    markerUrl.searchParams.set('commit', commit);
    markerUrl.searchParams.set('check', String(now()));
    let response;
    try {
      response = await fetchImpl(markerUrl.href, {
        redirect: 'error', credentials: 'omit', cache: 'no-store',
        headers: { 'cache-control': 'no-cache' },
        signal: AbortSignal.timeout(Math.max(1, Math.min(20_000, deadline - now()))),
      });
    } catch { /* A temporary network failure is pending until the bounded timeout. */ }
    if (response?.ok) {
      let observed;
      try { observed = await markerCommit(response); }
      catch (error) { if (error.code === 'DEPLOYMENT_MARKER_INVALID') throw error; }
      if (observed === commit) {
        await verifyCheckout();
        if (now() >= deadline) fail('GIT_DEPLOYMENT_TIMEOUT');
        return { commit, url };
      }
    } else if (response) {
      await response.body?.cancel().catch(() => {});
      if (![404, 429].includes(response.status) && response.status < 500)
        fail('DEPLOYMENT_MARKER_HTTP_FAILED');
    }
    const remaining = deadline - now();
    if (remaining <= 0) fail('GIT_DEPLOYMENT_TIMEOUT');
    await sleep(Math.min(pollMs, remaining));
  }
}
