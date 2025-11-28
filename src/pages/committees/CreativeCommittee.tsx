// src/pages/committees/CreativeCommittee.tsx
import React from "react";

const CreativeCommittee: React.FC = () => {
  return (
    <>
      <section
        className="page-hero-section d-flex align-items-center text-center text-white"
        style={{ backgroundImage: "url('/assets/images/Ingwee.JPG')" }}
      >
        <div className="hero-overlay"></div>
        <div className="container">
          <h1 className="display-3 mb-3">Creative Ministry (CREAM)</h1>
          <p className="lead">
            Expressing Faith through Drama, Dance, and Creative Arts
          </p>
        </div>
      </section>

      <section className="py-5 leader-profile-section">
        <div className="container">
          {/* TODO: paste full body from committees/creative.html here,
              adjusting class->className and internal links like others. */}
        </div>
      </section>
    </>
  );
};

export default CreativeCommittee;