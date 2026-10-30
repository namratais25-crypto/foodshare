
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FoodProvider } from "../context/FoodContext";

export const metadata = {
  title: "FoodShare",
  description: "Share Food, Spread Hope",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FoodProvider>
          <Navbar />
          {children}
          <Footer />
        </FoodProvider>
      </body>
    </html>
  );
}
