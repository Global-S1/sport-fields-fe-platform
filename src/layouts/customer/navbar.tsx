import clsx from "@/libs/clsx";
import { Box } from "@/shared/components/box/box.component";
import { ActiveLink } from "@/shared/components/link/active-link.component";
import { Logo } from "@/shared/components/logo/logo.component";
import { Text } from "@/shared/components/text/text.component";
import { BackButton } from "./back-button";
import { navbarItems } from "./navbar-items";

export const CustomerNavbar = () => {
  return (
    <>
      <Box
        tag="nav"
        className={clsx(
          "fixed bottom-0 z-50 rounded-t-[35px] h-[94px] w-full bg-white md:hidden"
        )}
      >
        <Box className="h-full flex items-center justify-between container mx-auto px-4 sm:px-10">
          {navbarItems.map((item) => {
            const Icon = item.icon;
            return (
              <ActiveLink
                href={item.link}
                className="flex flex-col items-center font-semibold text-gray-700"
                activeClassName="text-green-500"
                key={item.name}
              >
                <Icon size={item.size ?? 28} />
                <Text model="sm">{item.name}</Text>
              </ActiveLink>
            );
          })}
        </Box>
      </Box>

      <Box
        tag="nav"
        className="hidden md:block fixed z-50 top-0 h-[94px] w-full bg-white"
      >
        <Box className="h-full container mx-auto w-full flex items-center justify-between gap-8 px-4">
          <BackButton />

          <Logo />

          <Box
            tag="ul"
            className="grow h-[50px] flex items-center justify-end gap-8"
          >
            {navbarItems.map((item) => {
              const Icon = item.icon;
              return (
                <ActiveLink
                  href={item.link}
                  key={item.name}
                  className="flex flex-col items-center p-2 text-gray-700 hover:text-secondary-600 duration-150"
                  activeClassName="bg-secondary-600 rounded-xl text-white hover:bg-secondary-500 duration-150"
                >
                  <i className="size-8 flex items-center justify-center">
                    <Icon size={20} />
                  </i>
                  <Text model="sm" className="font-semibold">
                    {item.name}
                  </Text>
                </ActiveLink>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
};
