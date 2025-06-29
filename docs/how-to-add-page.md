# ページ追加方法

1. `src/pages/` に新しいファイル（例: `Sample.tsx`）を作成
2. 必要に応じて`src/components/`に部品を作成
3. `App.tsx` の `<Routes>` にルートを追加

---

## 例
```tsx
<Route path="/sample" element={<Sample />} />
```
