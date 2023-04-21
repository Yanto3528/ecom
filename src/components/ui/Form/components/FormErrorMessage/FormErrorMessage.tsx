import { cn } from '@/lib/utils';

import { FormErrorMessageProps } from './FormErrorMessage.types';

export default function FormErrorMessage({ children, className, ...props }: FormErrorMessageProps) {
  return (
    <span className={cn('inline-block text-xs font-medium text-red-500', className)} {...props}>
      {children}
    </span>
  );
}
