import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/wiki/',
  title: "vintagesucks/wiki",
  description: "Personal Wiki of vintagesucks",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Wiki', link: '/introduction/' }
    ],

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
    ]
  },
  srcExclude: [
    'README.md'
  ],
})
