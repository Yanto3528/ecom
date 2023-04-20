import {
  Content,
  Portal,
  MenuContentProps,
} from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";

export default function DropdownMenuContent({
  children,
  className,
  ...props
}: MenuContentProps) {
  return (
    <Portal>
      <Content
        asChild
        className={cn(
          "relative -bottom-4 min-w-[15rem] p-1 radix-state-open:animate-in radix-state-open:slide-in-from-top-2 radix-state-open:fade-in radix-state-closed:animate-out radix-state-closed:fade-out radix-state-closed:slide-out-to-top-2 max-h-[20rem] z-50 bg-white rounded-md shadow-md",
          className
        )}
        {...props}
      >
        <div>{children}</div>
      </Content>
    </Portal>
  );
}
