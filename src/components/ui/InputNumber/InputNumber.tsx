"use client";

import { ChangeEventHandler, forwardRef } from "react";

import Input from "../Input";
import { InputNumberProps } from "./InputNumber.types";

const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(
  ({ min, max, onChange, ...props }, ref) => {
    const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
      const value = Math.max(min, Math.min(max, Number(event.target.value)));

      onChange?.(value);
    };

    return (
      <Input
        type="number"
        ref={ref}
        min={min}
        max={max}
        onChange={onInputChange}
        {...props}
      />
    );
  }
);

InputNumber.displayName = "InputNumber";

export default InputNumber;
