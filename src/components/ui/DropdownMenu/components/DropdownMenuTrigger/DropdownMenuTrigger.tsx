import { Trigger } from "@radix-ui/react-dropdown-menu";

import { DropdownMenuTriggerProps } from "./DropdownMenuTrigger.types";
import { cn } from "@/lib/utils";

export default function DropdownMenuTrigger({
  children,
  className,
  ...props
}: DropdownMenuTriggerProps) {
  return (
    <Trigger className={cn("outline-none focus:ring-2 rounded-md", className)}>
      {children}
    </Trigger>
  );
}
