import test from 'node:test';
import assert from 'node:assert/strict';
import { analyzeItems, renderMarkdownReport } from '../src/core.mjs';

test('valid sample passes required field checks', () => {
  const report = analyzeItems({ items: [{
  "id": "diff-approval-1",
  "title": "比較・差分承認ビュー サンプル 1",
  "basePath": "before.md",
  "targetPath": "after.md",
  "decision": "approve",
  "risk": "low"
}] });
  assert.equal(report.summary.result, 'passed');
  assert.equal(report.summary.errors, 0);
});

test('missing required field is reported', () => {
  const report = analyzeItems({ items: [{
  "id": "diff-approval-missing-required",
  "title": "必須項目不足サンプル",
  "targetPath": "after.md",
  "decision": "approve",
  "risk": "low"
}] });
  assert.equal(report.summary.result, 'failed');
  assert.equal(report.summary.errors, 1);
  assert.match(renderMarkdownReport(report), /未設定/);
});
