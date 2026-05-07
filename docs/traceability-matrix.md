# トレーサビリティマトリクス

| ID | 要件 | 実装 | 自動テスト | ユーザーdocs | リリースdocs |
| --- | --- | --- | --- | --- | --- |
| QFR-001 | 必須項目不足を検出する | src/core.mjs<br>src/validators.mjs<br>src/report.mjs<br>src/review-model.mjs<br>src/cli.mjs | tests/core.test.mjs<br>tests/review-model.test.mjs<br>tests/representative-suite.test.mjs | docs/user-guide.md | docs/release-checklist.md |
| QFR-002 | 代表シナリオを継続検証する | samples/representative-suite.json | tests/representative-suite.test.mjs | docs/manual-test.md | docs/qcds-evaluation.md |
| CFR-001 | ローカルで低コストに検証する | package.json | npm test | docs/installation-guide.md | tools/package-docs.ps1 |
| DFR-001 | リリース前判断の証跡を残す | docs/qcds-strict-metrics.json | tools/qcds-evaluate.mjs | README.md | docs/pre-release.md |
| SFR-001 | 秘密情報と外部実行リスクを抑える | docs/security-privacy-checklist.md | tools/qcds-evaluate.mjs | docs/user-guide.md | docs/release-checklist.md |
