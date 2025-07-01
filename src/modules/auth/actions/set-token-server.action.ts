"use server";
import { cookies } from "next/headers";

export async function setTokenServerAction(token: string) {
  const cookieStore = await cookies();
  cookieStore.set("current-token", token, {
    httpOnly: true,
    path: "/",
    maxAge: 30 * 60,
    secure: true,
  });
}

export async function getTokenServerAction() {
  const cookieStore = await cookies();
  const token = cookieStore.get("current-token");
  return token?.value || "";
}

export async function setPrivilegesServerAction(privileges: any[]) {
  const cookieStore = await cookies();
  cookieStore.set("privileges", JSON.stringify(privileges), {
    httpOnly: true,
    path: "/",
    maxAge: 30 * 60,
    secure: true,
  });
}

export async function setIsAdminServerAction(isAdmin: boolean) {
  const cookieStore = await cookies();
  cookieStore.set("is-admin", JSON.stringify(isAdmin), {
    httpOnly: true,
    path: "/",
    secure: true,
  });
}
