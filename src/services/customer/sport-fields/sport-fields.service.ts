import { publicInstance } from "../../../libs/axios";
import { IHttpData } from "../../../shared/interfaces/http-request-response.interface";

import { clearObject } from "@/shared/helpers/clear-object.helper";
import { ISportFieldDetails } from "../../../modules/customer/sport-fields/interfaces/sport-field-details.interface";
import {
  ISportFieldDetailAddFavorite,
  ISportFieldDetailRemoveFavorite,
  ISportFieldDetailRequets,
} from "./interfaces/sport-field-detail.request";
import { SportFieldFiltersRequest } from "./interfaces/sport-field-filters.request";
import { SportFieldFilterResponse } from "./interfaces/sport-field-filters.response";
import { ISportFieldsResponse } from "./interfaces/sport-fields.response";

export const getSportFields = async (filters?: SportFieldFiltersRequest) => {
  const params = clearObject(filters as Record<string, unknown>);

  const response = await publicInstance.get<IHttpData<ISportFieldsResponse>>(
    `/products/find-product`,
    { params }
  );

  return response.data;
};

export const getSportFieldByUuid = async ({
  location,
  token,
  uuid,
}: ISportFieldDetailRequets) => {
  try {
    let url = `find-product-by-uuid/${uuid}`;

    if (token === "") {
      url = "public/" + url;
    }

    if (location) {
      url += `?latitude=${location.latitude}&longitude=${location.longitude}`;
    }

    const response = await publicInstance.get<IHttpData<ISportFieldDetails>>(
      `products/${url}`,
      { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
    );
    return response.data.data;
  } catch (error) {
    throw new Error((error as any).response.data.kindMessage);
  }
};

export const getSportFieldFilters = async () => {
  const response = await publicInstance.get<
    IHttpData<SportFieldFilterResponse[]>
  >("/products/find-filters");

  return response.data;
};

const addFavorite = async (data: ISportFieldDetailAddFavorite) => {
  try {
    const response = await publicInstance.post(
      "products/create-product-profile-favorite",
      {
        productUuid: data.productUuid,
        userUuid: data.userUuid,
        isFavorite: true,
      },
      {
        headers: { Authorization: `Bearer ${data.token}` },
        withCredentials: true,
      }
    );

    return response.data.data.item.insertedId as number;
  } catch (error) {
    throw Error((error as any).response.data.kindMessage);
  }
};

const removeFavorite = async ({
  productFavoriteId,
  token,
}: ISportFieldDetailRemoveFavorite) => {
  try {
    await publicInstance.delete(
      "products/delete-product-profile-favorite/" + productFavoriteId,
      { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
    );

    return null;
  } catch (error) {
    throw Error((error as any).response.data.kindMessage);
  }
};

export const toggleFavorite = async (
  data: ISportFieldDetailRemoveFavorite & ISportFieldDetailAddFavorite
) => {
  if (data.productFavoriteId) {
    return await removeFavorite({
      productFavoriteId: data.productFavoriteId,
      token: data.token,
    } as ISportFieldDetailRemoveFavorite);
  } else {
    return await addFavorite({
      productUuid: data.productUuid,
      userUuid: data.userUuid,
      token: data.token,
    } as ISportFieldDetailAddFavorite);
  }
};
