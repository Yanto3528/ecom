import { useState, useCallback } from 'react';

type ToggleFn = () => void;

type UseToggleReturn = [boolean, { open: ToggleFn; close: ToggleFn; toggle: ToggleFn }];

export const useToggle = (initialValue = false): UseToggleReturn => {
  const [show, setShow] = useState(initialValue);

  const toggle = useCallback(() => setShow((prevShow) => !prevShow), []);
  const open = useCallback(() => setShow(true), []);
  const close = useCallback(() => setShow(false), []);

  return [show, { open, close, toggle }];
};
