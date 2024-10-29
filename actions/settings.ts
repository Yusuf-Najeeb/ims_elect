"use server";
import * as z from "zod";
import { db } from "@/lib/db";
import { settingsSchema } from "@/schemas";
import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";

export const settings = async (values: z.infer<typeof settingsSchema>) => {
  const user = await currentUser();
  if (!user) return { error: "Unauthorized" };

  if (user && user.id) {
    const dbUser = await getUserById(user.id);

    if (!dbUser) return { error: "Unauthorized" };

    await db.user.update({
      where: { id: dbUser.id },
      data: {
        ...values,
      },
    });

    return { success: "Settings Updated" };
  }
};