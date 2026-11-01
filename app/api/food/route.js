import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Food from "@/models/Food";

// GET: Fetch all food donations
export async function GET() {
  try {
    await connectDB();

    const foods = await Food.find().sort({ createdAt: -1 });

    return NextResponse.json(foods, { status: 200 });

  } catch (error) {
    console.error("GET FOOD ERROR:", error);

    return NextResponse.json(
      { message: "Failed to fetch food items", error: error.message },
      { status: 500 }
    );
  }
}

// POST: Add a new food donation
export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    if (
      !body.name ||
      !body.category ||
      !body.quantity ||
      !body.preparedAt ||
      !body.location ||
      !body.deadline
    ) {
      return NextResponse.json(
        { message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const newFood = await Food.create({
      name: body.name,
      category: body.category,
      quantity: body.quantity,
      preparedAt: body.preparedAt,
      location: body.location,
      deadline: body.deadline,
      handling: body.handling || "",
      status: "Available",
    });

    return NextResponse.json(
      {
        message: "Food added successfully!",
        food: newFood,
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("POST FOOD ERROR:", error);

    return NextResponse.json(
      {
        message: "Failed to add food",
        error: error.message,
      },
      { status: 500 }
    );
  }
}