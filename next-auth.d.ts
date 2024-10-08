import { UserRole } from "@prisma/client";
import { type DefaultSession } from "next-auth";

//* Solution One
export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
