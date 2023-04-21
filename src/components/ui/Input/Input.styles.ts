import { cva } from 'class-variance-authority';

export const inputStyles = cva(
  'px-4 py-2 w-full outline-none border-[1px] rounded-md transition-all focus:ring-2 focus:border-primary-500 disabled:cursor-not-allowed'
);
