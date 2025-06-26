import { TModel } from "./model.type";

export const DEFAULT_TAG = "div";

export const models: Record<TModel, string> = {
  "box-gradient":
    "flex flex-col bg-gradient-to-b from-impulse-800 to-impulse-400 items-center justify-center",
  "box-cols": "grid grid-cols-2",
};
