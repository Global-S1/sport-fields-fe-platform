import { privateInstance } from "@/libs/axios";
import { IProfileContent } from "@/modules/customer/profile/interfaces/profile-content.interface";
import { IHttpDataItems } from "@/shared/interfaces/http-request-response.interface";
import { IGetFavoritesResponse } from "./interfaces/get-favorites.response";
import {
  IPhotoRequest,
  IProfileRequest,
} from "./interfaces/profile.form.request";

export const ProfileService = () => {
  const getFavorites = async (userUuid: string) => {
    const response = await privateInstance.get<
      IHttpDataItems<IGetFavoritesResponse>
    >(`/products/find-product-profile-favorite-by-user-uuid/${userUuid}`);

    return response.data;
  };

  const updateImage = async (
    userUuid: string,
    body: IPhotoRequest,
    token: string
  ) => {
    const formData = new FormData();
    formData.append("userImg", body.userImg[0]);

    const response = await privateInstance.patch(
      `/user/update-user-image/${userUuid}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );

    return response.data.data.userImg;
  };

  const updateData = async (
    userUuid: string,
    body: IProfileRequest,
    token: string
  ) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify(body));

    const response = await privateInstance.patch(
      `/user/update-users/${userUuid}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );

    return response.data.data.item;
  };

  return { getFavorites, updateImage, updateData };
};
