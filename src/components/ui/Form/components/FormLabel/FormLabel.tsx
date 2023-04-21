import { cn } from '@/lib/utils';

import { FormLabelProps } from './FormLabel.types';

export default function FormLabel({ children, className, htmlFor, ...props }: FormLabelProps) {
  return (
    <label className={cn('mb-2 block font-medium', className)} htmlFor={htmlFor} {...props}>
      {children}
    </label>
  );
}
