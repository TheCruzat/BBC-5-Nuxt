export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Built by the Cruzat : Web Portfolio of Dan Cruzat',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Dan Cruzat is a front end engineer with over 20 years\' experience in digital, currently focused on React and Vue. Located in Portland OR.' },
      { name: 'keywords', content: 'front end, developer, engineer, wordpress, vue, react, html, css, javascript, portland, oregon' },
      { name: 'author', content: 'Dan Cruzat' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@_cruzat' },
      { name: 'twitter:creator', content: '@_cruzat' },
      { name: 'twitter:title', content: 'Built by the Cruzat : Web Portfolio of Dan Cruzat' },
      { name: 'twitter:description', content: 'Dan Cruzat is a front end engineer with over 20 years\' experience in digital, currently focused on React and Vue. Located in Portland OR.' },
      { name: 'twitter:image', content: '/builtbycruzat.png' },
      { property: 'og:title', content: 'Built by the Cruzat : Web Portfolio of Dan Cruzat' },
      { property: 'og:description', content: 'Dan Cruzat is a front end engineer with over 20 years\' experience in digital, currently focused on React and Vue. Located in Portland OR.' },
      { property: 'og:image', content: '/builtbycruzat.png' },
      // { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
