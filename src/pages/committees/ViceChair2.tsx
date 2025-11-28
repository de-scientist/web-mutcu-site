// src/pages/committees/ViceChair2.tsx
import React from "react";
import { Link } from "react-router-dom";

const ViceChair2: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <section
        className="page-hero-section d-flex align-items-center text-center text-white"
        style={{ backgroundImage: "url('/assets/images/MARTIN.jpg')" }}
      >
        <div className="hero-overlay"></div>
        <div
          className="container position-relative"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="display-3 mb-3">Office of the 2nd Vice Chair</h1>
          <p className="lead">Supporting Growth and Community Engagement</p>
        </div>
      </section>

      {/* Profile */}
      <section className="py-5 leader-profile-section">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-6 col-md-4 col-lg-3 mb-4"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="executive-member-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100">
                <img
                  src="/assets/images/MARTIN.jpg"
                  alt="Martin Gitau"
                  className="img-fluid rounded-circle mb-3 border border-3 border-orange"
                />
                <h4 className="member-name">Martin Gitau</h4>
                <p className="member-role">2nd Vice Chair</p>
              </div>
            </div>
            <div className="col-lg-8" data-aos="fade-left" data-aos-delay="200">
              <h3 className="section-title text-start">
                About the 2nd Vice Chair&apos;s Office
              </h3>
              <p>
                The 2nd Vice Chair&apos;s office works in close collaboration
                with the Chairman and 1st Vice Chair, providing essential
                support in the overall administration and spiritual direction of
                MUTCU. This role is vital in ensuring that the Union&apos;s
                diverse activities are well-coordinated and effectively reach
                all members.
              </p>
              <p>
                Martin Gitau, as 2nd Vice Chair, is committed to fostering an
                environment of unity and spiritual vibrancy. He assists in
                various capacities, contributing to the planning and execution
                of programs that align with MUTCU&apos;s mission to raise a
                well-equipped family in Christ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-5 bg-light roles-responsibilities-section">
        <div className="container">
          <h2 className="section-title text-center">
            Key Roles &amp; Responsibilities
          </h2>
          <p className="text-center lead mb-5">
            The 2nd Vice Chair provides crucial support to the Executive
            leadership.
          </p>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <ul className="list-unstyled roles-list">
                <li data-aos="fade-up" data-aos-delay="100">
                  <i className="fas fa-check-circle me-3"></i> Assisting the
                  Chairman and 1st Vice Chair in their executive duties.
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  <i className="fas fa-check-circle me-3"></i> Is in charge of
                  the gents committee.
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <i className="fas fa-check-circle me-3"></i>Is a member of the
                  Alumni Association Committee.
                </li>
                <li data-aos="fade-up" data-aos-delay="400">
                  <i className="fas fa-check-circle me-3"></i> Organizes
                  leadership development forums and trainings for The Union’s
                  leaders.
                </li>
                <li data-aos="fade-up" data-aos-delay="500">
                  <i className="fas fa-check-circle me-3"></i> The chairperson
                  of the Welfare Committee.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 cta-section text-white">
        <div className="container text-center" data-aos="zoom-in">
          <h2 className="section-title ">Explore Our Leadership!</h2>
          <p className="section-title">
            Learn more about the dedicated individuals guiding MUTCU.
          </p>
          <Link to="/about" className="btn btn-primary btn-lg me-3">
            Meet the Team <i className="fas fa-users ms-2"></i>
          </Link>
          <Link to="/contact" className="btn btn-secondary btn-lg">
            Get in Touch <i className="fas fa-envelope ms-2"></i>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ViceChair2;
