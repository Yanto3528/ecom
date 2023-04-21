'use client';

import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

import { FormElementWrapper, FormLabel, FormErrorMessage } from '../Form';

import { textareaStyles } from './Textarea.styles';
import { TextareaProps } from './Textarea.types';

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      error,
      disabled,
      colorScheme,
      label,
      labelClassName,
      wrapperClassName,
      size,
      id,
      ...props
    },
    ref
  ) => (
    <div className="w-full">
      {label && (
        <FormLabel htmlFor={id} className={labelClassName}>
          {label}
        </FormLabel>
      )}
      <FormElementWrapper
        error={error}
        disabled={disabled}
        colorScheme={colorScheme}
        size={size}
        className={cn('h-auto', wrapperClassName)}
      >
        <textarea
          ref={ref}
          className={cn(textareaStyles({ className }))}
          disabled={disabled}
          id={id}
          {...props}
        />
      </FormElementWrapper>
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </div>
  )
);

Textarea.displayName = 'Textarea';

export default Textarea;
