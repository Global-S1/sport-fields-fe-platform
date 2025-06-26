import { Model } from "./types/text-model.type";

export const models: Record<Model, string> = {
  xs: "text-[12px] leading-[16px] font-sans",
  sm: "text-[14px] leading-[20px] font-sans",
  md: "text-[16px] leading-[24px] font-sans",
  lg: "text-[20px] leading-[28px] font-sans",
  custom: "",
};
