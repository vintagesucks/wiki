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
      { text: 'Wiki', link: '/introduction/' }
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Wiki',
        items: [
          { text: 'Introduction', link: '/introduction/' },
        ]
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
