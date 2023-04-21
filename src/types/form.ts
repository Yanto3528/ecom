import { ReactNode } from 'react';

import { VariantProps } from 'class-variance-authority';

import { elementWrapperStyles } from '@/components/ui/Form/components/FormElementWrapper/FormElementWrapper.styles';

export type ElementWrapperStylesProps = VariantProps<typeof elementWrapperStyles>;

export interface BaseFormElementProps {
  error?: ReactNode;
  disabled?: boolean;
}

export type FormElementWrapperProps = Omit<ElementWrapperStylesProps, 'state'> &
  BaseFormElementProps & {
    wrapperClassName?: string;
  };

export type FormElementProps = FormElementWrapperProps & {
  label?: ReactNode;
  labelClassName?: string;
};
