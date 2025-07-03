import { config } from "@/config/config";
import { RegisterPage } from "@/modules/auth/pages/register.page";
import { PageProps } from "@/shared/interfaces/types";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }: PageProps) {
  const locale = (await params).locale;

  const t = createTranslator({
    locale,
    messages: await import(`../../../../../messages/${locale}.json`),
  });

  return {
    title: t("auth.register.metadata.title"),
    description: t("auth.register.metadata.description"),
    alternates: {
      canonical: `${config.DOMAIN}/${locale}/auth/register`,
    },
    openGraph: {
      title: t("auth.register.metadata.title"),
      description: t("auth.register.metadata.description"),
      url: `${config.DOMAIN}/${locale}/register`,
      siteName: "Sport Field",
      locale,
      type: "website",
    },
  };
}

export default function Register() {
  return <RegisterPage />;
}
