import { atomWithStorage } from "jotai/utils";
import Cookies from "js-cookie";

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
  const rawValue = Cookies.get(key);
  let parsedValue: T;

  try {
    parsedValue = rawValue ? JSON.parse(rawValue) : initialValue;
  } catch {
    parsedValue = initialValue;
  }

  if (!rawValue) {
    Cookies.set(key, JSON.stringify(initialValue), options);
  }

  return atomWithStorage<T>("cookie:" + key, parsedValue, {
    getItem: () => {
      const cookieValue = Cookies.get(key);
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
      Cookies.set(key, encoded, options);
    },
    removeItem: () => {
      Cookies.remove(key, { path: options.path });
    },
    subscribe: (_, callback) => {
      const timeout = setTimeout(() => {
        const cookieValue = Cookies.get(key);
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
