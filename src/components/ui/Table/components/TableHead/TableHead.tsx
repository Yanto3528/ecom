import { cn } from '@/lib/utils';

import { TableHeadProps } from './TableHead.types';

export default function TableHead({ children, className, ...props }: TableHeadProps) {
  return (
    <th
      className={cn('border border-slate-200 bg-slate-100 px-4 py-2 font-semibold', className)}
      {...props}
    >
      {children}
    </th>
  );
}
