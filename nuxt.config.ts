export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@unocss/nuxt',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    'dayjs-nuxt',
    '@nuxtjs/mdc',
  ],
  unocss: {
    nuxtLayers: true,
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  colorMode: {
    classSuffix: '',
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  dayjs: {
    locales: ['en'],
    defaultLocale: 'en',
    defaultTimezone: 'UTC',
    plugins: ['relativeTime', 'utc', 'timezone', 'localizedFormat', 'duration'],
  },

  css: ['assets/css/index.css'],

  features: {
    inlineStyles: false,
  },

  // loaded from .env
  runtimeConfig: {
    githubToken: '',
  },
})
