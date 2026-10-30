
"use client";

import { useState } from "react";
import { useFood } from "../../context/FoodContext";

export default function ShareFood() {
  const { addFood } = useFood();

  const [form, setForm] = useState({
    name: "",
    category: "Cooked Food",
    quantity: "",
    preparedAt: "",
    location: "",
    deadline: "",
    handling: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setMessage("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const preparation = new Date(form.preparedAt);
    const deadline = new Date(form.deadline);

    if (deadline <= preparation) {
      setMessage("Collection deadline must be after preparation time.");
      return;
    }

    if (preparation > new Date()) {
      setMessage("Preparation time cannot be in the future.");
      return;
    }

    addFood(form);

    setForm({
      name: "",
      category: "Cooked Food",
      quantity: "",
      preparedAt: "",
      location: "",
      deadline: "",
      handling: "",
    });

    setMessage("Donation added successfully!");
  }

  return (
    <main className="form-page">
      <div className="form-container">
        <div className="form-heading">
          <h1>Share Surplus Food 🌿</h1>
          <p>
            Your small contribution can make a big difference.
            Fill in the food details below.
          </p>
        </div>

        <form className="food-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Food Name *</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Example: Vegetable Rice"
              required
            />
          </div>

          <div className="form-group">
            <label>Food Category *</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
            >
              <option>Cooked Food</option>
              <option>Fruits</option>
              <option>Vegetables</option>
              <option>Bakery Items</option>
              <option>Packaged Food</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Quantity *</label>
            <input
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              placeholder="Example: 20 meals"
              required
            />
          </div>

          <div className="form-group">
            <label>Preparation Date and Time *</label>
            <input
              type="datetime-local"
              name="preparedAt"
              value={form.preparedAt}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Pickup Location *</label>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Enter pickup location"
              required
            />
          </div>

          <div className="form-group">
            <label>Collection Deadline *</label>
            <input
              type="datetime-local"
              name="deadline"
              value={form.deadline}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Food Handling Information</label>
            <textarea
              name="handling"
              value={form.handling}
              onChange={handleChange}
              placeholder="Storage and handling instructions"
            />
          </div>

          {message && (
            <p className="success-message" role="status">
              {message}
            </p>
          )}

          <button className="submit-btn" type="submit">
            Submit Donation
          </button>
        </form>
      </div>
    </main>
  );
}
