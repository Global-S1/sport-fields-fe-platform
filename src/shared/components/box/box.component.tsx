import { PropsWithChildren } from "react";

import clsx from "../../../libs/clsx";
import { DEFAULT_TAG, models } from "./constants";
import { TModel } from "./model.type";

export interface BoxComponentProps {
  tag?: keyof HTMLElementTagNameMap;
  model?: TModel;
  className?: string;
  [key: string]: any;
}

export function Box({
  tag,
  model,
  className,
  children,
  ...rest
}: PropsWithChildren<BoxComponentProps>) {
  const Tag = tag ?? DEFAULT_TAG;
  const modelClass = model ? models[model] : null;

  return (
    <Tag
      {...rest}
      className={clsx(modelClass && modelClass, className && className)}
    >
      {children && children}
    </Tag>
  );
}
