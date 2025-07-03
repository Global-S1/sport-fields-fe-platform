import { cloneElement } from "react";
import { IconType } from "react-icons";
import clsx from "../../../libs/clsx";
import { IColors, ISizes } from "../../config/config.component.interface";
import { LoaderDots } from "../loader/loader-dots.component";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  color?: IColors;
  outline?: boolean;
  className?: string;
  Icon?: IconType;
  iconPosition?: "end" | "start";
  disabled?: boolean;
  isLoading?: boolean;
  size?: ISizes;
  rounded?: boolean;
}

export const Button = ({
  children,
  color = "primary",
  outline = false,
  size = "md",
  disabled,
  className,
  Icon,
  iconPosition = "start",
  isLoading,
  rounded = false,
  ...rest
}: Props) => {
  const stylesInline: Record<IColors, string> = {
    primary:
      "px-6 border-blueSport-500 bg-primary-400 hover:bg-blueSport-700 hover:border-blueSport-700 text-text-inverse",
    secondary: "px-6 border-greenLemon-700 bg-greenLemon-700 text-text-inverse",
    red: "px-6 border-redBlock-600 bg-redBlock-600 text-text-inverse",
    white:
      "px-6 border-white bg-backgroundSoft text-black hover:bg-blueSport-500 hover:border-blueSport-500 hover:text-text-inverse",
    gray: "border-neutral-300 bg-neutral-300 text-white hover:border-neutral-600 hover:bg-neutral-600",
    custom: "",
  };

  const stylesOutline: Record<IColors, string> = {
    primary:
      "px-6 bg-transparent border-2 border-blueSport-500 text-blueSport-500 hover:text-white hover:bg-blueSport-700",
    secondary: "px-6 greenLemon-700 border-greenLemon-700 text-text-main",
    red: "px-6 border-redBlock-600 text-redBlock-600",
    white:
      "px-6 bg-transparent border-blueSport-500 text-blueSport-500 hover:border-blueSport-500",
    gray: "px-6 border-gray-400 text-gray-700 hover:bg-gray-600 hover:text-white hover:cursor-pointer",
    custom: "",
  };

  const sizesModal: Record<ISizes, string> = {
    sm: "py-[6px] text-[12px]",
    md: "h-[40px] text-[14px]",
    lg: "py-[14px] text-[14px] leading-[24px]",
    xl: "py-4 text-[16px] leading-[24px]",
  };

  return (
    <button
      {...rest}
      className={clsx(
        "font-semibold transition-all duration-150 border",
        sizesModal[size],
        outline ? stylesOutline[color] : stylesInline[color],
        (isLoading || Icon) && "flex items-center justify-center gap-3",
        (disabled || isLoading) && "opacity-75 cursor-not-allowed",
        rounded ? "rounded-full" : "rounded-md",
        className
      )}
      disabled={disabled || isLoading}
    >
      {isLoading && <LoaderDots />}
      {iconPosition == "start" && Icon && cloneElement(<Icon />, { size: 20 })}
      {children}
      {iconPosition == "end" && Icon && cloneElement(<Icon />, { size: 20 })}
    </button>
  );
};
