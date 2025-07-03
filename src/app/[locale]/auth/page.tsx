import { config } from "@/config/config";
import { LoginPage } from "@/modules/auth/pages/login.page";
import { PageProps } from "@/shared/interfaces/types";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }: PageProps) {
  const locale = (await params).locale;

  const t = createTranslator({
    locale,
    messages: await import(`../../../../messages/${locale}.json`),
  });

  return {
    title: t("auth.login.metadata.title"),
    description: t("auth.login.metadata.description"),
    alternates: {
      canonical: `${config.DOMAIN}/${locale}/auth`,
    },
    openGraph: {
      title: t("auth.login.metadata.title"),
      description: t("auth.login.metadata.description"),
      url: `${config.DOMAIN}/${locale}/auth`,
      siteName: "Sport Field",
      locale,
      type: "website",
    },
  };
}

export default function Login() {
  return (
    <>
      <LoginPage />;
    </>
  );
}
