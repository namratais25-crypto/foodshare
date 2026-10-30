
"use client";

import { useFood } from "../../context/FoodContext";

export default function MyDonations() {
  const { foodList, updateStatus } = useFood();

  return (
    <main className="page-container">
      <div className="page-heading">
        <h1>My Donations ❤️</h1>
        <p>View donation listings and update their collection status.</p>
      </div>

      <div className="food-grid">
        {foodList.map((food) => (
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

            {food.status === "Reserved" && (
              <button
                className="primary-btn"
                onClick={() => updateStatus(food.id, "Collected")}
              >
                Mark as Collected
              </button>
            )}
          </article>
        ))}
      </div>

      {foodList.length === 0 && (
        <p>No donations have been added yet.</p>
      )}
    </main>
  );
}
