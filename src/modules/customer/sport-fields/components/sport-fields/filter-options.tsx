import { SportFieldFilterResponse } from "@/services/customer/sport-fields/interfaces/sport-field-filters.response";
import { ESportFieldFiltersCode } from "../../enums/sport-field.enum";

interface Props {
  filters?: SportFieldFilterResponse[];
  code: ESportFieldFiltersCode;
  filterSelected?: string;
  changueFilterSelected: (
    filter: ESportFieldFiltersCode,
    value: string
  ) => void;
}

export default function FilterOptions({
  code,
  filters,
  changueFilterSelected,
  filterSelected,
}: Props) {
  const filter = filters?.find((filter) => filter.code === code);

  return (
    filter && (
      <article className="group w-full">
        <h4 className="text-lg font-semibold mb-3">{filter.name}</h4>

        <div className="flex gap-2 max-w-full overflow-auto scrollbar-fade pb-1 ">
          {filter.subFilters.map((subFilter, index) => (
            <span
              className={`py-2 px-4 border border-main-800 rounded-xl text-nowrap cursor-pointer ${
                filterSelected === subFilter.value
                  ? " text-white bg-primary-400"
                  : " text-main-800"
              }`}
              onClick={() => {
                const value =
                  subFilter.value == filterSelected ? "" : subFilter.value;
                changueFilterSelected(code, value);
              }}
              key={index}
            >
              {subFilter.name}
            </span>
          ))}
        </div>
      </article>
    )
  );
}
