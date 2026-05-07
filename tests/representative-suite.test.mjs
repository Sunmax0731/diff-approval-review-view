import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { analyzeItems } from '../src/core.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const suite = JSON.parse(fs.readFileSync(path.join(root, 'samples/representative-suite.json'), 'utf8'));

test('representative QCDS suite matches expected outcomes', () => {
  assert.ok(suite.scenarios.length >= 4);
  for (const scenario of suite.scenarios) {
    const report = analyzeItems(scenario.input);
    assert.equal(report.summary.result, scenario.expected.result, scenario.id);
    assert.equal(report.summary.errors, scenario.expected.errors, scenario.id);
    assert.equal(report.summary.warnings, scenario.expected.warnings, scenario.id);
  }
});
