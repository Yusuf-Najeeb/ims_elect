/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import * as z from "zod";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";

import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid Credentials" };
  }

  const { name, email, password } = validateFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) return { error: "Email already taken" };

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // Send Verification Email
  return { success: "User created Successfully" };
};
