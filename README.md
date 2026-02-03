# {プロジェクト名}

{プロジェクトの概要を記載}

## プロジェクト構造

```
project/
├── docs/                # VitePress ドキュメント（要件定義・設計書）
│   ├── public/          # 画像などの静的ファイル
│   ├── requirements/    # 要件定義
│   ├── screens/         # 画面設計
│   ├── database/        # DB設計
│   └── infrastructure/  # インフラ・デプロイ手順
├── src/                 # モックアップソース
│   ├── html/            # HTMLモックアップ
│   └── assets/          # SCSS / JS / 画像 / フォント
├── dist/                # ビルド出力（git管理外）
└── works/               # 作業用ディレクトリ（git管理外）
```

## セットアップ

```bash
# 依存関係インストール
npm install
```

## ドキュメント（VitePress）

```bash
# 開発サーバー起動
npm run docs:dev

# ビルド
npm run docs:build

# ビルド結果プレビュー
npm run docs:preview
```

## HTMLモックアップ（Gulp）

```bash
# 開発サーバー起動（ライブリロード付き）
npm run dev

# ビルド
npm run build

# 最小ビルド（選択テーマのみ）
npm run build:minimal
```

## テーマ設定（theme-config.json）

`theme-config.json` でビルド・開発サーバー対象のテーマを指定します。

```json
{
    "run": "chemicals",   // dev サーバーで起動するテーマ
    "demos": [            // ビルド対象テーマ一覧
        "chemicals"
    ]
}
```

- **`run`** - `npm run dev` で起動するテーマ名（`src/html/{テーマ名}/` に対応）
- **`demos`** - `npm run build` でビルドするテーマの配列（複数指定可）
- 全テーマをビルドする場合は `theme-config-all.json` の内容に差し替え

## HTMLモックアップ新規作成

```
src/html/{theme}/
├── new-page.html              # ページ本体（既存ページをコピーして作成）
└── partials/                  # 共通パーツ（@@include で読み込み）
    ├── chem-header.html       # ヘッダー
    ├── chem-sidebar.html      # サイドバー（新ページのリンクを追加）
    └── chem-footer.html       # フッター
```

```
src/assets/
├── scss/
│   ├── config/{theme}/            # テーマ別設定
│   │   ├── app.scss               # メインスタイル（エントリポイント）
│   │   ├── bootstrap.scss         # Bootstrap カスタマイズ
│   │   ├── custom.scss            # プロジェクト固有スタイル ← 主にここを編集
│   │   ├── _variables.scss        # Bootstrap 変数オーバーライド
│   │   ├── _variables-custom.scss # カスタム変数
│   │   └── _variables-dark.scss   # ダークモード変数
│   ├── components/                # 共通コンポーネントスタイル
│   ├── structure/                 # レイアウト構造
│   ├── plugins/                   # プラグイン用スタイル
│   └── pages/                     # ページ固有スタイル
├── js/                            # JavaScript
├── fonts/                         # Webフォント（Remix / Box / Material）
└── images/                        # 画像アセット
```

- テーマ固有のスタイルは `scss/config/{theme}/custom.scss` に追加
- Bootstrap変数の上書きは `_variables.scss` で行う
- 共通コンポーネントのスタイルは `scss/components/` に配置

既存ページをコピーし、`npm run dev` でライブリロード確認しながら編集します。
テンプレート構造の詳細は `CLAUDE.md` を参照してください。

## GitLab Pages

mainブランチへのプッシュで自動的にCI/CDパイプラインが実行され、VitePressドキュメントがGitLab Pagesに公開されます。

- **公開URL**: `https://{namespace}-{hash}.pages.gitlab.ethan-tech.jp/`
- **CI/CD設定**: `.gitlab-ci.yml`
- **VitePress base設定**: `docs/.vitepress/config.mts` の `base` をデプロイ先に合わせて設定
  - サブドメイン配信（`https://xxx.pages.gitlab.ethan-tech.jp/`）の場合: `base: '/'`
  - サブパス配信（`https://xxx.pages.gitlab.ethan-tech.jp/repo-name/`）の場合: `base: '/repo-name/'`

## 画面一覧

| 画面名 | モックアップ | 設計書 |
|--------|-------------|--------|
| {画面名} | `src/html/{theme}/{page}.html` | `docs/screens/{page}.md` |

## テーブル一覧

| テーブル名 | 設計書 |
|-----------|--------|
| {テーブル名} | `docs/data/{table}.md` |