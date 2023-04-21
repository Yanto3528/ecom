'use client';

import { ChangeEventHandler, forwardRef } from 'react';

import Input from '../Input';

import { InputNumberProps } from './InputNumber.types';

const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(
  ({ min, max, onChange, ...props }, ref) => {
    const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
      const maxValue = max ? Math.min(max, Number(event.target.value)) : Number(event.target.value);
      const value = Math.max(min, maxValue);

      onChange?.(value);
    };

    return (
      <Input type="number" ref={ref} min={min} max={max} onChange={onInputChange} {...props} />
    );
  }
);

InputNumber.displayName = 'InputNumber';

export default InputNumber;
