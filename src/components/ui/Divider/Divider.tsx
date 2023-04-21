import { cn } from '@/lib/utils';

import { DividerProps } from './Divider.types';

export default function Divider({ className, ...props }: DividerProps) {
  return <hr className={cn('my-2 h-[1px] w-full text-gray-100', className)} {...props} />;
}
