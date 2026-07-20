import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "我的技术博客",
  description: "个人技术笔记 / 学习记录",
  lang: 'zh-CN',
  base: '/',
  lastUpdated: true,
  cleanUrls: false,

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
  ],

  themeConfig: {
    logo: '/favicon.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '标签', link: '/tags' },
      { text: '归档', link: '/archives' },
      {
        text: '关于',
        items: [
          { text: '关于我', link: '/about' },
          { text: 'Markdown 语法', link: '/markdown-guide' },
        ],
      },
    ],

    sidebar: [
      {
        text: '前端',
        collapsed: false,
        items: [
          { text: 'TypeScript 基础类型', link: '/前端/TypeScript/基础类型' },
          { text: 'TypeScript 接口与类型', link: '/前端/TypeScript/接口与类型' },
        ],
      },
      {
        text: '后端',
        collapsed: false,
        items: [
          { text: 'Python 入门', link: '/后端/Python/Python入门' },
        ],
      },
      {
        text: 'AI',
        collapsed: false,
        items: [
          { text: 'AI 笔记', link: '/AI/AI笔记' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Flowers' },
    ],

    search: {
      provider: 'local',
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    editLink: {
      pattern: 'https://github.com/Flowers/blog/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    outline: {
      label: '页面导航',
    },

    lastUpdated: {
      text: '最后更新',
    },
  },
})