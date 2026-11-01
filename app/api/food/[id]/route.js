import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Food from "@/models/Food";
import mongoose from "mongoose";

export async function PATCH(request, { params }) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await request.json();

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid food ID" },
        { status: 400 }
      );
    }

    if (!["Available", "Reserved", "Collected"].includes(body.status)) {
      return NextResponse.json(
        { message: "Invalid food status" },
        { status: 400 }
      );
    }

    const food = await Food.findByIdAndUpdate(
      id,
      { status: body.status },
      { new: true, runValidators: true }
    );

    if (!food) {
      return NextResponse.json(
        { message: "Food not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Food status updated successfully",
        food: food,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("UPDATE FOOD ERROR:", error);

    return NextResponse.json(
      {
        message: "Failed to update food status",
        error: error.message,
      },
      { status: 500 }
    );
  }
}