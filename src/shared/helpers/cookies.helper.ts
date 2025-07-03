type CookieOptions = {
  path?: string;
  maxAge?: number;
  secure?: boolean;
  sameSite?: "Strict" | "Lax" | "None";
};

export const getCookie = (key: string): string | null => {
  if (typeof document === "undefined") return null;

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
  if (typeof document === "undefined") {
    console.log("document undefined");
    return;
  }

  const { maxAge, path = "/", secure, sameSite } = options;
  let cookie = `${key}=${encodeURIComponent(value)}; path=${path}`;

  if (maxAge) {
    cookie += `; max-age=${maxAge}`;
  }
  if (secure) {
    cookie += "; Secure";
  }
  if (sameSite) {
    cookie += `; SameSite=${sameSite}`;
  }

  document.cookie = cookie;
  console.log("setCookie", cookie);
}

export const deleteCookie = (key: string, path = "/") => {
  if (typeof document === "undefined") return;
  document.cookie = `${key}=; path=${path}; max-age=0`;
};
