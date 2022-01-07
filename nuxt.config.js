export default {
  target: 'static',
  head: {
    title: 'Tude',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },
  css: [
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      '@/assets/style/all.scss'
    ]
  },
  eslint: {
    fix: true,
    failOnWarning: false,
    failOnError: false
  },
  stylelint: {
    fix: true,
    failOnWarning: false,
    failOnError: false
  },
  modules: [
    '@nuxtjs/markdownit',
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: '/'
  },
  build: {
  }
}
