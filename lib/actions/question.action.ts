"use server";

import Question from "@/database/question.model";
import { connectToDatabase } from "../mongoose";
import Tag from "@/database/tag.model";
import User from "@/database/user.model";
import { revalidatePath } from "next/cache";
import { CreateQuestionParams } from "./shared.types";

export async function getQuestions() {
  try {
    await connectToDatabase();
    const questions = await Question.find({})
      .populate({ path: "tags", model: Tag })
      .populate({ path: "author", model: User })
      .sort({ createdAt: -1 });
    return questions;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createQuestion(params: CreateQuestionParams) {
  try {
    await connectToDatabase(); // Ensure the connection is established before continuing
    const { title, content, author, tags, path } = params;

    const question = await Question.create({
      title,
      content,
      author,
    });

    const tagPromises = tags.map(async (tag) => {
      return await Tag.findOneAndUpdate(
        { name: tag },
        {
          $setOnInsert: { name: tag },
          $push: { question: question._id },
        },
        { upsert: true, new: true }
      );
    });

    const arrayDocs = await Promise.all(tagPromises);

    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: arrayDocs } },
    });

    revalidatePath(path);

    console.log("Question created successfully with tags:", arrayDocs);
  } catch (error) {
    console.error("Error creating question:", error);
  }
}
