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
        className="relative min-w-[220px] min-h-[10rem] z-50 bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform]"
        {...props}
      >
        {children}
      </Content>
    </Portal>
  );
}
