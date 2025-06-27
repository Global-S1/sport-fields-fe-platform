import { publicInstance } from "@/libs/axios";
import { ISendCodeParams } from "./interfaces/send-code-params";
import { ISendEmailParams } from "./interfaces/send-email-params";
import { ISendPasswordParams } from "./interfaces/send-passwod-params";
import { IRecoveryPasswordContent } from "@/modules/auth/interfaces/recovery-password-content.interface";
import { getContentLocal } from "@/shared/helpers/get-content-local";

export const RecoveryPasswordService = () => {
  const getContent = async (lang: string) => {
    const content = await getContentLocal(lang);
    return content.auth.recoveryPassword as IRecoveryPasswordContent;
  };

  const sendEmail = async (data: ISendEmailParams) => {
    try {
      await publicInstance.post("security/send-forgot-password-otp-code", data);
    } catch (error) {
      throw new Error((error as any).response.data.kindMessage);
    }
  };

  const sendCode = async (data: ISendCodeParams) => {
    try {
      const response = await publicInstance.post(
        "security/verify-forgot-password-otp-code",
        {
          ...data,
          type: "FORGOT_PASSWORD",
        }
      );

      return response.data.data.item.token;
    } catch (error) {
      throw new Error((error as any).response.data.kindMessage);
    }
  };

  const sendPassword = async (data: ISendPasswordParams) => {
    try {
      await publicInstance.post("security/change-password", data);

      return {
        success: true,
      };
    } catch (error) {
      const errors = (error as any).response.data.errors;

      throw new Error(Object.values(errors).join("\n"));
    }
  };

  return {
    sendEmail,
    sendCode,
    sendPassword,
    getContent,
  };
};
