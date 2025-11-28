import React from "react";

//import { Link } from "react-router-dom"; 

const TechnicalCommittee: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <section
        className="page-hero-section d-flex align-items-center text-center text-white"
        style={{ backgroundImage: "url('/assets/images/JOSEPH.jpg')" }}
      >
        <div className="hero-overlay"></div>
        <div
          className="container position-relative"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="display-3 mb-3">Technical Department</h1>
          <p className="lead">
            Providing Technical Excellence for Worship and Ministry
          </p>
        </div>
      </section>

      {/* Profile/Ministry Details */}
      <section className="py-5 leader-profile-section">
        <div className="container">
          <div className="row align-items-center mb-5">
            {/* Coordinator Profile Card */}
            <div
              className="col-6 col-md-4 col-lg-3 mb-4 text-center mx-auto" // Added mx-auto for center alignment on smaller screens
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="executive-member-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100 p-3">
                <img
                  src="/assets/images/JOSEPH.jpg"
                  alt="Joseph Mbogo"
                  className="img-fluid rounded-circle mb-3 border border-3 border-navy" // Added border styles
                  style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                />
                <h4 className="member-name mt-3">Joseph Mbogo</h4>
                <p className="member-role text-muted">Technical Coordinator</p>
              </div>
            </div>

          
            <div className="col-lg-8" data-aos="fade-left" data-aos-delay="200">
              <h2 className="section-title text-start">About the Technical Ministry</h2>
              <p>The Technical Ministry of MUTCU oversees all technical and logistical aspects to ensure seamless operations during services and events. Comprising sub-ministries such as Ushering, Sound, Digital Ministry (including livestreaming and social media management), and MBBC/Publicity (posters and event promotion), this ministry manages the Union's public image and delivers high-quality technical support.</p>
              <p>Our goal is to enhance the worship experience through innovative technology, excellent service, and effective communication, supporting MUTCU's mission of inspiring love, hope, and godliness.</p>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-5 bg-light roles-responsibilities-section"> {/* Renamed/Restyled section */}
        <div className="container">
          <h2 className="section-title text-center">Key Roles &amp; Activities</h2>
          <p className="text-center lead mb-5">
            The Technical Ministry supports MUTCU through various functions as outlined in the constitution and policies.
          </p>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <ul className="list-unstyled roles-list">
                <li className="mb-3" data-aos="fade-up" data-aos-delay="100">
                  <i className="fas fa-microphone-alt me-2 text-primary-light"></i> Managing sound systems and equipment for all Union meetings and events.
                </li>
                <li className="mb-3" data-aos="fade-up" data-aos-delay="200">
                  <i className="fas fa-video me-2 text-primary-light"></i> Handling livestreaming of weekly fellowships, Sunday services, and special events.
                </li>
                <li className="mb-3" data-aos="fade-up" data-aos-delay="300">
                  <i className="fas fa-bullhorn me-2 text-primary-light"></i> Creating and distributing publicity materials, including posters and social media promotions.
                </li>
                <li className="mb-3" data-aos="fade-up" data-aos-delay="400">
                  <i className="fas fa-users me-2 text-primary-light"></i> Coordinating ushering teams to create a welcoming and organized environment during gatherings.
                </li>
                <li className="mb-3" data-aos="fade-up" data-aos-delay="500">
                  <i className="fas fa-tools me-2 text-primary-light"></i> Maintaining, storing, and ensuring the safety of all technical equipment.
                </li>
                <li className="mb-3" data-aos="fade-up" data-aos-delay="600">
                  <i className="fas fa-chalkboard-teacher me-2 text-primary-light"></i> Training new members in technical skills and ministry operations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      
      <section className="py-5 cta-section text-white">
        <div className="container text-center" data-aos="zoom-in">
          <h2 className="section-title text">Join Our Technical Ministry!</h2>
          <p className="section-subtitle">If you have a passion for technology, media, or service, we invite you to join the Technical Ministry. Click below to express your interest!</p>
          
          <a href="join-technical.html" className="btn btn-primary btn-lg me-3">
            Join This Ministry <i className="fas fa-user-plus ms-2"></i>
          </a>
          <a href="events.html#technical-events" className="btn btn-secondary btn-lg">
            View Technical Events <i className="fas fa-calendar-alt ms-2"></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default TechnicalCommittee;