'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';

import { queryClient } from '@/lib/react-query';

import { ProvidersProps } from './Providers.types';

export default function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SessionProvider>
  );
}
