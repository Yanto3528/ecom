import { Session as AuthSession, User as AuthUser } from '@supabase/auth-helpers-nextjs';

export type UserRole = 'user' | 'admin';

export interface UserMetadata {
  email: string;
  email_verified: boolean;
  name: string;
  role: 'user' | 'admin';
  avatar_url: string;
}

export interface User extends AuthUser {
  user_metadata: UserMetadata;
}

export interface Session extends AuthSession {
  user: User;
}
