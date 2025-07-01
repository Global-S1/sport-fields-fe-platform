"use client";
import { Controller, UseFormReturn } from "react-hook-form";
import { ICodeForm } from "../../interfaces/recovery-password-forms.interface";
import { ISendCodeContent } from "../../interfaces/recovery-password-content.interface";
import { useAtomValue, useSetAtom } from "jotai";
import { recoveryPasswordStepAtom, recoveryPasswordEmailAtom, recoveryPasswordCodeAtom } from "../../store/recovery-password.store";
import { BackButton } from "./back-button";
import { Box } from "@/shared/components/box/box.component";
import { Heading } from "@/shared/components/text/heading.component";
import { Text } from "@/shared/components/text/text.component";
import { RecoveryPasswordStep } from "../../enums/recovery-password.enum";
import InputOtp from "@/shared/components/input/input-otp.component";
import { Button } from "@/shared/components/button/button.component";
import { triggerToast } from "@/shared/components/toast/toast-component";
import { TOAST_MODE } from "@/shared/components/toast/toast.config";
import { useState } from "react";
import { sendCodeAction } from "../../actions/send-code.action";

interface Props {
  form: UseFormReturn<ICodeForm>;
  content: ISendCodeContent | undefined;
}

export const CodeFormComponent = ({ content, form }: Props) => {
  const email = useAtomValue(recoveryPasswordEmailAtom);
  const setStep = useSetAtom(recoveryPasswordStepAtom);
  const setCode = useSetAtom(recoveryPasswordCodeAtom);
  const [isPending, setIsPending] = useState(false);

  const onSubmit = async (data: ICodeForm) => {
    setIsPending(true);
    try {
      const token = await sendCodeAction({ ...data, email });
      setCode(token);
      setStep(RecoveryPasswordStep.PASSWORD);
      triggerToast({
        mode: TOAST_MODE.SUCCESS,
        title: content?.success || "",
      });
    } catch (error: any) {
      triggerToast({ mode: TOAST_MODE.ERROR, title: error.message });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <>
      <BackButton to={RecoveryPasswordStep.EMAIL} />
      <Box className="mb-6 text-center">
        <Heading className="font-bold text-title-main dark:text-title-inverse mb-2">
          {content?.title}
        </Heading>
        <Text>
          {`${content?.description} `}
          <span className="text-primary-400">
            {email.replace(
              /^(.+?)(.{2})@/,
              (_, pre, last2) => "*".repeat(pre.length) + last2 + "@"
            )}
          </span>
        </Text>
      </Box>

      <form
        className="flex flex-col w-full"
        autoComplete="off"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Box className="mb-4 w-full">
          <Controller
            name="code"
            control={form.control}
            rules={{ required: content?.codeInput.required }}
            render={({ field, formState }) => (
              <InputOtp
                errors={formState.errors}
                name="code"
                onChange={field.onChange}
                containerClassName="justify-center gap-5"
                inputClassName="sm:w-14 sm:h-14 "
                showErrorMessage
                absoulteErrorMessage={false}
              />
            )}
          />
        </Box>

        <Button
          type="submit"
          color="secondary"
          className="w-full mt-6 disabled:bg-salem-400 !rounded-full"
          isLoading={isPending}
        >
          {content?.sendButton}
        </Button>
      </form>
    </>
  );
};
