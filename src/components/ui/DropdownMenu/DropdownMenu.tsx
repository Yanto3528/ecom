"use client";

import {
  Root,
  Trigger,
  DropdownMenuProps,
} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent } from "./components";

// import { DropdownMenuProps } from "./DropdownMenu.types";

export default function DropdownMenu({
  children,
  ...props
}: DropdownMenuProps) {
  return <Root {...props}>{children}</Root>;
}

DropdownMenu.Trigger = Trigger;
DropdownMenu.Content = DropdownMenuContent;
