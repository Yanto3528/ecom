import { Item } from "@radix-ui/react-dropdown-menu";

import { DropdownMenuItemProps } from "./DropdownMenuItem.types";
import { cn } from "@/lib/utils";

export default function DropdownMenuItem({
  children,
  className,
  ...props
}: DropdownMenuItemProps) {
  return (
    <Item
      className={cn(
        "p-2 hover:bg-slate-100 text-sm cursor-pointer rounded-md outline-none font-medium flex items-center gap-2",
        className
      )}
      {...props}
    >
      {children}
    </Item>
  );
}
