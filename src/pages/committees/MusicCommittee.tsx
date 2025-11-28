// src/pages/committees/MusicCommittee.tsx
import React from "react";
// Import Link for internal routing, matching the Secretary.tsx pattern
import { Link } from "react-router-dom";

const MusicCommittee: React.FC = () => {
  return (
    <>
         {/* Hero – adjusted to known text: "MUTCU Music Ministry" */}
      <section
        className="page-hero-section d-flex align-items-center text-center text-white"
        style={{ backgroundImage: "url('/assets/images/music1.jpg')" }}
      >
        <div className="hero-overlay"></div>
        <div className="container">
          <h1 className="display-3 mb-3">MUTCU Music Ministry</h1>
          <p className="lead">
            Leading Worship and Glorifying God Through Song
          </p>
        </div>
      </section>

      {/* Profile/Ministry Details */}
      <section className="py-5 leader-profile-section">
        <div className="container">
          <div className="row align-items-center mb-5">
            {/* Coordinator Profile Card (Matching Secretary.tsx style) */}
            <div
              className="col-6 col-md-4 col-lg-3 mb-4 text-center mx-auto"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="executive-member-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100 p-3">
                <img
                  src="/assets/images/JABEZ.jpg"
                  alt="Jabez Ayugu"
                  className="img-fluid rounded-circle mb-3 border border-3 border-navy"
                  style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                />
                <h4 className="member-name mt-3">Jabez Ayugu</h4>
                <p className="member-role text-muted">Music Coordinator</p>
              </div>
            </div>

            {/* About Ministry Content */}
            <div className="col-lg-8" data-aos="fade-left" data-aos-delay="200">
              <h2 className="section-title text-start">About the Music Ministry</h2>
              <p>The **Music Ministry** of MUTCU is dedicated to leading the Union in vibrant and spiritually uplifting worship experiences. Comprising various teams including the choir, band, instrumentalists, and praise and worship leaders, this ministry plays a crucial role in creating an atmosphere where members can connect with God through music and song.</p>
              <p>Our goal is to foster a heart of worship and praise among the MUTCU family, ensuring that all musical presentations are excellent and align with the Union's spiritual goals. We believe that music is a powerful tool for evangelism, edification, and glorifying God.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles & Activities */}
      <section className="py-5 bg-light roles-responsibilities-section">
        <div className="container">
          <h2 className="section-title text-center">Key Roles &amp; Activities</h2>
          <p className="text-center lead mb-5">
            The Music Ministry leads MUTCU in worship and praise through various ensembles and events.
          </p>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <ul className="list-unstyled roles-list">
                <li className="mb-3" data-aos="fade-up" data-aos-delay="100">
                  <i className="fas fa-music me-3 text-primary-light"></i> Leading praise and worship during weekly fellowships and Sunday services.
                </li>
                <li className="mb-3" data-aos="fade-up" data-aos-delay="200">
                  <i className="fas fa-music me-3 text-primary-light"></i> Weekly rehearsals for choir, band, instrumentalists, and praise teams.
                </li>
                <li className="mb-3" data-aos="fade-up" data-aos-delay="300">
                  <i className="fas fa-music me-3 text-primary-light"></i> Performing during major Union events like MULEWO, Praise Fests, and Christmas Cantata.
                </li>
                <li className="mb-3" data-aos="fade-up" data-aos-delay="400">
                  <i className="fas fa-music me-3 text-primary-light"></i> Training and mentoring aspiring musicians in the Union.
                </li>
                <li className="mb-3" data-aos="fade-up" data-aos-delay="500">
                  <i className="fas fa-music me-3 text-primary-light"></i> Collaborating with other ministries for creative worship experiences.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 cta-section text-white">
        <div className="container text-center" data-aos="zoom-in">
          <h2 className="section-title text">Join Our Music Ministry!</h2>
          <p className="section-subtitle">If you have a passion for worship through music, we invite you to join the Music Ministry. Click below to express your interest!</p>
          
          <a href="/ministries.html" className="btn btn-primary btn-lg me-3">
            Join This Ministry <i className="fas fa-hand-heart ms-2"></i>
          </a>
          <a href="events.html#music-events" className="btn btn-secondary btn-lg">
            View Music Events <i className="fas fa-calendar-alt ms-2"></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default MusicCommittee;