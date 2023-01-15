import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'

export default defineConfig({
  themeConfig: {
    sidebar: {
      '/': [
        { text: '快速开始', items: [] },
        {
          text: '通用',
          items: [{ text: 'Button 按钮', link: '/components/button/' }],
        },
        { text: '导航', items: [] },
        { text: '反馈', items: [] },
        {
          text: '数据录入',
          items: [],
        },
        {
          text: '数据展示',
          items: [],
        },
        {
          text: '布局',
          items: [],
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
