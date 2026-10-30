
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <span className="eyebrow">WELCOME TO FOODSHARE</span>
            <h1>Share Food,<br /><span>Spread Hope!</span></h1>
            <p>
              Connect surplus food donors with community organizations.
              Reduce food waste and help people in need.
            </p>
            <div className="hero-buttons">
              <Link href="/sharefood" className="primary-btn">
                Donate Food
              </Link>
              <Link href="/availablefood" className="secondary-btn">
                Find Food
              </Link>
            </div>
          </div>
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1000"
            alt="Fresh food and vegetables"
          />
        </div>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          FoodShare makes surplus food easier to discover and share.
          We aim to build a community where good food does not go to waste.
        </p>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>How FoodShare Works</h2>
          <p>Three simple steps to make a difference.</p>
        </div>

        <div className="steps">
          <div className="step-card">
            <h3>01. Donate Food</h3>
            <p>List your surplus food with quantity and pickup details.</p>
          </div>
          <div className="step-card">
            <h3>02. Reserve Food</h3>
            <p>Community organizations can discover and reserve listings.</p>
          </div>
          <div className="step-card">
            <h3>03. Collect Food</h3>
            <p>Update the listing when the food has been collected.</p>
          </div>
        </div>
      </section>
    </>
  );
}
