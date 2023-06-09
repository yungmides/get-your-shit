import { pwa } from './config/pwa'
import { appDescription } from './constants/index'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-mapbox',
  ],

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  css: [

  ],

  colorMode: {
    classSuffix: '',
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
    },
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  pwa,

  devtools: {
    enabled: false,
  },

  build: {
    // vue-toastification - old commonjs module
    transpile: ['vue-toastification'],
  },
  runtimeConfig: {
    public: {
      gatewayUrl: process.env.NUXT_PUBLIC_GATEWAY_URL,
      mapboxAccessToken: process.env.NUXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
      serverGatewayUrl: process.env.NUXT_PUBLIC_SERVER_GATEWAY_URL,
      stripePublicKey: process.env.NUXT_PUBLIC_STRIPE_PUBLIC_KEY,
      stripeSecretKey: process.env.NUXT_PUBLIC_STRIPE_SECRET_KEY,
    },
  },
  mapbox: {
    accessToken: process.env.NUXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
  },
})
