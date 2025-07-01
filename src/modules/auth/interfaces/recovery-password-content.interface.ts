export interface ISendEmailContent {
  title: string;
  description: string;
  sendButton: string;
  success: string;
  emailInput: {
    label: string;
    required: string;
    placeholder: string;
    pattern: string;
  };
}

export interface ISendCodeContent {
  title: string;
  description: string;
  sendButton: string;
  success: string;
  codeInput: {
    required: string;
    minLength: string;
  };
}

export interface IChangePasswordContent {
  title: string;
  description: string;
  sendButton: string;
  success: string;
  newPassword: {
    label: string;
    required: string;
    min: string;
  };
  repeatPassword: {
    label: string;
    required: string;
    equal: string;
    min: string;
  };
}

export interface IRecoveryPasswordContent {
  sendEmail: ISendEmailContent;
  sendCode: ISendCodeContent;
  changuePassword: IChangePasswordContent;
}
