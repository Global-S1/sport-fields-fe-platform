"use client";

import { SportFieldFilterResponse } from "@/services/customer/sport-fields/interfaces/sport-field-filters.response";
import { useQueryParams } from "@/shared/hooks/useQueryParams";
import { useUpdateQueryParams } from "@/shared/hooks/useUpdateQueryParams";
import clsx from "clsx";
import { Box } from "../../../../../shared/components/box/box.component";
import { ESportFieldFiltersCode } from "../../enums/sport-field.enum";

interface Props {
  filters: SportFieldFilterResponse[];
}

export const SportFieldFilters = ({ filters }: Props) => {
  const params = useQueryParams();
  const update = useUpdateQueryParams();

  const filtersSportType = filters?.find(
    (e) => e.code == ESportFieldFiltersCode.CATEGORY
  )?.subFilters;

  const filtersSites = filters?.find(
    (e) => e.code == ESportFieldFiltersCode.DISTRICT
  )?.subFilters;

  return (
    <Box className="mb-4">
      <Box className="flex flex-nowrap gap-4 justify-between md:justify-start w-full overflow-x-auto scrollbar-hiddeen min-w-full">
        {filtersSportType?.map((sport) => {
          return (
            <button
              key={sport.value}
              onClick={() => {
                const value =
                  params[ESportFieldFiltersCode.CATEGORY] !== sport.value
                    ? sport.value
                    : "";
                update(ESportFieldFiltersCode.CATEGORY, value);
              }}
              className={clsx(
                "flex items-center gap-1",
                sport.value == params[ESportFieldFiltersCode.CATEGORY]
                  ? "text-primary-400"
                  : "text-gray-600"
              )}
            >
              <span className="font-semibold">{sport.name}</span>
            </button>
          );
        })}
      </Box>

      <Box className="mt-4 flex gap-4 min-w-full overflow-scroll scrollbar-hidden">
        {filtersSites &&
          filtersSites.map((site, index) => (
            <button
              key={index}
              className={clsx(
                "text-nowrap px-2 text-sm rounded-lg shadow-md",
                params[ESportFieldFiltersCode.DISTRICT] === site.value
                  ? "bg-primary-400 text-white"
                  : "bg-white"
              )}
              onClick={() => {
                const value =
                  params[ESportFieldFiltersCode.DISTRICT] !== site.value
                    ? site.value
                    : "";
                update(ESportFieldFiltersCode.DISTRICT, value);
              }}
            >
              {site.name}
            </button>
          ))}
      </Box>
    </Box>
  );
};
