import {
  SelectProps as BaseSelectProps,
  SelectContentProps,
  SelectTriggerProps,
} from '@radix-ui/react-select';

import { FormElementProps } from '@/types/form';

export interface SelectProps extends BaseSelectProps, FormElementProps {
  placeholder?: string;
  contentProps?: SelectContentProps;
  triggerProps?: SelectTriggerProps;
  itemContainerClassName?: string;
}
