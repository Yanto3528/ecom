import { ComponentPropsWithoutRef } from 'react';

import { VariantProps } from 'class-variance-authority';

import { FormElementProps } from '@/types/form';

import { textareaStyles } from './Textarea.styles';

type TextareaStylesProps = VariantProps<typeof textareaStyles>;

export interface TextareaProps
  extends Omit<ComponentPropsWithoutRef<'textarea'>, 'size'>,
    TextareaStylesProps,
    FormElementProps {}
