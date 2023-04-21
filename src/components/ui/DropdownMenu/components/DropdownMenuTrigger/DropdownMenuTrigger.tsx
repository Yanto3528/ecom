import { Trigger } from '@radix-ui/react-dropdown-menu';

import { cn } from '@/lib/utils';

import { DropdownMenuTriggerProps } from './DropdownMenuTrigger.types';

export default function DropdownMenuTrigger({
  children,
  className,
  ...props
}: DropdownMenuTriggerProps) {
  return (
    <Trigger className={cn('rounded-md outline-none focus:ring-2', className)} {...props}>
      {children}
    </Trigger>
  );
}
