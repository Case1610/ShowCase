# プロフィール表示制御について

## 概要
このプロジェクトでは、プロフィール情報の表示制御機能を実装しています。
JSONファイルには詳細な個人情報を保持しつつ、サイト上では必要に応じて情報を隠したり、一般化したりできます。

## ファイル構成

### プロフィールデータ
- `src/pages/profile.json` - 実際のプロフィールデータ（`.gitignore`で除外済み）
- `src/pages/profile.sample.json` - サンプルプロフィールデータ

### 表示制御
- `src/utils/profileDisplay.ts` - 表示制御の設定とロジック

## 設定方法

### 1. 基本設定
`src/utils/profileDisplay.ts`の`PROFILE_DISPLAY_CONFIG`を編集することで、表示内容を制御できます。

```typescript
export const PROFILE_DISPLAY_CONFIG = {
  basicInfo: {
    showFullBirthday: false,    // 誕生日を完全表示するか
    showGender: false,          // 性別を表示するか
    showNationality: false,     // 国籍を表示するか
  },
  career: {
    showSpecificOrganization: false, // 具体的な会社名を表示するか
    showSpecificDepartment: false,   // 具体的な部署名を表示するか
  },
  socialLinks: {
    showTwitter: true,          // Twitterリンクを表示するか
    showWantedly: false,        // Wantedlyリンクを表示するか
  },
  certifications: {
    showPersonalAchievements: false, // 個人特定しやすい実績を表示するか
    showUrls: false,            // 資格のURLを表示するか
  }
};
```

### 2. プロフィールデータの設定
1. `profile.sample.json`をコピーして`profile.json`を作成
2. 実際のプロフィール情報を入力
3. 表示制御設定を調整

## セキュリティ対策

### 1. Gitignore設定
`profile.json`は`.gitignore`に追加済みのため、Gitにコミットされません。

### 2. 表示制御
- 具体的な会社名・学校名 → 一般的な分類名に変換
- 完全な誕生日 → 年のみ表示
- 個人特定しやすい情報 → 非表示または一般化

### 3. 推奨設定
本番環境では以下の設定を推奨します：
- `showFullBirthday: false`
- `showGender: false`
- `showNationality: false`
- `showSpecificOrganization: false`
- `showPersonalAchievements: false`

## 使用方法

各ページコンポーネントでは以下のように使用：

```typescript
import profileDataRaw from './profile.json';
import { transformProfileForDisplay } from '../utils/profileDisplay';

function MyComponent() {
  const profileData = transformProfileForDisplay(profileDataRaw);
  // プロファイルデータを使用
}
```

## カスタマイズ

### 新しい表示制御を追加
1. `PROFILE_DISPLAY_CONFIG`に新しい設定項目を追加
2. `transformProfileForDisplay`関数に変換ロジックを追加
3. 必要に応じて型定義を更新

### 表示パターンの追加
現在は「表示/非表示」の制御ですが、複数の表示パターン（詳細/簡潔/匿名など）にも対応可能です。
