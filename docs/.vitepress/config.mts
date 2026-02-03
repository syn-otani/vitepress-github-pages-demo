import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid({
  base: '/vitepress-github-pages-demo/',
  title: 'ドキュメントテンプレート',
  description: '要件定義・設計ドキュメント',
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
        editLink: {
          pattern: 'https://gitlab.ethan-tech.jp/bakekan/bakekan_documents/-/edit/main/docs/:path',
          text: 'このページを編集'
        },
        nav: [
          { text: 'ホーム', link: '/' },
          { text: '要件定義', link: '/requirements/' },
          { text: '画面設計', link: '/screens/' },
          { text: 'DB設計', link: '/data/' },
          { text: 'インフラ設計', link: '/infrastructure/' },
          { text: '調査', link: '/research/' }
        ],
        sidebar: {
          '/requirements/': [
            {
              text: '要件定義',
              items: [
                { text: '概要', link: '/requirements/' },
                { text: '機能一覧', link: '/requirements/features' }
              ]
            }
          ],
          '/screens/': [
            {
              text: '画面設計',
              items: [
                { text: '概要', link: '/screens/' },
                { text: '製品検索', link: '/screens/product-search' },
                { text: '作業場検索（管理者）', link: '/screens/workplace-manager' },
                { text: '作業場検索（法律）', link: '/screens/workplace-law' },
                { text: '作業場検索（掲示物）', link: '/screens/workplace-notice' }
              ]
            }
          ],
          '/data/': [
            {
              text: 'DB設計',
              items: [
                { text: '概要', link: '/data/' },
                { text: 'SDS情報', link: '/data/sds-data' },
                { text: 'CAS情報', link: '/data/cas-data' },
                { text: '作業場所', link: '/data/workarea' },
                { text: '作業場拡張データ', link: '/data/workarea-ex' },
                { text: 'ユーザ権限', link: '/data/user-permission' }
              ]
            }
          ],
          '/infrastructure/': [
            {
              text: 'インフラ設計',
              items: [
                { text: '概要', link: '/infrastructure/' }
              ]
            }
          ],
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
    },
    vi: {
      label: 'Tiếng Việt',
      lang: 'vi-VN',
      link: '/vi/',
      themeConfig: {
        editLink: {
          pattern: 'https://gitlab.ethan-tech.jp/bakekan/bakekan_documents/-/edit/main/docs/:path',
          text: 'Chỉnh sửa trang này'
        },
        nav: [
          { text: 'Trang chủ', link: '/vi/' },
          { text: 'Yêu cầu', link: '/vi/requirements/' },
          { text: 'Thiết kế màn hình', link: '/vi/screens/' },
          { text: 'Thiết kế DB', link: '/vi/data/' }
        ],
        sidebar: {
          '/vi/requirements/': [
            {
              text: 'Yêu cầu',
              items: [
                { text: 'Tổng quan', link: '/vi/requirements/' },
                { text: 'Danh sách chức năng', link: '/vi/requirements/features' }
              ]
            }
          ],
          '/vi/screens/': [
            {
              text: 'Thiết kế màn hình',
              items: [
                { text: 'Tổng quan', link: '/vi/screens/' },
                { text: 'Tìm kiếm sản phẩm', link: '/vi/screens/product-search' },
                { text: 'Tìm kiếm nơi làm việc (Quản lý)', link: '/vi/screens/workplace-manager' },
                { text: 'Tìm kiếm nơi làm việc (Pháp luật)', link: '/vi/screens/workplace-law' },
                { text: 'Tìm kiếm nơi làm việc (Thông báo)', link: '/vi/screens/workplace-notice' }
              ]
            }
          ],
          '/vi/data/': [
            {
              text: 'Thiết kế DB',
              items: [
                { text: 'Tổng quan', link: '/vi/data/' },
                { text: 'SDS情報', link: '/vi/data/sds-data' },
                { text: 'CAS情報', link: '/vi/data/cas-data' },
                { text: '作業場所', link: '/vi/data/workarea' },
                { text: '作業場拡張データ', link: '/vi/data/workarea-ex' },
                { text: 'ユーザ権限', link: '/vi/data/user-permission' }
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
