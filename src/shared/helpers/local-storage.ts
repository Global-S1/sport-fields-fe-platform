import { LANG_VALUE } from "../enums/global.enum";

export const getLang = (): LANG_VALUE => {
  const lang = localStorage.getItem("current-lang") ?? LANG_VALUE.EN;
  return lang as LANG_VALUE;
};
