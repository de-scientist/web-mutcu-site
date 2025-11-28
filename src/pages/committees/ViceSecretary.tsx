// src/pages/committees/ViceSecretary.tsx
import React from "react";
import { Link } from "react-router-dom";

const ViceSecretary: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <section
        className="page-hero-section d-flex align-items-center text-center text-white"
        style={{ backgroundImage: "url('/assets/images/DAISY.jpg')" }}
      >
        <div className="hero-overlay"></div>
        <div
          className="container position-relative"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="display-3 mb-3">Office of the Vice Secretary</h1>
          <p className="lead">Supporting Administrative Efficiency</p>
        </div>
      </section>

      {/* Profile */}
      <section className="py-5 leader-profile-section">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-6 col-md-4 col-lg-3 mb-4"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <div className="executive-member-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100">
                <img
                  src="/assets/images/DAISY.jpg"
                  alt="Daisy Mutheu"
                  className="img-fluid rounded-circle mb-3 border border-3 border-orange"
                />
                <h4 className="member-name">Daisy Mutheu</h4>
                <p className="member-role">Vice Secretary</p>
              </div>
            </div>
            <div
              className="col-lg-8"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <h3 className="section-title text-start">
                About the Vice Secretary&apos;s Office
              </h3>
              <p>
                The Vice Secretary&apos;s office provides essential support to
                the Secretary in managing the administrative backbone of MUTCU.
                This role is crucial for maintaining organized records,
                facilitating internal and external communications, and ensuring
                that all administrative tasks are handled efficiently and
                accurately.
              </p>
              <p>
                Daisy Mutheu, as Vice Secretary, works diligently to uphold the
                Union&apos;s commitment to transparency and effective
                communication. She assists in preparing meeting documents,
                managing correspondence, and ensuring that the Union&apos;s
                administrative processes support its spiritual and outreach
                goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-5 bg-light roles-responsibilities-section">
        <div className="container">
          <h2 className="section-title text-center">Key Roles &amp; Responsibilities</h2>
          <p className="text-center lead mb-5">
            The Vice Secretary supports the Secretary in all administrative
            duties.
          </p>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <ul className="list-unstyled roles-list">
                <li data-aos="fade-up" data-aos-delay="100">
                  <i className="fas fa-check-circle me-3"></i> Assisting the
                  Secretary in compiling and maintaining meeting minutes and
                  records.
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  <i className="fas fa-check-circle me-3"></i> Supporting the
                  management of Union correspondence and official documents.
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <i className="fas fa-check-circle me-3"></i> Head of the
                  Literature Department managing the CU library.
                </li>
                <li data-aos="fade-up" data-aos-delay="400">
                  <i className="fas fa-check-circle me-3"></i> Facilitating
                  internal communication within the Executive Council and
                  various committees.
                </li>
                <li data-aos="fade-up" data-aos-delay="500">
                  <i className="fas fa-check-circle me-3"></i> Deputizing the
                  Secretary in their absence and handling delegated
                  administrative tasks.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 cta-section text-white">
        <div
          className="container text-center"
          data-aos="zoom-in"
        >
          <h2 className="section-title text-">Explore Our Leadership!</h2>
          <p className="section-title">
            Learn more about the dedicated individuals guiding MUTCU.
          </p>
          <Link
            to="/about"
            className="btn btn-primary btn-lg me-3"
          >
            Meet the Team <i className="fas fa-users ms-2"></i>
          </Link>
          <Link
            to="/contact"
            className="btn btn-secondary btn-lg"
          >
            Get in Touch <i className="fas fa-envelope ms-2"></i>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ViceSecretary;