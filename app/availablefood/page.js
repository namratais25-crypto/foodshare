
"use client";

import { useState } from "react";
import { useFood } from "../../context/FoodContext";

export default function AvailableFood() {
  const { foodList, updateStatus } = useFood();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredFood = foodList.filter((food) => {
    const matchesSearch =
      food.name.toLowerCase().includes(search.toLowerCase()) ||
      food.location.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || food.category === category;

    return matchesSearch && matchesCategory && food.status === "Available";
  });

  return (
    <main className="page-container">
      <div className="page-heading">
        <h1>Available Food 🍲</h1>
        <p>Discover surplus food listings available for collection.</p>
      </div>

      <div className="filters">
        <input
          type="search"
          placeholder="Search food or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>Cooked Food</option>
          <option>Fruits</option>
          <option>Vegetables</option>
          <option>Bakery Items</option>
          <option>Packaged Food</option>
          <option>Other</option>
        </select>
      </div>

      <div className="food-grid">
        {filteredFood.map((food) => (
          <article className="food-card" key={food.id}>
            <h3>{food.name}</h3>
            <span className="status-badge">{food.status}</span>

            <p><strong>Category:</strong> {food.category}</p>
            <p><strong>Quantity:</strong> {food.quantity}</p>
            <p><strong>Pickup Location:</strong> {food.location}</p>
            <p>
              <strong>Collection Deadline:</strong>{" "}
              {new Date(food.deadline).toLocaleString()}
            </p>
            <p><strong>Handling:</strong> {food.handling || "Not specified"}</p>

            <button
              className="primary-btn"
              onClick={() => updateStatus(food.id, "Reserved")}
            >
              Reserve Food
            </button>
          </article>
        ))}
      </div>

      {filteredFood.length === 0 && (
        <p style={{ textAlign: "center", marginTop: 35, color: "#64748B" }}>
          No available food listings found. Try another search.
        </p>
      )}
    </main>
  );
}
