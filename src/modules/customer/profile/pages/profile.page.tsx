"use client";
import { Box } from "@/shared/components/box/box.component";
import { Heading } from "@/shared/components/text/heading.component";
import { ProfileAvatar } from "../components/profile/avatar";
import { ProfileFavorites } from "../components/profile/favorites";
import CustomerLayout from "@/app/[locale]/(public)/layout";
import { useTranslations } from "next-intl";

const ProfilePage = () => {
  const t = useTranslations("profile");

  return (
    // <CustomerLayout background={false}>
    <CustomerLayout params={Promise.resolve({ locale: "es" })}>
      {
        <Box className="pt-8">
          <Heading className="text-center font-medium mb-4" model="sm">
            {t("title")}
          </Heading>
          <ProfileAvatar />

          <ProfileFavorites />
        </Box>
      }
    </CustomerLayout>
  );
};

export default ProfilePage;
