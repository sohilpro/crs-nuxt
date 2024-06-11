export default defineEventHandler(async (e) => {
  const token = getCookie(e, "access_token");
  const query = getQuery(e);
  
  try {
    const data = await $fetch(
      `http://api.flymurshiid.ir/test/v1/flight/airline_logo/${query.logo}`,
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
