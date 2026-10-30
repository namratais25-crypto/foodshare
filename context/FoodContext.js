
"use client";

import { createContext, useContext, useState } from "react";

const FoodContext = createContext(null);

const initialFood = [
  {
    id: 1,
    name: "Vegetable Rice",
    category: "Cooked Food",
    quantity: "20 meals",
    preparedAt: "2026-10-30T15:00",
    location: "Mangaluru",
    deadline: "2026-10-30T20:00",
    handling: "Keep covered",
    status: "Available",
  },
  {
    id: 2,
    name: "Fresh Bread",
    category: "Bakery Items",
    quantity: "15 pieces",
    preparedAt: "2026-10-30T14:00",
    location: "Surathkal",
    deadline: "2026-10-30T19:00",
    handling: "Store in a clean container",
    status: "Reserved",
  },
  {
    id: 3,
    name: "Fresh Fruits",
    category: "Fruits",
    quantity: "10 kg",
    preparedAt: "2026-10-30T10:00",
    location: "Mangaluru",
    deadline: "2026-10-31T18:00",
    handling: "Wash before consumption",
    status: "Collected",
  },
];

export function FoodProvider({ children }) {
  const [foodList, setFoodList] = useState(initialFood);

  function addFood(food) {
    const newFood = {
      ...food,
      id: Date.now(),
      status: "Available",
    };

    setFoodList((previous) => [newFood, ...previous]);
  }

  function updateStatus(id, status) {
    setFoodList((previous) =>
      previous.map((food) =>
        food.id === id ? { ...food, status } : food
      )
    );
  }

  return (
    <FoodContext.Provider
      value={{ foodList, addFood, updateStatus }}
    >
      {children}
    </FoodContext.Provider>
  );
}

export function useFood() {
  const context = useContext(FoodContext);

  if (!context) {
    throw new Error("useFood must be used inside FoodProvider");
  }

  return context;
}
