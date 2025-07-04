import { config } from "@/config/config";
import ProfilePage from "@/modules/customer/profile/pages/profile.page";
import { PageProps } from "@/shared/interfaces/types";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }: PageProps) {
  const locale = (await params).locale;

  const t = createTranslator({
    locale,
    messages: await import(`../../../../../messages/${locale}.json`),
  });

  return {
    title: t("profile.metadata.title"),
    description: t("profile.metadata.description"),
    alternates: {
      canonical: `${config.DOMAIN}/${locale}/profile`,
    },
    openGraph: {
      title: t("profile.metadata.title"),
      description: t("profile.metadata.description"),
      url: `${config.DOMAIN}/${locale}/`,
      siteName: "Sport Field",
      locale,
      type: "website",
    },
  };
}

export default function AppProfilePage() {
  return <ProfilePage />;
}
