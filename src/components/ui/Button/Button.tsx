'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';

import Spinner from '../Spinner';

import { buttonStyles } from './Button.styles';
import { ButtonProps } from './Button.types';

export default function Button({
  children,
  className,
  variant,
  colorScheme,
  disabled,
  loading,
  href,
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <Link className={cn(buttonStyles({ variant, colorScheme, className }))} href={href || ''}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={cn(buttonStyles({ variant, colorScheme, className }))}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Spinner />}
      {children}
    </button>
  );
}
