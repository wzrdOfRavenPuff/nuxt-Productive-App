// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({ 
  app: {
    head:{
      script: [{
        name: "gapi",
        src: "https://apis.google.com/js/api.js"
      }]
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', 'nuxt-icon'],
 
});
