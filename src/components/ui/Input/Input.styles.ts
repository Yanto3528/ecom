import { cva } from 'class-variance-authority';

export const inputStyles = cva(
  'px-4 w-full h-full outline-none transition-all bg-transparent focus:ring-2 focus:border-primary-500 disabled:cursor-not-allowed'
);
