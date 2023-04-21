import { cn } from '@/lib/utils';

import { TableDataProps } from './TableData.types';

export default function TableData({ children, className, ...props }: TableDataProps) {
  return (
    <td className={cn('border border-gray-200 p-4', className)} {...props}>
      {children}
    </td>
  );
}
