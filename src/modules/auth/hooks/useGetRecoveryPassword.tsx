import { useAtomValue } from "jotai";
import { recoveryPasswordContentAtom } from "../store/recovery-password.store";
import {
  ICodeForm,
  IEmailForm,
  IPasswordForm,
} from "../interfaces/recovery-password-forms.interface";
import { useForm } from "react-hook-form";

export function useGetRecoveryPasswordContent() {
  const { data: recoveryPasswordContent, isLoading } = useAtomValue(
    recoveryPasswordContentAtom
  );

  const emailForm = useForm<IEmailForm>({
    defaultValues: {
      email: "",
    },
  });

  const codeForm = useForm<ICodeForm>({
    defaultValues: {
      code: "",
    },
  });

  const passwordForm = useForm<IPasswordForm>({
    defaultValues: {
      newPassword: "",
      repeatNewPassword: "",
    },
    mode: "onChange",
  });

  return {
    forms: { emailForm, codeForm, passwordForm },
    content: {
      recoveryPasswordContent,
      isLoading,
    },
  };
}
