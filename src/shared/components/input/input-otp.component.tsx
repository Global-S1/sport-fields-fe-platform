import { useRef, useState } from "react";
import { FieldErrors, FieldValues } from "react-hook-form";
import clsx from "../../../libs/clsx";
import { Text } from "../text/text.component";

interface Props<T extends FieldValues> {
  length?: number;
  onChange?: (code: string) => void;
  containerClassName?: string;
  inputClassName?: string;
  showErrorMessage: boolean;
  absoulteErrorMessage: boolean;
  errors: FieldErrors<T>;
  name: string;
}

export default function InputOtp<T extends FieldValues>({
  length = 6,
  onChange,
  containerClassName,
  inputClassName,
  showErrorMessage = true,
  absoulteErrorMessage = false,
  errors,
  name,
}: Props<T>) {
  const [values, setValues] = useState<string[]>(Array(length).fill(""));
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, value: string) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    onChange?.(newValues.join(""));
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedText = e.clipboardData.getData("text").trim();

    if (!/^\d+$/.test(pastedText)) return;

    e.preventDefault();

    const newValues = pastedText.split("").slice(0, length);
    const filledValues = Array.from({ length }, (_, i) => newValues[i] || "");

    setValues(filledValues);

    const joinedValue = filledValues.join("");
    onChange?.(joinedValue);

    const lastFilledIndex = Math.min(newValues.length - 1, length - 1);
    inputsRef.current[lastFilledIndex]?.focus();
  };

  return (
    <div className="flex flex-col">
      <div className={clsx("flex gap-2", containerClassName)}>
        {values.map((val, i) => (
          <input
            key={i}
            ref={(el) => {
              inputsRef.current[i] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={val}
            onPaste={handlePaste}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            className={clsx(
              "w-10 h-12 text-center border border-gray-400 rounded-md text-xl",
              inputClassName
            )}
          />
        ))}
      </div>
      {showErrorMessage && (
        <Text
          model="xs"
          className={`text-red-400 mt-1 ${absoulteErrorMessage && "absolute"}`}
        >
          {errors[name]?.message ? String(errors[name]?.message) : "ㅤ"}
        </Text>
      )}
    </div>
  );
}
