"use client";

import { useState, useEffect } from "react";

export default function AvailableFood() {
const [foodList, setFoodList] = useState([]);
const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");
const [message, setMessage] = useState("Loading food items...");

async function fetchFood() {
try {
const response = await fetch("/api/food");
const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to load food.");
  }

  setFoodList(data);
  setMessage("");
} catch (error) {
  setMessage("Unable to load food items. Please try again.");
}

}

useEffect(() => {
fetchFood();
}, []);

async function reserveFood(id) {
try {
const response = await fetch(`/api/food/${id}`,  {
method: "PATCH",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({ status: "Reserved" }),
});

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to reserve food.");
  }

  setFoodList((previous) =>
    previous.map((food) =>
      food._id === id ? { ...food, status: "Reserved" } : food
    )
  );
} catch (error) {
  setMessage(error.message);
}

}

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
      <article className="food-card" key={food._id}>
        <h3>{food.name}</h3>
        <span className="status-badge">{food.status}</span>

        <p><strong>Category:</strong> {food.category}</p>
        <p><strong>Quantity:</strong> {food.quantity}</p>
        <p><strong>Pickup Location:</strong> {food.location}</p>
        <p>
          <strong>Collection Deadline:</strong>{" "}
          {new Date(food.deadline).toLocaleString()}
        </p>
        <p>
          <strong>Handling:</strong>{" "}
          {food.handling || "Not specified"}
        </p>

        <button
          className="primary-btn"
          onClick={() => reserveFood(food._id)}
        >
          Reserve Food
        </button>
      </article>
    ))}
  </div>

  {message && (
    <p style={{ textAlign: "center", marginTop: 35, color: "#64748B" }}>
      {message}
    </p>
  )}

  {!message && filteredFood.length === 0 && (
    <p style={{ textAlign: "center", marginTop: 35, color: "#64748B" }}>
      No available food listings found. Try another search.
    </p>
  )}
</main>

);
}
