import { Item, ItemText } from '@radix-ui/react-select';

import { cn } from '@/lib/utils';

import { SelectItemProps } from './SelectItem.types';

export default function SelectItem({ children, className, ...props }: SelectItemProps) {
  return (
    <Item
      className={cn(
        'cursor-pointer rounded-md p-2 pl-4 outline-none radix-state-checked:bg-primary-100 hover:bg-primary-50',
        className
      )}
      {...props}
    >
      <ItemText>{children}</ItemText>
    </Item>
  );
}
