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
        text: 'Windows',
        items: [
          { text: 'PHP (WSL 2)', link: '/windows/php-wsl2' },
        ],
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vintagesucks/wiki' }
    ],

    editLink: {
      pattern: 'https://github.com/vintagesucks/wiki/edit/main/:path'
    },
  },
  srcExclude: [
    'README.md'
  ],
})
