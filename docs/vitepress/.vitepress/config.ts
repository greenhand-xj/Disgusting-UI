import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'

export default defineConfig({
  title: 'Disgusting-UI',
  description: '一个基于 Vue3+TSX+Tailwind的一个小组件库.',
  // base: '/',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],

  themeConfig: {
    logo: '/logo.svg',
    // nav
    nav: [{ text: '文档', link: ' /guide/getting-started' }],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/greenhand-xj/Disgusting-UI' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指引',
          collapsible: false,
          items: [{ text: 'quick-start', link: '/guide/getting-started' }],
        },
        {
          text: '组件',
          collapsible: true,
          items: [{ text: 'button', link: '/guide/components/button' }],
        },
      ],
    },
  },
  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(demoBlockPlugin)
    },
  },
})
