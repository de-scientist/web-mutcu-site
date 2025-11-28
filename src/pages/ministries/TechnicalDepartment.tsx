// src/pages/ministries/TechnicalDepartment.tsx
import React from "react";

const TechnicalDepartment: React.FC = () => {
  return (
    <>
      <section
        className="page-hero-section d-flex align-items-center text-center text-white"
        style={{ backgroundImage: "url('/assets/images/mbbc1.jpg')" }}
      >
        <div className="hero-overlay"></div>
        <div className="container">
          <h1>Technical Department</h1>
          <p className="lead">Providing Technical Excellence</p>
        </div>
      </section>

      {/* TODO: convert from technical-department.html */}
    </>
  );
};

export default TechnicalDepartment;
