"use client";

import { cn } from "@/lib/utils";

import Spinner from "../Spinner";
import { ButtonProps } from "./Button.types";
import { buttonStyles } from "./Button.styles";

export default function Button({
  children,
  className,
  variant,
  disabled,
  loading,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonStyles({ variant, className }))}
      disabled={disabled || loading}
      {...props}
    >
      {/* {loading ? <Spinner /> : children} */}
      {loading && <Spinner />}
      {children}
    </button>
  );
}
