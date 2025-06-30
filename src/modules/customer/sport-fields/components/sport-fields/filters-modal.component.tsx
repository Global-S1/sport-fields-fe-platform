"use client";
import { SportFieldFilterResponse } from "@/services/customer/sport-fields/interfaces/sport-field-filters.response";
import { useQueryParams } from "@/shared/hooks/useQueryParams";
import { useRemoveQueryParams } from "@/shared/hooks/useRemoveQueryParams";
import { useUpdateQueryParams } from "@/shared/hooks/useUpdateQueryParams";
import { useAtom } from "jotai";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { DateValueType } from "react-tailwindcss-datepicker";
import { Modal } from "../../../../../shared/components/modal/modal.component";
import { ESportFieldFiltersCode } from "../../enums/sport-field.enum";
import { filtersModalAtom } from "../../store/sport-field.store";
import FilterDate from "./filter-date";
import FilterDistrict from "./filter-district";
import FilterOptions from "./filter-options";

interface Props {
  filters: SportFieldFilterResponse[];
}

export const SportFieldsFiltersModal = ({ filters }: Props) => {
  const params = useQueryParams();
  const update = useUpdateQueryParams();
  const removeParams = useRemoveQueryParams();
  const [isOpen, setIsOpen] = useAtom(filtersModalAtom);
  const onClose = () => setIsOpen((prev) => !prev);
  const [date, setDate] = useState<DateValueType>({
    startDate: null,
    endDate: null,
  });

  const changueFilterSelected = (
    code: ESportFieldFiltersCode,
    value: string
  ) => {
    update(code, value);
  };

  const cleanFilters = () => {
    removeParams(
      ESportFieldFiltersCode.CATEGORY,
      ESportFieldFiltersCode.DISTRICT,
      ESportFieldFiltersCode.HOUR,
      ESportFieldFiltersCode.SIZE_FIELD,
      ESportFieldFiltersCode.DATE_INIT,
      ESportFieldFiltersCode.DATE_END
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="max-h-[90vh] overflow-y-auto"
    >
      <header>
        <button className="" onClick={onClose}>
          <FaArrowLeft />
        </button>
        <h3 className="mt-6 text-2xl font-semibold pb-4 border-b-2 border-main-300">
          {/* {content?.title} */}
        </h3>
      </header>

      <section className="flex flex-col mt-4 gap-4">
        <FilterOptions
          changueFilterSelected={changueFilterSelected}
          filterSelected={params[ESportFieldFiltersCode.CATEGORY]}
          code={ESportFieldFiltersCode.CATEGORY}
          filters={filters}
        />
        <FilterDistrict
          changueFilterSelected={changueFilterSelected}
          filterSelected={params[ESportFieldFiltersCode.DISTRICT]}
          code={ESportFieldFiltersCode.DISTRICT}
          filters={filters}
        />
        <FilterDate date={date} changeDate={setDate} />
        <FilterOptions
          changueFilterSelected={changueFilterSelected}
          filterSelected={params[ESportFieldFiltersCode.HOUR]}
          code={ESportFieldFiltersCode.HOUR}
          filters={filters}
        />
        <FilterOptions
          changueFilterSelected={changueFilterSelected}
          filterSelected={params[ESportFieldFiltersCode.SIZE_FIELD]}
          code={ESportFieldFiltersCode.SIZE_FIELD}
          filters={filters}
        />
      </section>

      <footer className="flex flex-wrap justify-between mt-4">
        <button className="underline" onClick={cleanFilters}>
          {/* {content?.buttons.delete} */}
        </button>
      </footer>
    </Modal>
  );
};
