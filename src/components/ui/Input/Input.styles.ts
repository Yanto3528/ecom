import { cva } from 'class-variance-authority';

export const inputStyles = cva(
  'px-4 w-full h-full outline-none transition-all bg-transparent disabled:cursor-not-allowed'
);
