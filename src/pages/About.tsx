import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
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

      {/* Then bring over Introduction, Guiding Principles, Aims, Doctrinal Basis,
          Organizational Structure, Executive Committee, Why Join MUTCU,
          exactly as in about.html (only syntax changes). Any links like
          href="contact.html" → <Link to="/contact">, etc. */}
    </>
  );
};

export default About;