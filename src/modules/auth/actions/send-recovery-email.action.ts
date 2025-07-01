"use server";
import { IEmailForm } from "@/modules/auth/interfaces/recovery-password-forms.interface";
import { RecoveryPasswordService } from "@/services/auth/recovery-password.service";

export async function sendRecoveryEmail(data: IEmailForm) {
  const { sendEmail } = RecoveryPasswordService();
  await sendEmail(data);
}
