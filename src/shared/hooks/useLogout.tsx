import { logout, logoutAll } from "@/services/auth/logout.service";
import { useAtom, useSetAtom } from "jotai";
import { useCustomRouter } from "./useRouter";
import { usePending } from "./usePending";
import { triggerToast } from "../components/toast/toast-component";
import { TOAST_MODE } from "../components/toast/toast.config";
import { currentTokenAtom, currentUserAtom } from "../store/global.store";
import { RESET } from "jotai/utils";

export const useLogout = () => {
  const router = useCustomRouter();
  const logoutStates = usePending();
  const logoutAllStates = usePending();
  const [token, setToken] = useAtom(currentTokenAtom);
  const setCurrentUser = useSetAtom(currentUserAtom);

  const logoutSubmit = async () => {
    try {
      logoutStates.start();
      await logout(token);
      setToken(RESET);
      setCurrentUser(RESET);
      router.push(`auth`);
    } catch (error) {
      triggerToast({ title: (error as any).message, mode: TOAST_MODE.ERROR });
    } finally {
      logoutStates.stop();
    }
  };

  const logoutAllSubmit = async () => {
    try {
      logoutAllStates.start();
      await logoutAll(token);
      setToken(RESET);
      setCurrentUser(RESET);
      router.push(`auth`);
    } catch (error) {
      triggerToast({ title: (error as any).message, mode: TOAST_MODE.ERROR });
    } finally {
      logoutAllStates.stop();
    }
  };

  return {
    logout: logoutSubmit,
    logoutAll: logoutAllSubmit,
    states: {
      isPendingLogout: logoutStates.isPending,
      isPendingLogoutAll: logoutAllStates.isPending,
    },
  };
};
