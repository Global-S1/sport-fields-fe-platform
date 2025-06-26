import { publicInstance } from "../../libs/axios";
import { IHttpResponse } from "../../shared/interfaces/http-request-response.interface";
import {
  IRegisterAdminParams,
  IRegisterCustomerParams,
} from "./interfaces/register.params";
import { IRegisterCustomerResponse } from "./interfaces/register.response";

export const AuthService = () => {
  // ISSUE: En revisión por i18n de Next
  //   const getRegisterContent = async (lang: string) => {
  //     const content = await getContentLocal(lang);
  //     return content.auth.register as IRegisterContent;
  //   };

  const registerCustomer = async (fields: IRegisterCustomerParams) => {
    const response = await publicInstance.post<
      IHttpResponse<IRegisterCustomerResponse>
    >("/user/create-users", fields);
    return response.data;
  };

  const registerAdmin = async (fields: IRegisterAdminParams) => {
    const response = await publicInstance.post<
      IHttpResponse<IRegisterCustomerResponse>
    >("/user/create-user-administrator", fields);
    return response.data;
  };

  return {
    registerCustomer,
    registerAdmin,
  };
};
