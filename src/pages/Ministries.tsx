// src/pages/About.tsx
import React from "react";
import { Link } from "react-router-dom";

const Ministries: React.FC = () => {
  return (
    <>
      {/* Page Hero */}
      <section
        className="page-hero-section d-flex align-items-center text-center text-white"
        style={{ backgroundImage: "url('/assets/images/church2.jpg')" }}
      >
        <div className="hero-overlay"></div>
        <div className="container position-relative" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="display-3 mb-3">About MUTCU</h1>
          <p className="lead">Inspiring Love, Hope &amp; Godliness </p>
        </div>
      </section>

      {/* Thref="ministries/music-ministry.html" → <Link to="/ministries/music-ministry"> etc. */}
    </>
  );
};

export default Ministries;