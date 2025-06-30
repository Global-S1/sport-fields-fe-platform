"use client";
import { Box } from "@/shared/components/box/box.component";
import { IProfileFavorites } from "../../interfaces/profile.interface";
import { IoMdHeartEmpty } from "react-icons/io";
import { Text } from "@/shared/components/text/text.component";
import { Link } from "@/i18n/navigation";
import { ProfileService } from "@/services/customer/profile/profile.service";
import { useTranslations } from "next-intl";
import { useAtomValue } from "jotai";
import { currentUserAtom } from "@/shared/store/global.store";

const { getFavorites } = ProfileService();

export const ProfileFavorites = async () => {
  const t = useTranslations("profile");
  const user = useAtomValue(currentUserAtom);
  const data = user?.userUuid
    ? ((await getFavorites(user.userUuid)).data.items as IProfileFavorites[])
    : null;

  return (
    <Box className="container mx-auto px-4">
      <Box className="flex items-center gap-2 my-4">
        <i className="block w-fit p-2 rounded-full bg-red-400 ">
          <IoMdHeartEmpty className="text-white" size={25} />
        </i>
        <Text className="font-bold">{t("title")}</Text>
      </Box>
      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data &&
          data.map((item, index) => (
            <Link
              href={`/details/${item.productUuid}`}
              key={index}
              className="p-4 rounded-lg shadow-lg flex gap-4"
            >
              <img
                src={item.featureImage}
                alt={item.name}
                className="size-16 object-cover rounded-lg"
              />
              <Box className="flex flex-col justify-center">
                <Text className="font-bold text-blueSport-700">
                  {item.name}
                </Text>
                <Text>{item.description}</Text>
              </Box>
            </Link>
          ))}
      </Box>
    </Box>
  );
};
