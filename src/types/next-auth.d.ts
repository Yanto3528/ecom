import type { Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";
import { ROLE } from "@prisma/client";

type UserId = string;

declare module "next-auth/jwt" {
  interface JWT {
    id: UserId;
    role: ROLE;
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id: UserId;
      role: ROLE;
    };
  }
}
