import { ROLE } from '@prisma/client';
import type { User } from 'next-auth';

type UserId = string;

declare module 'next-auth/jwt' {
  interface JWT {
    id: UserId;
    stripeCustomerId: string | null;
    role: ROLE;
  }
}

declare module 'next-auth' {
  interface Session {
    user: User & {
      id: UserId;
      stripeCustomerId: string | null;
      role: ROLE;
    };
  }
}
