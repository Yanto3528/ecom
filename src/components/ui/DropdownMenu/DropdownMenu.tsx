"use client";

import {
  Root,
  Separator,
  Label,
  DropdownMenuProps,
} from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components";

export default function DropdownMenu({
  children,
  ...props
}: DropdownMenuProps) {
  return <Root {...props}>{children}</Root>;
}

DropdownMenu.Trigger = DropdownMenuTrigger;
DropdownMenu.Content = DropdownMenuContent;
DropdownMenu.Item = DropdownMenuItem;
DropdownMenu.Separator = Separator;
DropdownMenu.Label = Label;
