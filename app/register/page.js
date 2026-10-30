
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "Donor",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleRegister(e) {
    e.preventDefault();

    if (form.password.length < 6) {
      alert("Password must contain at least 6 characters.");
      return;
    }

    alert("Demo registration successful!");
  }

  return (
    <main className="auth-container">
      <form className="auth-card" onSubmit={handleRegister}>
        <h1>Create Account</h1>
        <p>Join the FoodShare community.</p>

        <label>Full Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Minimum 6 characters"
          required
        />

        <label>Account Type</label>
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
        >
          <option>Donor</option>
          <option>Community Organization</option>
        </select>

        <button className="primary-btn" type="submit">
          Register
        </button>

        <p>
          Already registered? <Link href="/login">Login</Link>
        </p>
      </form>
    </main>
  );
}
