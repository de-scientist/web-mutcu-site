// src/pages/Ministries.tsx
import React from "react";
import { Link } from "react-router-dom";

const Ministries: React.FC = () => {
  return (
    <>
      {/* Page Hero Section */}
      <section
        className="page-hero-section d-flex align-items-center text-center text-white"
        style={{ backgroundImage: "url('/assets/images/mbbc1.jpg')" }}
      >
        <div className="hero-overlay"></div>
        <div
          className="container position-relative"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="display-3 mb-3">Our Ministries</h1>
          <p className="lead">
            Where Faith Becomes Action: Serve, Grow, Impact
          </p>
        </div>
      </section>

      {/* Ministries Overview Section */}
      <section className="py-5 ministries-overview-section">
        <div className="container">
          <h2 className="section-title text-center">
            Explore Our Diverse Ministries
          </h2>
          <p className="text-center lead mb-5">
            MUTCU&apos;s ministries are the heartbeat of our Union, providing
            avenues for spiritual growth, service, and community impact. Each
            ministry operates under a dedicated committee, ensuring focused and
            effective work in alignment with our motto, vision, and mission.
          </p>

          <div className="row justify-content-center">
            {/* Music Ministry */}
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <Link
                to="/ministries/music-ministry"
                className="ministry-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100"
              >
                <img
                  src="/assets/images/music1.jpg"
                  alt="Music Ministry"
                  className="img-fluid rounded-top-3"
                />
                <div className="card-body">
                  <i className="fas fa-music feature-icon mb-3"></i>
                  <h4 className="card-title">Music Ministry</h4>
                  <p className="card-text">
                    Leading and ministering worship through Choir, Band,
                    Instrumentalism and Praise &amp; Wowrship.
                  </p>
                  <span className="btn btn-sm btn-outline-primary mt-3">
                    Learn More <i className="fas fa-arrow-right ms-2"></i>
                  </span>
                </div>
              </Link>
            </div>

            {/* Bible Study & Discipleship */}
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <Link
                to="/ministries/bible-study-discipleship"
                className="ministry-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100"
              >
                <img
                  src="/assets/images/bs1.jpg"
                  alt="Bible Study & Discipleship"
                  className="img-fluid rounded-top-3"
                />
                <div className="card-body">
                  <i className="fas fa-book-open feature-icon mb-3"></i>
                  <h4 className="card-title">Bible Study &amp; Discipleship</h4>
                  <p className="card-text">
                    Deepening faith through small groups, nurturing classes for
                    new believers, and intensive training programs.
                  </p>
                  <span className="btn btn-sm btn-outline-primary mt-3">
                    Learn More <i className="fas fa-arrow-right ms-2"></i>
                  </span>
                </div>
              </Link>
            </div>

            {/* Missions & Evangelism */}
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <Link
                to="/ministries/missions-evangelism"
                className="ministry-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100"
              >
                <img
                  src="/assets/images/mission1.jpg"
                  alt="Missions & Evangelism"
                  className="img-fluid rounded-top-3"
                />
                <div className="card-body">
                  <i className="fas fa-globe feature-icon mb-3"></i>
                  <h4 className="card-title">Missions &amp; Evangelism</h4>
                  <p className="card-text">
                    Sharing the Gospel through campus outreach, annual missions,
                    and hope ministry visits to prisons and hospitals.
                  </p>
                  <span className="btn btn-sm btn-outline-primary mt-3">
                    Learn More <i className="fas fa-arrow-right ms-2"></i>
                  </span>
                </div>
              </Link>
            </div>

            {/* Creative Arts Ministry (CREAM) */}
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <Link
                to="/ministries/creative-arts"
                className="ministry-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100"
              >
                <img
                  src="/assets/images/dance3.jpg"
                  alt="Creative Arts Ministry"
                  className="img-fluid rounded-top-3"
                />
                <div className="card-body">
                  <i className="fas fa-paint-brush feature-icon mb-3"></i>
                  <h4 className="card-title">Creative Arts Ministry (CREAM)</h4>
                  <p className="card-text">
                    Expressing faith through drama, dance, spoken word, and
                    other artistic talents.
                  </p>
                  <span className="btn btn-sm btn-outline-primary mt-3">
                    Learn More <i className="fas fa-arrow-right ms-2"></i>
                  </span>
                </div>
              </Link>
            </div>

            {/* Prayer Ministry */}
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <Link
                to="/ministries/prayer-ministry"
                className="ministry-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100"
              >
                <img
                  src="/assets/images/church2.jpg"
                  alt="Prayer Ministry"
                  className="img-fluid rounded-top-3"
                />
                <div className="card-body">
                  <i className="fas fa-pray feature-icon mb-3"></i>
                  <h4 className="card-title">Prayer Ministry</h4>
                  <p className="card-text">
                    Cultivating a deep culture of prayer and intercession for
                    the Union, university, and wider community.
                  </p>
                  <span className="btn btn-sm btn-outline-primary mt-3">
                    Learn More <i className="fas fa-arrow-right ms-2"></i>
                  </span>
                </div>
              </Link>
            </div>

            {/* Welfare Committee */}
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <Link
                to="/ministries/welfare-committee"
                className="ministry-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100"
              >
                <img
                  src="/assets/images/prayer1.jpg"
                  alt="Welfare Committee"
                  className="img-fluid rounded-top-3"
                />
                <div className="card-body">
                  <i className="fas fa-hand-holding-heart feature-icon mb-3"></i>
                  <h4 className="card-title">Welfare Committee</h4>
                  <p className="card-text">
                    Actively raising funds and providing support to members
                    facing financial and personal difficulties.
                  </p>
                  <span className="btn btn-sm btn-outline-primary mt-3">
                    Learn More <i className="fas fa-arrow-right ms-2"></i>
                  </span>
                </div>
              </Link>
            </div>

            {/* Hospitality Ministry */}
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <Link
                to="/ministries/hospitality-ministry"
                className="ministry-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100"
              >
                <img
                  src="/assets/images/tlp.jpg"
                  alt="Hospitality Ministry"
                  className="img-fluid rounded-top-3"
                />
                <div className="card-body">
                  <i className="fas fa-handshake-angle feature-icon mb-3"></i>
                  <h4 className="card-title">Hospitality Ministry</h4>
                  <p className="card-text">
                    Ensuring a welcoming environment for all members and
                    visitors, managing amenities and visitor care.
                  </p>
                  <span className="btn btn-sm btn-outline-primary mt-3">
                    Learn More <i className="fas fa-arrow-right ms-2"></i>
                  </span>
                </div>
              </Link>
            </div>

            {/* Technical Department */}
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="zoom-in"
              data-aos-delay="800"
            >
              <Link
                to="/ministries/technical-department"
                className="ministry-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100"
              >
                <img
                  src="/assets/images/mbbc1.jpg"
                  alt="Technical Department"
                  className="img-fluid rounded-top-3"
                />
                <div className="card-body">
                  <i className="fas fa-laptop-code feature-icon mb-3"></i>
                  <h4 className="card-title">Technical Department</h4>
                  <p className="card-text">
                    Providing essential technical support for all Union
                    activities, including sound, Publicity, Ushering and live
                    streaming.
                  </p>
                  <span className="btn btn-sm btn-outline-primary mt-3">
                    Learn More <i className="fas fa-arrow-right ms-2"></i>
                  </span>
                </div>
              </Link>
            </div>

            {/* RMC Ministry */}
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="zoom-in"
              data-aos-delay="900"
            >
              <Link
                to="/ministries/RMC"
                className="ministry-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100"
              >
                <img
                  src="/assets/images/prayer1.jpg"
                  alt="Integral Ministry"
                  className="img-fluid rounded-top-3"
                />
                <div className="card-body">
                  <i className="fas fa-lightbulb feature-icon mb-3"></i>
                  <h4 className="card-title">
                    Resource Mobilisation Commitee (RMC)
                  </h4>
                  <p className="card-text">
                    Working in conjunction with all other ministries to enhance
                    the transformative gospel through creative and innovative
                    ways of acquiring resources.
                  </p>
                  <span className="btn btn-sm btn-outline-primary mt-3">
                    Learn More <i className="fas fa-arrow-right ms-2"></i>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-5 cta-section text-white">
        <div className="container text-center" data-aos="zoom-in">
          <h2 className="section-title text-white">
            Find Your Place to Serve!
          </h2>
          <p className="lead mb-4 text-white-50">
            There&apos;s a ministry for every passion and gift. Join us in
            making a difference.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg me-3">
            Get Involved <i className="fas fa-hand-fist ms-2"></i>
          </Link>
          <Link to="/about" className="btn btn-secondary btn-lg">
            Learn About Leadership <i className="fas fa-users-gear ms-2"></i>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Ministries;
