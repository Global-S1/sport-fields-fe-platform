"use client";
import { RecoveryPasswordService } from "@/services/auth/recovery-password.service";
import { IChangePasswordContent } from "../interfaces/recovery-password-content.interface";
import {
  recoveryPasswordCodeAtom,
  recoveryPasswordEmailAtom,
  recoveryPasswordStepAtom,
} from "../store/recovery-password.store";
import { useAtomValue, useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { IPasswordForm } from "../interfaces/recovery-password-forms.interface";
import { triggerToast } from "@/shared/components/toast/toast-component";
import { TOAST_MODE } from "@/shared/components/toast/toast.config";
import { RecoveryPasswordStep } from "../enums/recovery-password.enum";
import { SubmitHandler } from "react-hook-form";

const { sendPassword } = RecoveryPasswordService();

export const useSendPassword = (content?: IChangePasswordContent) => {
  const email = useAtomValue(recoveryPasswordEmailAtom);
  const code = useAtomValue(recoveryPasswordCodeAtom);
  const setStep = useSetAtom(recoveryPasswordStepAtom);
  const router = useRouter();

  const { mutate, error, isPending } = useMutation({
    mutationFn: async (data: IPasswordForm) =>
      await sendPassword({ email, token: code, newPassword: data.newPassword }),
    onSuccess: () => {
      triggerToast({
        mode: TOAST_MODE.SUCCESS,
        title: content?.success || "",
      });
      router.push("/auth");
      setStep(RecoveryPasswordStep.EMAIL);
    },
    onError: (error: any) => {
      triggerToast({ mode: TOAST_MODE.ERROR, title: error.message });
    },
  });

  const sendPasswordOnSubmit: SubmitHandler<IPasswordForm> = async (
    form: IPasswordForm
  ) => mutate(form);

  return {
    handlers: {
      sendPasswordOnSubmit,
    },
    state: {
      error,
      isPending,
    },
  };
};
