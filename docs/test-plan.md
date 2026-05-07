# テスト計画

## 自動テスト

```powershell
cd D:\AI\ProjectManagement\diff-approval-review-view
npm test
```

## 観点

- 正常入力で `passed` になる。
- 必須項目不足で `failed` になり、該当 field が findings に出る。
- Markdown レポートに手動確認の参照が含まれる。

## 手動テスト

手順は `docs/manual-test.md` に集約する。
