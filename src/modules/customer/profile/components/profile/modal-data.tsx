"use client";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { IProfileDataContent } from "../../interfaces/profile-content.interface";
import { IProfileForm } from "../../interfaces/profile-form.interface";
import { Modal } from "@/shared/components/modal/modal.component";
import { Input } from "@/shared/components/input/input.component";
import { Button } from "@/shared/components/button/button.component";
import { useTranslations } from "next-intl";

interface Props {
  isOpen: boolean;
  toggleOpen: () => void;
  form: UseFormReturn<IProfileForm>;
  handleSubmit: SubmitHandler<IProfileForm>;
}

export default function ModalData({
  isOpen,
  toggleOpen,
  form,
  handleSubmit,
}: Props) {
  const t = useTranslations("profile");
  return (
    <Modal
      isOpen={isOpen}
      onClose={toggleOpen}
      title={{ label: t("editModal.title") }}
    >
      <form className="space-y-4" onSubmit={form.handleSubmit(handleSubmit)}>
        <div>
          <Input
            label={t("editModal.inputName.label")}
            formOptions={{
              name: "name",
              form: form,
              validations: { required: t("editModal.inputName.required") },
            }}
          />
        </div>

        <div>
          <Input
            label={t("editModal.inputLastName.label")}
            formOptions={{
              name: "lastName",
              form: form,
              validations: {
                required: t("editModal.inputLastName.required"),
              },
            }}
          />
        </div>

        <div>
          <Input
            label={t("editModal.inputCellphone.label")}
            formOptions={{
              name: "cellphone",
              form: form,
              validations: {
                required: t("editModal.inputCellphone.required"),
              },
            }}
          />
        </div>

        <div className="flex gap-2">
          <Button type="button" onClick={toggleOpen} color="gray" outline>
            {t("editModal.buttons.cancel")}
          </Button>
          <Button type="submit" color="primary">
            {t("editModal.buttons.save")}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
