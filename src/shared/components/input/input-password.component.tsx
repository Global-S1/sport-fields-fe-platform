"use client";

import { InputHTMLAttributes, ReactNode, useState } from "react";
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormReturn,
} from "react-hook-form";
import clsx from "../../../libs/clsx";
import { Icon } from "../icon/icon.component";
import { Input } from "./input.component";

interface FormOptions<T extends FieldValues> {
  form: UseFormReturn<T, any, any>;
  name: Path<T>;
  validations?: RegisterOptions<T, Path<T>> | undefined;
}

interface IInputPasswordProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  formOptions?: FormOptions<T>;
  readonly?: boolean;
  disabled?: boolean;
  inputContainerClassName?: string;
  prefixItem?: ReactNode;
}

export const InputPassword = <T extends FieldValues>({
  className,
  label,
  formOptions,
  readOnly,
  disabled,
  inputContainerClassName,
  prefixItem,
  ...rest
}: IInputPasswordProps<T>) => {
  const [show, setShow] = useState<boolean>(false);

  const hadleShowPassword = () => {
    setShow((prev) => !prev);
  };

  return (
    <Input
      label={label}
      readOnly={readOnly}
      disabled={disabled}
      formOptions={formOptions}
      inputContainerClassName={inputContainerClassName}
      sufixItem={
        <button
          type="button"
          onClick={hadleShowPassword}
          className="hover:text-blueSport-500 duration-200 h-[24px] w-[24px] flex justify-center items-center rounded-full"
        >
          <Icon iconName={show ? "BiHide" : "BiShow"} />
        </button>
      }
      type={show ? "text" : "password"}
      {...rest}
      className={clsx(className)}
      absoulteErrorMessage
      prefixItem={prefixItem}
    />
  );
};
