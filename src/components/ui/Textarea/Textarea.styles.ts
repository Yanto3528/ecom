import { cva } from 'class-variance-authority';

export const textareaStyles = cva(
  'px-4 w-full h-full outline-none resize-none py-4 transition-all bg-transparent disabled:cursor-not-allowed'
);
