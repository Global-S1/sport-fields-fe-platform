"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import clsx from "../../../../libs/clsx";
import { Box } from "../../../../shared/components/box/box.component";
import { ERegisterAdminSteps } from "../../enums/register.enum";
import useRegisterAdmin from "../../hooks/useRegisterAdmin";
import { FormAdminDataForm } from "./form-admin/data-form";
import { FormAdminPasswordForm } from "./form-admin/password-form";

export const RegisterFormAdmin = () => {
  const { isPending, error, form, registerAdminSubmit } = useRegisterAdmin();

  const t = useTranslations("auth.register.admin");
  const [steps, setSteps] = useState<ERegisterAdminSteps>(
    ERegisterAdminSteps.DATA
  );

  return (
    <Box className="pb-4">
      <Box>
        <h1 className="text-clip bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-2xl font-semibold text-center mb-4">
          {t("title")}
        </h1>
      </Box>

      <Box className="w-full max-w-xl h-16 mx-auto flex items-center justify-evenly">
        {Object.values(ERegisterAdminSteps).map((step, index) => (
          <button
            className="flex flex-col items-center w-fit cursor-default"
            key={step}
          >
            <Box
              className={clsx(
                "rounded-full size-8 flex items-center justify-center",
                steps === step
                  ? "bg-blueSport-500 text-white"
                  : "border border-blueSport-500 text-blueSport-500"
              )}
            >
              <span className="font-semibold">{index + 1}</span>
            </Box>
            <Box
              className={clsx(
                "h-1 w-10 mt-1",
                steps === step
                  ? "bg-blueSport-500"
                  : "border border-blueSport-500"
              )}
            ></Box>
          </button>
        ))}
      </Box>

      {error && (
        <Box className="w-full max-w-xl mx-auto bg-red-500 text-white text-center text-sm font-medium rounded-xl my-4 p-2">
          {error}
        </Box>
      )}

      {steps === ERegisterAdminSteps.DATA && (
        <FormAdminDataForm form={form} setSteps={setSteps} />
      )}
      {steps === ERegisterAdminSteps.PASSWORD && (
        <FormAdminPasswordForm
          form={form}
          onSubmit={registerAdminSubmit}
          isLoading={isPending}
          setSteps={setSteps}
        />
      )}
    </Box>
  );
};
