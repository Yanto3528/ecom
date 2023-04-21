import { InputProps } from '../Input/Input.types';

export interface InputNumberProps extends Omit<InputProps, 'onChange' | 'type'> {
  min: number;
  max: number;
  onChange?: (value: number) => void;
}
