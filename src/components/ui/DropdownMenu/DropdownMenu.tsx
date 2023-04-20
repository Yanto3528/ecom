"use client";

import {
  Root,
  Trigger,
  Separator,
  Label,
  DropdownMenuProps,
} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent, DropdownMenuItem } from "./components";

// import { DropdownMenuProps } from "./DropdownMenu.types";

export default function DropdownMenu({
  children,
  ...props
}: DropdownMenuProps) {
  return <Root {...props}>{children}</Root>;
}

DropdownMenu.Trigger = Trigger;
DropdownMenu.Content = DropdownMenuContent;
DropdownMenu.Item = DropdownMenuItem;
DropdownMenu.Separator = Separator;
DropdownMenu.Label = Label;
