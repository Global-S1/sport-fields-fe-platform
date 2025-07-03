import { config } from "@/config/config";
import { LoginPage } from "@/modules/auth/pages/login.page";
import { GenerateMetadataProps } from "@/shared/interfaces/types";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }: GenerateMetadataProps) {
  const t = createTranslator({
    locale: params.locale,
    messages: await import(`../../../../messages/${params.locale}.json`),
  });

  return {
    title: t("auth.login.metadata.title"),
    description: t("auth.login.metadata.description"),
    alternates: {
      canonical: `${config.DOMAIN}/${params.locale}/auth`,
    },
    openGraph: {
      title: t("auth.login.metadata.title"),
      description: t("auth.login.metadata.description"),
      url: `${config.DOMAIN}/${params.locale}/auth`,
      siteName: "Sport Field",
      locale: params.locale,
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
