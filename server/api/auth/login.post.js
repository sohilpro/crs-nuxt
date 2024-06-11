export default defineEventHandler(async (e) => {
  try {
    const data = await $fetch(
      "http://api.flymurshiid.ir/test/v1/register/login",
      {
        method: "POST",
        body: { password: "crstrip", crsid: "crstrip_usd" },
      }
    );
    setCookie(e, "access_token", data?.token, {
      path: "/",
      secure: true,
      maxAge: 604800,
    });
    setCookie(e, "refresh_token", data?.refresh_token, {
      path: "/",
      secure: true,
      maxAge: 7 * 604800,
    });
    return data;
  } catch (error) {
    return error;
  }
});
