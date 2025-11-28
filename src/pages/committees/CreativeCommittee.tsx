import React from "react";

//import { Link } from "react-router-dom";

const CreativeCommittee: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <section
        className="page-hero-section d-flex align-items-center text-center text-white"
        
       style={{ backgroundImage: "url('/assets/images/Dance1.jpg')" }}
      >
        <div className="hero-overlay"></div>
        <div
          className="container position-relative"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="display-3 mb-3">Creative Ministry (CREAM)</h1>
          <p className="lead">
            Expressing Faith through Drama, Dance, and Creative Arts
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
                  src="/assets/images/Ingwee.JPG"
                  alt="Brian Ingwee"
                  className="img-fluid rounded-circle mb-3 border border-3 border-navy"
                  style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                />
                <h4 className="member-name mt-3">Brian Ingwee</h4>
                <p className="member-role text-muted">Creative Ministry Coordinator</p>
              </div>
            </div>

            {/* About Ministry Content */}
            <div className="col-lg-8" data-aos="fade-left" data-aos-delay="200">
              <h2 className="section-title text-start">About the Creative Ministry</h2>
              <p>The **Creative Ministry** of MUTCU is dedicated to using artistic expressions to communicate biblical messages and enhance worship experiences. Comprising sub-ministries such as Drama, Dance, SPARCS (Poetry/Spoken Word), and Models, this ministry ensures all performances and presentations align with MUTCU's doctrinal basis and spiritual goals.</p>
              <p>Our mission is to engage the university community and beyond through creative arts, fostering spiritual growth and glorifying God through innovative and impactful performances.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles & Activities */}
      <section className="py-5 bg-light roles-responsibilities-section">
        <div className="container">
          <h2 className="section-title text-center">Key Roles &amp; Activities</h2>
          <p className="text-center lead mb-5">
            The Creative Ministry brings the gospel to life through various artistic endeavors, as outlined in the MUTCU constitution and policies.
          </p>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <ul className="list-unstyled roles-list">
                <li className="mb-3" data-aos="fade-up" data-aos-delay="100">
                  <i className="fas fa-theater-masks me-3 text-primary-light"></i> Developing and performing drama skits that convey biblical truths during services and events.
                </li>
                <li className="mb-3" data-aos="fade-up" data-aos-delay="200">
                  <i className="fas fa-person-dancing me-3 text-primary-light"></i> Choreographing and presenting dance performances for worship and special occasions.
                </li>
                <li className="mb-3" data-aos="fade-up" data-aos-delay="300">
                  <i className="fas fa-pen me-3 text-primary-light"></i> Creating and delivering poetry and spoken word pieces through the SPARCS ministry.
                </li>
                <li className="mb-3" data-aos="fade-up" data-aos-delay="400">
                  <i className="fas fa-palette me-3 text-primary-light"></i> Organizing creative events like Treasure Hunt, Creative Night, and Creative Experiences.
                </li>
                <li className="mb-3" data-aos="fade-up" data-aos-delay="500">
                  <i className="fas fa-book-open me-3 text-primary-light"></i> Reviewing all scripts and performances to ensure alignment with biblical doctrine.
                </li>
                <li className="mb-3" data-aos="fade-up" data-aos-delay="600">
                  <i className="fas fa-users me-3 text-primary-light"></i> Collaborating with the Music Ministry for events like the Christmas Cantata.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 cta-section text-white">
        <div className="container text-center" data-aos="zoom-in">
          <h2 className="section-title text">Join Our Creative Ministry!</h2>
          <p className="section-subtitle">If you have a passion for drama, dance, poetry, or other creative arts, we invite you to join the Creative Ministry. Click below to express your interest!</p>
          
          <a href="join-creative.html" className="btn btn-primary btn-lg me-3">
            Join This Ministry <i className="fas fa-magic ms-2"></i>
          </a>
          <a href="events.html#creative-events" className="btn btn-secondary btn-lg">
            View Creative Events <i className="fas fa-calendar-alt ms-2"></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default CreativeCommittee;