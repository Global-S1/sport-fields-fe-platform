import { login } from "@/services/auth/login.service";
import { triggerToast } from "@/shared/components/toast/toast-component";
import { TOAST_MODE } from "@/shared/components/toast/toast.config";
import { usePending } from "@/shared/hooks/usePending";
import { useCustomRouter } from "@/shared/hooks/useRouter";
import { useForm } from "react-hook-form";
import { TLoginForm } from "../interfaces/login-form.type";
import { useSetAtom } from "jotai";
import {
  currentPrivilegesAtom,
  currentTokenAtom,
  currentUserAtom,
  isAdminAtom,
} from "@/shared/store/global.store";
import { EPrivilegesTitle } from "@/shared/interfaces/privileges.interface";

const useLogin = () => {
  const { isPending, start, stop } = usePending();
  const form = useForm<TLoginForm>();
  const router = useCustomRouter();
  const setCurrentUser = useSetAtom(currentUserAtom);
  const setToken = useSetAtom(currentTokenAtom);
  const setPrivileges = useSetAtom(currentPrivilegesAtom);
  const setIsAdmin = useSetAtom(isAdminAtom);

  const loginSumit = async (data: TLoginForm) => {
    try {
      start();
      const response = await login(data);
      setCurrentUser(response.data.item.user);
      setToken(response.data.item.token);
      setPrivileges(response.data.item.privileges);

      const isAdmin = response.data.item.privileges.some(
        (privilege) => privilege.title === EPrivilegesTitle.ADMIN
      );
      if (isAdmin) {
        setIsAdmin(true);
        router.push("/admin");
        return;
      }

      router.push("/");
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
