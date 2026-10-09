#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

# Page revision dates require history rather than the checkout timestamp.
if [ "$(git rev-parse --is-shallow-repository)" = "true" ]; then
  git fetch --unshallow origin
fi

python3 -m venv .venv
.venv/bin/python -m pip install --disable-pip-version-check -r requirements.lock
.venv/bin/python -m mkdocs build --clean --strict
node scripts/write-build-marker.mjs

# The source CNAME is retained for the GitHub Pages rollback deployment.
rm -f site/CNAME
