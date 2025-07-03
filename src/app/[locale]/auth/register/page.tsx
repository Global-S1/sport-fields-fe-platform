import { config } from "@/config/config";
import { RegisterPage } from "@/modules/auth/pages/register.page";
import { GenerateMetadataProps } from "@/shared/interfaces/types";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }: GenerateMetadataProps) {
  const t = createTranslator({
    locale: params.locale,
    messages: await import(`../../../../../messages/${params.locale}.json`),
  });

  return {
    title: t("auth.register.metadata.title"),
    description: t("auth.register.metadata.description"),
    alternates: {
      canonical: `${config.DOMAIN}/${params.locale}/auth/register`,
    },
    openGraph: {
      title: t("auth.register.metadata.title"),
      description: t("auth.register.metadata.description"),
      url: `${config.DOMAIN}/${params.locale}/register`,
      siteName: "Sport Field",
      locale: params.locale,
      type: "website",
    },
  };
}

export default function Register() {
  return <RegisterPage />;
}
