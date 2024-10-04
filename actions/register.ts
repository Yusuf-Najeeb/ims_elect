/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import * as z from "zod";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";

import { RegisterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields) {
    return { error: "Invalid Credentials" };
  }

  const { name, email, password } = validateFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) return { error: "Email already taken" };

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { success: "User created Successfully" };
};
