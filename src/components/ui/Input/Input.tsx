'use client';

import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

import { inputStyles } from './Input.styles';
import { InputProps } from './Input.types';

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => (
  <input ref={ref} className={cn(inputStyles({ className }))} {...props} />
));

Input.displayName = 'Input';

export default Input;
