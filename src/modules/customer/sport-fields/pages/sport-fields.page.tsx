import {
  getSportFieldFilters,
  getSportFields,
} from "@/services/customer/sport-fields/sport-fields.service";
import { Box } from "@/shared/components/box/box.component";
import { PageProps } from "@/shared/interfaces/types";
import { getTranslations } from "next-intl/server";
import { SportFieldCard } from "../components/sport-fields/card.component";
import { SportFieldsFiltersModal } from "../components/sport-fields/filters-modal.component";
import { SportFieldFilters } from "../components/sport-fields/filters.components";
import PaginationSportFields from "../components/sport-fields/pagination-sport-fields";
import { SearcherSportField } from "../components/sport-fields/searcher.component";

const SportFields = async (props: PageProps) => {
  const t = await getTranslations("public.pages.sportFields");
  const queryParams = await props.searchParams;

  const filters = await getSportFieldFilters();
  const products = await getSportFields({
    page: queryParams.page || "1",
    size: queryParams.size || "12",
    name: queryParams.name,
    district: queryParams.district,
    dateInit: queryParams.startDate?.toString() ?? null,
    dateEnd: queryParams.endDate?.toString() ?? null,
    categoryUuid: queryParams.category,
    hour: queryParams.hour,
    sizeField: queryParams.size_field,
  });

  return (
    <>
      <SearcherSportField />
      <SportFieldFilters filters={filters.data} />
      <SportFieldsFiltersModal filters={filters.data} />
      <Box className="grid justify-items-center sm:justify-items-stretch sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.data.items &&
          products.data.items.map((product, i) => (
            <SportFieldCard
              key={`${product.productsUuid}-${i}`}
              sportField={product}
            />
          ))}
      </Box>
      {!products.data.items.length && (
        <Box className="mt-4 w-full flex flex-col items-center">
          <img src="/empty-space.svg" alt="empty-space" className="h-72" />
          <p className="text-xl font-medium text-gray-500 text-center">
            {t("request.noData")}
          </p>
        </Box>
      )}

      <PaginationSportFields
        currentPage={products.data.pagination.page}
        limit={products.pagination?.size || 12}
        totalItems={products.data.pagination.totalItems}
      />
    </>
  );
};

export default SportFields;
