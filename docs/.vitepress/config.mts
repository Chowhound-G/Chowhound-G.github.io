import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "小G的成长之路",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/markdown-examples' },
      { text: '后端', link: '/markdown-examples' },
      { text: '运维', link: '/markdown-examples' },
      { text: '网络安全', link: '/markdown-examples' },
      { text: 'AI', link: '/markdown-examples' },
      { text: 'UI/UX', link: '/markdown-examples' },
      { text: '考研408', link: '/markdown-examples' },
      { text: '实用小技巧', link: '/markdown-examples' },
      { text: 'Bug以及解决方案', link: '/markdown-examples' },
      { text: '博客方案', link: '/markdown-examples' },
      { text: '读书笔记', link: '/markdown-examples' },
      { text: '导航资源', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Chowhound-G/' }
    ]
  }
})
