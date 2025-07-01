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
  location: any;
  token: string;
}
