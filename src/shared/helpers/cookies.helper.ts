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

// export function getCookie(name: string): string | undefined {
//   if (typeof document === "undefined") return undefined;
//   const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
//   return match ? decodeURIComponent(match[2]) : undefined;
// }

// export function setCookie(name: string, value: string, options: any = {}) {
//   if (typeof document === "undefined") return;
//   let cookieStr = `${name}=${encodeURIComponent(value)}`;
//   if (options.expires) {
//     const expires =
//       typeof options.expires === "number"
//         ? new Date(Date.now() + options.expires * 864e5)
//         : options.expires;
//     cookieStr += `; expires=${expires.toUTCString()}`;
//   }
//   if (options.path) cookieStr += `; path=${options.path}`;
//   if (options.domain) cookieStr += `; domain=${options.domain}`;
//   if (options.secure) cookieStr += `; secure`;
//   if (options.sameSite) cookieStr += `; samesite=${options.sameSite}`;
//   document.cookie = cookieStr;
// }

// export function deleteCookie(name: string, path?: string) {
//   setCookie(name, "", { path, expires: new Date(0) });
// }
