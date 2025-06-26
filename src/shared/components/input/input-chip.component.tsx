import { useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { Box } from "../box/box.component";
import clsx from "../../../libs/clsx";

interface Props {
  defaultValues?: string[];
  placeholder?: string;
  onChange: (values: string[]) => void;
  className?: string;
}

export const InputChip = ({ placeholder, onChange, defaultValues , className}: Props) => {
  const [values, setValues] = useState<string[]>(defaultValues || []);
  const [inputValue, setInputValue] = useState<string>("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (inputValue.trim()) {
        setValues([...values, inputValue.trim()]);
        setInputValue("");
      }
    }
  };

  const clearValue = (value: number) => {
    setValues((prev) => prev.filter((_, e) => e !== value));
  };

  useEffect(() => {
    if (onChange) {
      onChange(values);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  return (
    <Box className={clsx(
      "bg-white p-2 rounded-lg w-full max-w-full",
      className
    )}>
      <input
        type="text"
        className="bg-transparent outline-none w-full"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Box className="flex flex-wrap mt-2">
        {values.map((value, index) => (
          <Box
            key={index}
            className="bg-primary-200 p-1 m-1 rounded-xl text-sm px-2 flex items-center gap-2"
          >
            {value}
            <button onClick={() => clearValue(index)} type="button">
              <IoMdCloseCircle className="hover:text-primary-500 duration-200" />
            </button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
