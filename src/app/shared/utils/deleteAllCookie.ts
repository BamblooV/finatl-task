import { deleteCookie } from './deleteCookie';
import { getAllCookies } from './getAllCookies';

export const deleteAllCookies = () => {
  Object.keys(getAllCookies()).forEach(cookieName => {
    deleteCookie(cookieName);
  });
};
