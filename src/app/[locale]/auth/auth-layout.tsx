import { Box } from "@/shared/components/box/box.component";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: Props) => {
  return (
    <Box className="flex h-screen">
      <Box className="hidden md:flex md:w-[35%] h-full bg-gradient-to-br from-greenLemon-600 to-blueSport-500 items-center justify-center">
        <Link href={"/"} className="flex flex-col">
          <span className="text-4xl font-semibold text-text-inverse">
            Sport Fields
          </span>
        </Link>
      </Box>
      <Box className="flex flex-col justify-center items-center w-full md:w-[75%] sm:bg-backgroundSoft">
        <Box className="w-full h-[90%] flex justify-center items-center">
          <Box className="flex flex-col sm:w-[50%]">{children}</Box>
        </Box>
      </Box>
    </Box>
  );
};
