import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction } from "react";
import clsx from "../../../../../libs/clsx";
import { Box } from "../../../../../shared/components/box/box.component";
import { ERegisterType } from "../../../enums/register.enum";

interface Props {
  typeSelected: ERegisterType;
  setTypeSelected: Dispatch<SetStateAction<ERegisterType>>;
}

export const TabsRegisterType = ({ setTypeSelected, typeSelected }: Props) => {
  const t = useTranslations("auth.register.tabs");

  return (
    <Box
      tag="section"
      className="max-w-md xl:max-w-xl w-full mx-auto mt-12 relative flex items-center rounded-lg font-semibold shadow-lg py-2"
    >
      <Box
        className={clsx(
          "h-full w-1/2 bg-blueSport-500 absolute -z-10 rounded-lg transition-all duration-200",
          typeSelected === ERegisterType.ADMIN && "translate-x-full"
        )}
      ></Box>
      <button
        className={clsx(
          "w-1/2",
          typeSelected === ERegisterType.CUSTOMER && "text-white"
        )}
        onClick={() => {
          setTypeSelected(ERegisterType.CUSTOMER);
        }}
      >
        {t("customer")}
      </button>
      <button
        className={clsx(
          "w-1/2",
          typeSelected === ERegisterType.ADMIN && "text-white"
        )}
        onClick={() => {
          setTypeSelected(ERegisterType.ADMIN);
        }}
      >
        {t("admin")}
      </button>
    </Box>
  );
};
