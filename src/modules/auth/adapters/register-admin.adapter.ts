import { IRegisterAdminParams } from "@/services/auth/interfaces/register.params";
import { IRegisterAdminFields } from "../interfaces/register-form.interface";

export const registerAdminAdapter = (
  fields: IRegisterAdminFields
): IRegisterAdminParams => {
  const { cellphone, docIdentity, email, lastName, name, password, ruc } =
    fields;
  const format = {
    name,
    lastName,
    email,
    cellphone,
    docIdentity,
    ruc,
    password,
    profile: "owner",
    userEstablishment: [],
  };

  return format;
};
