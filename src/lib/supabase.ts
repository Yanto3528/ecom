import {
  createServerComponentSupabaseClient,
  createServerSupabaseClient,
} from '@supabase/auth-helpers-nextjs';
import { createClient } from '@supabase/supabase-js';
import { NextApiRequest, NextApiResponse } from 'next';
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

export const createServerSupabase = ({ req, res }: { req: NextApiRequest; res: NextApiResponse }) =>
  createServerSupabaseClient<Database>({ req, res });
