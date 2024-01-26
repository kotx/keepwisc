function onCookieChange({ removed, cookie, cause }) {
  if (!removed && cookie.session) {
    const allowedDomain = "login.wisc.edu";

    if (cookie.domain === allowedDomain) {
      const expirationDate = Date.now() + 3.456e11;
      const newCookie = {
        expirationDate,
        url: "https://" + cookie.domain,
        domain: cookie.domain,
        httpOnly: cookie.httpOnly,
        name: cookie.name,
        partitionKey: cookie.partitionKey,
        path: cookie.path,
        sameSite: cookie.sameSite,
        secure: cookie.secure,
        storeId: cookie.storeId,
        value: cookie.value
      };

      browser.cookies.set(newCookie);
    }
  }
}

browser.cookies.onChanged.addListener(onCookieChange);
