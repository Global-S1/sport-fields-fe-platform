interface Props {
  isOpen: boolean;
  toglleOpen: () => void;
  form: UseFormReturn<IPhotoForm>;
  handleSubmit: SubmitHandler<IPhotoForm>;
  content: IProfileDataContent;
}

export default function ModalPhoto({
  isOpen,
  toglleOpen,
  form,
  handleSubmit,
  content,
}: Props) {
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
            validations: { required: content.editAvatar.inputFile.required },
          }}
        />

        <Button>{content.editAvatar.buttons.save}</Button>
      </form>
    </Modal>
  );
}
