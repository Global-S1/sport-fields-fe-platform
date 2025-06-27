import { IRegisterCustomerParams } from "@/services/auth/interfaces/register.params";
import { IRegisterCustomersFields } from "../interfaces/register-form.interface";

export const registerCustomerAdapter = (
  fields: IRegisterCustomersFields
): IRegisterCustomerParams => {
  const { cellphone, docIdentity, email, lastName, name, password, ruc } =
    fields;

  return {
    name,
    lastName,
    email,
    cellphone,
    docIdentity,
    ruc,
    password,
    profile: "customer",
  };
};
