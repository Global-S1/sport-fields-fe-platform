export interface IRegisterCustomerParams {
  name: string;
  lastName: string;
  email: string;
  cellphone: string;
  docIdentity: string;
  ruc?: string;
  password: string;
  profile: string;
}

export interface IRegisterAdminParams {
  name: string;
  lastName: string;
  email: string;
  cellphone: string;
  docIdentity: string;
  ruc: string;
  password: string;
  profile: string;
  userEstablishment: IRegisterAdminEstablishmentParams[];
}

interface IRegisterAdminEstablishmentParams {
  name: string;
  description: string;
  street: string;
  streetNumber: string;
  postalCode: string;
  province: string;
  department: string;
  district: string;
  country: string;
  paymentProcessors: IRegisterAdminPaymentProcessorsParams[];
  extraServices: IRegisterAdminExtraServicesParams[];
}

interface IRegisterAdminPaymentProcessorsParams {
  paymentProcessorUuid: string;
  isActive: boolean;
}

interface IRegisterAdminExtraServicesParams {
  name: string;
  quantity: string;
  isActived: boolean;
}
