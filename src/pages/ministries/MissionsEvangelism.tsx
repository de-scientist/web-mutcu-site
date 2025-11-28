// src/pages/ministries/MissionsEvangelism.tsx
import React from "react";

const MissionsEvangelism: React.FC = () => {
  return (
    <>
      <section
        className="page-hero-section"
        style={{ backgroundImage: "url('/assets/images/mission1.jpg')" }}
        data-aos="fade-in"
      >
        <div className="hero-overlay"></div>
        <div className="container">
          <h1 data-aos="fade-up">MUTCU Missions &amp; Evangelism Ministry</h1>
          <p
            className="lead"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Spreading the Gospel and Serving Communities
          </p>
        </div>
      </section>

      {/* TODO: convert full content from missions-evangelism.html */}
    </>
  );
};

export default MissionsEvangelism;