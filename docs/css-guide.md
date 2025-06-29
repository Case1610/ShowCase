# スタイリングガイド

このプロジェクトでは、Material-UI (MUI) をメインのUIフレームワークとして使用しており、一貫したデザインシステムを構築しています。

## スタイリング方針

### 1. MUIを優先的に使用
- 新しいコンポーネントやページを作成する際は、MUIコンポーネントを優先的に使用してください
- MUIのテーマシステムにより、ダークモード/ライトモードが自動的に適用されます

### 2. テーマ統一
- カラーパレット、フォント、スペーシングはMUIテーマ（`src/theme.ts`）で統一管理
- カスタムスタイルが必要な場合も、テーマで定義された値を使用することを推奨

## MUIコンポーネントの使用方法

### 基本的なコンポーネント
```tsx
import { Box, Typography, Button, Paper } from '@mui/material';

// レイアウト
<Box sx={{ p: 2, m: 1 }}>
  <Typography variant="h4" component="h1">タイトル</Typography>
  <Button variant="contained">ボタン</Button>
</Box>

// カード風デザイン
<Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
  <Typography>内容</Typography>
</Paper>
```

### レスポンシブデザイン
```tsx
// 画面サイズに応じたスタイル
<Box sx={{
  maxWidth: { xs: '100%', sm: 600, md: 800 },
  p: { xs: 2, sm: 3, md: 4 },
  display: { xs: 'block', md: 'flex' }
}}>
```

### テーマカラーの使用
```tsx
// テーマで定義されたカラーを使用
<Box sx={{
  bgcolor: 'background.paper',
  color: 'text.primary',
  borderColor: 'divider'
}}>
```

## テーマのカスタマイズ

### カラーパレットの変更
`src/theme.ts`でカラーを調整：

```typescript
export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // メインカラー
      light: '#42a5f5',
      dark: '#1565c0',
    },
    background: {
      default: '#f5f5f5', // 背景色
      paper: '#ffffff',    // カード背景色
    },
  },
});
```

### コンポーネントスタイルの統一
```typescript
components: {
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 12, // すべてのCardコンポーネントの角丸
      },
    },
  },
},
```

## App.cssの役割

現在のApp.cssは最小限の設定のみ：
- 基本的なリセットCSS
- フォントファミリーの設定
- カスタムスタイルが必要な場合の拡張用

```css
/* 基本的なスタイルリセット */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
}
```

## 推奨されるスタイリングパターン

### 1. ページコンポーネント
```tsx
function MyPage() {
  return (
    <Box sx={{ maxWidth: 700, mx: 'auto', mt: 4, p: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom>
          ページタイトル
        </Typography>
        <Typography variant="body1">
          内容
        </Typography>
      </Paper>
    </Box>
  );
}
```

### 2. レスポンシブギャラリー
```tsx
<Masonry
  columns={{ xs: 1, sm: 2, md: 3 }}
  spacing={3}
>
  {items.map((item, index) => (
    <Card key={index} sx={{ borderRadius: 3, boxShadow: 3 }}>
      <CardMedia component="img" image={item.src} />
    </Card>
  ))}
</Masonry>
```

### 3. ナビゲーション
```tsx
<Stack direction="row" spacing={2}>
  <Button
    variant={isActive ? 'contained' : 'text'}
    color={isActive ? 'primary' : 'inherit'}
  >
    ナビゲーション
  </Button>
</Stack>
```

## 避けるべきパターン

### ❌ インラインスタイル
```tsx
// 避ける
<div style={{ backgroundColor: '#ff0000', padding: '16px' }}>
```

### ❌ ハードコードされた色の値
```tsx
// 避ける
<Box sx={{ bgcolor: '#1976d2' }}>

// 推奨
<Box sx={{ bgcolor: 'primary.main' }}>
```

### ❌ Tailwind CSSとの混在
このプロジェクトではTailwind CSSは削除されているため、MUIのスタイリングシステムを使用してください。

## デバッグとトラブルシューティング

### テーマが適用されない場合
1. コンポーネントがThemeProviderでラップされているか確認
2. MUIコンポーネントを使用しているか確認
3. `sx` プロパティでテーマ値を参照しているか確認

### レスポンシブデザインの確認
- ブラウザのデベロッパーツールでブレークポイントごとの表示を確認
- MUIのブレークポイント： xs (0px以上), sm (600px以上), md (900px以上), lg (1200px以上), xl (1536px以上)

詳細な情報については[MUI公式ドキュメント](https://mui.com/)を参照してください。
