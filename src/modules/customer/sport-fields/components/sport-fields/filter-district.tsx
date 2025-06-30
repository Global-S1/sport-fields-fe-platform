import { SportFieldFilterResponse } from "@/services/customer/sport-fields/interfaces/sport-field-filters.response";
import { Modal } from "@/shared/components/modal/modal.component";
import { useState } from "react";
import { ESportFieldFiltersCode } from "../../enums/sport-field.enum";

interface Props {
  filters?: SportFieldFilterResponse[];
  filterSelected?: string;
  code: ESportFieldFiltersCode;
  changueFilterSelected: (
    filter: ESportFieldFiltersCode,
    value: string
  ) => void;
}

export default function FilterDistrict({
  filterSelected,
  filters,
  changueFilterSelected,
  code,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const filter = filters?.find((filter) => filter.code === code);
  const [search, setSearch] = useState("");

  function onOpenChangue() {
    setIsOpen((prev) => !prev);
  }

  if (!filter) return <></>;

  const filtersToSearch =
    search === ""
      ? filter.subFilters
      : filter.subFilters.filter((subFilter) =>
          subFilter.name
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase())
        );

  console.log(filterSelected);

  return (
    <>
      <article>
        <h4 className="text-lg font-semibold mb-3">{filter.name}</h4>
        <button
          onClick={onOpenChangue}
          className={`w-full py-2 px-4 text-left border border-main-800 rounded-xl ${
            filterSelected !== "" && filterSelected
              ? " text-white bg-primary-400"
              : " text-main-800"
          }`}
        >
          {filterSelected !== "" && filterSelected
            ? filter.subFilters.find(
                (subFilter) => subFilter.value === filterSelected
              )?.name
            : "Seleccionar una ubicación"}
        </button>
      </article>

      <Modal
        isOpen={isOpen}
        onClose={onOpenChangue}
        showCloseBtn
        title={{ label: "Selecciona una Ubicación" }}
        className="max-h-[90vh] overflow-y-auto"
      >
        <div className="flex flex-col gap-5">
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="border border-main-800 text-main-800 p-2 rounded-md"
          />

          {filtersToSearch.map((subFilter, index) => (
            <p
              className="flex gap-2 items-center"
              key={index}
              onClick={() => {
                changueFilterSelected(code, `${subFilter.value}`);
              }}
            >
              <span
                className={`relative w-5 h-5 rounded-full border-2 block cursor-pointer ${
                  filterSelected === subFilter.value
                    ? "border-secondary-500 after:content-[''] after:absolute after:inset-0.5 after:rounded-full after:bg-secondary-500"
                    : "border-main-800 "
                }`}
              />
              {subFilter.name}
            </p>
          ))}
        </div>
      </Modal>
    </>
  );
}
