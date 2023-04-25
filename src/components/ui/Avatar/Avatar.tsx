'use client';

import { Root, Image, Fallback } from '@radix-ui/react-avatar';

import { cn } from '@/lib/utils';

import { AvatarProps } from './Avatar.types';

export default function Avatar({
  src,
  alt,
  fallback,
  className,
  rootClassName,
  fallbackClassName,
  ...props
}: AvatarProps) {
  return (
    <Root
      className={cn(
        'flex aspect-square w-6 items-center justify-center overflow-hidden rounded-full bg-primary-200 text-xs',
        rootClassName
      )}
    >
      <Image
        src={src}
        alt={alt}
        className={cn('h-full w-full object-cover', className)}
        {...props}
      />
      <Fallback className={cn('font-semibold', fallbackClassName)}>{fallback}</Fallback>
    </Root>
  );
}
