import { config } from "@/config/config";
import { RecoveryPasswordPage } from "@/modules/auth/pages/recovery-password.page";
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
    description: t("auth.recoveryPassword.metadata.description"),
    alternates: {
      canonical: `${config.DOMAIN}/${locale}/auth/recovery-password`,
    },
    openGraph: {
      title: t("auth.recoveryPassword.metadata.title"),
      description: t("auth.recoveryPassword.metadata.description"),
      url: `${config.DOMAIN}/${locale}/recovery-password`,
      siteName: "Sport Field",
      locale,
      type: "website",
    },
  };
}

export default function RecoveryPassword() {
  return <RecoveryPasswordPage />;
}
