import type { Toast, ToastPosition } from "react-hot-toast";

export interface IToastProps {
  title: string;
  mode: TOAST_MODE;
}

export const enum TOAST_MODE {
  ERROR = "error",
  SUCCESS = "success",
  WARNING = "warning",
}

export const toastConfiguration: Partial<Toast> = {
  id: "error-notification",
  position: "top-right" as ToastPosition | undefined,
  duration: 3000,
};

export const modeConfiguration: Record<
  TOAST_MODE,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { icon: any; backgroundColor: string; textColor: string }
> = {
  error: {
    icon: "IoIosCloseCircle",
    backgroundColor: "border-red-500 boder bg-red-50",
    textColor: "text-red-700",
  },
  success: {
    icon: "FaCheckCircle",
    backgroundColor: "border-green-500 bg-green-50",
    textColor: "text-green-800",
  },
  warning: {
    icon: "PiWarningCircleFill",
    backgroundColor: "border-yellow-500 bg-yellow-50",
    textColor: "text-yellow-600",
  },
};
