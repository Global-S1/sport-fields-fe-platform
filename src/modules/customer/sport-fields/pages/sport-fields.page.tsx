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
  });

  // const [searchParams, setSearchParams] = useSearchParams();

  // const [filtersModal, toggleFiltersModal] = useModal();

  // const [filtersSelected, setFiltersSelected] = useState<
  //   Partial<Record<ESportFieldFiltersCode, string>>
  // >({
  //   [ESportFieldFiltersCode.CATEGORY]: "",
  //   [ESportFieldFiltersCode.DISTRICT]: "",
  //   [ESportFieldFiltersCode.HOUR]: "",
  //   [ESportFieldFiltersCode.SIZE_FIELD]: "",
  //   [ESportFieldFiltersCode.SIZE]: "12",
  //   [ESportFieldFiltersCode.NAME]: "",
  // });
  // const [location, setLocation] = useState<ILocationCoords>();

  // const loaderRef = useRef<HTMLDivElement | null>(null);

  // function changueFilterSelected(
  //   filter: ESportFieldFiltersCode,
  //   value: string
  // ) {
  //   setFiltersSelected((prev) => {
  //     const updated = { ...prev, [filter]: value };

  //     const newParams = new URLSearchParams(searchParams);

  //     if (value) {
  //       newParams.set(filter, value);
  //     } else {
  //       newParams.delete(filter);
  //     }

  //     setSearchParams(newParams);

  //     return updated;
  //   });
  // }

  // function cleanFilters() {
  //   const initialFilters = {
  //     [ESportFieldFiltersCode.CATEGORY]: "",
  //     [ESportFieldFiltersCode.DISTRICT]: "",
  //     [ESportFieldFiltersCode.HOUR]: "",
  //     [ESportFieldFiltersCode.SIZE_FIELD]: "",
  //     [ESportFieldFiltersCode.NAME]: "",
  //     [ESportFieldFiltersCode.SIZE]: "12",
  //   };

  //   setFiltersSelected(initialFilters);
  //   setDate({ startDate: null, endDate: null });

  //   const preserved = [ESportFieldFiltersCode.LAT, ESportFieldFiltersCode.LNG];
  //   const newParams = new URLSearchParams();

  //   Object.entries(initialFilters).forEach(([key, val]) => {
  //     if (val) newParams.set(key, val);
  //   });

  //   preserved.forEach((key) => {
  //     const val = searchParams.get(key);
  //     if (val) newParams.set(key, val);
  //   });

  //   setSearchParams(newParams);
  // }

  // const { data: content } = useQuery({
  //   queryKey: ["sport-field-content"],
  //   queryFn: async () => {
  //     return await getSportFieldContent(lang);
  //   },
  // });

  // const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
  //   useInfiniteQuery({
  //     queryKey: ["sport-fields", filtersSelected, date],
  //     initialPageParam: 1,
  //     queryFn: async ({ pageParam = 1 }) =>
  //       await getSportFields({
  //         ...filtersSelected,
  //         dateInit: date?.startDate?.toLocaleDateString() ?? null,
  //         dateEnd: date?.endDate?.toLocaleDateString() ?? null,
  //         page: String(pageParam),
  //         categoryUuid: filtersSelected[ESportFieldFiltersCode.CATEGORY],
  //       }),
  //     getNextPageParam: (lastPage) => {
  //       const nextPage = Number(lastPage.data.pagination?.page) + 1;

  //       return nextPage <= Number(lastPage.data.pagination?.totalPages)
  //         ? nextPage
  //         : undefined;
  //     },
  //   });

  // useEffect(() => {
  //   const params = Object.fromEntries(searchParams.entries());

  //   const initialFilters: Partial<Record<ESportFieldFiltersCode, string>> = {};

  //   Object.values(ESportFieldFiltersCode).forEach((key) => {
  //     if (params[key]) {
  //       initialFilters[key] = params[key];
  //     }
  //   });

  //   setFiltersSelected((prev) => ({ ...prev, ...initialFilters }));

  //   setDate({
  //     startDate: params.dateInit ? new Date(params.dateInit) : null,
  //     endDate: params.dateEnd ? new Date(params.dateEnd) : null,
  //   });
  // }, []);

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

  // useEffect(() => {
  //   if (!loaderRef.current) return;

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const first = entries[0];
  //       if (first.isIntersecting && hasNextPage && !isFetchingNextPage) {
  //         fetchNextPage();
  //       }
  //     },
  //     { threshold: 1.0 }
  //   );

  //   observer.observe(loaderRef.current);

  //   return () => {
  //     if (loaderRef.current) observer.unobserve(loaderRef.current);
  //   };
  // }, [loaderRef, fetchNextPage, hasNextPage, isFetchingNextPage]);

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
