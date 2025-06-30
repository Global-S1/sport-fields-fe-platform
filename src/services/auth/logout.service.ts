import { publicInstance } from "@/libs/axios";
import { IHttpResponse } from "@/shared/interfaces/http-request-response.interface";
import { IRegisterCustomerResponse } from "./interfaces/register.response";
import { ErrorKingMessage } from "@/shared/enums/error-king-message";

export const logout = async (token: string) => {
  try {
    const response = await publicInstance.post<
      IHttpResponse<IRegisterCustomerResponse>
    >(
      "/security/logout",
      {},
      { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
    );
    return response.data;
  } catch (error) {
    const err = error as any;

    if (
      err.response.data.kindMessage === ErrorKingMessage.SESSION_IS_NOT_ACTIVE
    ) {
      return ErrorKingMessage.SESSION_IS_NOT_ACTIVE;
    }
    throw new Error(err.kindMessage);
  }
};

export const logoutAll = async (token: string) => {
  try {
    const response = await publicInstance.post<
      IHttpResponse<IRegisterCustomerResponse>
    >(
      "/security/logout-all-sessions",
      {},
      { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
    );
    return response.data;
  } catch (error) {
    const err = error as any;

    if (
      err.response.data.kindMessage === ErrorKingMessage.SESSION_IS_NOT_ACTIVE
    ) {
      return ErrorKingMessage.SESSION_IS_NOT_ACTIVE;
    }
    throw new Error(err.kindMessage);
  }
};
