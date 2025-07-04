import GetLocation from "@/layouts/customer/get-location";
import { CustomerNavbar } from "@/layouts/customer/navbar";
import clsx from "@/libs/clsx";
import { Box } from "@/shared/components/box/box.component";

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default function CustomerLayout({ children }: Props) {
  return (
    <Box className={clsx("relative min-h-screen h-screen pt-[94px]")}>
      <CustomerNavbar />
      <GetLocation />
      <Box
        className="fixed left-0 top-0 bg-[url(/bg-pattern.png)] w-screen h-screen -z-20 opacity-[0.15]"
        style={{
          backgroundSize: "200px",
        }}
      />

      <Box className={clsx("grow relative container mx-auto  p-4 pt-12")}>
        {children}
      </Box>
    </Box>
  );
}
