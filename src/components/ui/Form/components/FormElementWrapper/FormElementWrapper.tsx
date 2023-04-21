import { elementWrapperStyles } from './FormElementWrapper.styles';
import { FormELementWrapperProps } from './FormELementWrapper.types';

export default function FormElementWrapper({
  children,
  className,
  error,
  disabled,
  colorScheme,
  size,
  ...props
}: FormELementWrapperProps) {
  return (
    <div
      className={elementWrapperStyles({
        disabled,
        size,
        colorScheme: error ? 'error' : colorScheme,
        className,
      })}
      {...props}
    >
      {children}
    </div>
  );
}
