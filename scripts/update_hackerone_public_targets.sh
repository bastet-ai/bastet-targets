#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_DIR"

# Public-only crawl + wiki update.
# Default caps keep the crawler polite; raise MAX_PAGE_FETCHES if needed.
MAX_PAGE_FETCHES="${MAX_PAGE_FETCHES:-200}"
MIN_DELAY="${MIN_DELAY:-1.0}"

./scripts/hackerone_public_crawler.py \
  --max-page-fetches "$MAX_PAGE_FETCHES" \
  --min-delay "$MIN_DELAY"

# Optional: show git diff summary for operators.
if command -v git >/dev/null 2>&1 && git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo
  echo "--- git status (bastet-targets) ---"
  git status --porcelain || true
fi
