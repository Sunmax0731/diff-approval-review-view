# 手動テスト

## 準備

- リポジトリ: `D:\AI\ProjectManagement\diff-approval-review-view`
- `npm test` が成功していること
- サンプル入力: `D:\AI\ProjectManagement\diff-approval-review-view\samples\sample-input.json`
- ローカルサーバーは不要です

## 手順

1. PowerShellで `cd D:\AI\ProjectManagement\diff-approval-review-view` を実行する
2. `npm test` を実行する
3. `node src/cli.mjs samples/sample-input.json manual-output` を実行する
4. `manual-output/report.md` を開く
5. 正常サンプルと必須項目不足サンプルが区別されていることを確認する

## 期待結果

- 必須項目不足が分かる形で表示される。
- 次アクションがユーザーに理解できる。
- 実行ログ、出力ファイル、または画面表示をリリース前確認に使える。
