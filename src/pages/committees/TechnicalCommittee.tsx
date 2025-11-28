// src/pages/committees/TechnicalCommittee.tsx
import React from "react";

const TechnicalCommittee: React.FC = () => {
  return (
    <>
      <section
        className="page-hero-section d-flex align-items-center text-center text-white"
        style={{ backgroundImage: "url('/assets/images/JOSEPH.jpg')" }}
      >
        <div className="hero-overlay"></div>
        <div className="container">
          <h1 className="display-3 mb-3">Technical Department</h1>
          <p className="lead">
            Providing Technical Excellence for Worship and Ministry
          </p>
        </div>
      </section>

      <section className="py-5 leader-profile-section">
        <div className="container">
          {/* TODO: paste the full body content from committees/technical.html
              (except nav/footer/scripts), convert class->className and hrefs
              as in other pages. */}
        </div>
      </section>
    </>
  );
};

export default TechnicalCommittee;