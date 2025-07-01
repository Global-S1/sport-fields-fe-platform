import { deleteCookie, getCookie, setCookie } from "@/shared/helpers/cookies.helper";
import { atomWithStorage } from "jotai/utils";


export interface CookieOptions {
  expires?: number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: "strict" | "lax" | "none";
}

export function atomWithCookie<T>(
  key: string,
  initialValue: T,
  options: CookieOptions = {}
) {
  const rawValue = getCookie(key);
  let parsedValue: T;

  try {
    parsedValue = rawValue ? JSON.parse(rawValue) : initialValue;
  } catch {
    parsedValue = initialValue;
  }

  if (!rawValue) {
    setCookie(key, JSON.stringify(initialValue), options);
  }

  return atomWithStorage<T>("cookie:" + key, parsedValue, {
    getItem: () => {
      const cookieValue = getCookie(key);
      if (cookieValue) {
        try {
          return JSON.parse(cookieValue) as T;
        } catch {
          return initialValue;
        }
      }
      return initialValue;
    },
    setItem: (_, value) => {
      const encoded = JSON.stringify(value);
      setCookie(key, encoded, options);
    },
    removeItem: () => {
      deleteCookie(key, options.path);
    },
    subscribe: (_, callback) => {
      const timeout = setTimeout(() => {
        const cookieValue = getCookie(key);
        if (cookieValue) {
          try {
            const parsed = JSON.parse(cookieValue);
            callback(parsed as T);
          } catch {
            // Intentionally ignore JSON parse errors
          }
        }
      }, 0);
      return () => clearTimeout(timeout);
    },
  });
}
