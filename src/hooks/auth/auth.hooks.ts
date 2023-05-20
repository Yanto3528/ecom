import {
  SignInWithPasswordCredentials,
  SignUpWithPasswordCredentials,
} from '@supabase/supabase-js';
import { useMutation } from '@tanstack/react-query';

import { useSupabaseContext } from '@/contexts/auth.context';

export const useSignInCredentialsMutation = () => {
  const { supabase } = useSupabaseContext();

  const mutation = useMutation((payload: SignInWithPasswordCredentials) =>
    supabase.auth.signInWithPassword(payload)
  );

  return mutation;
};

export const useSignUpCredentialsMutation = () => {
  const { supabase } = useSupabaseContext();

  const mutation = useMutation((payload: SignUpWithPasswordCredentials) =>
    supabase.auth.signUp(payload)
  );

  return mutation;
};
