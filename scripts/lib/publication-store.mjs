// Function-only PostgreSQL adapter. No research/console table access is needed.
export async function claimProposal(db, { campaignIds = [] } = {}) {
  const row = (await db.query('SELECT bastet_wiki.claim_publication() AS value')).rows[0]?.value;
  if (!row) return null;
  if (!campaignIds.includes(row.campaign_id)) {
    await holdPublication(db, row, 'campaign_not_allowlisted');
    throw Object.assign(new Error('CAMPAIGN_NOT_ALLOWLISTED'), { code: 'CAMPAIGN_NOT_ALLOWLISTED' });
  }
  return { ...row, id: row.proposal_id };
}
export async function revalidatePublication(db, lease) {
  const row = (await db.query('SELECT bastet_wiki.revalidate_publication($1::uuid,$2::uuid) AS value', [lease.id ?? lease.proposal_id, lease.lease_token])).rows[0]?.value;
  if (!row || row.campaign_id !== lease.campaign_id || row.source_hash !== lease.source_hash || row.handle !== lease.handle || row.wiki_path !== lease.wiki_path || row.renderer_version !== lease.renderer_version) {
    throw Object.assign(new Error('PUBLICATION_LEASE_CHANGED'), { code: 'PUBLICATION_LEASE_CHANGED' });
  }
  return row;
}
export async function completePublication(db, lease, receipt) {
  return (await db.query('SELECT bastet_wiki.complete_publication($1::uuid,$2::uuid,$3::jsonb) AS value', [lease.id ?? lease.proposal_id, lease.lease_token, JSON.stringify(receipt)])).rows[0]?.value;
}
export async function holdPublication(db, lease, code) {
  const reason = /^[a-z_]{1,80}$/.test(String(code).toLowerCase()) ? String(code).toLowerCase() : 'publication_failed';
  return (await db.query('SELECT bastet_wiki.hold_publication($1::uuid,$2::uuid,$3) AS value', [lease.id ?? lease.proposal_id, lease.lease_token, reason])).rows[0]?.value;
}
export async function listMaintenanceCampaigns(db) {
  const result = await db.query('SELECT bastet_wiki.list_maintenance_campaigns() AS value');
  const value = result.rows[0]?.value;
  if (!Array.isArray(value) || value.length > 21) throw Object.assign(new Error('INVALID_MAINTENANCE_INVENTORY'), { code: 'INVALID_MAINTENANCE_INVENTORY' });
  return value;
}
export async function refreshSource(db, campaignId, source) {
  return (await db.query('SELECT bastet_wiki.refresh_source($1::uuid,$2,$3::jsonb,$4::timestamptz) AS value', [campaignId, source.provenance.sha256, JSON.stringify(source), source.provenance.fetched_at])).rows[0]?.value;
}
export async function invalidateSource(db, campaignId, reason) {
  return (await db.query('SELECT bastet_wiki.invalidate_source($1::uuid,$2) AS value', [campaignId, reason])).rows[0]?.value;
}
