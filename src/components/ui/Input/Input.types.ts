import { ComponentPropsWithoutRef } from 'react';

import { VariantProps } from 'class-variance-authority';

import { FormElementProps } from '@/types/form';

import { inputStyles } from './Input.styles';

type InputStylesProps = VariantProps<typeof inputStyles>;

export interface InputProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'size'>,
    InputStylesProps,
    FormElementProps {}
