import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("auth.login");

  return <div>{t("title")}</div>;
}
