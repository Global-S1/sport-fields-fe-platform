import { RecoveryPasswordService } from "@/services/auth/recovery-password.service";
import { RecoveryPasswordStep } from "../enums/recovery-password.enum";
import { atom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";
import { langSelectedAtom } from "@/shared/store/global.store";

const { getContent } = RecoveryPasswordService();

export const recoveryPasswordStepAtom = atom<RecoveryPasswordStep>(
  RecoveryPasswordStep.EMAIL
);
export const recoveryPasswordEmailAtom = atom<string>("");
export const recoveryPasswordCodeAtom = atom<string>("");

export const recoveryPasswordContentAtom = atomWithQuery((get) => ({
  queryKey: ["get-recovery-password-content", get(langSelectedAtom)],
  queryFn: async () => {
    const lang = get(langSelectedAtom);
    const authContent = await getContent(lang);
    return authContent;
  },
}));
