import {
  Root,
  Trigger,
  Portal,
  DropdownMenuProps,
} from "@radix-ui/react-dropdown-menu";

// import { DropdownMenuProps } from "./DropdownMenu.types";

export default function DropdownMenu({
  children,
  ...props
}: DropdownMenuProps) {
  return <Root {...props}>{children}</Root>;
}

DropdownMenu.Trigger = Trigger;
DropdownMenu.Portal = Portal;
