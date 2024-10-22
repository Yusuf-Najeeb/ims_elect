"use server";
import { signOut } from "@/auth";

export const logout = async () => {
  // Some actions before logout
  await signOut();
};
