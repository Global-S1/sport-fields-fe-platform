import { Dispatch, useState } from "react";

type ModalInterface = [boolean, () => void, Dispatch<boolean>];

export const useModal = (): ModalInterface => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleShowModal = () => {
    setShowModal((prev) => !prev);
  };

  return [showModal, toggleShowModal, setShowModal];
};
