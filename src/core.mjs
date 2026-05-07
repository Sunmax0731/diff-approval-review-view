import { productConfig } from './config.mjs';
import { normalizeInput } from './input.mjs';
import { validateRequiredFields, validateStatus } from './validators.mjs';
export { normalizeInput } from './input.mjs';
export { buildReviewModel } from './review-model.mjs';
export { renderMarkdownReport, renderHtmlReport } from './report.mjs';

export function analyzeItems(source, options = {}) {
  const items = normalizeInput(source);
  const requiredFields = options.requiredFields || productConfig.requiredFields;
  const findings = [
    ...validateRequiredFields(items, requiredFields, productConfig.titleJa),
    ...validateStatus(items)
  ];
  const errorCount = findings.filter((finding) => finding.level === 'error').length;
  const warningCount = findings.filter((finding) => finding.level === 'warning').length;
  return {
    product: productConfig,
    summary: {
      totalItems: items.length,
      checkedFields: requiredFields.length,
      errors: errorCount,
      warnings: warningCount,
      result: errorCount > 0 ? 'failed' : warningCount > 0 ? 'warning' : 'passed'
    },
    findings
  };
}
