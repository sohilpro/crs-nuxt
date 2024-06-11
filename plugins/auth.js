export default defineNuxtPlugin(async () => {
  try {
    await $fetch("/api/auth/login", {
      method: "POST",
    });
  
  } catch (error) {
    return error;
  }
});
