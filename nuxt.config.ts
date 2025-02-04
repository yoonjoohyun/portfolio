// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          // Remix-icon
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css'
        }
      ]
    }
  },
  css: ['~/assets/scss/fonts.scss']
})
