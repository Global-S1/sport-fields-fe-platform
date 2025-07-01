import { RecoveryPasswordStep } from "../enums/recovery-password.enum";
import { atom } from "jotai";

export const recoveryPasswordStepAtom = atom<RecoveryPasswordStep>(
  RecoveryPasswordStep.EMAIL
);

export const recoveryPasswordEmailAtom = atom<string>("");
export const recoveryPasswordCodeAtom = atom<string>("");
