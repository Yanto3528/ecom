import { ComponentPropsWithoutRef } from "react";
import { VariantProps } from "class-variance-authority";
import { buttonStyles } from "./Button.styles";

type ButtonStylesProps = VariantProps<typeof buttonStyles>;

export interface ButtonProps
  extends ComponentPropsWithoutRef<"button">,
    ButtonStylesProps {
  loading?: boolean;
}
