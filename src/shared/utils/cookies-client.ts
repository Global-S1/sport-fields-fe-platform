import { cookies as NextCookies } from "next/headers";

export const cookiesClient = async (
  name: string,
  cookieBackend: string | undefined
) => {
  if (!cookieBackend) {
    return;
  }

  const cookies = await NextCookies();

  const contentCookie = cookieBackend.split(";")[0].split("=")[1];

  cookies.set({
    name: name,
    value: contentCookie,
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "lax",
  });
};
