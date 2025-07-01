import {
  getSportFieldFilters,
  getSportFields,
} from "@/services/customer/sport-fields/sport-fields.service";
import { Box } from "@/shared/components/box/box.component";
import { PageProps } from "@/shared/interfaces/types";
import { SportFieldCard } from "../components/sport-fields/card.component";
import { SportFieldsFiltersModal } from "../components/sport-fields/filters-modal.component";
import { SportFieldFilters } from "../components/sport-fields/filters.components";
import { SearcherSportField } from "../components/sport-fields/searcher.component";

const SportFields = async (props: PageProps) => {
  const queryParams = await props.searchParams;

  const filters = await getSportFieldFilters();
  const products = await getSportFields({
    name: queryParams.name,
    district: queryParams.district,
    dateInit: queryParams.startDate?.toString() ?? null,
    dateEnd: queryParams.endDate?.toString() ?? null,
    categoryUuid: queryParams.category,
    hour: queryParams.hour,
    sizeField: queryParams.size_field,
  });

  // const [location, setLocation] = useState<ILocationCoords>();

  // useEffect(() => {
  //   const fetchLocation = async () => {
  //     try {
  //       const coords = await getCurrentLocation();
  //       setLocation(coords);
  //     } catch {
  //       const content = await getSportFieldContent(lang);
  //       triggerToast({
  //         mode: TOAST_MODE.WARNING,
  //         title: String(content?.request.errorLocation),
  //       });
  //     }
  //   };

  //   fetchLocation();
  // }, []);

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
              // cords={location}
            />
          ))}
      </Box>

      {!products.data.items.length && (
        <Box className="mt-4 w-full flex flex-col items-center">
          <img src="/empty-space.svg" alt="empty-space" className="h-72" />
          <p className="text-xl font-medium text-gray-500 text-center">
            {/* {content?.request.noData} */}
          </p>
        </Box>
      )}
    </>
  );
};

export default SportFields;
