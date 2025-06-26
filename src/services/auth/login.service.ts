/* eslint-disable @typescript-eslint/no-explicit-any */
import { publicInstance } from "@/libs/axios";
import { EErrorKindMessage } from "@/shared/enums/global.enum";
import { IAuthLoginParams } from "./interfaces/auth.params";
import { IAuthLoginResponse } from "./interfaces/auth.response";
import { IRegisterCustomerResponse } from "./interfaces/register.response";
import {
  IHttpDataItem,
  IHttpResponse,
} from "@/shared/interfaces/http-request-response.interface";

export const LoginService = () => {
  // ISSUE: En revisión por i18n de Next
  //   const getLoginContent = async (lang: string) => {
  //     const content = await getContentLocal(lang);
  //     return content.auth.login as ILoginContent;
  //   };

  const login = async (data: IAuthLoginParams) => {
    try {
      const response = await publicInstance.post<
        IHttpDataItem<IAuthLoginResponse>
      >("/security/login", data, { withCredentials: true });

      return response.data;
    } catch (error: any) {
      throw new Error(error?.response?.data?.kindMessage);
    }
  };

  const logout = async (token: string) => {
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
        err.response.data.kindMessage ===
        EErrorKindMessage.SESSION_IS_NOT_ACTIVE
      ) {
        return EErrorKindMessage.SESSION_IS_NOT_ACTIVE;
      }
      throw new Error(err.kindMessage);
    }
  };

  const logoutAll = async (token: string) => {
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
        err.response.data.kindMessage ===
        EErrorKindMessage.SESSION_IS_NOT_ACTIVE
      ) {
        return EErrorKindMessage.SESSION_IS_NOT_ACTIVE;
      }
      throw new Error(err.kindMessage);
    }
  };

  return {
    login,
    logout,
    logoutAll,
  };
};
