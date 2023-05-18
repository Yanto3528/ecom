'use client';

import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

import { FormElementWrapper, FormLabel, FormErrorMessage } from '../Form';

import { inputStyles } from './Input.styles';
import { InputProps } from './Input.types';

const Input = forwardRef<HTMLInputElement, InputProps>(
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
      rightElement,
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
        className={wrapperClassName}
      >
        <input
          ref={ref}
          className={cn(inputStyles({ className }))}
          disabled={disabled}
          id={id}
          {...props}
        />
        {rightElement}
      </FormElementWrapper>
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </div>
  )
);

Input.displayName = 'Input';

export default Input;
