import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { createClient } from '@supabase/supabase-js';
import { headers, cookies } from 'next/headers';

import { Database } from '@/types/database';

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export const createServerComponentSupabase = () =>
  createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });
