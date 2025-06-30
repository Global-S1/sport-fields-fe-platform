import { ILocationCoords } from "../../../../shared/interfaces/geolocation.interface";

export interface ISportFieldDetailAddFavorite {
  userUuid: string;
  productUuid: string;
  token: string;
}

export interface ISportFieldDetailRemoveFavorite {
  productFavoriteId: number | null;
  token: string;
}

export interface ISportFieldDetailRequets {
  uuid: string;
  location: ILocationCoords | undefined;
  token: string;
}
