"use server";

import prisma from "@/lib/prisma";
import { Store } from "@prisma/client";

/**
 * This function creates a new project
 *
 * @param string title
 * @returns Promise<string>
 */
export async function createProject({
  projectTitle,
}: {
  projectTitle: string | undefined;
}): Promise<"success" | "unknownError" | "invalidStoreName"> {
  if (projectTitle != undefined) {
    try {
      await prisma.store.create({
        data: { name: projectTitle, storeId: crypto.randomUUID() },
      });

      return "success";
    } catch (e) {
      console.log({ e });
      return "unknownError";
    }
  }

  return "invalidStoreName";
}

/**
 * Return an array of all stores
 *
 * @returns Store[]
 */
export async function storesList() {
  try {
    const stores = await prisma.store.findMany();
    console.log(stores);

    return stores;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Return store information for chanels page
 *
 * @param string storeId
 * @returns Store
 */
export async function getInitialStoreData({ storeId }: { storeId: string }) {
  const store: Store | null = await prisma.store.findUnique({
    where: { storeId },
  });

  const { id, token, ...storeData } = store!;

  return storeData;
}

/**
 * Update store information
 *
 * @param {string} token
 * @param {string} storeId
 * @returns {Promise<string>}
 */
export async function updateChannelData({
  token,
  storeId,
}: {
  token: string;
  storeId: string;
}): Promise<"invalidStore" | "success" | "unknownError"> {
  const storeFound = await prisma.store.findUnique({ where: { storeId } });

  if (!storeFound) throw new Error("invalidStore");

  try {
    await prisma.store.update({
      where: { storeId },
      data: { token },
    });

    return "success";
  } catch (e) {
    throw new Error("unknownError");
  }
}

/**
 * delete a store
 *
 * @param string storeId
 * @returns Promise<string>
 */
export async function deleteStore({
  storeId,
}: {
  storeId: string;
}): Promise<"success" | "failed"> {
  try {
    const store = await prisma.store.findFirst({ where: { storeId } });

    await prisma.store.delete({ where: { id: store?.id } });

    return "success";
  } catch (e) {
    console.log(e);
    return "failed";
  }
}
