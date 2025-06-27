export type entityId = number | string;

export interface IUser {
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
}
