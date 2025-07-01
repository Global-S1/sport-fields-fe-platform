"use client";
import { Box } from "@/shared/components/box/box.component";
import { Button } from "@/shared/components/button/button.component";
import { useLogout } from "@/shared/hooks/useLogout";
import { useCustomRouter } from "@/shared/hooks/useRouter";
import { isAdminAtom } from "@/shared/store/global.store";
import { useAtomValue } from "jotai";
import { useTranslations } from "next-intl";

export const ProfileButtons = () => {
  const t = useTranslations("profile");

  const {
    logout,
    states: { isPendingLogout },
  } = useLogout();

  const navigate = useCustomRouter();

  const isAdmin = useAtomValue(isAdminAtom);

  const changueAdministratorView = () => {
    if (isAdmin) {
      navigate.push("/admin");
    }
  };

  return (
    <>
      <Box className="md:hidden flex flex-col items-center gap-6 mt-6 pt-6 border-t border-gray-200">
        {isAdmin && (
          <Button
            color="secondary"
            className="w-fit"
            onClick={changueAdministratorView}
          >
            {t("buttons.changeAdministrator")}
          </Button>
        )}

        <Button
          color="red"
          outline
          className="w-fit"
          onClick={logout}
          isLoading={isPendingLogout}
        >
          {t("buttons.closeSesion")}
        </Button>
      </Box>

      <Box className="hidden md:flex space-x-4 mb-6">
        {isAdmin && (
          <Button color="secondary" onClick={changueAdministratorView}>
            {t("buttons.changeAdministrator")}
          </Button>
        )}

        <Button
          color="red"
          outline
          onClick={logout}
          isLoading={isPendingLogout}
        >
          {t("buttons.closeSesion")}
        </Button>
      </Box>
    </>
  );
};
