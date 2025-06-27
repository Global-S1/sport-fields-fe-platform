import { registerCustomer } from "@/services/auth/register.service";
import { triggerToast } from "@/shared/components/toast/toast-component";
import { TOAST_MODE } from "@/shared/components/toast/toast.config";
import { usePending } from "@/shared/hooks/usePending";
import { useCustomRouter } from "@/shared/hooks/useRouter";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerCustomerAdapter } from "../adapters/register-customer.adapter";
import { IRegisterCustomersFields } from "../interfaces/register-form.interface";

const useRegisterCustomer = () => {
  const [error, setError] = useState<string | null>(null);
  const { isPending, start, stop } = usePending();
  const form = useForm<IRegisterCustomersFields>({
    mode: "onChange",
  });
  const router = useCustomRouter();

  const registerCustomerSubmit = async (data: IRegisterCustomersFields) => {
    try {
      start();
      await registerCustomer(registerCustomerAdapter(data));
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
    registerCustomerSubmit,
    error,
  };
};

export default useRegisterCustomer;
