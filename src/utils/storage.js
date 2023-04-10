import {Cookies} from 'react-cookie'

const cookies = new Cookies()

export const setCookie = (key, value) => {
  cookies.set(key, value)
}
export const getCookie = (key) => cookies.get(key)
export const removeCookie = async (key) => await cookies.remove(key)


export const deleteAllCookies = () => {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

export const localStorageClear = () => {
  localStorage.clear();
}
