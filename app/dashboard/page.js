
"use client";

import { useFood } from "../../context/FoodContext";

export default function Dashboard() {
  const { foodList } = useFood();

  const total = foodList.length;
  const available = foodList.filter(
    (food) => food.status === "Available"
  ).length;
  const reserved = foodList.filter(
    (food) => food.status === "Reserved"
  ).length;
  const collected = foodList.filter(
    (food) => food.status === "Collected"
  ).length;

  return (
    <main className="page-container">
      <div className="page-heading">
        <h1>Dashboard 📊</h1>
        <p>Track food donations and sharing activity.</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Food Listings</h3>
          <h2>{total}</h2>
        </div>

        <div className="stat-card">
          <h3>Available Food</h3>
          <h2>{available}</h2>
        </div>

        <div className="stat-card">
          <h3>Reserved Food</h3>
          <h2>{reserved}</h2>
        </div>

        <div className="stat-card">
          <h3>Collected Food</h3>
          <h2>{collected}</h2>
        </div>
      </div>

      <section className="section" style={{ width: "100%", paddingLeft: 0, paddingRight: 0 }}>
        <div className="section-title">
          <h2>Our Impact</h2>
          <p>Every successful collection helps reduce food waste.</p>
        </div>

        <div className="card">
          <h3 style={{ color: "#2E7D32" }}>Food successfully collected</h3>
          <h2 style={{ fontSize: 36, color: "#2E7D32" }}>{collected}</h2>
          <p>Collected listings in this demonstration application.</p>
        </div>
      </section>
    </main>
  );
}
