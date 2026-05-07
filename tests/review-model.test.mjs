import test from 'node:test';
import assert from 'node:assert/strict';
import { analyzeItems, buildReviewModel, renderHtmlReport } from '../src/core.mjs';

test('review model exposes status cards and next actions', () => {
  const report = analyzeItems({ items: [{
  "id": "diff-approval-review-view-missing-required",
  "title": "必須項目不足サンプル",
  "status": "ready",
  "targetPath": "after.md",
  "decision": "approve",
  "risk": "low"
}] });
  const model = buildReviewModel(report);
  assert.equal(model.statusLabel, '修正が必要');
  assert.ok(model.completionRate < 100);
  assert.ok(model.cards.length >= 4);
  assert.match(renderHtmlReport(report), /Next Actions/);
});
