import { Root, Trigger, Content, Value, Icon, Viewport, Portal } from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';

import { FormElementWrapper, FormLabel, FormErrorMessage } from '../Form';

import { SelectItem } from './components';
import { SelectProps } from './Select.types';

export default function Select({
  size,
  colorScheme,
  disabled,
  error,
  wrapperClassName,
  label,
  labelClassName,
  placeholder,
  contentProps: { className: contentClassName, ...contentProps } = {},
  triggerProps: { className: triggerClassName, ...triggerProps } = {},
  itemContainerClassName,
  children,
  onChange,
  ...props
}: SelectProps) {
  return (
    <div>
      {label && (
        <FormLabel htmlFor={triggerProps.id} className={labelClassName}>
          {label}
        </FormLabel>
      )}
      <Root onValueChange={onChange} {...props}>
        <FormElementWrapper
          size={size}
          colorScheme={colorScheme}
          disabled={disabled}
          error={error}
          className={wrapperClassName}
        >
          <Trigger
            className={cn(
              'flex h-full w-full items-center justify-between px-4 text-left outline-none',
              triggerClassName
            )}
            {...triggerProps}
          >
            <Value placeholder={placeholder} />
            <Icon>
              <ChevronDown />
            </Icon>
          </Trigger>
        </FormElementWrapper>
        <Portal>
          <Content
            className={cn('overflow-auto rounded-sm bg-white', contentClassName)}
            {...contentProps}
          >
            <Viewport>
              <div
                className={cn(
                  'scrollbar-rounded-full max-h-[15rem] overflow-auto p-2 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-primary-400 scrollbar-track-rounded-full scrollbar-thumb-rounded-full hover:scrollbar-thumb-primary-500',
                  itemContainerClassName
                )}
              >
                {children}
              </div>
            </Viewport>
          </Content>
        </Portal>
      </Root>
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </div>
  );
}

Select.Item = SelectItem;
