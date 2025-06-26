import clsx from "../../../libs/clsx";

import { models } from "./text-constants";
import { ETextWeight } from "./text.enum";
import { Model } from "./types/text-model.type";
import { Tags } from "./types/text-tags.type";

interface IProps {
  children?: React.ReactNode;
  tag?: Tags;
  model?: Model;
  className?: string;
  heading?: boolean;
  weight?: ETextWeight;
  [key: string]: any;
}

export const Text = ({
  children,
  tag,
  model = "md",
  className,
  weight = ETextWeight.bold,
  ...rest
}: IProps) => {
  const Tag = tag || "p";
  return (
    <Tag
      {...rest}
      className={clsx(models[model], `font-[${weight}]`, className)}
    >
      {children}
    </Tag>
  );
};
