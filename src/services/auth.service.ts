import { SignInWithPasswordCredentials } from '@supabase/supabase-js';

import { supabase } from '@/lib/supabase';

export async function signInWithCredentials(credentials: SignInWithPasswordCredentials) {
  const response = await supabase.auth.signInWithPassword(credentials);

  return response;
}
