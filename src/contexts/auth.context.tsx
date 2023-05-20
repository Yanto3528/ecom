'use client';

import { createContext, useContext, useEffect, useState, ReactNode, useMemo } from 'react';

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import type { SupabaseClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

import type { Database } from '@/types/database';
import type { Session, UserMetadata } from '@/types/supabase';

type SupabaseContext = {
  supabase: SupabaseClient<Database>;
  session: Session | null;
  currentUser?: UserMetadata;
  isLoading: boolean;
};

const Context = createContext<SupabaseContext | undefined>(undefined);

export const useSupabaseContext = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error('useSupabase must be used inside SupabaseProvider');
  }

  return context;
};

export default function SupabaseProvider({ children }: { children: ReactNode }) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, userSession) => {
      setIsLoading(false);
      setSession(userSession as Session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase]);

  const value = useMemo(
    () => ({
      supabase,
      session,
      currentUser: session?.user.user_metadata,
      isLoading,
    }),
    [supabase, session, isLoading]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
