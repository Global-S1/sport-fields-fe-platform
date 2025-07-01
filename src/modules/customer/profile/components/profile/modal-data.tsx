"use client";

import { SubmitHandler, UseFormReturn } from "react-hook-form";
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
  const t = useTranslations("profile.profileData.editModal");
  return (
    <Modal isOpen={isOpen} onClose={toggleOpen} title={{ label: t("title") }}>
      <form className="space-y-4" onSubmit={form.handleSubmit(handleSubmit)}>
        <div>
          <Input
            label={t("inputName.label")}
            formOptions={{
              name: "name",
              form: form,
              validations: { required: t("inputName.required") },
            }}
          />
        </div>

        <div>
          <Input
            label={t("inputLastName.label")}
            formOptions={{
              name: "lastName",
              form: form,
              validations: {
                required: t("inputLastName.required"),
              },
            }}
          />
        </div>

        <div>
          <Input
            label={t("inputCellphone.label")}
            formOptions={{
              name: "cellphone",
              form: form,
              validations: {
                required: t("inputCellphone.required"),
              },
            }}
          />
        </div>

        <div className="flex gap-2">
          <Button type="button" onClick={toggleOpen} color="gray" outline>
            {t("buttons.cancel")}
          </Button>
          <Button type="submit" color="primary">
            {t("buttons.save")}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
