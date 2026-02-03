# VitePressドキュメントをGitHub Pagesで公開する方法

## 概要

VitePressで作成したドキュメントをGitHub Pagesで公開する方法について調査しました。`document_template-main`を参考に、GitLab PagesからGitHub Pagesへの移行手順をまとめています。

## 前提条件

- Node.js 20以上
- GitHubリポジトリ
- VitePressプロジェクト（`docs/`ディレクトリ構成）

---

## 設定手順

### 1. VitePress設定の修正

`docs/.vitepress/config.mts`の`base`オプションを設定します。

```typescript
export default {
  // GitHub Pagesのサブパス配信の場合
  // https://<username>.github.io/<repository>/
  base: '/<repository>/',
  
  // または、カスタムドメインやルート配信の場合
  // base: '/',
}
```

> [!IMPORTANT]
> `base`設定はデプロイ先のURL構造に合わせる必要があります。
> - **サブドメイン配信**（`https://username.github.io/`）→ `base: '/'`
> - **サブパス配信**（`https://username.github.io/repo-name/`）→ `base: '/repo-name/'`

---

### 2. GitHub Actionsワークフローの作成

プロジェクトルートに`.github/workflows/deploy.yml`を作成します。

```yaml
# VitePressサイトをGitHub Pagesにビルド・デプロイするワークフロー
name: Deploy VitePress site to Pages

on:
  # mainブランチへのプッシュで実行
  push:
    branches: [main]
  
  # Actionsタブから手動実行も可能
  workflow_dispatch:

# GitHub Pagesへのデプロイ権限を設定
permissions:
  contents: read
  pages: write
  id-token: write

# 同時デプロイを1つに制限（進行中のデプロイはキャンセルしない）
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # ビルドジョブ
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v5
        with:
          fetch-depth: 0 # lastUpdatedを有効にする場合は必要

      - name: Setup Node
        uses: actions/setup-node@v6
        with:
          node-version: 20
          cache: npm

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Install dependencies
        run: npm ci

      - name: Build with VitePress
        run: npm run docs:build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  # デプロイジョブ
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

### 3. GitHubリポジトリの設定

1. リポジトリの **Settings** を開く
2. 左メニューから **Pages** を選択
3. **Build and deployment > Source** で **GitHub Actions** を選択

![GitHub Pages設定](https://docs.github.com/assets/cb-settings-pages-source.webp)

---

### 4. デプロイの実行

1. 上記の設定をコミットしてmainブランチにプッシュ
2. GitHub Actionsが自動実行される
3. 完了後、以下のURLでサイトにアクセス可能：
   - `https://<username>.github.io/<repository>/`
   - またはカスタムドメイン

---

## document_template-mainからの移行ポイント

### 現在のGitLab CI設定との比較

| 項目 | GitLab CI | GitHub Actions |
|-----|-----------|----------------|
| 設定ファイル | `.gitlab-ci.yml` | `.github/workflows/deploy.yml` |
| ビルド出力 | `public`に移動 | `docs/.vitepress/dist`を直接アップロード |
| Node.js | `node:20` イメージ | `actions/setup-node@v6` |
| デプロイ先 | GitLab Pages | GitHub Pages |

### 変更が必要なファイル

1. **新規作成**: `.github/workflows/deploy.yml`
2. **修正**: `docs/.vitepress/config.mts`の`base`オプション
3. **削除可能**: `.gitlab-ci.yml`（GitHub移行後）

---

## 注意事項

> [!WARNING]
> **HTML自動圧縮を無効にする**
> 
> GitHub PagesやCDNでHTML自動圧縮を有効にすると、Vueのコメントが削除されてハイドレーションエラーが発生する可能性があります。

> [!TIP]
> **ローカルでの確認**
> 
> ビルド後にローカルでプレビューして確認することを推奨します：
> ```bash
> npm run docs:build
> npm run docs:preview
> # http://localhost:4173 でアクセス
> ```

---

## 参考リンク

- [VitePress公式ドキュメント - Deploy](https://vitepress.dev/guide/deploy#github-pages)
- [GitHub Pages ドキュメント](https://docs.github.com/ja/pages)
- [GitHub Actions ドキュメント](https://docs.github.com/ja/actions)
