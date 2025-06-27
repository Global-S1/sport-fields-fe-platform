import toast from "react-hot-toast";
import { Box } from "../box/box.component";
import clsx from "../../../libs/clsx";
import { Button } from "../button/button.component";
import {
  IToastProps,
  modeConfiguration,
  toastConfiguration,
} from "./toast.config";
import { FaTimes } from "react-icons/fa";
import { Icon } from "../icon/icon.component";

export const triggerToast = ({ title, mode }: IToastProps) =>
  toast.custom((t) => {
    const configuration = modeConfiguration[mode];
    return (
      <Box
        className={clsx(
          "flex rounded transition-all border-[1px] border-l-4 duration-300 ease-in p-4 shadow-lg max-w-fit items-center justify-between",
          !t.visible && "opacity-0 translate-x-full",
          configuration.backgroundColor
        )}
      >
        <Box className="flex">
          <Icon
            className={clsx("text-2xl", configuration.textColor)}
            iconName={configuration.icon}
          />
          <Box className="ml-2 flex w-full cursor-default flex-col items-start justify-center">
            <h1
              className={clsx(
                "text-sm font-normal leading-none tracking-wider"
              )}
            >
              {title}
            </h1>
          </Box>
        </Box>
        <Button
          color="custom"
          outline={true}
          onClick={() => toast.dismiss(t.id)}
          className={clsx(
            "ml-4 border-none text-sm font-medium !p-2",
            `${configuration.textColor}`
          )}
        >
          <FaTimes />
        </Button>
      </Box>
    );
  }, toastConfiguration);
