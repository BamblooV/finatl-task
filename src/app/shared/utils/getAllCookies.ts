export const getAllCookies = (): Record<string, string> => {
  const cookies = document.cookie.split(';');

  return cookies
    .map(cookie => cookie.trim())
    .reduce<Record<string, string>>((cookieObj, cookie) => {
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
      const value = eqPos > -1 ? cookie.substring(eqPos + 1) : '';

      // eslint-disable-next-line no-param-reassign
      cookieObj[name] = decodeURIComponent(value);

      return cookieObj;
    }, {});
};
