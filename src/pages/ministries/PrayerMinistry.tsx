// src/pages/ministries/PrayerMinistry.tsx
import React from "react";

const PrayerMinistry: React.FC = () => {
  return (
    <>
      <section
        className="page-hero-section d-flex align-items-center text-center text-white"
        style={{ backgroundImage: "url('/assets/images/church2.jpg')" }}
      >
        <div className="hero-overlay"></div>
        <div className="container">
          <h1>Prayer Ministry</h1>
          <p className="lead">Building a Culture of Intercession</p>
        </div>
      </section>

      {/* TODO: convert from prayer-ministry.html */}
    </>
  );
};

export default PrayerMinistry;