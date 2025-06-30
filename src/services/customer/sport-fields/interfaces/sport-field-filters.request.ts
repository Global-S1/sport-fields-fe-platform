export interface SportFieldFiltersRequest {
  size?: string;
  page?: string;
  lat?: string;
  lng?: string;
  district?: string;
  categoryUuid?: string;
  sizeField?: string;
  dateInit?: string | null;
  dateEnd?: string | null;
  hour?: string;
  name?: string;
}
