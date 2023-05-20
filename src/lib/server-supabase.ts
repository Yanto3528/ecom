import {
  createServerComponentSupabaseClient,
  createServerSupabaseClient,
} from '@supabase/auth-helpers-nextjs';
import { NextApiRequest, NextApiResponse } from 'next';
import { headers, cookies } from 'next/headers';

import { Database } from '@/types/database';

export const createServerComponentSupabase = () =>
  createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });

export const createServerSupabase = ({ req, res }: { req: NextApiRequest; res: NextApiResponse }) =>
  createServerSupabaseClient<Database>({ req, res });
