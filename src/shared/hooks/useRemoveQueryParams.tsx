import { useRouter, useSearchParams } from "next/navigation";

export const useRemoveQueryParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const remove = (...keys: string[]) => {
    const params = new URLSearchParams(searchParams.toString());

    keys.forEach((key) => params.delete(key));

    const queryString = params.toString();
    router.replace(`?${queryString}`, { scroll: false });
  };

  return remove;
};
