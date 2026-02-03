# Project Instructions

## リポジトリの目的

このリポジトリは化学物質管理システムの**設計フェーズ**を管理します。

- 設計ドキュメント
- HTMLモックアップ
- DB定義

実装は別リポジトリで行います。

## 開発フロー

1. 要件を確認しながらドキュメントを作成
2. デザインができたらHTMLモックアップを作成
3. モックアップ確定後、別リポジトリで開発

## ディレクトリ構造

- `docs/` - 設計ドキュメント（VitePress）
- `works/` - 作業用（キャプチャ、デザイン素材など）※git管理対象外
- `src/html/` - HTMLモックアップ
- `src/assets/scss/` - スタイル（SCSS）
- `src/assets/js/` - JavaScript

## コマンド

```bash
# モックアップ開発サーバー起動
npm run dev

# モックアップビルド
npm run build

# ドキュメント開発サーバー起動
npm run docs:dev

# ドキュメントビルド
npm run docs:build

# ドキュメントプレビュー
npm run docs:preview
```

## スクリーンショット取得

playwrightを使用してスクリーンショットを取得できます。

```bash
# 基本コマンド
npx --yes playwright screenshot --viewport-size=1920,1080 --full-page "<URL>" <出力ファイル>

# 例: VitePressプレビューのスクリーンショット
npx --yes playwright screenshot --viewport-size=1920,1080 --full-page "http://localhost:4173/screens/product-search.html" works/product-search.png

# 例: HTMLモックアップのスクリーンショット
npx --yes playwright screenshot --viewport-size=1920,1080 --full-page "file://${PWD}/dist/chemicals/product-search.html" works/product-search.png
```

## VitePressカスタマイズ

### テーマファイル構成

```
docs/.vitepress/theme/
├── index.js      # テーマエントリ
└── custom.css    # カスタムCSS
```

### カスタマイズ方法

`docs/.vitepress/theme/index.js` でデフォルトテーマを拡張:

```javascript
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  // setup() でVueの機能を追加可能
}
```

### CSS変数

`docs/.vitepress/theme/custom.css` でCSS変数をオーバーライド:

```css
:root {
  --vp-layout-max-width: 100%;    /* レイアウト最大幅 */
  --vp-sidebar-width: 272px;       /* サイドバー幅 */
  --vp-nav-height: 64px;           /* ナビバー高さ */
}

/* コンテンツ幅を100%に */
.VPDoc .content-container {
  max-width: 100% !important;
}
```

### 参考

- [VitePressカスタムテーマ](https://vitepress.dev/ja/guide/custom-theme)
- [デフォルトテーマ拡張](https://vitepress.dev/ja/guide/extending-default-theme)

## HTMLモックアップ新規作成手順

### ファイル作成

1. `src/html/{theme}/` 配下に新しいHTMLファイルを作成（既存ページをコピー推奨）
2. `@@include` で共通パーツを読み込む（gulp-file-include構文）
3. `partials/chem-sidebar.html` に新ページへのナビゲーションリンクを追加

### テンプレート構造

```html
<!doctype html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <title>{ページタイトル} | {システム名}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="assets/images/favicon.ico">
    <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css">
    <link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="assets/css/app.min.css" rel="stylesheet" type="text/css">
    <link href="assets/css/custom.min.css" rel="stylesheet" type="text/css">
</head>
<body>
<div class="chem-container">
    @@include("partials/chem-header.html")
    <div class="chem-body">
        @@include("partials/chem-sidebar.html", {"activePage": "new-page"})
        <div class="chem-main">
            <div class="page-title-box">
                <h4 class="mb-0">{ページタイトル}</h4>
            </div>
            <!-- ページ固有のコンテンツ -->
        </div>
    </div>
    @@include("partials/chem-footer.html")
</div>
</body>
</html>
```

### 利用可能な共通パーツ（partials）

| ファイル | 用途 |
|---------|------|
| `chem-header.html` | ヘッダー |
| `chem-sidebar.html` | サイドバー（`activePage` パラメータでアクティブ項目を指定） |
| `chem-footer.html` | フッター |
| `head-css.html` | CSS読み込み（他テーマ用） |
| `vendor-scripts.html` | 外部スクリプト読み込み（他テーマ用） |

### include構文

```html
<!-- パラメータなし -->
@@include("partials/chem-header.html")

<!-- パラメータ付き（JSONで渡す） -->
@@include("partials/chem-sidebar.html", {"activePage": "product-search"})
```

### プレビュー

```bash
npm run dev    # ライブリロード付き開発サーバー起動
```

ファイル保存時にブラウザが自動リロードされます。

## GitLab Pages

mainブランチへのプッシュで `.gitlab-ci.yml` のパイプラインが自動実行され、VitePressドキュメントがGitLab Pagesに公開される。

### デプロイの流れ

1. `npm ci` - 依存関係インストール
2. `npm run docs:build` - VitePressビルド
3. `docs/.vitepress/dist` → `public` に移動
4. GitLab Pagesとして公開

### base設定

`docs/.vitepress/config.mts` の `base` はデプロイ先のURL構造に合わせる。

- サブドメイン配信（`https://xxx.pages.gitlab.ethan-tech.jp/`）→ `base: '/'`
- サブパス配信（`https://xxx.pages.gitlab.ethan-tech.jp/repo-name/`）→ `base: '/repo-name/'`

`base` を変更した場合、ローカルプレビューのURLも変わるため注意。

## 注意事項

### Gulp 5.0でのバイナリファイルコピー

Gulp 5.0ではデフォルトでファイルがUTF-8テキストとして処理されるため、フォントなどのバイナリファイルをコピーする際は `{ encoding: false }` オプションが必要です。

```javascript
gulp.src(['./src/assets/**/*'], { encoding: false })
    .pipe(gulp.dest(destPath));
```

### VitePressプレビュー

`npm run docs:build` 後にプレビューを確認する場合、**ビルド後は毎回プレビューサーバーを再起動**する必要があります。
使
```bash
npm run docs:build
pkill -f "vitepress"
npm run docs:preview
```

### Markdownでのパス記述

アンダーバー（`_`）を含むパスはMarkdownでイタリック記号として解釈されるため、バッククォートで囲んでください。

```markdown
# NG: アンダーバーが消える
storage/sds/sds/[SDS_data!SDS_NAME]_[SDS_data!SDS_CoNAME].pdf

# OK: バッククォートで囲む
`storage/sds/sds/[SDS_data!SDS_NAME]_[SDS_data!SDS_CoNAME].pdf`
```

## 多言語対応

設計ドキュメントは日本語とベトナム語の2言語で管理しています。

- `docs/` - 日本語
- `docs/vi/` - ベトナム語

日本語ドキュメントを更新した場合は、対応するベトナム語ドキュメントも更新してください。
