import { Document, models, model, Schema } from "mongoose";

interface ITag extends Document {
  name: String;
  description: String;
  question: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
const TagSchema = new Schema<ITag>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    question: [
      {
        type: Schema.Types.ObjectId,
        ref: "Question",
      },
    ],
    followers: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Tag = models.Tags || model<ITag>("Tags", TagSchema);

export default Tag;
