/* eslint-disable react-hooks/exhaustive-deps */
import { IRegisterAdminFields } from "@/modules/auth/interfaces/register-form.interface";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import { MdCheckCircleOutline, MdOutlineCancel } from "react-icons/md";
import { Box } from "../../../../../shared/components/box/box.component";
import { Button } from "../../../../../shared/components/button/button.component";
import { InputPassword } from "../../../../../shared/components/input/input-password.component";
import { ERegisterAdminSteps } from "../../../enums/register.enum";

interface Props {
  form: UseFormReturn<IRegisterAdminFields>;
  onSubmit: (value: IRegisterAdminFields) => void;
  setSteps: (step: ERegisterAdminSteps) => void;
  isLoading?: boolean;
}

export const FormAdminPasswordForm = ({
  form,
  onSubmit,
  setSteps,
  isLoading,
}: Props) => {
  const t = useTranslations("auth.register.admin.formAdminPasswordForm");
  const password = form.watch("password");
  const values = form.getValues();

  useEffect(() => {
    form.reset(values);
  }, []);

  return (
    <form
      className="w-full max-w-sm mx-auto"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <InputPassword
        label={t("passwordInput.label")}
        placeholder={t("passwordInput.placeholder")}
        formOptions={{
          form,
          name: "password",
          validations: {
            required: t("passwordInput.validations.required"),
            minLength: {
              value: 8,
              message: t("passwordInput.validations.minLength"),
            },
            validate: {
              hasUppercase: (value) =>
                typeof value === "string"
                  ? /[A-Z]/.test(value) ||
                    t("passwordInput.validations.hasUppercase")
                  : t("passwordInput.validations.hasUppercase"),
              hasLowercase: (value) =>
                typeof value === "string"
                  ? /[a-z]/.test(value) ||
                    t("passwordInput.validations.hasLowercase")
                  : t("passwordInput.validations.hasLowercase"),
              hasNumber: (value) =>
                typeof value === "string"
                  ? /[0-9]/.test(value) ||
                    t("passwordInput.validations.hasNumber")
                  : t("passwordInput.validations.hasNumber"),
              hasSymbol: (value) =>
                typeof value === "string"
                  ? /[!@#$&/*]/.test(value) ||
                    t("passwordInput.validations.hasSymbol")
                  : t("passwordInput.validations.hasSymbol"),
            },
          },
        }}
        className="mb-8"
      />
      <Box className="my-4 flex flex-col gap-2">
        <ValidationField
          text={t("validations.minLength")}
          valid={password?.length >= 8}
        />
        <ValidationField
          text={t("validations.hasUppercase")}
          valid={/[A-Z]/.test(password || "")}
        />
        <ValidationField
          text={t("validations.hasLowercase")}
          valid={/[a-z]/.test(password || "")}
        />
        <ValidationField
          text={t("validations.hasNumber")}
          valid={/[0-9]/.test(password || "")}
        />
        <ValidationField
          text={t("validations.hasSymbol")}
          valid={/[!@#$&/*]/.test(password || "")}
        />
      </Box>

      <InputPassword
        label={t("confirmPasswordInput.label")}
        className="mt-8 md:mt-0"
        placeholder={t("confirmPasswordInput.placeholder")}
        formOptions={{
          form,
          name: "confirmPassword",
          validations: {
            required: t("confirmPasswordInput.validations.required"),
            validate: (value) =>
              value === form.getValues("password") ||
              t("confirmPasswordInput.validations.validate"),
          },
        }}
      />
      <Box className="mt-8 flex items-center justify-between">
        <Button
          color="gray"
          className="px-4"
          type="button"
          onClick={() => setSteps(ERegisterAdminSteps.DATA)}
        >
          {t("buttons.back")}
        </Button>
        <Button
          color="secondary"
          disabled={!form.formState.isValid}
          isLoading={isLoading}
        >
          {t("buttons.submit")}
        </Button>
      </Box>
    </form>
  );
};

interface ValidationFieldProps {
  valid: boolean;
  text: string;
}

const ValidationField = ({ text, valid }: ValidationFieldProps) => {
  return (
    <Box className="flex gap-2 items-center text-sm">
      {valid ? (
        <MdCheckCircleOutline className="text-greenLemon-600" />
      ) : (
        <MdOutlineCancel className="text-red-500" />
      )}
      <span>{text}</span>
    </Box>
  );
};
