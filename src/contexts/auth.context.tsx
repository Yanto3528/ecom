'use client';

import { createContext, useContext, useEffect, useState, ReactNode, useMemo } from 'react';

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import type { SupabaseClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

import type { Database } from '@/types/database';

type SupabaseContext = {
  supabase: SupabaseClient<Database>;
};

const Context = createContext<SupabaseContext | undefined>(undefined);

export const useSupabase = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error('useSupabase must be used inside SupabaseProvider');
  }

  return context;
};

export default function SupabaseProvider({ children }: { children: ReactNode }) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      router.refresh();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase]);

  const value = useMemo(
    () => ({
      supabase,
    }),
    [supabase]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
