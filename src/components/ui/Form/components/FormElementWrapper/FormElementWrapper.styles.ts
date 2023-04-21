import { cva } from 'class-variance-authority';

export const elementWrapperStyles = cva(
  'rounded-md border border-gray-200 text-sm outline-none focus-within:ring-2 transition-all w-full flex items-center justify-between text-left bg-white overflow-x-hidden',
  {
    variants: {
      size: {
        md: 'h-10',
      },
      colorScheme: {
        primary:
          'focus-within:border-primary focus-within:ring-primary-200 radix-state-open:border-primary',
        error:
          'border-red-500 focus-within:border-red-500 focus-within:ring-red-200 radix-state-open:border-red-500',
      },
      disabled: {
        true: 'bg-gray-200 cursor-not-allowed',
      },
    },
    defaultVariants: {
      size: 'md',
      colorScheme: 'primary',
    },
  }
);
