"use client";

import { InputHTMLAttributes, ReactNode, useEffect, useRef } from "react";
import {
  FieldValues,
  Path,
  PathValue,
  RegisterOptions,
  UseFormReturn,
} from "react-hook-form";
import clsx from "../../../libs/clsx";
import { Box } from "../box/box.component";
import { Text } from "../text/text.component";
import { ETextWeight } from "../text/text.enum";

interface FormOptions<T extends FieldValues> {
  form: UseFormReturn<T, any, any>;
  name: Path<T>;
  validations?: RegisterOptions<T, Path<T>> | undefined;
}

interface Props<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  inputClassName?: string;
  inputContainerClassName?: string;
  labelClassName?: string;
  formOptions?: FormOptions<T>;
  showErrorMessage?: boolean;
  absoulteErrorMessage?: boolean;
  prefixItem?: ReactNode;
  sufixItem?: ReactNode;
  readonly?: boolean;
  disabled?: boolean;
  clear?: boolean;
  color?: string;
}

export const Input = <T extends FieldValues>({
  className,
  inputClassName,
  inputContainerClassName,
  labelClassName,
  label,
  formOptions,
  showErrorMessage = true,
  absoulteErrorMessage = false,
  readOnly,
  disabled,
  prefixItem,
  sufixItem,
  clear,
  ...rest
}: Props<T>) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = "";
    formOptions?.form.setValue(formOptions.name, "" as PathValue<T, Path<T>>);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clear]);

  return (
    <Box className={clsx(className, "text-main-950 relative")}>
      {label && (
        <Text
          model="sm"
          className={clsx("mb-1 text-main-950", labelClassName)}
          weight={ETextWeight.regular}
        >
          {label}
        </Text>
      )}
      <Box
        className={clsx(
          "px-4 py-2 flex gap-2 border rounded-lg bg-transparent",
          showErrorMessage &&
            formOptions?.form.formState.errors[formOptions.name] &&
            "border-red-400",
          `${!formOptions?.form.watch(formOptions.name) && "border-main-300"}`,
          inputContainerClassName
        )}
      >
        {!!prefixItem && (
          <Box className="ml-[-6px] flex justify-center items-center">
            {prefixItem}
          </Box>
        )}
        <input
          ref={inputRef}
          readOnly={readOnly}
          disabled={disabled}
          {...rest}
          {...formOptions?.form.register(
            formOptions.name,
            formOptions.validations
          )}
          className={clsx(
            "outline-none bg-transparent placeholder:text-main-300 w-full font-semibold text-sm",
            inputClassName
          )}
        />
        {!!sufixItem && (
          <Box className="mr-[-6px] flex justify-center items-center">
            {sufixItem}
          </Box>
        )}
      </Box>

      {showErrorMessage && (
        <Text
          model="xs"
          className={`text-red-400 mt-1 ${absoulteErrorMessage && "absolute"}`}
        >
          {formOptions?.form.formState.errors[formOptions.name]?.message
            ? String(
                formOptions.form.formState.errors[formOptions.name]?.message
              )
            : "ㅤ"}
        </Text>
      )}
    </Box>
  );
};
