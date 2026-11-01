import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    preparedAt: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    handling: {
      type: String,
    },
    status: {
      type: String,
      default: "Available",
    },
  },
  { timestamps: true }
);

const Food =
  mongoose.models.Food || mongoose.model("Food", foodSchema);

export default Food;