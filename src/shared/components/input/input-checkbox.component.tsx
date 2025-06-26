import { ReactNode } from "react";
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormReturn,
} from "react-hook-form";

interface FormOptions<T extends FieldValues> {
  form: UseFormReturn<T, any, any>;
  name: Path<T>;
  validations?: RegisterOptions<T, Path<T>> | undefined;
}

interface Props<T extends FieldValues> {
  name: string;
  label?: string;
  children?: ReactNode;
  formOptions?: FormOptions<T>;
}

export const InputCheckbox = <T extends FieldValues>({
  name,
  label,
  children,
  formOptions,
}: Props<T>) => {
  return (
    <label htmlFor={name} className="flex items-center gap-2 cursor-pointer">
      <div className="inline-flex items-center">
        <div className="flex items-center cursor-pointer relative">
          <input
            {...formOptions?.form.register(
              formOptions.name,
              formOptions.validations
            )}
            type="checkbox"
            name={name}
            className={`peer size-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border checked:bg-greenLemon-600 checked:border-greenLemon-600`}
            id={name}
          />
          <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`size-[15px]`}
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
      </div>
      {label && !children && <span className="underline">{label}</span>}
      {children}
    </label>
  );
};
