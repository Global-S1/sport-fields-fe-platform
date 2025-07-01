"use server";
import { IPasswordForm } from "@/modules/auth/interfaces/recovery-password-forms.interface";
import { RecoveryPasswordService } from "@/services/auth/recovery-password.service";

export async function sendPasswordAction(
  data: IPasswordForm & { email: string; token: string }
) {
  const { sendPassword } = RecoveryPasswordService();
  await sendPassword(data);
}
