"use client";
import { getFavorites } from "@/services/customer/profile/profile.service";
import { Box } from "@/shared/components/box/box.component";
import { Heading } from "@/shared/components/text/heading.component";
import { currentTokenAtom, currentUserAtom } from "@/shared/store/global.store";
import { useAtomValue } from "jotai";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { ProfileAvatar } from "../components/profile/avatar";
import { ProfileFavorites } from "../components/profile/favorites";
import { IProfileFavorites } from "../interfaces/profile.interface";

const ProfilePage = () => {
  const t = useTranslations("profile");

  const user = useAtomValue(currentUserAtom);
  const token = useAtomValue(currentTokenAtom);
  console.log("user", user);
  console.log("token", token);

  const [data, setData] = useState<IProfileFavorites[]>();

  useEffect(() => {
    if (user?.userUuid) {
      getFavorites(user.userUuid, token).then((res) =>
        setData(res.data.items as IProfileFavorites[])
      );
    }
  }, [user?.userUuid]);

  return (
    <Box className="pt-8">
      <Heading className="text-center font-medium mb-4" model="sm">
        {t("title")}
      </Heading>
      <ProfileAvatar />

      {data && <ProfileFavorites data={data} />}
    </Box>
  );
};

export default ProfilePage;
