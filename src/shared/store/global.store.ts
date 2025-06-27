import { atomWithStorage } from "jotai/utils";
import { ELocalStorage } from "../enums/local-storage.enum";
import { ECookies } from "../enums/cookies.enum";
import { LANG_VALUE } from "../enums/global.enum";
import { atom } from "jotai";
import { ILocationCoords } from "../interfaces/geolocation.interface";
import { IUser } from "../interfaces/user.interface";
import { atomWithCookie } from "@/modules/auth/hooks/useCookie";
import { IPrivileges } from "../interfaces/privileges.interface";

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
  }
);

export const currentPrivilegesAtom = atomWithCookie<IPrivileges[]>(
  ECookies.PRIVILEGES,
  [],
  {
    expires: 0.021,
    secure: true,
  }
);

export const isAdminAtom = atomWithCookie<boolean>(ECookies.IS_ADMIN, false);

export const langSelectedAtom = atomWithStorage<LANG_VALUE>(
  ELocalStorage.CURRENT_LANG,
  LANG_VALUE.ES
);

export const locationAtom = atom<ILocationCoords | undefined>(undefined);
