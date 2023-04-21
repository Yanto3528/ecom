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
      <Input type={showContent ? 'text' : 'password'} className="pr-12" ref={ref} {...props} />
      <button
        type="button"
        onClick={toggle}
        className="absolute right-0 top-1/2 -translate-y-1/2 px-4 text-gray-400"
      >
        {showContent ? <EyeOff /> : <Eye />}
        <div className="sr-only">Toggle show password</div>
      </button>
    </div>
  );
});

InputPassword.displayName = 'InputPassword';

export default InputPassword;
