/* eslint-disable @typescript-eslint/no-explicit-any */
import { publicInstance } from "@/libs/axios";
import { ISendCodeParams } from "./interfaces/send-code-params";
import { ISendEmailParams } from "./interfaces/send-email-params";
import { ISendPasswordParams } from "./interfaces/send-passwod-params";

export const RecoveryPasswordService = () => {
  // ISSUE: En revisión por i18n de Next
  //   const getContent = async (lang: string) => {
  //     const content = await getContentLocal(lang);
  //     // TODO: Poner la interfaz de contenido
  //     return content.auth.recoveryPassword as any;
  //   };

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
  };
};
