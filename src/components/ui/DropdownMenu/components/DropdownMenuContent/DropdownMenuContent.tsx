import { Content, Portal, MenuContentProps } from '@radix-ui/react-dropdown-menu';

import { cn } from '@/lib/utils';

export default function DropdownMenuContent({ children, className, ...props }: MenuContentProps) {
  return (
    <Portal>
      <Content
        asChild
        className={cn(
          'relative -bottom-4 z-50 max-h-[20rem] min-w-[15rem] rounded-md bg-white p-1 shadow-md radix-state-closed:animate-out radix-state-closed:fade-out radix-state-closed:slide-out-to-top-2 radix-state-open:animate-in radix-state-open:fade-in radix-state-open:slide-in-from-top-2',
          className
        )}
        {...props}
      >
        <div>{children}</div>
      </Content>
    </Portal>
  );
}
