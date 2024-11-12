export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/eslint-module'],
  css: [
    '~/assets/scss/variables.scss',
    '~/assets/scss/themes.scss',
    '~/assets/scss/colors.scss',
    '~/assets/scss/layout.scss',
    '~/assets/scss/typography.scss',
  ],
});
