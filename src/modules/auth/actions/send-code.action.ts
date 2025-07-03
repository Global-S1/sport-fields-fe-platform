"use server";
import { ICodeForm } from "@/modules/auth/interfaces/recovery-password-forms.interface";
import { RecoveryPasswordService } from "@/services/auth/recovery-password.service";

export async function sendCodeAction(data: ICodeForm & { email: string }) {
  const { sendCode } = RecoveryPasswordService();
  return await sendCode(data);
}
