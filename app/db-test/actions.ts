"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProject(formData: FormData) {
  const title = formData.get("title");
  const description = formData.get("description");

  if (
    typeof title !== "string" ||
    title.trim().length === 0 ||
    title.trim().length > 100
  ) {
    redirect("/db-test?error=title");
  }

  if (
    typeof description !== "string" ||
    description.length > 2000
  ) {
    redirect("/db-test?error=description");
  }

  await prisma.project.create({
    data: {
      title: title.trim(),
      description: description.trim(),
    },
  });

  revalidatePath("/db-test");
  redirect("/db-test?created=1");
}