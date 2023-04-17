"use client";

import { InputProps } from "./Input.types";
import { inputStyles } from "./Input.styles";
import { cn } from "@/lib/utils";

export default function Input({ className, ...props }: InputProps) {
  return <input className={cn(inputStyles({ className }))} {...props} />;
}
