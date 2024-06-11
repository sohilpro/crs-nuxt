import { Html2CanvasPlugin } from "vue3-html2canvas";

export default defineNuxtPlugin((nuxtApp) => {
  return nuxtApp.vueApp.use(Html2CanvasPlugin);
});
