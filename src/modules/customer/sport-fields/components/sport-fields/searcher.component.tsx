"use client";

import { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import { ESportFieldFiltersCode } from "../../enums/sport-field.enum";
// import { sportFieldFiltersAtom } from "../../stores/sport-field.store";
import { useQueryParams } from "@/shared/hooks/useQueryParams";
import { useUpdateQueryParams } from "@/shared/hooks/useUpdateQueryParams";
import { useSetAtom } from "jotai";
import { useTranslations } from "next-intl";
import { IoMdOptions } from "react-icons/io";
import clsx from "../../../../../libs/clsx";
import { filtersModalAtom } from "../../store/sport-field.store";

export const SearcherSportField = () => {
  const updateQueryParams = useUpdateQueryParams();
  const queryParams = useQueryParams();
  const setFilterModal = useSetAtom(filtersModalAtom);
  const t = useTranslations("public.pages.sportFields.searcher");

  const toggleFilterModal = () => setFilterModal((prev) => !prev);

  const [inputValue, setInputValue] = useState(
    queryParams[ESportFieldFiltersCode.NAME] || ""
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      updateQueryParams(ESportFieldFiltersCode.NAME, inputValue);
    }, 500);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <div className="flex items-center justify-between gap-2 mb-4">
      <label
        htmlFor="search"
        className="flex bg-white items-center rounded-2xl overflow-hidden shadow-lg grow p-2 cursor-text"
      >
        <MdSearch size={24} />
        <input
          type="text"
          name="search"
          id="search"
          className="bg-transparent w-fit outline-none"
          placeholder={t("placeholder")}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <button
        className={clsx(
          "rounded-lg duration-200 rotate-90 cursor-pointer text-gray-600 hover:text-primary-400"
        )}
        onClick={toggleFilterModal}
      >
        <IoMdOptions size={32} />
      </button>
    </div>
  );
};
