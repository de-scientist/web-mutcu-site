// src/pages/ministries/CreativeArts.tsx
import React from "react";

const CreativeArts: React.FC = () => {
  return (
    <>
      <section
        className="page-hero-section d-flex align-items-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/10312684/pexels-photo-10312684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="hero-overlay"></div>
        <div
          className="container position-relative"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="display-3 mb-3">MUTCU Creative Arts Ministry</h1>
          <p className="lead">
            Inspiring Love, Hope &amp; Godliness Through Artistic Expression
          </p>
        </div>
      </section>

      {/* TODO: convert full content from creative-arts.html */}
    </>
  );
};

export default CreativeArts;