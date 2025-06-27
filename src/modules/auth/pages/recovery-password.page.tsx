"use client";
import { AuthLayout } from "@/app/[locale]/auth/auth-layout";
import { useAtom } from "jotai";
import { recoveryPasswordStepAtom } from "../store/recovery-password.store";
import { useGetRecoveryPasswordContent } from "../hooks/useGetRecoveryPassword";
import { RecoveryPasswordStep } from "../enums/recovery-password.enum";
import { EmailFormComponent } from "../components/recovery-password/email-form.component";
import { CodeFormComponent } from "../components/recovery-password/code-form.component";
import { PasswordFormComponent } from "../components/recovery-password/password-form.component";

export const RecoveryPasswordPage = () => {
  const [step] = useAtom(recoveryPasswordStepAtom);
  const { content, forms } = useGetRecoveryPasswordContent();

  return (
    <AuthLayout>
      {step === RecoveryPasswordStep.EMAIL && (
        <EmailFormComponent
          form={forms.emailForm}
          content={content.recoveryPasswordContent?.sendEmail}
        />
      )}

      {step === RecoveryPasswordStep.CODE && (
        <CodeFormComponent
          form={forms.codeForm}
          content={content.recoveryPasswordContent?.sendCode}
        />
      )}

      {step === RecoveryPasswordStep.PASSWORD && (
        <PasswordFormComponent
          form={forms.passwordForm}
          content={content.recoveryPasswordContent?.changuePassword}
        />
      )}
    </AuthLayout>
  );
};
