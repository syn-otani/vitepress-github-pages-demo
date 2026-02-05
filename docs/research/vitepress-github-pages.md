# VitePressドキュメントをGitHub Pagesで公開する方法

## 概要

VitePressで作成したドキュメントをGitHub Pagesで公開する方法を、実際の構築手順に基づいて解説します。

**デモサイト**: https://syn-otani.github.io/vitepress-github-pages-demo/

## 前提条件

- Node.js 20以上
- GitHubアカウント
- VitePressプロジェクト（`docs/`ディレクトリ構成）

---

## Step 1: GitHubリポジトリの作成

1. GitHubにログイン
2. 「**New**」ボタンをクリック
3. リポジトリ名を入力（例: `vitepress-github-pages-demo`）
4. 「**Public**」を選択
5. README、.gitignore、ライセンスは**追加しない**
6. 「**Create repository**」をクリック

---

## Step 2: GitHub Actionsワークフローの作成

プロジェクトルートに`.github/workflows/deploy.yml`を作成します。

```yaml
name: Deploy VitePress site to Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v5
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - uses: actions/configure-pages@v4
      - run: npm ci
      - run: npm run docs:build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

---

## Step 3: VitePress base設定の修正

`docs/.vitepress/config.mts`の`base`オプションをリポジトリ名に設定します。

```typescript
export default {
  base: '/vitepress-github-pages-demo/',
  // ...
}
```

> [!IMPORTANT]
> `base`設定はデプロイ先のURL構造に合わせる必要があります。
> - **ルート配信**（`https://username.github.io/`）→ `base: '/'`
> - **サブパス配信**（`https://username.github.io/repo-name/`）→ `base: '/repo-name/'`

---

## Step 4: Gitコマンドでプッシュ

```bash
# リポジトリ初期化
git init -b main

# ファイルをステージング
git add .

# コミット
git commit -m "Initial commit: VitePress documentation with GitHub Pages deployment"

# リモート追加
git remote add origin https://github.com/<username>/<repository>.git

# プッシュ
git push -u origin main
```

---

## Step 5: GitHub Pagesの設定

### 5.1 初回ワークフローの失敗

初回プッシュ後、ワークフローが失敗します。これはPagesの設定がまだ完了していないためです。

### 5.2 Pagesのソース設定

1. リポジトリの **Settings** を開く
2. 左メニューから **Pages** を選択
3. **Build and deployment > Source** で **GitHub Actions** を選択

### 5.3 ワークフロー再実行

1. リポジトリの **Actions** タブを開く
2. 失敗したワークフローをクリック
3. **Re-run jobs** > **Re-run all jobs** をクリック

---

## Step 6: 動作確認

### 公開URL

```
https://<username>.github.io/<repository>/
```

今回の例: https://syn-otani.github.io/vitepress-github-pages-demo/

---

## まとめ

| ステップ | 内容 |
|---------|------|
| 1 | GitHubで空のPublicリポジトリを作成 |
| 2 | `.github/workflows/deploy.yml`を作成 |
| 3 | VitePressの`base`をリポジトリ名に設定 |
| 4 | コードをGitHubにプッシュ |
| 5 | Settings > Pagesでソースを「GitHub Actions」に変更 |
| 6 | ワークフローを再実行してデプロイ完了 |

> [!TIP]
> 初回デプロイ時はPages設定前にワークフローが失敗しますが、設定後に再実行すれば正常にデプロイされます。

---

## 参考リンク

- [VitePress公式ドキュメント - Deploy](https://vitepress.dev/guide/deploy#github-pages)
- [GitHub Pages ドキュメント](https://docs.github.com/ja/pages)
- [GitHub Actions ドキュメント](https://docs.github.com/ja/actions)
