import { FaArrowLeft } from "react-icons/fa";
import { RecoveryPasswordStep } from "../../enums/recovery-password.enum";
import Link from "next/link";
import { useSetAtom } from "jotai";
import { recoveryPasswordStepAtom } from "../../store/recovery-password.store";

interface Props {
  to: RecoveryPasswordStep | "login";
}

export const BackButton = ({ to }: Props) => {
  const setRecoveryPasswordStep = useSetAtom(recoveryPasswordStepAtom);
  const commonClasses = "inline-flex items-center mb-8 transition-colors group";
  const iconClasses =
    "size-4 group-hover:translate-x-[-2px] transition-transform duration-200";

  if (to === "login") {
    return (
      <Link href="/auth" className={commonClasses}>
        <FaArrowLeft className={iconClasses} />
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={commonClasses}
      onClick={() => setRecoveryPasswordStep(to)}
    >
      <FaArrowLeft className={iconClasses} />
    </button>
  );
};
