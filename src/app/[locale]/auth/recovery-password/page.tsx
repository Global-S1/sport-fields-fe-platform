import { config } from "@/config/config";
import { RecoveryPasswordPage } from "@/modules/auth/pages/recovery-password.page";
import { GenerateMetadataProps } from "@/shared/interfaces/types";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }: GenerateMetadataProps) {
  const t = createTranslator({
    locale: params.locale,
    messages: await import(`../../../../../messages/${params.locale}.json`),
  });

  return {
    title: t("auth.register.metadata.title"),
    description: t("auth.recoveryPassword.metadata.description"),
    alternates: {
      canonical: `${config.DOMAIN}/${params.locale}/auth/recovery-password`,
    },
    openGraph: {
      title: t("auth.recoveryPassword.metadata.title"),
      description: t("auth.recoveryPassword.metadata.description"),
      url: `${config.DOMAIN}/${params.locale}/recovery-password`,
      siteName: "Sport Field",
      locale: params.locale,
      type: "website",
    },
  };
}

export default function RecoveryPassword() {
  return <RecoveryPasswordPage />;
}
