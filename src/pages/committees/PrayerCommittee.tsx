// src/pages/committees/PrayerCommittee.tsx
import React from "react";
import { Link } from "react-router-dom";

const PrayerCommittee: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <section
        className="page-hero-section d-flex align-items-center text-center text-white"
        style={{ backgroundImage: "url('/assets/images/PRAYER.jpg')" }}
      >
        <div className="hero-overlay"></div>
        <div
          className="container position-relative"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="display-3 mb-3">Prayer Ministry</h1>
          <p className="lead">
            Building a Culture of Intercession and Spiritual Dependence
          </p>
        </div>
      </section>

      {/* Profile */}
      <section className="py-5 leader-profile-section">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-6 col-md-4 col-lg-3 mb-4"
              data-aos="zoom-in"
              data-aos-delay="800"
            >
              <div className="executive-member-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100">
                <img
                  src="/assets/images/PRAYER.jpg"
                  alt="Roy Ndege"
                  className="img-fluid rounded-circle mb-3 border border-3 border-navy"
                />
                <h4 className="member-name">Roy Ndege</h4>
                <p className="member-role">Prayer Coordinator</p>
              </div>
            </div>
            <div
              className="col-lg-8"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <h3 className="section-title text-start">
                About the Prayer Ministry
              </h3>
              <p>
                The Prayer Ministry is the spiritual engine of MUTCU, dedicated
                to cultivating a deep culture of prayer and intercession among
                members. It organizes various prayer gatherings, from daily
                sessions to weekly meetings and special prayer keshas, ensuring
                that the Union&apos;s activities are founded on spiritual
                dependence and divine guidance.
              </p>
              <p>
                Roy Ndege, as the Prayer Coordinator, leads this vital ministry,
                encouraging members to engage in consistent and fervent prayer
                for the Union, the university, and the wider community. The
                ministry believes that prayer is key to spiritual breakthroughs
                and the fulfillment of MUTCU&apos;s vision and mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-5 bg-light roles-responsibilities-section">
        <div className="container">
          <h2 className="section-title text-center">Key Roles &amp; Activities</h2>
          <p className="text-center lead mb-5">
            The Prayer Ministry leads MUTCU in seeking God&apos;s face.
          </p>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <ul className="list-unstyled roles-list">
                <li data-aos="fade-up" data-aos-delay="100">
                  <i className="fas fa-check-circle me-3"></i> Organizing and
                  facilitating daily and weekly prayer meetings for members.
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  <i className="fas fa-check-circle me-3"></i> Planning and
                  executing special prayer keshas (all-night prayer sessions).
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <i className="fas fa-check-circle me-3"></i> Encouraging a
                  personal and corporate culture of intercessory prayer for the
                  Union, university, and nation.
                </li>
                <li data-aos="fade-up" data-aos-delay="400">
                  <i className="fas fa-check-circle me-3"></i> Providing
                  platforms for members to submit and share prayer requests.
                </li>
                <li data-aos="fade-up" data-aos-delay="500">
                  <i className="fas fa-check-circle me-3"></i> Mobilizing
                  members for prayer support during major Union events and
                  missions.
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
          <h2 className="section-title ">Join Us in Prayer!</h2>
          <p className="section-title">
            Submit your prayer requests or join our prayer meetings to
            experience God&apos;s power.
          </p>
          <Link
            to="/contact"
            className="btn btn-primary btn-lg me-3"
          >
            Submit Prayer Request{" "}
            <i className="fas fa-hand-holding-heart ms-2"></i>
          </Link>
          <Link
            to="/events"
            className="btn btn-secondary btn-lg"
          >
            View Prayer Events{" "}
            <i className="fas fa-calendar-alt ms-2"></i>
          </Link>
        </div>
      </section>
    </>
  );
};

export default PrayerCommittee;