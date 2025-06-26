import { motion } from "motion/react";
import { BicycleLoader } from "./bicycle-loader";
import clsx from "../../../libs/clsx";

interface Props {
  className?: string;
}

export const LoaderPage = ({ className }: Props) => {
  return (
    <motion.div
      className={clsx(
        "w-full h-full fixed top-0 left-0 z-[49] bg-[#00000066] flex items-center justify-center overflow-hidden",
        className
      )}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BicycleLoader />
    </motion.div>
  );
};
