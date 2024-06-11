// https://nuxt.com/docs/api/configuration/nuxt-config
import lang from "./lang/language";

export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    "@morev/vue-transitions/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@samk-dev/nuxt-vcalendar",
    "nuxt-swiper",
    "@vueuse/nuxt",
    "@sidebase/nuxt-pdf",
  ],
  i18n: {
    locales: lang,
    defaultLocale: "en",
    defaultDirection: "ltr",
    lazy: true,
    langDir: "lang",
    strategy: "prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
  },
});
