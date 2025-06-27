export interface IRegisterCustomersFields {
  name: string;
  lastName: string;
  email: string;
  cellphone: string;
  docIdentity: string;
  ruc?: string;
  password: string;
  confirmPassword: string;
  profile: string;
  termsConditions: boolean;
}

export interface IRegisterAdminFields {
  name: string;
  lastName: string;
  email: string;
  cellphone: string;
  docIdentity: string;
  ruc: string;
  password: string;
  confirmPassword: string;
  profile: string;
  userEstablishment: IRegisterAdminEstablishmentFields[];
}

export interface IRegisterAdminEstablishmentFields {
  name: string;
  description: string;
  street: string;
  streetNumber: string;
  postalCode: string;
  province: string;
  department: string;
  district: string;
  country: string;
  paymentProcessors: IRegisterAdminPaymentProcessorsFields[];
  extraServices: IRegisterAdminExtraServicesFields[];
}

export interface IRegisterAdminPaymentProcessorsFields {
  paymentProcessorUuid: string;
  isActive: boolean;
}

export interface IRegisterAdminExtraServicesFields {
  name: string;
  quantity: string;
  isActived: false;
}
