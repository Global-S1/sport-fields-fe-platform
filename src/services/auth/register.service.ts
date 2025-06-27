"use server";

import { publicInstance } from "../../libs/axios";
import { IHttpResponse } from "../../shared/interfaces/http-request-response.interface";
import {
  IRegisterAdminParams,
  IRegisterCustomerParams,
} from "./interfaces/register.params";
import { IRegisterCustomerResponse } from "./interfaces/register.response";

export const registerCustomer = async (fields: IRegisterCustomerParams) => {
  try {
    const response = await publicInstance.post<
      IHttpResponse<IRegisterCustomerResponse>
    >("/user/create-users", fields);

    return response.data;
  } catch (error) {
    throw new Error((error as any).response?.data?.kindMessage);
  }
};

export const registerAdmin = async (fields: IRegisterAdminParams) => {
  try {
    const response = await publicInstance.post<
      IHttpResponse<IRegisterCustomerResponse>
    >("/user/create-user-administrator", fields);
    return response.data;
  } catch (error) {
    const err =
      (error &&
        typeof error === "object" &&
        "response" in error &&
        (error as any).response?.data?.kindMessage) ||
      undefined;

    throw new Error(err);
  }
};
