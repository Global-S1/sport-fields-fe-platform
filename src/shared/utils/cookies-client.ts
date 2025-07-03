import { cookies as NextCookies } from "next/headers";

export const cookiesClient = async (
  name: string,
  cookieBackend: string | undefined
) => {
  if (!cookieBackend) {
    return;
  }

  const cookies = await NextCookies();

  const getCookieAttrs = (cookieStr: string) => {
    const match = cookieStr.match(
      /^sessionToken=([^;]+);.*Max-Age=([^;]+).*Expires=([^;]+)/i
    );
    return {
      value: match?.[1] || "",
      expires: match?.[3] ? new Date(match[3]) : undefined,
      maxAge: match?.[2] ? parseInt(match[2]) : undefined,
    };
  };

  const { value, expires, maxAge } = getCookieAttrs(cookieBackend);

  cookies.set({
    name,
    value,
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    expires,
    maxAge,
  });
};

const getCookie = async (name: string) => {
  const cookies = await NextCookies();
  return cookies.get(name)?.value;
};

export const getCookieClient = async () => {
  const sessionToken = await getCookie("sessionToken");
  const currentTokenRaw = await getCookie("current-token");

  const currentToken = currentTokenRaw?.startsWith('"')
    ? JSON.parse(currentTokenRaw)
    : currentTokenRaw;

  return { cookie: sessionToken, token: currentToken };
};
