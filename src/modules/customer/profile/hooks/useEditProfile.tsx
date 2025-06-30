const { updateData, updateImage } = ProfileService();

export const useEditProfile = () => {
  const [isOpenPhoto, toggleModalPhoto] = useModal();
  const [isEditData, toggleModalEdit] = useModal();

  const [user, setUser] = useAtom(currentUserAtom);
  const token = useAtomValue(currentTokenAtom);

  const editForm = useForm<IProfileForm>();
  const photoForm = useForm<IPhotoForm>();

  const photoMutation = useMutation({
    mutationFn: async (data: IPhotoForm) =>
      await updateImage(user?.userUuid || "", data, token),
    onSuccess: (userImg: string) => {
      toggleModalPhoto();
      photoForm.reset();
      if (user) {
        setUser({ ...user, userImg });
      }
    },
    onError: (error: any) => {
      triggerToast({ mode: TOAST_MODE.ERROR, title: error.message });
    },
  });

  const sendUserImg: SubmitHandler<IPhotoForm> = async (data) =>
    photoMutation.mutate(data);

  const dataMutation = useMutation({
    mutationFn: async (data: IProfileForm) =>
      await updateData(user?.userUuid || "", data, token),
    onSuccess: (data) => {
      toggleModalEdit();
      editForm.reset();
      if (user) {
        setUser({ ...user, ...data });
      }
    },
    onError: (error: any) => {
      triggerToast({ mode: TOAST_MODE.ERROR, title: error.message });
    },
  });

  const sendData: SubmitHandler<IProfileForm> = async (data) =>
    dataMutation.mutate(data);

  return {
    form: { editForm, photoForm },
    handlers: { sendData, sendUserImg },
    photoModal: { isOpen: isOpenPhoto, toggleModal: toggleModalPhoto },
    dataModal: { isOpen: isEditData, toggleModal: toggleModalEdit },
  };
};
