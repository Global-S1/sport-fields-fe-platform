import { CookieOptions } from "@/modules/auth/hooks/useCookie";

export const getCookie = (key: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${key}=`);
  if (parts.length === 2) return parts.pop()!.split(";").shift() || null;
  return null;
};

export const getCookieParsed = <T>(key: string): T | null => {
  const value = getCookie(key);
  try {
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
};

export function setCookie(
  key: string,
  value: string,
  options: CookieOptions = {}
) {
  const { expires, path = "/", secure, sameSite } = options;
  let cookie = `${key}=${value}; path=${path}`;
  if (expires) {
    cookie += `; max-age=${expires}`;
  }
  if (secure) {
    cookie += "; Secure";
  }
  if (sameSite) {
    cookie += `; SameSite=${sameSite}`;
  }
  document.cookie = cookie;
}

export const deleteCookie = (key: string, path = "/") => {
  document.cookie = `${key}=; path=${path}; max-age=0`;
};
