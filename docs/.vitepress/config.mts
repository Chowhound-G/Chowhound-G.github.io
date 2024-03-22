import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "小G的成长之路",
  description: "A VitePress Site",
  head: [
    // 配置站点的favicon，将favicon.ico文件放在public文件夹下
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // 配置其他头部元数据
    // ...
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "关于我", link: "/aboutme" },
      {
        text: "开发",
        items: [
          { text: "前端", link: "/frontend/" },
          { text: "后端", link: "/backend/" },
        ],
      },
      { text: "运维", link: "/devops/" },
      { text: "网络安全", link: "/network-security/" },
      { text: "AI", link: "/AI/" },
      { text: "UI/UX", link: "/UI-UX" },
      { text: "数据库", link: "/database" },
      { text: "考研408", items: [
        { text: "考研数学", link: "/408/math" },
        { text: "英语", link: "/408/English" },
        { text: "数据结构和算法", link: "/408/DS" },
        { text: "操作系统", link: "/408/OS" },
        { text: "计算机网络", link: "/408/network" },
        { text: "计算机组成原理", link: "/408/compositon" },
      ],},
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
   

      // This sidebar gets displayed when a user
      // is on `config` directory.
      
      '/frontend/': [
        {
          text: '前端开发',
          items: [
            { text: 'Internet', link: '/frontend/internet' },
            { text: 'Html', link: '/frontend/html' },
            { text: 'Css', link: '/frontend/css' },
            { text: 'Javascript', link: '/frontend/javascript' },
            { text: 'Typescript', link: '/frontend/typescript' },
            { text: 'Node.js', link: '/frontend/node' },
            { text: 'Vue', link: '/frontend/vue' },
            { text: 'Nuxt.js', link: '/frontend/nuxt' },
            { text: 'React', link: '/frontend/react' },
            { text: 'Next.js', link: '/frontend/next' },
            { text: 'Svelte', link: '/frontend/svelte' },
            { text: 'Uniapp', link: '/frontend/uniapp' },
            { text: 'webgl', link: '/frontend/webgl' },
            { text: 'three.js', link: '/frontend/three' },
            { text: 'GraphQL', link: '/frontend/graphql' },
            { text: 'Flutter', link: '/frontend/flutter' },
            { text: 'ReactNative', link: '/frontend/reactnative' },
            { text: 'Electron', link: '/frontend/electron' },
            { text: 'Progressive Web Apps', link: '/frontend/pwa' },
            { text: '项目', link: '/frontend/projects' },
          ]
        }
      ],
      '/backend/': [
        {
          text: '后端开发',
          items: [
            { text: 'Java', link: '/backend/java' },
            { text: 'Python', link: '/backend/python' },
            { text: 'PHP', link: '/backend/php' },
            { text: 'C#', link: '/backend/Csharp' },
            { text: 'C++', link: '/backend/C++' },
            { text: 'Go', link: '/backend/go' },
            { text: 'Ruby', link: '/backend/ruby' },
            { text: 'Rust', link: '/backend/rust' },
            { text: '数据库', link: '/backend/database' },
            { text: '数据库扩展', link: '/backend/scalingDatabase' },
            { text: '认证', link: '/backend/authentication' },
            { text: '消息代理', link: '/backend/messagebroker' },
            { text: '搜索引擎', link: '/backend/searchEngine' },
            { text: '架构模式', link: '/backend/architecturialPattern' },
            { text: 'Web服务器', link: '/backend/webServer' },
            { text: '网络安全', link: '/backend/webSecurity' },
            { text: 'CI/CD', link: '/backend/CICD' },
            { text: '测试', link: '/backend/testing' },
            { text: '规模构建', link: '/backend/BuildingforScale' },
          ]
        }
      ],
      '/408/': [
        {
          text: '考研408',
          items: [
            { text: '数学', link: '/408/' },
            { text: '英语', link: '/408/English' },
            { text: '数据结构', link: '/408/DS' },
            { text: '操作系统', link: '/408/OS' },
            { text: '计算机网络', link: '/408/network' },
            { text: '计算机组成原理', link: '/408/composition' }
          ]
        }
      ],
      '/devops/': [
        {
          text: '运维',
          items: [            
            { text: '网络', link: '/devops/network' },
            { text: '操作系统', link: '/devops/OS' },
            { text: '脚本语言', link: '/devops/script' },
            { text: '终端', link: '/devops/Terminal' },
            { text: '容器', link: '/devops/container' },
            { text: '日志', link: '/devops/LogManagement' },
            { text: '自动化工具', link: '/devops/configurationManagement' },
            { text: 'CI/CD', link: '/devops/CICD' },
            { text: '云计算', link: '/devops/cloud' },
            { text: '云服务', link: '/devops/servless' }, 
          ]
        }
      ]
    },
    footer: {
      copyright: 'Copyright © 2023-present Chowhound-G'
    },
    socialLinks: [{ icon: "github", link: "https://github.com/Chowhound-G/" }],
    lastUpdated: {
      text: '更新于',
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
