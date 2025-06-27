"use client";
import { UseFormReturn } from "react-hook-form";
import { IPasswordForm } from "../../interfaces/recovery-password-forms.interface";
import { IChangePasswordContent } from "../../interfaces/recovery-password-content.interface";
import { useSendPassword } from "../../hooks/useSendPassword";
import { BackButton } from "./back-button";
import { RecoveryPasswordStep } from "../../enums/recovery-password.enum";
import { Box } from "@/shared/components/box/box.component";
import { Heading } from "@/shared/components/text/heading.component";
import { Text } from "@/shared/components/text/text.component";
import { InputPassword } from "@/shared/components/input/input-password.component";
import { Button } from "@/shared/components/button/button.component";

interface Props {
  form: UseFormReturn<IPasswordForm>;
  content: IChangePasswordContent | undefined;
}

export const PasswordFormComponent = ({ content, form }: Props) => {
  const {
    handlers: { sendPasswordOnSubmit },
    state: { isPending },
  } = useSendPassword(content);

  const password = form.watch("newPassword");

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
        onSubmit={form.handleSubmit(sendPasswordOnSubmit)}
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
