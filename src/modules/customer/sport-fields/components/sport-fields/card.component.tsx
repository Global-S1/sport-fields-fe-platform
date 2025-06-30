"use client";

import { Link } from "@/i18n/navigation";
import { getDistanceBetweenCoords } from "@/shared/helpers/get-distance-cords.helper";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { LoaderIcon } from "react-hot-toast";
import { MdStar } from "react-icons/md";
import clsx from "../../../../../libs/clsx";
import { Box } from "../../../../../shared/components/box/box.component";
import { Text } from "../../../../../shared/components/text/text.component";
import { ISportField } from "../../interfaces/sport-fields.interface";

interface Props {
  // content?: ISportFieldCardContent;
  sportField: ISportField;
}

export const SportFieldCard = ({ sportField }: Props) => {
  const t = useTranslations("public.pages.sportFields.card");
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const {
    name,
    featureImage,
    averageRate,
    productsUuid,
    availablePromotionDatetime,
    latitude,
    longitude,
    pricePerHour,
  } = sportField;

  const distance =
    latitude && longitude
      ? getDistanceBetweenCoords(
          { latitude: 0, longitude: 0 },
          {
            latitude: Number(latitude),
            longitude: Number(longitude),
          }
        )
      : null;
  return (
    <Link
      href={`/details/${productsUuid}`}
      className="rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-primary-300 duration-200 h-[250px] max-w-[360px]"
    >
      <Box className="relative">
        {isLoading && (
          <Box className="absolute left-0 top-0 w-full h-full bg-[#00000055] flex items-center justify-center">
            <LoaderIcon />
          </Box>
        )}
        <img
          src={featureImage}
          alt={name}
          className={clsx(
            "w-full h-32",
            isError ? "object-contain p-4 bg-blueSport-100" : "object-cover"
          )}
          onError={(e) => {
            e.currentTarget.src = "/default-image.svg";
            setIsError(true);
          }}
          onLoad={() => setIsLoading(false)}
        />
      </Box>
      <Box className="p-4">
        <Box className="flex items-center justify-between">
          <Text model="lg" className="line-clamp-1 font-semibold">
            {name}
          </Text>
          {averageRate && (
            <Text tag="p" className="flex items-center gap-1">
              {averageRate}
              <Text tag="span" className="text-yellow-500">
                <MdStar />
              </Text>
            </Text>
          )}
        </Box>
        {distance && (
          <Text className="line-clamp-1 font-semibold text-gray-500">{`${distance.toFixed(
            2
          )} ${t("distance")}`}</Text>
        )}
        <Box className="flex justify-between items-center mt-2">
          <Text className="line-clamp-1 text-gray-500">
            {availablePromotionDatetime}
          </Text>
          <Text className="line-clamp-1 font-bold">
            {pricePerHour} {t("price")}
          </Text>
        </Box>
      </Box>
    </Link>
  );
};
