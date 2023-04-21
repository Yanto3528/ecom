import { cn } from '@/lib/utils';

import { TableRowProps } from './TableRow.types';

export default function TableRow({ children, className, ...props }: TableRowProps) {
  return (
    <tr className={cn('text-left', className)} {...props}>
      {children}
    </tr>
  );
}
