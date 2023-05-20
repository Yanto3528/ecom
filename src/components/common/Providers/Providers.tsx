'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';

import SupabaseProvider from '@/contexts/auth.context';
import { queryClient } from '@/lib/react-query';

import { ProvidersProps } from './Providers.types';

export default function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <SupabaseProvider>
        <QueryClientProvider client={queryClient}>
          {children}
          <Toaster />
        </QueryClientProvider>
      </SupabaseProvider>
    </SessionProvider>
  );
}
