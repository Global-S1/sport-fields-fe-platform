/* eslint-disable react-hooks/exhaustive-deps */
import { IRegisterAdminFields } from "@/modules/auth/interfaces/register-form.interface";
import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction, useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import { Box } from "../../../../../shared/components/box/box.component";
import { Button } from "../../../../../shared/components/button/button.component";
import { Input } from "../../../../../shared/components/input/input.component";
import { ERegisterAdminSteps } from "../../../enums/register.enum";

interface Props {
  form: UseFormReturn<IRegisterAdminFields>;
  setSteps: Dispatch<SetStateAction<ERegisterAdminSteps>>;
}

export const FormAdminDataForm = ({ form, setSteps }: Props) => {
  const t = useTranslations("auth.register.admin.formAdminDataForm");
  const values = form.getValues();

  useEffect(() => {
    form.reset(values);
  }, []);

  return (
    <form className="my-4 grid grid-cols-1 md:grid-cols-2 md:gap-4 max-w-2xl mx-auto">
      <Input
        label={t("nameInput.label")}
        placeholder={t("nameInput.placeholder")}
        formOptions={{
          form,
          name: "name",
          validations: {
            required: t("nameInput.validations.required"),
            minLength: {
              value: 2,
              message: t("nameInput.validations.minLength"),
            },
          },
        }}
      />
      <Input
        label={t("lastNameInput.label")}
        placeholder={t("lastNameInput.placeholder")}
        formOptions={{
          form,
          name: "lastName",
          validations: {
            required: t("lastNameInput.validations.required"),
          },
        }}
      />
      <Input
        label={t("emailInput.label")}
        placeholder={t("emailInput.placeholder")}
        formOptions={{
          form,
          name: "email",
          validations: {
            required: t("emailInput.validations.required"),
            pattern: {
              message: t("emailInput.validations.pattern"),
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            },
          },
        }}
      />
      <Input
        label={t("cellphoneInput.label")}
        placeholder={t("cellphoneInput.placeholder")}
        formOptions={{
          form,
          name: "cellphone",
          validations: {
            required: t("cellphoneInput.validations.required"),
            pattern: {
              value: /^\+?\d*$/,
              message: t("cellphoneInput.validations.pattern"),
            },
            minLength: {
              value: 9,
              message: t("cellphoneInput.validations.minLength"),
            },
            maxLength: {
              value: 15,
              message: t("cellphoneInput.validations.maxLength"),
            },
          },
        }}
      />
      <Input
        label={t("docIdentityInput.label")}
        placeholder={t("docIdentityInput.placeholder")}
        formOptions={{
          form,
          name: "docIdentity",
          validations: {
            required: t("docIdentityInput.validations.required"),
            pattern: {
              value: /^[0-9]+$/,
              message: t("docIdentityInput.validations.pattern"),
            },
          },
        }}
      />
      <Input
        label={t("rucInput.label")}
        placeholder={t("rucInput.placeholder")}
        formOptions={{
          form,
          name: "ruc",
          validations: {
            pattern: {
              value: /^[0-9]+$/,
              message: String(t("rucInput.validations.pattern")),
            },
          },
        }}
      />
      <Box className="md:col-span-2 flex items-center justify-end">
        <Button
          onClick={() => {
            setSteps(ERegisterAdminSteps.PASSWORD);
          }}
          disabled={!form.formState.isValid}
          type="button"
        >
          {t("button")}
        </Button>
      </Box>
    </form>
  );
};
