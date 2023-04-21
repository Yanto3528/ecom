import { cn } from '@/lib/utils';

import { SpinnerProps } from './Spinner.types';

export default function Spinner({ className }: SpinnerProps) {
  return (
    <div
      className={cn(
        'aspect-square w-4 animate-spin rounded-full border-2 border-white border-t-transparent',
        className
      )}
    >
      <div className="sr-only">Spinner</div>
    </div>
  );
}
