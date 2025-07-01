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

export async function getPrivilegesServerAction() {
  const cookieStore = await cookies();
  const privilegesCookie = cookieStore.get("privileges");
  try {
    return privilegesCookie?.value ? JSON.parse(privilegesCookie.value) : [];
  } catch {
    return [];
  }
}

export async function setIsAdminServerAction(isAdmin: boolean) {
  const cookieStore = await cookies();
  cookieStore.set("is-admin", JSON.stringify(isAdmin), {
    httpOnly: true,
    path: "/",
    maxAge: 30 * 60,
    secure: true,
  });
}

export async function getIsAdminServerAction() {
  const cookieStore = await cookies();
  const isAdminCookie = cookieStore.get("is-admin");
  try {
    return isAdminCookie?.value ? JSON.parse(isAdminCookie.value) : false;
  } catch {
    return false;
  }
}

export async function clearAuthCookiesServerAction() {
  const cookieStore = await cookies();
  cookieStore.delete("current-token");
  cookieStore.delete("privileges");
  cookieStore.delete("is-admin");
}
