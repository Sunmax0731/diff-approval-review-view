import fs from 'node:fs';
import path from 'node:path';
import { analyzeItems, renderMarkdownReport, renderHtmlReport } from './core.mjs';

const inputPath = process.argv[2] || 'samples/sample-input.json';
const outputDir = process.argv[3] || 'dist/run';

const raw = fs.readFileSync(inputPath, 'utf8');
const input = JSON.parse(raw);
const report = analyzeItems(input);

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'report.json'), JSON.stringify(report, null, 2), 'utf8');
fs.writeFileSync(path.join(outputDir, 'report.md'), renderMarkdownReport(report), 'utf8');
fs.writeFileSync(path.join(outputDir, 'report.html'), renderHtmlReport(report), 'utf8');
console.log(`${report.product.repo}: ${report.summary.result} (${report.summary.errors} errors, ${report.summary.warnings} warnings)`);
if (report.summary.errors > 0) process.exitCode = 1;
