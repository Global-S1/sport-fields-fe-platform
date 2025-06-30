"use client";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { IProfileDataContent } from "../../interfaces/profile-content.interface";
import { IPhotoForm } from "../../interfaces/profile-form.interface";
import { Button } from "@/shared/components/button/button.component";
import { Input } from "@/shared/components/input/input.component";
import { Modal } from "@/shared/components/modal/modal.component";
import { useTranslations } from "next-intl";

interface Props {
  isOpen: boolean;
  toglleOpen: () => void;
  form: UseFormReturn<IPhotoForm>;
  handleSubmit: SubmitHandler<IPhotoForm>;
}

export default function ModalPhoto({
  isOpen,
  toglleOpen,
  form,
  handleSubmit,
}: Props) {
  const t = useTranslations("profile");
  return (
    <Modal isOpen={isOpen} onClose={toglleOpen}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        encType="multipart/form-data"
      >
        <Input
          type="file"
          formOptions={{
            form,
            name: "userImg",
            validations: { required: t("editAvatar.inputFile.required") },
          }}
        />

        <Button>{t("editAvatar.buttons.save")}</Button>
      </form>
    </Modal>
  );
}
