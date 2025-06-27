import { RecoveryPasswordStep } from "@/modules/auth/enums/recovery-password.enum";
import { ISendCodeContent } from "@/modules/auth/interfaces/recovery-password-content.interface";
import { ICodeForm } from "@/modules/auth/interfaces/recovery-password-forms.interface";
import {
  recoveryPasswordCodeAtom,
  recoveryPasswordEmailAtom,
  recoveryPasswordStepAtom,
} from "@/modules/auth/store/recovery-password.store";
import { RecoveryPasswordService } from "@/services/auth/recovery-password.service";
import { useMutation } from "@tanstack/react-query";
import { useAtomValue, useSetAtom } from "jotai";
import { triggerToast } from "../components/toast/toast-component";
import { TOAST_MODE } from "../components/toast/toast.config";
import { SubmitHandler } from "react-hook-form";

const { sendCode } = RecoveryPasswordService();

export const useSendCode = (content?: ISendCodeContent) => {
  const setStep = useSetAtom(recoveryPasswordStepAtom);
  const setCode = useSetAtom(recoveryPasswordCodeAtom);
  const email = useAtomValue(recoveryPasswordEmailAtom);

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: ICodeForm) => await sendCode({ ...data, email }),
    onSuccess: (token) => {
      setCode(token);
      setStep(RecoveryPasswordStep.PASSWORD);
      triggerToast({
        mode: TOAST_MODE.SUCCESS,
        title: String(content?.success),
      });
    },
    onError: (error: any) => {
      triggerToast({ mode: TOAST_MODE.ERROR, title: error.message });
    },
  });

  const sendCodeOnSubmit: SubmitHandler<ICodeForm> = async (form: ICodeForm) =>
    mutate(form);

  return {
    handlers: {
      sendCodeOnSubmit,
    },
    states: {
      isPending,
    },
  };
};
