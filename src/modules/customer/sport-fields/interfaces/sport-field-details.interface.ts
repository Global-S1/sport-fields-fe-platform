export interface ISportFieldDetails {
  productId: number;
  productsUuid: string;
  isAvailable: number;
  name: string;
  description: string;
  minimumReservationTime: number;
  maximumReservationTime: number;
  pricePerHour: string;
  visitantsNumberLimit: null;
  productsRate: null;
  appertureTime: string;
  closureTime: string;
  establishmentUuid: string;
  status: string;
  averageRate: null;
  availablePromotionDatetime: null;
  categoryUuid: string;
  size: string;
  establishmentExtraServices: EstablishmentExtraService[];
  establishment: Establishment;
  categoryName: string;
  subCategoryName: null;
  featureImage: string;
  galery: string[];
  distance?: string;
  productOpinions: ProductOpinion[];
  user: Owner;
  successfulreservations: number;
  profileFavoriteId?: number | null;
}

export interface Establishment {
  establishmentId: number;
  establishmentUuid: string;
  insDatetime: Date;
  name: string;
  description: string;
  postalCode: string;
  department: string;
  province: string;
  city: null;
  country: string;
  district: string;
  street: string;
  streetNumber: string;
  longitude: string;
  latitude: string;
  user: EstablishmentUser;
}

export interface EstablishmentUser {
  userUuid: string;
}

export interface EstablishmentExtraService {
  establishmentExtraServicesId: number;
  establishmentUuid: EstablishmentUUID;
  name: string;
  quantity: number;
  isActived: number;
}

export interface EstablishmentUUID {
  establishmentUuid: string;
}

export interface ProductOpinion {
  reservationOpinionId: number;
  reservationOpinionUuid: string;
  reservationUuid: string;
  userUuid: string;
  rate: number;
  comment: string;
  userImg: string;
  userName: string;
  userLastName: string;
}

export interface Owner {
  userId: number;
  userUuid: string;
  profileUuid: string;
  name: string;
  lastName: string;
  email: string;
  cellphone: string;
  docIdentity: string;
  userImg: string;
  ruc: string;
  chatConnectionStatus: string;
  lastActiveAt: Date;
}
