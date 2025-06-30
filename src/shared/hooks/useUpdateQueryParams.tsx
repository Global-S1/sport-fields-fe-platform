import { useRouter, useSearchParams } from "next/navigation";

export const useUpdateQueryParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const update = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === null || value === undefined || value === "") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    const queryString = params.toString();
    router.replace(`?${queryString}`);
  };

  return update;
};
