import { RecoveryPasswordService } from "@/services/auth/recovery-password.service";
import { ISendEmailContent } from "../interfaces/recovery-password-content.interface";
import { useSetAtom } from "jotai";
import {
  recoveryPasswordEmailAtom,
  recoveryPasswordStepAtom,
} from "../store/recovery-password.store";
import { useMutation } from "@tanstack/react-query";
import { IEmailForm } from "../interfaces/recovery-password-forms.interface";
import { RecoveryPasswordStep } from "../enums/recovery-password.enum";
import { TOAST_MODE } from "@/shared/components/toast/toast.config";
import { triggerToast } from "@/shared/components/toast/toast-component";
import { SubmitHandler } from "react-hook-form";

const { sendEmail } = RecoveryPasswordService();

export const useSendEmail = (content?: ISendEmailContent) => {
  const setStep = useSetAtom(recoveryPasswordStepAtom);
  const setEmail = useSetAtom(recoveryPasswordEmailAtom);

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: IEmailForm) => {
      setEmail(data.email);
      await sendEmail(data);
    },
    onSuccess: () => {
      setStep(RecoveryPasswordStep.CODE);
      triggerToast({
        mode: TOAST_MODE.SUCCESS,
        title: content?.success || "",
      });
    },
    onError: (error: any) => {
      triggerToast({ mode: TOAST_MODE.ERROR, title: error.message });
    },
  });

  const sendEmailOnSubmit: SubmitHandler<IEmailForm> = async (
    form: IEmailForm
  ) => mutate(form);

  return {
    handlers: {
      sendEmailOnSubmit,
    },
    states: {
      isPending,
    },
  };
};
