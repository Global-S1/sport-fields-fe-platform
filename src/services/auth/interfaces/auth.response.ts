import { EPrivilegesTitle } from "../../../shared/interfaces/privileges.interface";

export interface IAuthLoginResponse {
  user: {
    userId: number;
    userUuid: string;
    profileUuid: string;
    name: string;
    lastName: string;
    email: string;
    cellphone: string | null;
    docIdentity?: string;
    ruc?: string;
    userImg?: string;
  };
  privileges: IPrivileges[];
  token: string;
}

interface IPrivileges {
  privilegeId: number;
  privilegeUuid: string;
  name: string;
  description: string;
  title: EPrivilegesTitle;
  icon?: string | null;
  route: string;
}
