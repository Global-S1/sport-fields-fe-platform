import { setTokenServerAction } from "@/modules/auth/actions/set-token-server.action";

export async function serverAction(token: string) {
  await setTokenServerAction(token);
  return { success: true };
}
