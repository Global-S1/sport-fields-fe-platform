"use client";

import { getDistanceBetweenCoords } from "@/shared/helpers/get-distance-cords.helper";
import { locationAtom } from "@/shared/stores/global";
import { useAtomValue } from "jotai";
import { useTranslations } from "next-intl";

interface Props {
  longitude: string | null;
  latitude: string | null;
}

export default function LocationSection({ longitude, latitude }: Props) {
  const t = useTranslations("public.pages.sportFieldsDetail.text");
  const location = useAtomValue(locationAtom);

  if (!location || !longitude || !latitude) return;

  return (
    <p className="text-gray-600 mb-1">
      {getDistanceBetweenCoords(
        { longitude: Number(longitude), latitude: Number(latitude) },
        location
      ).toFixed(2)}{" "}
      {t("distance")}
    </p>
  );
}
