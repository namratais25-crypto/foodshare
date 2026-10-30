
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/">
        <h2>🌿 FoodShare</h2>
      </Link>

      <div>
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/availablefood">Available Food</Link>
        <Link href="/sharefood">Share Food</Link>
        <Link href="/mydonations">My Donations</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}
