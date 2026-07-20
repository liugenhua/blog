import { defineConfig } from 'vitepress'
import { readdirSync, statSync } from 'fs'
import { join, sep } from 'path'

// Auto-generate sidebar from docs directory structure
function generateSidebar(docsDir) {
  const sidebar = []
  const items = readdirSync(docsDir, { withFileTypes: true })
  for (const item of items.sort()) {
    if (!item.isDirectory() || item.name.startsWith('.')) continue
    const dirPath = join(docsDir, item.name)
    const files = readdirSync(dirPath)
      .filter(f => f.endsWith('.md') && f !== 'index.md')
      .sort()
      .map(f => ({
        text: f.replace(/\.md$/, ''),
        link: '/' + item.name + '/' + f.replace(/\.md$/, ''),
      }))
    if (files.length > 0) {
      sidebar.push({
        text: item.name,
        collapsed: false,
        items: files,
      })
    }
  }
  return sidebar
}

export default defineConfig({
  title: '我的技术博客',
  description: '个人技术笔记 / 学习记录',
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

    sidebar: generateSidebar(join(__dirname, '..')),

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