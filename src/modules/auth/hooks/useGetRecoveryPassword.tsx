import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { ICodeForm, IEmailForm, IPasswordForm } from "../interfaces/recovery-password-forms.interface";

export function useGetRecoveryPasswordContent() {
  // Usa directamente las traducciones de next-intl
  const t = useTranslations("auth.recoveryPassword");
  
  const emailForm = useForm<IEmailForm>({
    defaultValues: { email: "" },
  });

  const codeForm = useForm<ICodeForm>({
    defaultValues: { code: "" },
  });

  const passwordForm = useForm<IPasswordForm>({
    defaultValues: {
      newPassword: "",
      repeatNewPassword: "",
    },
    mode: "onChange",
  });

  // Construye el contenido desde las traducciones
  const recoveryPasswordContent = {
    sendEmail: {
      title: t("sendEmail.title"),
      description: t("sendEmail.description"),
      emailInput: {
        label: t("sendEmail.emailInput.label"),
        placeholder: t("sendEmail.emailInput.placeholder"),
        required: t("sendEmail.emailInput.required"),
        pattern: t("sendEmail.emailInput.pattern"),
      },
      sendButton: t("sendEmail.sendButton"),
      success: t("sendEmail.success"),
    },
    sendCode: {
      title: t("sendCode.title"),
      description: t("sendCode.description"),
      codeInput: {
        required: t("sendCode.codeInput.required"),
      },
      sendButton: t("sendCode.sendButton"),
      success: t("sendCode.success"),
    },
    changuePassword: {
      title: t("changuePassword.title"),
      description: t("changuePassword.description"),
      newPassword: {
        label: t("changuePassword.newPassword.label"),
        required: t("changuePassword.newPassword.required"),
        min: t("changuePassword.newPassword.min"),
      },
      repeatPassword: {
        label: t("changuePassword.repeatPassword.label"),
        required: t("changuePassword.repeatPassword.required"),
        min: t("changuePassword.repeatPassword.min"),
        equal: t("changuePassword.repeatPassword.equal"),
      },
      sendButton: t("changuePassword.sendButton"),
      success: t("changuePassword.success"),
    },
  };

  return {
    forms: { emailForm, codeForm, passwordForm },
    content: {
      recoveryPasswordContent,
      isLoading: false,
    },
  };
}