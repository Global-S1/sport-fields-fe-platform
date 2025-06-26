import { Link } from "@/i18n/navigation";
import { Box } from "@/shared/components/box/box.component";
import { Button } from "@/shared/components/button/button.component";
import { InputPassword } from "@/shared/components/input/input-password.component";
import { Input } from "@/shared/components/input/input.component";
import { Heading } from "@/shared/components/text/heading.component";
import { Text } from "@/shared/components/text/text.component";
import { getTranslations } from "next-intl/server";
import { MdOutlineLock, MdOutlineMail } from "react-icons/md";

export const LoginPage = async () => {
  const t = await getTranslations("auth.login");

  return (
    <Box className="flex justify-center h-screen bg-primary-50">
      <Box className="hidden md:flex grow max-w-2xl h-full items-center justify-center">
        <img src="/login-image.svg" className="w-full" />
      </Box>
      <Box className="flex flex-col justify-center items-center w-full md:max-w-lg">
        <Box className="w-full h-[90%] flex justify-center items-center">
          <Box className="flex flex-col">
            <Box className="mb-6">
              <Heading className="font-semibold text-title-main dark:text-title-inverse mb-2">
                {t("title")}
              </Heading>
              <Text>{t("description")}</Text>
            </Box>

            <form
              className="flex flex-col"
              autoComplete="off"
              // onSubmit={loginForm.handleSubmit(login)}
            >
              <Box className="mb-4">
                <Input
                  label={t("usernameInput.label")}
                  placeholder={t("usernameInput.placeholder")}
                  className="w-full "
                  inputContainerClassName="bg-white"
                  // formOptions={{
                  //   name: "email",
                  //   form: loginForm,
                  //   validations: {
                  //     required: {
                  //       value: true,
                  //       message: `${content?.usernameInput.validations.required}`,
                  //     },
                  //   },
                  // }}
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
                  // formOptions={{
                  //   name: "password",
                  //   form: loginForm,
                  //   validations: {
                  //     required: {
                  //       value: true,
                  //       message: `${content?.passwordInput.validations.required}`,
                  //     },
                  //   },
                  // }}
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
                // isLoading={isPending}
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
          </Box>
        </Box>
        <Box className="mt-4 flex justify-end">
          <Link
            href="/terms-and-services"
            className="text-right text-md text-text-soft font-normal"
          >
            {t("termAndServices")}
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
