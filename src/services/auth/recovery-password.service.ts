import { publicInstance } from "@/libs/axios";
import { ISendCodeParams } from "./interfaces/send-code-params";
import { ISendEmailParams } from "./interfaces/send-email-params";
import { ISendPasswordParams } from "./interfaces/send-passwod-params";
import { IRecoveryPasswordContent } from "@/modules/auth/interfaces/recovery-password-content.interface";
import { getTranslations } from "next-intl/server";

export const RecoveryPasswordService = () => {
  const getContent = async (locale: string) => {
    const content = await getTranslations({
      locale,
      namespace: "auth.recoveryPassword",
    });
    return content.raw as unknown as IRecoveryPasswordContent;
  };

  const sendEmail = async (data: ISendEmailParams) => {
    try {
      await publicInstance.post("security/send-forgot-password-otp-code", data);
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.kindMessage ||
        error?.response?.data?.message ||
        error?.message ||
        "Error al enviar el correo de recuperación";
      throw new Error(errorMessage);
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
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.kindMessage ||
        error?.response?.data?.message ||
        error?.message ||
        "Error al verificar el código";
      throw new Error(errorMessage);
    }
  };

  const sendPassword = async (data: ISendPasswordParams) => {
    try {
      await publicInstance.post("security/change-password", data);

      return {
        success: true,
      };
    } catch (error: any) {
      const errors = error?.response?.data?.errors;
      const kindMessage = error?.response?.data?.kindMessage;
      const message = error?.response?.data?.message;

      if (errors && typeof errors === "object") {
        throw new Error(Object.values(errors).join("\n"));
      } else if (kindMessage) {
        throw new Error(kindMessage);
      } else if (message) {
        throw new Error(message);
      } else {
        throw new Error(error?.message || "Error al cambiar la contraseña");
      }
    }
  };

  return {
    sendEmail,
    sendCode,
    sendPassword,
    getContent,
  };
};
