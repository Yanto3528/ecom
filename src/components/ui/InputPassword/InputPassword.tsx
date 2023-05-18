'use client';

import { forwardRef } from 'react';

import { Eye, EyeOff } from 'lucide-react';

import { useToggle } from '@/hooks/common/use-toggle';

import Input from '../Input';

import { InputPasswordProps } from './InputPassword.types';

const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>((props, ref) => {
  const [showContent, { toggle }] = useToggle();

  return (
    <div className="relative">
      <Input
        type={showContent ? 'text' : 'password'}
        ref={ref}
        rightElement={
          <button type="button" onClick={toggle} className="px-2 text-gray-400">
            {showContent ? <EyeOff /> : <Eye />}
            <div className="sr-only">Toggle show password</div>
          </button>
        }
        {...props}
      />
    </div>
  );
});

InputPassword.displayName = 'InputPassword';

export default InputPassword;
