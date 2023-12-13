import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "小G的成长之路",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/favicon.ico",
    nav: [
      { text: "首页", link: "/" },
      { text: "关于我", link: "/aboutme" },
      {
        text: "开发",
        items: [
          { text: "前端", link: "/frontend/index" },
          { text: "后端", link: "/backend/" },
        ],
      },
      { text: "运维", link: "/markdown-examples/index" },
      { text: "网络安全", link: "/network-security/index" },
      { text: "AI", link: "/AI/indedx" },
      { text: "UI/UX", link: "/UI-UX" },
      { text: "考研408", link: "/408" },
      {
        text: "小笔记",
        items: [
          { text: "实用小技巧", link: "/tips" },
          { text: "Bug以及解决方案", link: "/solutions" },
          { text: "博客方案", link: "/Blog" },
          { text: "读书笔记", link: "/Reading" },
          { text: "导航资源", link: "/navigator" },
        ],
      }
    ],

    sidebar: {
      // This sidebar gets displayed when a user
      // is on `guide` directory.
      '/': [
        {
          text: '关于我',
          items: [
            { text: 'Index', link: '/guide/' },
            { text: 'One', link: '/guide/one' },
            { text: 'Two', link: '/guide/two' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `config` directory.
      '/backend/': [
        {
          text: 'Config',
          items: [
            { text: 'Java', link: '/backend/' },
            { text: 'Python', link: '/backend/Python' },
            { text: 'C#', link: '/backend/C#' },
            { text: 'Qt', link: '/backend/Qt' }
          ]
        }
      ]
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Chowhound-G'
    },
    socialLinks: [{ icon: "github", link: "https://github.com/Chowhound-G/" }],
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    search: {
      provider: 'local'
    }
  },
  lastUpdated: true
});
