"use client";

import { triggerToast } from "@/shared/components/toast/toast-component";
import { TOAST_MODE } from "@/shared/components/toast/toast.config";
import { getCurrentLocation } from "@/shared/helpers/get-location.helper";
import { locationAtom } from "@/shared/stores/global";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { useTranslations } from "use-intl";

export default function GetLocation() {
  const setLocation = useSetAtom(locationAtom);
  const t = useTranslations("public.pages.sportFields.request");

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const coords = await getCurrentLocation();
        setLocation(coords);
      } catch {
        triggerToast({
          mode: TOAST_MODE.WARNING,
          title: t("errorLocation"),
        });
      }
    };

    fetchLocation();
  }, [setLocation, t]);

  return <></>;
}
