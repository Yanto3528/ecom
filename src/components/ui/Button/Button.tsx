'use client';

import { cn } from '@/lib/utils';

import Spinner from '../Spinner';

import { buttonStyles } from './Button.styles';
import { ButtonProps } from './Button.types';

export default function Button({
  children,
  className,
  variant,
  disabled,
  loading,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(buttonStyles({ variant, className }))}
      disabled={disabled || loading}
      {...props}
    >
      {/* {loading ? <Spinner /> : children} */}
      {loading && <Spinner />}
      {children}
    </button>
  );
}
