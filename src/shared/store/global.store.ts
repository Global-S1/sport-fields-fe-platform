import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { atomWithCookie } from "../../modules/auth/hooks/useCookie";
import { ECookies } from "../enums/cookies.enum";
import { LANG_VALUE } from "../enums/global.enum";
import { ELocalStorage } from "../enums/local-storage.enum";
import { ILocationCoords } from "../interfaces/geolocation.interface";
import { IPrivileges } from "../interfaces/privileges.interface";
import { IUser } from "../interfaces/user.interface";

export const currentUserAtom = atomWithStorage<IUser | null>(
  ELocalStorage.CURRENT_USER,
  null
);

export const currentTokenAtom = atomWithCookie<string>(
  ECookies.CURRENT_TOKEN,
  "",
  {
    expires: 0.021,
    secure: true,
    sameSite: "Strict",
    path: "/",
  }
);

export const currentPrivilegesAtom = atomWithCookie<IPrivileges[]>(
  ECookies.PRIVILEGES,
  [],
  {
    expires: 0.021,
    secure: true,
    sameSite: "Strict",
    path: "/",
  }
);

export const isAdminAtom = atomWithCookie<boolean>(ECookies.IS_ADMIN, false, {
  expires: 0.021,
  secure: true,
  sameSite: "Strict",
  path: "/",
});

export const langSelectedAtom = atomWithStorage<LANG_VALUE>(
  ELocalStorage.CURRENT_LANG,
  LANG_VALUE.ES
);

export const locationAtom = atom<ILocationCoords | undefined>(undefined);
