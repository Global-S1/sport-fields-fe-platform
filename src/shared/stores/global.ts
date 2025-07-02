import { atom } from "jotai";
import { ILocationCoords } from "../interfaces/geolocation.interface";

export const locationAtom = atom<null | ILocationCoords>(null);
