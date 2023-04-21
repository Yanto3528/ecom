import { ComponentPropsWithoutRef } from 'react';

import { FormElementWrapperProps } from '@/types/form';

export interface FormELementWrapperProps
  extends ComponentPropsWithoutRef<'div'>,
    FormElementWrapperProps {}
