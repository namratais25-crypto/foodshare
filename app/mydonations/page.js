"use client";

import { useState, useEffect } from "react";

export default function MyDonations() {
  const [foodList, setFoodList] = useState([]);
  const [message, setMessage] = useState("Loading donations...");

  async function fetchDonations() {
    try {
      const response = await fetch("/api/food");
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Failed to load donations.");
      }

      setFoodList(data);
      setMessage("");
    } catch (error) {
      setMessage("Unable to load donations. Please try again.");
    }
  }

  useEffect(() => {
    fetchDonations();
  }, []);

  async function markAsCollected(id) {
    try {
      const response = await fetch(`/api/food/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "Collected" }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to update status.");
      }

      setFoodList((previous) =>
        previous.map((food) =>
          food._id === id ? { ...food, status: "Collected" } : food
        )
      );
    } catch (error) {
      setMessage(error.message);
    }
  }

  return (
    <main className="page-container">
      <div className="page-heading">
        <h1>My Donations ❤️</h1>
        <p>View donation listings and update their collection status.</p>
      </div>

      <div className="food-grid">
        {foodList.map((food) => (
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

            {food.status === "Reserved" && (
              <button
                className="primary-btn"
                onClick={() => markAsCollected(food._id)}
              >
                Mark as Collected
              </button>
            )}
          </article>
        ))}
      </div>

      {message && (
        <p style={{ textAlign: "center", marginTop: 35 }}>
          {message}
        </p>
      )}

      {!message && foodList.length === 0 && (
        <p style={{ textAlign: "center", marginTop: 35 }}>
          No donations have been added yet.
        </p>
      )}
    </main>
  );
}
