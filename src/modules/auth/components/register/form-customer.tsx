import { useForm } from "react-hook-form";
import { Box } from "../../../../shared/components/box/box.component";
import { Button } from "../../../../shared/components/button/button.component";
import { InputCheckbox } from "../../../../shared/components/input/input-checkbox.component";
import { InputPassword } from "../../../../shared/components/input/input-password.component";
import { Input } from "../../../../shared/components/input/input.component";
import { IRegisterCustomersFields } from "../../interfaces/register-form.interface";

// const { registerCustomer } = AuthService();

export const RegisterFormCustomer = () => {
  // const navigate = useNavigate();
  const form = useForm<IRegisterCustomersFields>({
    mode: "onChange",
  });

  const onSubmit = async () => {
    // server actions
  };
  return (
    <Box>
      <Box className="text-center">
        <h1 className="text-clip bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-2xl font-semibold">
          {/* {content?.title} */}
        </h1>
        {/* <p className="mt-1 font-semibold">{content?.subtitle}</p> */}
      </Box>

      {/* {error && (
        <Box className="w-full max-w-xl mx-auto bg-red-500 text-white text-center text-sm font-medium rounded-xl my-4 p-2">
          {error}
        </Box>
      )} */}

      <form
        className="my-4 grid grid-cols-1 md:grid-cols-2 md:gap-4 max-w-2xl mx-auto"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Input
          // label={content?.form.nameInput.label}
          // placeholder={content?.form.nameInput.placeholder}
          formOptions={{
            form,
            name: "name",
            // validations: {
            //   required: content?.form.nameInput.validations.required,
            //   minLength: {
            //     value: 2,
            //     message: String(content?.form.nameInput.validations.minLength),
            //   },
            // },
          }}
        />
        <Input
          // label={content?.form.lastNameInput.label}
          // placeholder={content?.form.lastNameInput.placeholder}
          formOptions={{
            form,
            name: "lastName",
            // validations: {
            //   required: content?.form.lastNameInput.validations.required,
            // },
          }}
        />
        <Input
          // label={content?.form.emailInput.label}
          // placeholder={content?.form.emailInput.placeholder}
          formOptions={{
            form,
            name: "email",
            // validations: {
            //   required: content?.form.emailInput.validations.required,
            //   pattern: {
            //     message: String(content?.form.emailInput.validations.pattern),
            //     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            //   },
            // },
          }}
        />
        <Input
          // label={content?.form.docIdentityInput.label}
          // placeholder={content?.form.docIdentityInput.placeholder}
          formOptions={{
            form,
            name: "docIdentity",
            // validations: {
            //   required: content?.form.docIdentityInput.validations.required,
            //   pattern: {
            //     value: /^[0-9]+$/,
            //     message: String(
            //       content?.form.docIdentityInput.validations.pattern
            //     ),
            //   },
            // },
          }}
        />

        <Input
          // label={content?.form.cellphoneInput.label}
          // placeholder={content?.form.cellphoneInput.placeholder}
          formOptions={{
            form,
            name: "cellphone",
            // validations: {
            //   required: content?.form.cellphoneInput.validations.required,
            //   pattern: {
            //     value: /^\+?\d*$/,
            //     message: String(
            //       content?.form.cellphoneInput.validations.pattern
            //     ),
            //   },
            //   minLength: {
            //     value: 9,
            //     message: String(
            //       content?.form.cellphoneInput.validations.minLength
            //     ),
            //   },
            //   maxLength: {
            //     value: 15,
            //     message: String(
            //       content?.form.cellphoneInput.validations.maxLength
            //     ),
            //   },
            // },
          }}
        />
        <Input
          // label={content?.form.rucInput.label}
          // placeholder={content?.form.rucInput.placeholder}
          formOptions={{
            form,
            name: "ruc",
            // validations: {
            //   pattern: {
            //     value: /^[0-9]{11}$/,
            //     message: String(content?.form.rucInput.validations.pattern),
            //   },
            // },
          }}
        />

        <InputPassword
          // label={content?.form.passwordInput.label}
          // placeholder={content?.form.passwordInput.placeholder}
          formOptions={{
            form,
            name: "password",
            // validations: {
            //   required: content?.form.passwordInput.validations.required,
            //   minLength: {
            //     value: 8,
            //     message: String(
            //       content?.form.passwordInput.validations.minLength
            //     ),
            //   },
            //   validate: {
            //     hasUppercase: (value) =>
            //       typeof value === "string"
            //         ? /[A-Z]/.test(value) ||
            //           String(
            //             content?.form.passwordInput.validations.hasUppercase
            //           )
            //         : String(
            //             content?.form.passwordInput.validations.hasUppercase
            //           ),
            //     hasLowercase: (value) =>
            //       typeof value === "string"
            //         ? /[a-z]/.test(value) ||
            //           String(
            //             content?.form.passwordInput.validations.hasLowercase
            //           )
            //         : String(
            //             content?.form.passwordInput.validations.hasLowercase
            //           ),
            //     hasNumber: (value) =>
            //       typeof value === "string"
            //         ? /[0-9]/.test(value) ||
            //           String(content?.form.passwordInput.validations.hasNumber)
            //         : String(content?.form.passwordInput.validations.hasNumber),
            //     hasSymbol: (value) =>
            //       typeof value === "string"
            //         ? /[!@#$&/*]/.test(value) ||
            //           String(content?.form.passwordInput.validations.hasSymbol)
            //         : String(content?.form.passwordInput.validations.hasSymbol),
            //   },
            // },
          }}
        />
        <InputPassword
          // label={content?.form.confirmPasswordInput.label}
          className="mt-8 md:mt-0"
          // placeholder={content?.form.confirmPasswordInput.placeholder}
          formOptions={{
            form,
            name: "confirmPassword",
            // validations: {
            //   required: content?.form.confirmPasswordInput.validations.required,
            //   validate: (value) =>
            //     value === form.getValues("password") ||
            //     content?.form.confirmPasswordInput.validations.validate,
            // },
          }}
        />
        <Box className="md:col-span-2 flex flex-col items-center">
          <InputCheckbox
            name="termsConditions"
            formOptions={{
              form,
              name: "termsConditions",
              validations: {
                required: true,
              },
            }}
          >
            {/* <span>
              {content?.form.termsAndConditionsCheckbox.label}{" "}
              <Link className="underline" to={"/terms-and-conditions"}>
                {content?.form.termsAndConditionsCheckbox.link}
              </Link>
            </span> */}
          </InputCheckbox>
          <Button
            color="primary"
            className="mt-4 w-full md:max-w-sm"
            disabled={!form.formState.isValid}
            // isLoading={isPending}
          >
            {/* {content?.form.button} */}
          </Button>
        </Box>
      </form>
    </Box>
  );
};
