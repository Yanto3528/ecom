import { cva } from 'class-variance-authority';

export const buttonStyles = cva(
  'px-6 py-2 rounded-md font-semibold flex items-center justify-center gap-2 focus:ring-2 outline-none transition-all disabled:opacity-70 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        solid:
          'bg-primary text-white hover:bg-primary-700 enabled:hover:bg-primary-700 enabled:active:bg-primary-800',
      },
      colorScheme: {
        primary:
          'bg-primary text-white hover:bg-primary-700 enabled:hover:bg-primary-700 enabled:active:bg-primary-800',
        danger:
          'bg-red-500 text-white hover:bg-red-600 enabled:hover:bg-red-600 enabled:active:bg-red-700',
      },
    },
    defaultVariants: {
      variant: 'solid',
      colorScheme: 'primary',
    },
  }
);
