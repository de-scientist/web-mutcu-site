// src/pages/ministries/HospitalityMinistry.tsx
import React from "react";

const HospitalityMinistry: React.FC = () => {
  return (
    <>
      <section
        className="page-hero-section d-flex align-items-center text-center text-white"
        style={{ backgroundImage: "url('/assets/images/tlp.jpg')" }}
      >
        <div className="hero-overlay"></div>
        <div className="container">
          <h1>Hospitality Ministry</h1>
          <p className="lead">Welcoming All with Love</p>
        </div>
      </section>

      {/* TODO: convert from hospitality-ministry.html */}
    </>
  );
};

export default HospitalityMinistry;