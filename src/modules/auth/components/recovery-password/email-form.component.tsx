import { UseFormReturn } from "react-hook-form";
import { IEmailForm } from "../../interfaces/recovery-password-forms.interface";
import { ISendEmailContent } from "../../interfaces/recovery-password-content.interface";
import { BackButton } from "./back-button";
import { Box } from "@/shared/components/box/box.component";
import { Heading } from "@/shared/components/text/heading.component";
import { Text } from "@/shared/components/text/text.component";
import { Input } from "@/shared/components/input/input.component";
import { Button } from "@/shared/components/button/button.component";
import { useSetAtom } from "jotai";
import { recoveryPasswordStepAtom, recoveryPasswordEmailAtom } from "../../store/recovery-password.store";
import { RecoveryPasswordStep } from "../../enums/recovery-password.enum";
import { TOAST_MODE } from "@/shared/components/toast/toast.config";
import { triggerToast } from "@/shared/components/toast/toast-component";
import { sendRecoveryEmail } from "../../actions/send-recovery-email.action";

interface Props {
  content: ISendEmailContent | undefined;
  form: UseFormReturn<IEmailForm>;
}

export const EmailFormComponent = ({ content, form }: Props) => {
  const setStep = useSetAtom(recoveryPasswordStepAtom);
  const setEmail = useSetAtom(recoveryPasswordEmailAtom);

  const onSubmit = async (data: IEmailForm) => {
    try {
      await sendRecoveryEmail(data);
      setEmail(data.email);
      setStep(RecoveryPasswordStep.CODE);
      triggerToast({
        mode: TOAST_MODE.SUCCESS,
        title: content?.success || "¡Correo enviado!",
      });
    } catch (error: any) {
      const errorMessage = error?.message || 'Error al enviar el correo de recuperación';
      triggerToast({ 
        mode: TOAST_MODE.ERROR, 
        title: errorMessage 
      });
    }
  };

  return (
    <>
      <BackButton to="login" />

      <Box className="mb-6 text-center">
        <Heading className="font-bold text-title-main dark:text-title-inverse mb-2">
          {content?.title}
        </Heading>
        <Text>{content?.description}</Text>
      </Box>

      <form
        className="flex flex-col w-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Box className="mb-4 w-full">
          <Input
            label={content?.emailInput.label}
            placeholder={content?.emailInput.placeholder}
            className="w-full"
            absoulteErrorMessage
            formOptions={{
              form,
              name: "email",
              validations: {
                required: content?.emailInput.required,
                pattern: {
                  message: String(content?.emailInput.pattern),
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                },
              },
            }}
          />
        </Box>

        <Button
          type="submit"
          color="secondary"
          className="w-full mt-6 disabled:bg-salem-400 !rounded-full"
        >
          {content?.sendButton}
        </Button>
      </form>
    </>
  );
};
