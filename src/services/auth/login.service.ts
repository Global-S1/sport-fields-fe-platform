"use server";

import { publicInstance } from "@/libs/axios";
import { IHttpDataItem } from "@/shared/interfaces/http-request-response.interface";
import { cookiesClient } from "@/shared/utils/cookies-client";
import { IAuthLoginParams } from "./interfaces/auth.params";
import { IAuthLoginResponse } from "./interfaces/auth.response";

export const login = async (data: IAuthLoginParams) => {
  try {
    const response = await publicInstance.post<
      IHttpDataItem<IAuthLoginResponse>
    >("/security/login", data);

    const setCookieHeader = response.headers["set-cookie"];

    await cookiesClient("sessionToken", setCookieHeader?.[0]);

    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.kindMessage);
  }
};
