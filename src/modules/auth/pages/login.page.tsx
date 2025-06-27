import { Link } from "@/i18n/navigation";
import { Box } from "@/shared/components/box/box.component";
import { Heading } from "@/shared/components/text/heading.component";
import { Text } from "@/shared/components/text/text.component";
import { getTranslations } from "next-intl/server";
import { LoginForm } from "../components/login-form";

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

            <LoginForm />
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
