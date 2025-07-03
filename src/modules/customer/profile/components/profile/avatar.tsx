"use client";

import { Box } from "@/shared/components/box/box.component";
import { currentUserAtom } from "@/shared/store/global.store";
import { useAtomValue } from "jotai";
import { BiSolidEdit } from "react-icons/bi";
import { TbCamera } from "react-icons/tb";
import { useEditProfile } from "../../hooks/useEditProfile";
import { ProfileButtons } from "./buttons";
import ModalData from "./modal-data";
import ModalPhoto from "./modal-foto";

export const ProfileAvatar = () => {
  const user = useAtomValue(currentUserAtom);
  const {
    form: { editForm, photoForm },
    handlers: { sendData, sendUserImg },
    photoModal,
    dataModal,
  } = useEditProfile();

  return (
    <Box className="p-6 md:p-8">
      <Box className="flex flex-col md:flex-row md:items-start md:space-x-8">
        <Box className="flex justify-center md:justify-start mb-6 md:mb-0">
          <Box className="relative">
            <Box className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-200">
              <img
                src={user?.userImg || "/default-image.svg"}
                alt="Profile"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </Box>
            <button
              onClick={photoModal.toggleModal}
              className="absolute bottom-0 right-0 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
            >
              <TbCamera className="size-4 text-white" />
            </button>
          </Box>
        </Box>

        <Box className="flex-1">
          <Box className="text-center md:text-left mb-6">
            <Box className="flex items-center justify-center md:justify-start space-x-3 mb-2">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                {user?.name} {user?.lastName}
              </h2>
              <button
                onClick={() => {
                  setTimeout(() => {
                    if (user) {
                      editForm.setValue("name", user?.name);
                      editForm.setValue("lastName", user?.lastName);
                      editForm.setValue("cellphone", user?.cellphone ?? "");
                    }
                  }, 0);
                  dataModal.toggleModal();
                }}
                className="text-blue-500 hover:text-blue-600 p-1 rounded-full hover:bg-blue-50 transition-colors"
              >
                <BiSolidEdit className="text-primary-400" />
              </button>
            </Box>
            <Box className="space-y-1 text-sm md:text-base">
              <p className="text-gray-600">📧 {user?.email}</p>
              <p className="text-gray-600">📱 {user?.cellphone}</p>
            </Box>
          </Box>

          <ProfileButtons />
        </Box>
      </Box>

      <ModalData
        isOpen={dataModal.isOpen}
        toggleOpen={dataModal.toggleModal}
        form={editForm}
        handleSubmit={sendData}
      />

      <ModalPhoto
        isOpen={photoModal.isOpen}
        toglleOpen={photoModal.toggleModal}
        form={photoForm}
        handleSubmit={sendUserImg}
      />
    </Box>
  );
};
