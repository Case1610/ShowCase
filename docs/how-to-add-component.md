# コンポーネント追加方法

1. `src/components/` に新しいファイル（例: `SampleComponent.tsx`）を作成
2. 必要に応じて`App.tsx`やページからimportして利用

---

## 既存のコンポーネント

### ProfileAvatar
プロフィール画像を表示するコンポーネント。クリックするとフルスクリーンモーダルで表示される。

- **場所**: `src/components/ProfileAvatar.tsx`
- **使用例**: Home、About、Contactページで使用
- **機能**: 
  - クリック可能なアバター画像
  - フルスクリーンモーダル表示
  - カスタマイズ可能なサイズ、ボーダー
  - フォールバックテキスト対応

**使用方法**:
```tsx
import ProfileAvatar from '../components/ProfileAvatar';

// 基本的な使用
<ProfileAvatar />

// カスタマイズ
<ProfileAvatar
  size={120}
  borderColor="primary.main"
  borderWidth={3}
  fallbackText="HK"
  sx={{ mb: 2 }}
/>
```

---

## 新しいコンポーネントの追加例
```tsx
import SampleComponent from './components/SampleComponent';
```
