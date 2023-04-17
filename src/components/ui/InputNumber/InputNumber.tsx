import { ChangeEventHandler } from "react";
import Input from "../Input";
import { InputNumberProps } from "./InputNumber.types";

export default function InputNumber({
  min,
  max,
  onChange,
  ...props
}: InputNumberProps) {
  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = Math.max(min, Math.min(max, Number(event.target.value)));

    onChange?.(value);
  };

  return (
    <Input
      type="number"
      min={min}
      max={max}
      onChange={onInputChange}
      {...props}
    />
  );
}
