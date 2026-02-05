import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid({
  base: '/vitepress-github-pages-demo/',
  title: 'GitHub Pages ナレッジ',
  description: 'VitePressドキュメントをGitHub Pagesで公開するための技術資料',
  themeConfig: {
    search: {
      provider: 'local'
    }
  },
  locales: {
    root: {
      label: '日本語',
      lang: 'ja-JP',
      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/' },
          { text: '調査', link: '/research/' }
        ],
        sidebar: {
          '/research/': [
            {
              text: '調査ドキュメント',
              items: [
                { text: '概要', link: '/research/' },
                { text: 'VitePress × GitHub Pages', link: '/research/vitepress-github-pages' }
              ]
            }
          ]
        }
      }
    }
  },
  mermaid: {
    // Mermaid config
  }
})
