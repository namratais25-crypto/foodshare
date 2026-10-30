
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "Food Donor",
  });

  function handleSubmit(e) {
    e.preventDefault();
    alert("Demo registration submitted. Real authentication is not connected yet.");
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1>Join FoodShare 🌱</h1>
        <p>Create an account and become part of the sharing community.</p>

        <form className="food-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create a password"
              minLength={6}
              required
            />
          </div>

          <div className="form-group">
            <label>Account Type</label>
            <select name="role" value={form.role} onChange={handleChange}>
              <option>Food Donor</option>
              <option>Community Organization</option>
            </select>
          </div>

          <button className="submit-btn">Create Account</button>
        </form>

        <p style={{ marginTop: 20 }}>
          Already registered? <Link href="/login" style={{ color: "#2E7D32" }}>Login</Link>
        </p>
      </div>
    </main>
  );
}
