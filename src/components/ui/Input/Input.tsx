"use client";

import { forwardRef } from "react";

import { InputProps } from "./Input.types";
import { inputStyles } from "./Input.styles";
import { cn } from "@/lib/utils";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input ref={ref} className={cn(inputStyles({ className }))} {...props} />
    );
  }
);

Input.displayName = "Input";

export default Input;
