"use client";

import { useCustomRouter } from "@/shared/hooks/useRouter";
import { MdArrowBack } from "react-icons/md";
import clsx from "../../../../../libs/clsx";

export default function BackButton() {
  const router = useCustomRouter();

  return (
    <button
      onClick={() => router.back()}
      className={clsx(
        "size-10 rounded-full bg-white flex items-center justify-center cursor-pointer absolute top-2 left-2 z-40 md:hidden"
      )}
    >
      <MdArrowBack size={26} />
    </button>
  );
}
