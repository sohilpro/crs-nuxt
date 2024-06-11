export default defineEventHandler(async (e) => {
  const token = getCookie(e, "access_token");

  try {
    const data = await $fetch(
      `https://api.flymurshiid.ir/test/v1/flight/portals`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error;
  }
});
