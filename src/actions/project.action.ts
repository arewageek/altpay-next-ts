"use server";

import prisma from "@/lib/prisma";

export async function createProject({
  projectTitle,
}: {
  projectTitle: string | undefined;
}): Promise<"success" | "unknownError" | "invalidStoreName"> {
  if (projectTitle != undefined) {
    try {
      await prisma.stores.create({
        data: { name: projectTitle, storeId: crypto.randomUUID() },
      });

      return "success";
    } catch (e) {
      console.log(e);
      return "unknownError";
    }
  }

  return "invalidStoreName";
}

export async function storesList() {
  try {
    // clear al empty
    // await prisma.stores.deleteMany({ where: { name: "" } });

    const stores = await prisma.stores.findMany();
    console.log(stores);

    return stores;
  } catch (error) {
    console.log(error);
  }
}
