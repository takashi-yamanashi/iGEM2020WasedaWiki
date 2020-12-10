import colors from 'vuetify/es5/util/colors'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - iGEM 2020 Team:Waseda',
    title: 'Main',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "iGEM2020 Team Waseda's Wiki" },
      { hid: 'og:site_name', property: 'og:site_name', content: "iGEM2020 Team Waseda's Wiki" }, 
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: "iGEM2020 Team Waseda's Wiki" },
      { hid: 'og:description', property: 'og:description', content: "iGEM2020 Team Waseda's Wiki" },
      { hid: 'og:url', property: 'og:url', content: 'https://2020.igem.org/Team:Waseda'},
      { hid: 'og:image', property: 'og:image', content: 'https://2020.igem.org/wiki/images/9/9d/T--Waseda--iGEM2020lWasedaLogo.png' },
      { name: 'twitter:card', content: 'summary' },　

      //Change each page

      // { hid: 'description', name: 'description', content: "iGEM2020 Team Waseda's Wiki" },
      // { hid: 'og:title', property: 'og:title', content: "iGEM2020 Team Waseda's Wiki" },
      // { hid: 'og:description', property: 'og:description', content: "iGEM2020 Team Waseda's Wiki" },
      // { hid: 'og:url', property: 'og:url', content: 'https://2020.igem.org/Team:Waseda'},
      
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',

    // '@nuxtjs/sitemap',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  content: {},

  // sitemap: {
  //   path: '/sitemap.xml',
  //   hostname: 'https://2020.igem.org/Team:Waseda',
  //   gzip: true,
  //   generate: false,
  // },


  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    },

    defaultAssets: {
      // icons: false,
      font: false

    }

  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    filenames: {
      app: () => '[name].js',
      chunk: () => '[name].js',
      // content: () => '[name].json', //add 1601947341
      css: () => '[name].js',
      img: () => '[path][name].[ext]',
      font: () => '[path][name].[ext]',
      video: () => '[path][name].[ext]'
    },
  },
  generate: {
    subFolders: false
  },
  

  hooks: {
    generate: {
      page (page) {
        const cheerio = require('cheerio')
        const $ = cheerio.load(page.html, { decodeEntities: false })
          
        const attrs = [
          'data-n-head-ssr',
          'data-n-head',
          'data-hid',
          'data-vue-ssr-id',
          'data-server-rendered',
        ]
          
        attrs.forEach(value => {
          $('*[' + value + ']').removeAttr(value)
        })
          
        page.html = $.html()
      },
    },
  },

  // for iGEM server only
  router: {
    base: '/Team:Waseda'
  },

}
