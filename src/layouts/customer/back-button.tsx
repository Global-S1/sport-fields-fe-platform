"use client";
import { usePathname } from "@/i18n/navigation";
import { useCustomRouter } from "@/shared/hooks/useRouter";
import clsx from "clsx";
import { MdArrowBack } from "react-icons/md";

export const BackButton = () => {
  const router = useCustomRouter();
  const pathname = usePathname();

  if (pathname == "/") return null;

  return (
    <button
      onClick={() => router.back()}
      className={clsx(
        "size-10 rounded-full bg-white flex items-center justify-center"
      )}
    >
      <MdArrowBack size={26} />
    </button>
  );
};
