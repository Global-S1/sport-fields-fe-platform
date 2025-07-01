import { IPhotoForm, IProfileForm } from "../interfaces/profile-form.interface";
import { TOAST_MODE } from "@/shared/components/toast/toast.config";
import { triggerToast } from "@/shared/components/toast/toast-component";
import { SubmitHandler, useForm } from "react-hook-form";
import { useModal } from "@/shared/components/modal/hooks/useModal";
import { useAtom, useAtomValue } from "jotai";
import {
  updateData,
  updateImage,
} from "@/services/customer/profile/profile.service";
import { currentTokenAtom, currentUserAtom } from "@/shared/store/global.store";

export const useEditProfile = () => {
  const [isOpenPhoto, toggleModalPhoto] = useModal();
  const [isEditData, toggleModalEdit] = useModal();

  const [user, setUser] = useAtom(currentUserAtom);
  const token = useAtomValue(currentTokenAtom);

  const editForm = useForm<IProfileForm>();
  const photoForm = useForm<IPhotoForm>();

  const photoSubmit = async (data: IPhotoForm) => {
    try {
      const userImg = await updateImage(user?.userUuid || "", data, token);
      if (userImg) {
        toggleModalPhoto();
        photoForm.reset();
        if (user) {
          setUser({ ...user, userImg: userImg });
        }
      }
    } catch (error) {
      triggerToast({ mode: TOAST_MODE.ERROR, title: (error as any).message });
    }
  };

  const sendUserImg: SubmitHandler<IPhotoForm> = async (data) =>
    await photoSubmit(data);

  const dataSubmit = async (data: IProfileForm) => {
    try {
      const userData = await updateData(user?.userUuid || "", data, token);
      if (userData) {
        toggleModalEdit();
        editForm.reset();
        if (user) {
          setUser({ ...user, ...userData });
        }
      }
    } catch (error) {
      triggerToast({ mode: TOAST_MODE.ERROR, title: (error as any).message });
    }
  };

  const sendData: SubmitHandler<IProfileForm> = async (data) =>
    await dataSubmit(data);

  return {
    form: { editForm, photoForm },
    handlers: { sendData, sendUserImg },
    photoModal: { isOpen: isOpenPhoto, toggleModal: toggleModalPhoto },
    dataModal: { isOpen: isEditData, toggleModal: toggleModalEdit },
  };
};
