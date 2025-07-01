interface SportFieldSubFilter {
  name: string;
  filterUuid?: string;
  sorted?: number;
  code?: string;
  numberOfProducts?: number;
  value: string;
  icon?: string;
  quantity?: number;
}

export interface SportFieldFilterResponse {
  name: string;
  filterUuid?: string;
  sorted?: number;
  code: string;
  numberOfReservations?: number;
  subFilters: SportFieldSubFilter[];
}
