import { atomWithStorage } from "jotai/utils";
import { IUser } from "../interfaces/user.interface";
import { ELocalStorage } from "../enums/local-storage.enum";
import { atomWithCookie } from "../hooks/useCookie";
import { ECookies } from "../enums/cookies.enum";
import { IPrivileges } from "../interfaces/privileges.interface";

export const currentUserAtom = atomWithStorage<IUser | null>(
  ELocalStorage.CURRENT_USER,
  null
);

export const currentTokenAtom = atomWithCookie<string>(
  ECookies.CURRENT_TOKEN,
  "",
  {
    maxAge: 30 * 60,
    secure: true,
  }
);

export const currentPrivilegesAtom = atomWithCookie<IPrivileges[]>(
  ECookies.PRIVILEGES,
  [],
  {
    maxAge: 30 * 60,
    secure: true,
  }
);

export const isAdminAtom = atomWithCookie<boolean>(ECookies.IS_ADMIN, false);
