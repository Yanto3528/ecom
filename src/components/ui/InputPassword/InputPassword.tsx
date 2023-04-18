"use client";

import Input from "../Input";
import { Eye, EyeOff } from "lucide-react";

import { InputPasswordProps } from "./InputPassword.types";
import { useToggle } from "@/hooks/common/use-toggle";
import { forwardRef } from "react";

const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  (props, ref) => {
    const [showContent, { toggle }] = useToggle();

    return (
      <div className="relative">
        <Input
          type={showContent ? "text" : "password"}
          className="pr-12"
          ref={ref}
          {...props}
        />
        <button
          type="button"
          onClick={toggle}
          className="absolute top-1/2 right-0 -translate-y-1/2 px-4 text-gray-400"
        >
          {showContent ? <EyeOff /> : <Eye />}
          <div className="sr-only">Toggle show password</div>
        </button>
      </div>
    );
  }
);

InputPassword.displayName = "InputPassword";

export default InputPassword;
