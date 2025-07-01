"use server";
import { ISendPasswordParams } from "@/services/auth/interfaces/send-passwod-params";
import { RecoveryPasswordService } from "@/services/auth/recovery-password.service";

export async function sendPasswordAction(
  data: ISendPasswordParams & { email: string; token: string }
) {
  const { sendPassword } = RecoveryPasswordService();
  await sendPassword(data);
}
