import clsx from "../../../libs/clsx";
import { ETextWeight } from "./text.interface";

type Tags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type Model = "sm" | "md" | "lg" | "xl" | "xxl";

const models: Record<Model, string> = {
  sm: "text-[24px] leading-[28px] font-sans",
  md: "text-[32px] leading-[40px] font-sans",
  lg: "text-[40px] leading-[48px] font-sans",
  xl: "text-[48px] leading-[56px] font-sans",
  xxl: "text-[56px] leading-[64px] font-sans",
};

interface Props {
  children?: React.ReactNode;
  tag?: Tags;
  model?: Model;
  className?: string;
  heading?: boolean;
  weight?: ETextWeight;
  [key: string]: any;
}

export const Heading = ({
  children,
  tag,
  className,
  model = "md",
  weight = ETextWeight.medium,
  ...rest
}: Props) => {
  const Tag = tag || "h1";
  return (
    <Tag
      {...rest}
      className={clsx(models[model], `font-[${weight}]`, className)}
    >
      {children}
    </Tag>
  );
};
