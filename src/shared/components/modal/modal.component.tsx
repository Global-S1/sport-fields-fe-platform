import { isValidElement, ReactNode } from "react";
import ReactDOM from "react-dom";
import { IconType } from "react-icons/lib";
import clsx from "../../../libs/clsx";
import { Box } from "../box/box.component";
import { Icon } from "../icon/icon.component";
import { Heading } from "../text/heading.component";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title?: {
    label: string;
    icon?: IconType | React.ReactNode;
    iconSize?: number;
  };
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
  showCloseBtn?: boolean;
}

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  className,
  showCloseBtn = false,
}: Props) => {
  const isIconType = (icon: unknown): icon is IconType => {
    return typeof icon === "function";
  };

  const isReactNode = (node: unknown): node is ReactNode => {
    return (
      isValidElement(node) ||
      typeof node === "string" ||
      typeof node === "number"
    );
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Box
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 "
      onClick={onClose}
    >
      <Box
        className={clsx(
          "bg-white text-black rounded-lg shadow-lg max-w-xl w-full p-6 relative",
          className
        )}
        onClick={(e: Event) => e.stopPropagation()}
      >
        {showCloseBtn && (
          <Box
            className="absolute top-4 right-4 cursor-pointer rounded-full"
            onClick={onClose}
          >
            <Icon iconName="ioClose" size="18px" />
          </Box>
        )}
        <Box className="flex items-center justify-end"></Box>
        {title && (
          <>
            {title.icon && isIconType(title.icon) && (
              <Box className="p-4 bg-white rounded-full w-fit mx-auto text-main-400 mb-6">
                <title.icon size={title.iconSize ?? 20} />
              </Box>
            )}
            {title.icon && isReactNode(title.icon) && title.icon}
            <Box className="mb-4 pb-2 text-lg font-bold text-gray-700">
              <Heading tag="h5" model="sm" className="text-black text-left ">
                {title.label}
              </Heading>
            </Box>
          </>
        )}
        <Box>{children}</Box>
      </Box>
    </Box>,
    document.body
  );
};
