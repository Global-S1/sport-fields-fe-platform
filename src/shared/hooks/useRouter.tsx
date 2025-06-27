import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export const useCustomRouter = () => {
  const router = useRouter();
  const locale = useLocale();

  const push = (path: string) => {
    router.push(`/${locale}/${path}`);
  };

  return {
    push,
  };
};
