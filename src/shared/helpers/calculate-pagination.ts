export function calculatePagination({
  totalItems,
  limit,
  currentPage,
}: {
  totalItems: number;
  limit: number;
  currentPage: number;
}) {
  const totalPages = Math.ceil(totalItems / limit);
  const maxPagesToShow = 5;
  const half = Math.floor(maxPagesToShow / 2);

  let start = Math.max(currentPage - half, 1);
  let end = Math.min(currentPage + half, totalPages);

  if (end - start + 1 < maxPagesToShow) {
    if (start === 1) {
      end = Math.min(start + maxPagesToShow - 1, totalPages);
    } else if (end === totalPages) {
      start = Math.max(end - maxPagesToShow + 1, 1);
    }
  }

  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return {
    pages,
    hasLeft: start > 1,
    hasRight: end < totalPages,
  };
}
