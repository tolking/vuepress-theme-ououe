module.exports = {
  base: '/vuepress-theme-ououe/',
  title: 'vuepress-theme-ououe',
  description: 'A blog theme for VuePress',
  dest: 'dist/',
  evergreen: true,
  theme: 'default-prefers-color-scheme',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' }],
    ['meta', { name: 'renderer', content: 'webkit' }],
    ['meta', { name: 'force-rendering', content: 'webkit' }],
    ['meta', { name: 'applicable-device', content: 'pc,mobile' }],
    ['meta', { name: 'author', content: 'tolking <w13131wang@gmail.com>' }]
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'vuepress-theme-ououe',
      description: 'A blog theme for VuePress'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'vuepress-theme-ououe',
      description: '为 vuepress 制作的一款主题'
    }
  },
  themeConfig: {
    repo: 'tolking/vuepress-theme-ououe',
    docsDir: 'docs',
    editLinks: true,
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: [
          { text: 'Guide', link: '/guide/' },
          { text: 'Plugin', link: '/plugin/' }
        ],
        sidebar: {
          '/guide/': [
            '',
            'use',
            'options'
          ],
          '/plugin/': [
            '',
            ['blog-multidir', 'blog-multidir'],
            ['img-lazy', 'img-lazy'],
            ['reading-progress', 'reading-progress']
          ]
        }
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '最后更新时间',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        nav: [
          { text: '指南', link: '/zh/guide/' },
          { text: '插件', link: '/zh/plugin/' }
        ],
        sidebar: {
          '/zh/guide/': [
            ['', '介绍'],
            ['use', '使用'],
            ['options', '配置']
          ],
          '/zh/plugin/': [
            ['', '插件'],
            ['blog-multidir', 'blog-multidir'],
            ['img-lazy', 'img-lazy'],
            ['reading-progress', 'reading-progress']
          ]
        }
      }
    }
  },
  plugins: [
    'img-lazy',
    'reading-progress'
  ]
}
