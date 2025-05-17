// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  ssr: true,
  app: {
    head: {
      title: 'Oduanyo Ogungbure',
      meta: [
        { name: 'description', content: 'Still alive... Rebuilding... Becoming.' },
        { property: 'og:title', content: 'Odunayo Ogungbure' },
        { property: 'og:description', content: 'A minimal digital trace of Odunayo' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap' }
      ]
    }
  }
});
