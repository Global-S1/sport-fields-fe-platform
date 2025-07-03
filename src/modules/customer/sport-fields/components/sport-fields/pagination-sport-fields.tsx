"use client";

import { usePathname } from "@/i18n/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/shared/components/pagination/pagination";
import { calculatePagination } from "@/shared/helpers/calculate-pagination";
import { useSearchParams } from "next/navigation";

interface Props {
  currentPage: number;
  limit: number;
  totalItems: number;
}

export default function PaginationSportFields({
  currentPage,
  limit,
  totalItems,
}: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { pages } = calculatePagination({
    currentPage,
    limit: limit,
    totalItems,
  });

  return (
    <Pagination className="justify-end mt-3">
      <PaginationContent>
        {pages.map((page) => {
          const params = new URLSearchParams(searchParams.toString());
          params.set("page", String(page));

          const href = `${pathname}?${params.toString()}`;

          return (
            <PaginationItem key={`pagination-sf-${page}`}>
              <PaginationLink
                isActive
                tabIndex={page === currentPage ? -1 : undefined}
                className={
                  page === currentPage ? "pointer-events-none opacity-50" : ""
                }
                aria-disabled={page === currentPage}
                href={href}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}
      </PaginationContent>
    </Pagination>
  );
}
