import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/wiki/',
  title: "vintagesucks/wiki",
  description: "Personal knowledge base of vintagesucks",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Wiki', link: '/introduction/' },
      { text: 'PPA', link: 'https://vintagesucks.github.io/ppa/' },
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Wiki',
        items: [
          { text: 'Introduction', link: '/introduction/' },
        ],
      },
      {
        text: 'macOS',
        items: [
          { text: 'Homebrew', link: '/macos/homebrew' },
          { text: 'Tools', link: '/macos/tools' },
        ],
      },
      {
        text: 'Windows',
        items: [
          { text: 'WinGet', link: '/windows/winget' },
          { text: 'Scoop', link: '/windows/scoop' },
          { text: 'C', link: '/windows/c' },
          { text: 'PHP', link: '/windows/php-laravel-herd' },
          { text: 'Tools', link: '/windows/tools' },
        ],
      },
      {
        text: 'Tools',
        items: [
          { text: 'VS Code', link: '/tools/vscode' },
        ],
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vintagesucks/wiki' }
    ],

    editLink: {
      pattern: 'https://github.com/vintagesucks/wiki/edit/main/:path'
    },

    lastUpdated: true,
  },
  srcExclude: [
    'README.md'
  ],
})
