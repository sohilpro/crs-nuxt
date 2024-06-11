export default defineNuxtRouteMiddleware((to, from) => {
  if (!to.query.origin) {
    navigateTo(`/`);
  }
});
