"use client";
import { UseFormReturn } from "react-hook-form";
import { IPasswordForm } from "../../interfaces/recovery-password-forms.interface";
import { IChangePasswordContent } from "../../interfaces/recovery-password-content.interface";
import { BackButton } from "./back-button";
import { RecoveryPasswordStep } from "../../enums/recovery-password.enum";
import { Box } from "@/shared/components/box/box.component";
import { Heading } from "@/shared/components/text/heading.component";
import { Text } from "@/shared/components/text/text.component";
import { InputPassword } from "@/shared/components/input/input-password.component";
import { Button } from "@/shared/components/button/button.component";
import { useSetAtom, useAtomValue } from "jotai";
import {
  recoveryPasswordEmailAtom,
  recoveryPasswordCodeAtom,
  recoveryPasswordStepAtom,
} from "../../store/recovery-password.store";
import { TOAST_MODE } from "@/shared/components/toast/toast.config";
import { triggerToast } from "@/shared/components/toast/toast-component";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { sendPasswordAction } from "../../actions/send-password.action";

interface Props {
  form: UseFormReturn<IPasswordForm>;
  content: IChangePasswordContent | undefined;
}

export const PasswordFormComponent = ({ content, form }: Props) => {
  const setStep = useSetAtom(recoveryPasswordStepAtom);
  const email = useAtomValue(recoveryPasswordEmailAtom);
  const code = useAtomValue(recoveryPasswordCodeAtom);
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const password = form.watch("newPassword");

  const onSubmit = async (data: IPasswordForm) => {
    setIsPending(true);
    try {
      await sendPasswordAction({ ...data, email, token: code });
      triggerToast({
        mode: TOAST_MODE.SUCCESS,
        title: content?.success || "",
      });
      setStep(RecoveryPasswordStep.EMAIL);
      router.push("/auth");
    } catch (error: any) {
      triggerToast({ mode: TOAST_MODE.ERROR, title: error.message });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <>
      <BackButton to={RecoveryPasswordStep.CODE} />
      <Box className="mb-6 text-center">
        <Heading className="font-bold text-title-main dark:text-title-inverse mb-2">
          {content?.title}
        </Heading>
        <Text>{content?.description}</Text>
      </Box>

      <form
        className="flex flex-col w-full gap-4"
        autoComplete="off"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Box className="mb-4 w-full">
          <InputPassword
            label={content?.newPassword.label}
            className="w-full"
            formOptions={{
              form,
              name: "newPassword",
              validations: {
                required: content?.newPassword.required,
                minLength: {
                  value: 8,
                  message: content?.newPassword.min || "",
                },
              },
            }}
          />
        </Box>

        <Box className="mb-4 w-full">
          <InputPassword
            label={content?.repeatPassword.label}
            className="w-full"
            formOptions={{
              form,
              name: "repeatNewPassword",
              validations: {
                required: content?.repeatPassword.required,
                minLength: {
                  value: 8,
                  message: content?.repeatPassword.min || "",
                },
                validate: (value) =>
                  value === password || content?.repeatPassword.equal,
              },
            }}
          />
        </Box>

        <Button
          type="submit"
          color="secondary"
          className="w-full mt-6 disabled:bg-salem-400 !rounded-full"
          isLoading={isPending}
          disabled={!form.formState.isValid}
        >
          {content?.sendButton}
        </Button>
      </form>
    </>
  );
};
