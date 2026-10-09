#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { BUILD_MARKER_PATH } from './lib/git-deployment.mjs';

const commit = execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
if (!/^[a-f0-9]{40}$/.test(commit)) throw new Error('INVALID_BUILD_COMMIT');
const path = join('site', BUILD_MARKER_PATH.slice(1));
await mkdir(dirname(path), { recursive: true });
await writeFile(path, JSON.stringify({ schema_version: 1, commit }) + '\n');
