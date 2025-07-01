import { ESportFieldFiltersCode } from "../enums/sport-field.enum";

export interface ISportFieldSubFilter {
  name: string;
  filterUuid?: string;
  sorted?: number;
  code?: string;
  numberOfProducts?: number;
  value: string;
  icon?: string;
  quantity?: number;
}

export interface ISportFieldFilter {
  name: string;
  filterUuid?: string;
  sorted?: number;
  code: ESportFieldFiltersCode;
  numberOfReservations?: number;
  subFilters: ISportFieldSubFilter[];
}

export interface ISportFieldsResponse {
  items: ISportField[];
  filtering: IFiltering[];
}

interface IFiltering {
  filter: string;
  property: string;
  value: string;
}

export interface ISportField {
  latitude?: string | null;
  longitude?: string | null;
  featureImage: string;
  productId: number;
  productsUuid: string;
  isAvailable: number;
  establishmentUuid: string;
  productsRate: number | null;
  categoryUuid: string;
  name: string;
  description: string;
  minimumReservationTime?: number | null;
  maximumReservationTime?: number | null;
  pricePerHour: string;
  visitantsNumberLimit: number | null;
  appertureTime: string;
  closureTime: string;
  status: string;
  averageRate: number | null;
  availablePromotionDatetime: string | null;
  size: string;
  categoryName?: string | null;
  establisment: Establisment;
  imagePriceUrl64?: string | null;
  distance: string | null;
}

export interface Establisment {
  city?: string | null;
  country?: string | null;
  district?: string | null;
}
