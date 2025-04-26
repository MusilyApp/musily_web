export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  fontawesome: {
    icons: {
      brands: ['github', 'telegram', 'android', 'windows', 'linux'],
      solid: ['arrow-down'],
    },
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@vesp/nuxt-fontawesome',
  ],
  css: [
    '~/assets/scss/variables.scss',
    '~/assets/scss/themes.scss',
    '~/assets/scss/colors.scss',
    '~/assets/scss/layout.scss',
    '~/assets/scss/typography.scss',
  ],
});