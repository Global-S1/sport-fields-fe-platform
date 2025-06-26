import { Box } from "../box/box.component";

export const LoaderDots = () => {
  return (
    <Box
      className={`border-transparent h-5 w-5 animate-spin rounded-full border-[3px] border-y-white border-l-white mix-blend-difference`}
    />
  );
};
