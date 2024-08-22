"use server";

import Tag from "@/database/tag.model";
import { connectToDatabase } from "../mongoose";

export async function getTagById(params: any) {
  try {
    await connectToDatabase();
    const { _id: tagId }: any = params;
    const tag = await Tag.findById(tagId);
    return tag;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
