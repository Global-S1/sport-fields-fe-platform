export interface IPrivileges {
  privilegeId: number;
  privilegeUuid: string;
  name: string;
  description: string;
  title: EPrivilegesTitle;
  icon?: null | string;
  route: string;
}

export enum EPrivilegesTitle {
  ADMIN = "ADMIN",
  CUSTOMER = "CUSTOMER",
}
