import { login } from "@/services/auth/login.service";
import { triggerToast } from "@/shared/components/toast/toast-component";
import { TOAST_MODE } from "@/shared/components/toast/toast.config";
import { usePending } from "@/shared/hooks/usePending";
import { useCustomRouter } from "@/shared/hooks/useRouter";
import { useForm } from "react-hook-form";
import { TLoginForm } from "../interfaces/login-form.type";

const useLogin = () => {
  const { isPending, start, stop } = usePending();
  const form = useForm<TLoginForm>();
  const router = useCustomRouter();

  const loginSumit = async (data: TLoginForm) => {
    try {
      start();
      await login(data);
      router.push(`details/asdasd`);
    } catch (error) {
      triggerToast({ title: (error as any).message, mode: TOAST_MODE.ERROR });
    } finally {
      stop();
    }
  };

  return {
    isPending,
    form,
    loginSumit,
  };
};

export default useLogin;
