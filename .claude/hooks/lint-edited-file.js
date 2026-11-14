#!/usr/bin/env node
/**
 * Claude Code PostToolUse hook: lints the single .js file that was just edited.
 *
 * - Acts only on .js files inside university_final/ (never node_modules).
 * - Never uses --fix: it reports problems, it does not modify files.
 * - Exit 0 = clean or not applicable. Exit 2 = lint errors, reported back to Claude.
 * - If ESLint is not installed yet, it does nothing.
 */
const path = require('path');
const fs = require('fs');
const { spawnSync } = require('child_process');

let raw = '';
process.stdin.on('data', (chunk) => (raw += chunk));
process.stdin.on('end', () => {
  let filePath;
  try {
    filePath = JSON.parse(raw)?.tool_input?.file_path;
  } catch {
    process.exit(0);
  }
  if (!filePath || !filePath.endsWith('.js')) process.exit(0);

  const projectRoot = path.resolve(__dirname, '..', '..', 'university_final');
  const absFile = path.resolve(filePath);
  const rel = path.relative(projectRoot, absFile);
  const insideProject = rel && !rel.startsWith('..') && !path.isAbsolute(rel);
  if (!insideProject || rel.split(path.sep).includes('node_modules')) process.exit(0);

  const eslintBin = path.join(projectRoot, 'node_modules', 'eslint', 'bin', 'eslint.js');
  if (!fs.existsSync(eslintBin)) process.exit(0);

  const result = spawnSync(process.execPath, [eslintBin, '--no-warn-ignored', rel], {
    cwd: projectRoot,
    encoding: 'utf8',
  });
  if (result.status === 0) process.exit(0);

  process.stderr.write(`ESLint reported problems in ${rel}:\n${result.stdout || ''}${result.stderr || ''}`);
  process.exit(2);
});
