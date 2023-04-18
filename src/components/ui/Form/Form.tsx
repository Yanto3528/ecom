import { FormLabel } from "./components";
import { FormProps } from "./Form.types";

export default function Form({ children, ...props }: FormProps) {
  return <form {...props}>{children}</form>;
}

Form.Label = FormLabel;
