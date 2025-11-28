import React from "react";

const TechnicalCommittee: React.FC = () => {
  return (
    <>
      <section
        className="page-hero-section d-flex align-items-center text-center text-white"
        style={{ backgroundImage: "url('/assets/images/JOSEPH.jpg')" }}
      >
        <div className="hero-overlay"></div>
        <div className="container">
          <h1 className="display-3 mb-3">Technical Department</h1>
          <p className="lead">
            Providing Technical Excellence for Worship and Ministry
          </p>
        </div>
      </section>

     
      <section className="ministry-details py-5">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img 
                src="/assets/images/JOSEPH.jpg" 
                alt="Joseph Mbogo" 
                className="img-fluid rounded-circle" 
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
              <h3 className="mt-3">Joseph Mbogo</h3>
              <p className="text-muted">Technical Coordinator</p>
            </div>
            <div className="col-md-8">
              <h2 className="section-title">About the Technical Ministry</h2>
              <p>The Technical Ministry of MUTCU oversees all technical and logistical aspects to ensure seamless operations during services and events. Comprising sub-ministries such as Ushering, Sound, Digital Ministry (including livestreaming and social media management), and MBBC/Publicity (posters and event promotion), this ministry manages the Union's public image and delivers high-quality technical support.</p>
              <p>Our goal is to enhance the worship experience through innovative technology, excellent service, and effective communication, supporting MUTCU's mission of inspiring love, hope, and godliness.</p>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-12">
              <h2 className="section-title">Key Roles & Activities</h2>
              <p>The Technical Ministry supports MUTCU through various functions as outlined in the constitution and policies.</p>
              <ul className="list-unstyled">
                <li className="mb-3"><i className="fas fa-microphone-alt me-2 text-primary-light"></i> Managing sound systems and equipment for all Union meetings and events.</li>
                <li className="mb-3"><i className="fas fa-video me-2 text-primary-light"></i> Handling livestreaming of weekly fellowships, Sunday services, and special events.</li>
                <li className="mb-3"><i className="fas fa-bullhorn me-2 text-primary-light"></i> Creating and distributing publicity materials, including posters and social media promotions.</li>
                <li className="mb-3"><i className="fas fa-users me-2 text-primary-light"></i> Coordinating ushering teams to create a welcoming and organized environment during gatherings.</li>
                <li className="mb-3"><i className="fas fa-tools me-2 text-primary-light"></i> Maintaining, storing, and ensuring the safety of all technical equipment.</li>
                <li className="mb-3"><i className="fas fa-chalkboard-teacher me-2 text-primary-light"></i> Training new members in technical skills and ministry operations.</li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-center">
              <h2 className="section-title">Join Our Technical Ministry!</h2>
              <p>If you have a passion for technology, media, or service, we invite you to join the Technical Ministry. Click below to express your interest!</p>
              <a href="join-technical.html" className="btn btn-primary me-3">Join This Ministry</a>
              <a href="events.html#technical-events" className="btn btn-secondary">View Technical Events</a>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default TechnicalCommittee;