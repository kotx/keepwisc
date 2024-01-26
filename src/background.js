function onCookieChange({ removed, cookie, cause }) {
  if (!removed && cookie.session) {
    const isWiscEduDomain = cookie.domain === "wisc.edu" || cookie.domain.endsWith(".wisc.edu");

    if (isWiscEduDomain) {
      const expirationDate = Date.now() + 3.456e11;
      const newCookie = {
        expirationDate,
        domain: cookie.domain,
        httpOnly: cookie.httpOnly,
        name: cookie.name,
        partitionKey: cookie.partitionKey,
        path: cookie.path,
        sameSite: cookie.sameSite,
        secure: cookie.secure,
        storeId: cookie.storeId,
        url: "https://" + cookie.domain,
        value: cookie.value
      };

      browser.cookies.set(newCookie);
    }
  }
}

browser.cookies.onChanged.addListener(onCookieChange);
