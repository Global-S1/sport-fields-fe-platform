"use client";

import { Box } from "@/shared/components/box/box.component";
import { Button } from "@/shared/components/button/button.component";
import { InputPassword } from "@/shared/components/input/input-password.component";
import { Input } from "@/shared/components/input/input.component";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { MdOutlineLock, MdOutlineMail } from "react-icons/md";
import useLogin from "../hooks/useLogin";

export const LoginForm = () => {
  const { form, isPending, loginSumit } = useLogin();
  const t = useTranslations("auth.login");

  return (
    <form
      className="flex flex-col"
      autoComplete="off"
      onSubmit={form.handleSubmit(loginSumit)}
    >
      <Box className="mb-4">
        <Input
          label={t("usernameInput.label")}
          placeholder={t("usernameInput.placeholder")}
          className="w-full "
          inputContainerClassName="bg-white"
          formOptions={{
            name: "email",
            form: form,
            validations: {
              required: {
                value: true,
                message: t("usernameInput.validations.required"),
              },
            },
          }}
          absoulteErrorMessage
          prefixItem={<MdOutlineMail />}
        />
      </Box>
      <Box className="mb-4">
        <InputPassword
          label={t("passwordInput.label")}
          placeholder={t("passwordInput.placeholder")}
          className="w-full mt-4"
          inputContainerClassName="bg-white"
          formOptions={{
            name: "password",
            form: form,
            validations: {
              required: {
                value: true,
                message: t("passwordInput.validations.required"),
              },
            },
          }}
          color="primary"
          prefixItem={<MdOutlineLock />}
        />
      </Box>

      <Box className="flex text-xs gap-2 mt-2">
        <Link
          href="/auth/recovery-password"
          className="text-sm underline text-blueSport-500 hover:text-blueSport-700 duration-200"
        >
          {t("forgotPassword")}
        </Link>
      </Box>

      <Button
        type="submit"
        color="secondary"
        className="w-full mt-6 disabled:bg-salem-400 !rounded-full"
        isLoading={isPending}
      >
        {t("loginBtn")}
      </Button>

      <p className="mt-2 text-center text-sm text-gray-500">
        {t("register.info")}
        <Link
          href="register"
          className="text-blueSport-500 underline hover:text-blueSport-700 duration-200 ml-2"
        >
          {t("register.btnText")}
        </Link>
      </p>
    </form>
  );
};
