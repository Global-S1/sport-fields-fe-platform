import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Box } from "../../../../shared/components/box/box.component";
import { Button } from "../../../../shared/components/button/button.component";
import { InputCheckbox } from "../../../../shared/components/input/input-checkbox.component";
import { InputPassword } from "../../../../shared/components/input/input-password.component";
import { Input } from "../../../../shared/components/input/input.component";
import useRegisterCustomer from "../../hooks/useRegisterCustomer";

export const RegisterFormCustomer = () => {
  const { isPending, error, form, registerCustomerSubmit } =
    useRegisterCustomer();
  const t = useTranslations("auth.register.customer");

  return (
    <Box tag="section">
      <Box tag="header" className="text-center">
        <h2 className="text-clip bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-2xl font-semibold">
          {t("title")}
        </h2>
        <p className="mt-1 font-semibold">{t("subtitle")}</p>
      </Box>

      {error && (
        <Box className="w-full max-w-xl mx-auto bg-red-500 text-white text-center text-sm font-medium rounded-xl my-4 p-2">
          {error}
        </Box>
      )}

      <form
        className="my-4 grid grid-cols-1 md:grid-cols-2 md:gap-4 max-w-2xl mx-auto"
        onSubmit={form.handleSubmit(registerCustomerSubmit)}
      >
        <Input
          label={t("form.nameInput.label")}
          placeholder={t("form.nameInput.placeholder")}
          formOptions={{
            form,
            name: "name",
            validations: {
              required: t("form.nameInput.validations.required"),
              minLength: {
                value: 2,
                message: t("form.nameInput.validations.minLength"),
              },
            },
          }}
        />
        <Input
          label={t("form.lastNameInput.label")}
          placeholder={t("form.lastNameInput.placeholder")}
          formOptions={{
            form,
            name: "lastName",
            validations: {
              required: t("form.lastNameInput.validations.required"),
            },
          }}
        />
        <Input
          label={t("form.emailInput.label")}
          placeholder={t("form.emailInput.placeholder")}
          formOptions={{
            form,
            name: "email",
            validations: {
              required: t("form.emailInput.validations.required"),
              pattern: {
                message: t("form.emailInput.validations.pattern"),
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              },
            },
          }}
        />
        <Input
          label={t("form.docIdentityInput.label")}
          placeholder={t("form.docIdentityInput.placeholder")}
          formOptions={{
            form,
            name: "docIdentity",
            validations: {
              required: t("form.docIdentityInput.validations.required"),
              pattern: {
                value: /^[0-9]+$/,
                message: t("form.docIdentityInput.validations.pattern"),
              },
            },
          }}
        />

        <Input
          label={t("form.cellphoneInput.label")}
          placeholder={t("form.cellphoneInput.placeholder")}
          formOptions={{
            form,
            name: "cellphone",
            validations: {
              required: t("form.cellphoneInput.validations.required"),
              pattern: {
                value: /^\+?\d*$/,
                message: t("form.cellphoneInput.validations.pattern"),
              },
              minLength: {
                value: 9,
                message: t("form.cellphoneInput.validations.minLength"),
              },
              maxLength: {
                value: 15,
                message: t("form.cellphoneInput.validations.maxLength"),
              },
            },
          }}
        />
        <Input
          label={t("form.rucInput.label")}
          placeholder={t("form.rucInput.placeholder")}
          formOptions={{
            form,
            name: "ruc",
            validations: {
              pattern: {
                value: /^[0-9]{11}$/,
                message: t("form.rucInput.validations.pattern"),
              },
            },
          }}
        />

        <InputPassword
          label={t("form.passwordInput.label")}
          placeholder={t("form.passwordInput.placeholder")}
          formOptions={{
            form,
            name: "password",
            validations: {
              required: t("form.passwordInput.validations.required"),
              minLength: {
                value: 8,
                message: t("form.passwordInput.validations.minLength"),
              },
              validate: {
                hasUppercase: (value) =>
                  typeof value === "string"
                    ? /[A-Z]/.test(value) ||
                      t("form.passwordInput.validations.hasUppercase")
                    : t("form.passwordInput.validations.hasUppercase"),
                hasLowercase: (value) =>
                  typeof value === "string"
                    ? /[a-z]/.test(value) ||
                      t("form.passwordInput.validations.hasLowercase")
                    : t("form.passwordInput.validations.hasLowercase"),
                hasNumber: (value) =>
                  typeof value === "string"
                    ? /[0-9]/.test(value) ||
                      t("form.passwordInput.validations.hasNumber")
                    : t("form.passwordInput.validations.hasNumber"),
                hasSymbol: (value) =>
                  typeof value === "string"
                    ? /[!@#$&/*]/.test(value) ||
                      t("form.passwordInput.validations.hasSymbol")
                    : t("form.passwordInput.validations.hasSymbol"),
              },
            },
          }}
        />
        <InputPassword
          label={t("form.confirmPasswordInput.label")}
          className="mt-8 md:mt-0"
          placeholder={t("form.confirmPasswordInput.placeholder")}
          formOptions={{
            form,
            name: "confirmPassword",
            validations: {
              required: t("form.confirmPasswordInput.validations.required"),
              validate: (value) =>
                value === form.getValues("password") ||
                t("form.confirmPasswordInput.validations.validate"),
            },
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
            <span>
              {t("form.termsAndConditionsCheckbox.label")}{" "}
              <Link className="underline" href="/terms-and-conditions">
                {t("form.termsAndConditionsCheckbox.link")}
              </Link>
            </span>
          </InputCheckbox>
          <Button
            color="primary"
            className="mt-4 w-full md:max-w-sm"
            disabled={!form.formState.isValid}
            isLoading={isPending}
          >
            {t("form.button")}
          </Button>
        </Box>
      </form>
    </Box>
  );
};
