import { VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";

import { inputStyles } from "./Input.styles";

type InputStylesProps = VariantProps<typeof inputStyles>;

export interface InputProps
  extends ComponentPropsWithoutRef<"input">,
    InputStylesProps {}
