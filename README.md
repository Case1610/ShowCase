# ShowCase - ポートフォリオサイト

## 概要

React + TypeScript + Vite + Material-UI (MUI) で構築した写真ギャラリー付きポートフォリオサイトです。
ダークモード/ライトモード切り替え機能とレスポンシブデザインに対応しています。

## 技術スタック

- **フロントエンド**: React 19.1.0 + TypeScript
- **ビルドツール**: Vite 7.0.0
- **UIフレームワーク**: Material-UI (MUI) 7.1.2
- **ルーティング**: React Router DOM 7.6.2
- **その他**: 
  - React Markdown (Markdownレンダリング)
  - React Masonry CSS (グリッドレイアウト)

## 主な機能

### 🎨 テーマ切り替え
- ダークモード/ライトモードの切り替え
- システム設定に基づく自動テーマ検出
- 全コンポーネントでテーマが統一適用

### 📷 ギャラリー機能
- マソナリーレイアウトによる美しい画像表示
- 画像・動画両方に対応
- モーダル表示による拡大表示機能
- レスポンシブ対応（モバイル・タブレット・デスクトップ）

### 🛠️ ツール機能
- Markdownサンドボックス（リアルタイムプレビュー）
- ソーシャルスタイルテスト

### 📱 レスポンシブデザイン
- モバイルファーストなデザイン
- ハンバーガーメニュー（モバイル）
- 各画面サイズに最適化されたレイアウト

## ディレクトリ構成

```
src/
├── components/          # 再利用可能なUIコンポーネント
│   ├── Header.tsx      # ヘッダーコンポーネント
│   ├── Footer.tsx      # フッターコンポーネント
│   ├── Layout.tsx      # レイアウトコンポーネント
│   └── Navigation.tsx  # ナビゲーションコンポーネント
├── pages/              # ページコンポーネント
│   ├── Home.tsx        # ホームページ（ギャラリー）
│   ├── About.tsx       # 自己紹介ページ
│   ├── Contact.tsx     # お問い合わせページ
│   ├── NotFound.tsx    # 404ページ
│   └── tools/          # ツールページ群
├── assets/             # 静的ファイル
│   └── gallery/        # ギャラリー画像
├── hooks/              # カスタムフック
├── utils/              # ユーティリティ関数
├── types/              # 型定義
├── constants/          # 定数定義
├── theme.ts           # MUIテーマ設定
└── AppProvider.tsx    # アプリケーション全体のプロバイダー
```

## 開発・起動方法

### 環境要件
- Node.js 20.19.0以上 または 22.12.0以上
- npm 10.x以上

### セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# プレビュー（ビルド後）
npm run preview

# リンター実行
npm run lint
```

## ギャラリー画像の追加方法

1. 画像ファイルを `public/gallery/` フォルダに配置
2. `src/pages/Home.tsx` の `galleryItems` 配列に画像情報を追加

```typescript
const galleryItems = [
  { type: 'image' as const, src: '/gallery/your-image.jpg' },
  // 他の画像...
];
```

## カスタマイズ

### テーマのカスタマイズ
`src/theme.ts` でライト/ダークテーマの色やスタイルを変更できます。

### 新しいページの追加
詳細は `docs/how-to-add-page.md` を参照してください。

## デプロイ

詳細は `docs/how-to-deploy.md` を参照してください。

## ドキュメント

- [プロジェクト構造](docs/project-structure.md)
- [コンポーネント追加方法](docs/how-to-add-component.md)
- [ページ追加方法](docs/how-to-add-page.md)
- [デプロイ方法](docs/how-to-deploy.md)
- [CSSガイド](docs/css-guide.md)
- [タスク状況](docs/task-status.md)

## ライセンス

このプロジェクトは学習・ポートフォリオ用途で作成されています。
