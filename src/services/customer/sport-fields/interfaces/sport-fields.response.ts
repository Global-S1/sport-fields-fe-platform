import { IPagination } from "../../../../shared/interfaces/http-request-response.interface";

export interface ISportFieldsResponse {
  items: Item[];
  filtering: IFiltering[];
  pagination: IPagination;
  itemsCounter: number;
}

interface IFiltering {
  filter: string;
  property: string;
  value: string;
}

export interface Item {
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
