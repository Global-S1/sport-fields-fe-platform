"use server";

import { privateInstance } from "@/libs/axios";
import { IHttpDataItems } from "@/shared/interfaces/http-request-response.interface";
import { getCookieClient } from "@/shared/utils/cookies-client";
import { IGetFavoritesResponse } from "./interfaces/get-favorites.response";
import {
  IPhotoRequest,
  IProfileRequest,
} from "./interfaces/profile.form.request";

export const getFavorites = async (userUuid: string, token: string) => {
  const { cookie } = await getCookieClient();

  const response = await privateInstance.get<
    IHttpDataItems<IGetFavoritesResponse>
  >(`/products/find-product-profile-favorite-by-user-uuid/${userUuid}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Cookie: `sessionToken=${cookie}`,
    },
    withCredentials: true,
  });
  return response.data;
};

export const updateImage = async (
  userUuid: string,
  body: IPhotoRequest,
  token: string
) => {
  const { cookie } = await getCookieClient();
  const formData = new FormData();
  formData.append("userImg", body.userImg[0]);

  const response = await privateInstance.patch(
    `/user/update-user-image/${userUuid}`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Cookie: `sessionToken=${cookie}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data.data.userImg;
};

export const updateData = async (
  userUuid: string,
  body: IProfileRequest,
  token: string
) => {
  const { cookie } = await getCookieClient();
  const formData = new FormData();
  formData.append("data", JSON.stringify(body));

  const response = await privateInstance.patch(
    `/user/update-users/${userUuid}`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Cookie: `sessionToken=${cookie}`,
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    }
  );

  return response.data.data.item;
};
