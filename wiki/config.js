import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Devclicker ",
  description: "A VitePress Site",
  lang: "fr-FR",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' },
    //   { text: 'API', items: [
    //     { text: 'Runtime API', link: '/api-examples' },
    //     { text: 'CLI', link: '/cli' }
    //   ] },
    // ],

    sidebar: [
      {
        text: 'Fonctionnalités Junior',
        items: [
          { text: 'Code', link: '/code' },
          { text: 'Missions', link: '/missions' }
        ]
      },
      {
      text: 'Fonctionnalités Senior',
      items: [
        { text: 'Investissement', link: '/investissement' },
        { text: 'Entreprise', link: '/entreprise' }
      ],
    },
    {
      text: 'Fonctionnalités Autres',
      items: [
        { text: 'Trophées', link: '/trophées' }
      ],
    },
    {
      text: 'Version',
      items: [
        { text: 'v1', link: '/versions/v1.md' },
        { text: 'v1.2', link: '/versions/v1.2.md' },
        { text: 'v1.3 - Restart Update', link: '/versions/v1.3.md' },
        { text: 'v1.4 - Money Update', link: '/versions/v1.4.md' },
        { text: 'v1.5 - Business Update', link: '/versions/v1.5.md' },
        { text: 'v1.6 - Hack Update', link: '/versions/v1.6.md' },
        { text: 'v2', link: '/versions/v2.md' },

      ],
    },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/clm-msch/dev-clicker' },
      { icon: 'discord', link: 'https://discord.gg/vue'},
    ]
  }
})

