import { registerAdmin } from "@/services/auth/register.service";
import { triggerToast } from "@/shared/components/toast/toast-component";
import { TOAST_MODE } from "@/shared/components/toast/toast.config";
import { usePending } from "@/shared/hooks/usePending";
import { useCustomRouter } from "@/shared/hooks/useRouter";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerAdminAdapter } from "../adapters/register-admin.adapter";
import { IRegisterAdminFields } from "../interfaces/register-form.interface";

const useRegisterAdmin = () => {
  const [error, setError] = useState<string | null>(null);
  const { isPending, start, stop } = usePending();
  const form = useForm<IRegisterAdminFields>({
    mode: "onChange",
    shouldUnregister: false,
    defaultValues: {
      userEstablishment: [{ paymentProcessors: [], extraServices: [] }],
    },
  });

  const router = useCustomRouter();

  const registerAdminSubmit = async (data: IRegisterAdminFields) => {
    try {
      start();
      await registerAdmin(registerAdminAdapter(data));
      triggerToast({
        title: "Cuenta creada correctamente",
        mode: TOAST_MODE.SUCCESS,
      });
      router.push(`auth`);
    } catch (error) {
      setError((error as any).message);
    } finally {
      stop();
    }
  };

  return {
    isPending,
    form,
    registerAdminSubmit,
    error,
  };
};

export default useRegisterAdmin;
