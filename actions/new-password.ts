"use server";

import * as z from "zod";
import { ResetPasswordSchema } from "@/schemas/index";

export const resetPassword = async (
  values: z.infer<typeof ResetPasswordSchema>,
  token: string | null
) => {
  if (!token) {
    return { error: "Missing token" };
  }
};
