/* eslint-disable react-hooks/exhaustive-deps */
import { IRegisterAdminFields } from "@/modules/auth/interfaces/register-form.interface";
import { Dispatch, SetStateAction, useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import { Box } from "../../../../../shared/components/box/box.component";
import { Button } from "../../../../../shared/components/button/button.component";
import { Input } from "../../../../../shared/components/input/input.component";
import { ERegisterAdminSteps } from "../../../enums/register.enum";

interface Props {
  form: UseFormReturn<IRegisterAdminFields>;
  setSteps: Dispatch<SetStateAction<ERegisterAdminSteps>>;
}

export const FormAdminDataForm = ({ form, setSteps }: Props) => {
  const values = form.getValues();

  useEffect(() => {
    form.reset(values);
  }, []);

  return (
    <form className="my-4 grid grid-cols-1 md:grid-cols-2 md:gap-4 max-w-2xl mx-auto">
      <Input
        // label={content?.nameInput.label}
        // placeholder={content?.nameInput.placeholder}
        formOptions={{
          form,
          name: "name",
          // validations: {
          //   required: content?.nameInput.validations.required,
          //   minLength: {
          //     value: 2,
          //     message: String(content?.nameInput.validations.minLength),
          //   },
          // },
        }}
      />
      <Input
        // label={content?.lastNameInput.label}
        // placeholder={content?.lastNameInput.placeholder}
        formOptions={{
          form,
          name: "lastName",
          // validations: {
          //   required: content?.lastNameInput.validations.required,
          // },
        }}
      />
      <Input
        // label={content?.emailInput.label}
        // placeholder={content?.emailInput.placeholder}
        formOptions={{
          form,
          name: "email",
          // validations: {
          //   required: content?.emailInput.validations.required,
          //   pattern: {
          //     message: String(content?.emailInput.validations.pattern),
          //     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          //   },
          // },
        }}
      />
      <Input
        // label={content?.cellphoneInput.label}
        // placeholder={content?.cellphoneInput.placeholder}
        formOptions={{
          form,
          name: "cellphone",
          // validations: {
          //   required: content?.cellphoneInput.validations.required,
          //   pattern: {
          //     value: /^\+?\d*$/,
          //     message: String(content?.cellphoneInput.validations.pattern),
          //   },
          //   minLength: {
          //     value: 9,
          //     message: String(content?.cellphoneInput.validations.minLength),
          //   },
          //   maxLength: {
          //     value: 15,
          //     message: String(content?.cellphoneInput.validations.maxLength),
          //   },
          // },
        }}
      />
      <Input
        // label={content?.docIdentityInput.label}
        // placeholder={content?.docIdentityInput.placeholder}
        formOptions={{
          form,
          name: "docIdentity",
          // validations: {
          //   required: String(content?.docIdentityInput.validations.required),
          //   pattern: {
          //     value: /^[0-9]+$/,
          //     message: String(content?.docIdentityInput.validations.pattern),
          //   },
          // },
        }}
      />
      <Input
        // label={content?.rucInput?.label}
        // placeholder={content?.rucInput?.placeholder}
        formOptions={{
          form,
          name: "ruc",
          // validations: {
          //   pattern: {
          //     value: /^[0-9]+$/,
          //     message: String(content?.rucInput?.validations.pattern),
          //   },
          // },
        }}
      />
      <Box className="md:col-span-2 flex items-center justify-end">
        <Button
          onClick={() => {
            setSteps(ERegisterAdminSteps.PASSWORD);
          }}
          disabled={!form.formState.isValid}
          type="button"
        >
          {/* {content?.button} */}
        </Button>
      </Box>
    </form>
  );
};
