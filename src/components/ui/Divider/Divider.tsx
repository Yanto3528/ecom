import { cn } from "@/lib/utils";
import { DividerProps } from "./Divider.types";

export default function Divider({ className, ...props }: DividerProps) {
  return (
    <hr
      className={cn("w-full h-[1px] my-2 text-gray-100", className)}
      {...props}
    />
  );
}
