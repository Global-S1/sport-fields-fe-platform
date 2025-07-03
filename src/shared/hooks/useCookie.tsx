"use client";

import { atomWithStorage } from "jotai/utils";
import { deleteCookie, getCookie, setCookie } from "../helpers/cookies.helper";

type CookieOptions = {
  path?: string;
  maxAge?: number;
  secure?: boolean;
  sameSite?: "Strict" | "Lax" | "None";
};

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
      const encoded = typeof value === "string" ? value : JSON.stringify(value);
      setCookie(key, encoded, options);
    },
    removeItem: () => {
      deleteCookie(key, options.path || "/");
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
