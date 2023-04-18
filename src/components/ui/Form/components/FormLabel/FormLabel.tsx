import { cn } from "@/lib/utils";
import { FormLabelProps } from "./FormLabel.types";

export default function FormLabel({
  children,
  className,
  ...props
}: FormLabelProps) {
  return (
    <label className={cn("font-bold block mb-2", className)} {...props}>
      {children}
    </label>
  );
}
