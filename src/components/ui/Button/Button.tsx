"use client";

import { ButtonProps } from "./Button.types";

import { buttonStyles } from "./Button.styles";
import { cn } from "@/lib/utils";

export default function Button({
  children,
  className,
  variant,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(buttonStyles({ variant, className }))} {...props}>
      {children}
    </button>
  );
}
