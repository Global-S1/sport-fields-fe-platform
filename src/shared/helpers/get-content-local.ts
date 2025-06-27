import { getLang } from "./local-storage";

export const getContentLocal = async (lang: string) => {
  const langSelected = lang || getLang();
  const content = await import(`../../../messages/${langSelected}/es.json`);
  return content.default;
};
