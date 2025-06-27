/* eslint-disable react-hooks/exhaustive-deps */
import { IRegisterAdminFields } from "@/modules/auth/interfaces/register-form.interface";
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
        // label={content?.passwordInput.label}
        // placeholder={content?.passwordInput.placeholder}
        formOptions={{
          form,
          name: "password",
          validations: {
            // required: content?.passwordInput.validations.required,
            // minLength: {
            //   value: 8,
            //   message: String(content?.passwordInput.validations.minLength),
            // },
            // validate: {
            //   hasUppercase: (value) =>
            //     typeof value === "string"
            //       ? /[A-Z]/.test(value) ||
            //         String(content?.passwordInput.validations.hasUppercase)
            //       : String(content?.passwordInput.validations.hasUppercase),
            //   hasLowercase: (value) =>
            //     typeof value === "string"
            //       ? /[a-z]/.test(value) ||
            //         String(content?.passwordInput.validations.hasLowercase)
            //       : String(content?.passwordInput.validations.hasLowercase),
            //   hasNumber: (value) =>
            //     typeof value === "string"
            //       ? /[0-9]/.test(value) ||
            //         String(content?.passwordInput.validations.hasNumber)
            //       : String(content?.passwordInput.validations.hasNumber),
            //   hasSymbol: (value) =>
            //     typeof value === "string"
            //       ? /[!@#$&/*]/.test(value) ||
            //         String(content?.passwordInput.validations.hasSymbol)
            //       : String(content?.passwordInput.validations.hasSymbol),
            // },
          },
        }}
        className="mb-8"
      />
      <Box className="my-4 flex flex-col gap-2">
        <ValidationField text={""} valid={password?.length >= 8} />
        <ValidationField text={""} valid={/[A-Z]/.test(password || "")} />
        <ValidationField text={""} valid={/[a-z]/.test(password || "")} />
        <ValidationField text={""} valid={/[0-9]/.test(password || "")} />
        <ValidationField text={""} valid={/[!@#$&/*]/.test(password || "")} />
      </Box>

      <InputPassword
        // label={String(content?.confirmPasswordInput.label)}
        className="mt-8 md:mt-0"
        // placeholder={String(content?.confirmPasswordInput.placeholder)}
        formOptions={{
          form,
          name: "confirmPassword",
          validations: {
            required: String(),
            // content?.confirmPasswordInput.validations.required
            // validate: (value) =>
            //   value === form.getValues("password") ||
            //   String(content?.confirmPasswordInput.validations.validate),
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
          {/* {content?.buttons.back} */}
        </Button>
        <Button
          color="secondary"
          disabled={!form.formState.isValid}
          isLoading={isLoading}
        >
          {/* {content?.buttons.submit} */}
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
