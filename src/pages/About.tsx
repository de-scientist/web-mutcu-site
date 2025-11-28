// src/pages/About.tsx
import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <>
      {/* Page Hero Section */}
      <section
        className="page-hero-section d-flex align-items-center text-center text-white"
        style={{ backgroundImage: "url('/assets/images/church2.jpg')" }}
      >
        <div className="hero-overlay"></div>
        <div
          className="container position-relative"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="display-3 mb-3">About MUTCU</h1>
          <p className="lead">Inspiring Love, Hope &amp; Godliness </p>
        </div>
      </section>

      {/* Introduction and Overview */}
      <section className="py-5 introduction-section">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-7 mb-4 mb-lg-0"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h2 className="section-title">Who We Are</h2>
              <p className="lead">
                The Murang&apos;a University of Technology Christian Union
                (MUTCU) is a lively, student-led religious organization
                operating within the university. We are a non-denominational,
                non-political and non-profit making society committed to
                building in spiritual growth, nurturing leadership, and
                impacting society with the Gospel of Jesus Christ.
              </p>
              <p>
                As a proud member of the{" "}
                <a
                  href="https://focuskenya.org/"
                  target="_blank"
                  rel="noreferrer "
                  className="text-decoration-none mutcu-link-orange"
                >
                  Fellowship of Christian Unions - Kenya (FOCUS-KENYA)
                </a>
                , MUTCU benefits from a national network of support and
                accountability. This affiliation ensures our activities are
                theologically sound, well-guided, and contribute to broader
                Christian initiatives. Our identity and all functions are
                meticulously guided by a comprehensive constitution and
                detailed operational policies for each ministry.
              </p>
            </div>
            <div
              className="col-lg-5 text-center"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <img
                src="/assets/images/Full Logo.png"
                alt="MUTCU Community"
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-5 bg-light principles-section">
        <div className="container">
          <h2 className="section-title text-center">Our Guiding Principles</h2>
          <p className="text-center lead mb-5">
            Our motto, vision, and mission are interconnected, forming the
            bedrock of our existence.
          </p>

          <div className="row text-center">
            <div
              className="col-md-4 mb-4"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="principle-card p-4 rounded-3 shadow-sm h-100">
                <i className="fas fa-bullhorn feature-icon mb-3"></i>
                <h3 className="card-title">Our Motto</h3>
                <p className="lead-sm">
                  &quot;To Inspire Love, Hope, and Godliness.&quot;
                </p>
                <p>
                  This motto serves as our daily call to action, reminding us of
                  our core purpose in every interaction and activity.
                </p>
              </div>
            </div>

            <div
              className="col-md-4 mb-4"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="principle-card p-4 rounded-3 shadow-sm h-100">
                <i className="fas fa-eye feature-icon mb-3"></i>
                <h3 className="card-title">Our Vision</h3>
                <p className="lead-sm">
                  &quot;To be a model Christian Union cultivating
                  Christ-centeredness among members in impacting the
                  society.&quot;
                </p>
                <p>
                  Our long-term aspiration is to be an exemplary union that
                  develops deep spiritual growth and positive societal
                  influence.
                </p>
              </div>
            </div>

            <div
              className="col-md-4 mb-4"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="principle-card p-4 rounded-3 shadow-sm h-100">
                <i className="fas fa-hands-helping feature-icon mb-3"></i>
                <h3 className="card-title">Our Mission</h3>
                <p className="lead-sm">
                  &quot;To raise a family well-equipped in all aspects of life,
                  exemplary to Jesus Christ, by encouraging the existence of
                  members as one body of Christ and reaching out to
                  non-believers within and beyond.&quot;
                </p>
                <p>
                  Our mission focuses on equipping members holistically and
                  extending our reach to non-believers, embodying unity in
                  Christ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aims of the Union */}
      <section className="py-5 aims-section">
        <div className="container">
          <h2 className="section-title text-center">Aims of The Union</h2>
          <p className="text-center lead mb-5">
            MUTCU operates with clear objectives to fulfill its mission and
            vision.
          </p>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row">
                <div
                  className="col-md-6 mb-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="aim-item d-flex align-items-start p-3 rounded-3 shadow-sm h-100">
                    <i className="fas fa-book-bible aim-icon me-3 flex-shrink-0"></i>
                    <div>
                      <h4>Biblical Discipleship</h4>
                      <p>
                        To deepen members&apos; understanding of the Bible and
                        encourage practical application of its teachings in
                        their daily lives.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-md-6 mb-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="aim-item d-flex align-items-start p-3 rounded-3 shadow-sm h-100">
                    <i className="fas fa-user-plus aim-icon me-3 flex-shrink-0"></i>
                    <div>
                      <h4>Evangelism &amp; Outreach</h4>
                      <p>
                        To reach out to non-believers within the university and
                        beyond, sharing the Gospel through various initiatives.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-md-6 mb-4"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="aim-item d-flex align-items-start p-3 rounded-3 shadow-sm h-100">
                    <i className="fas fa-users-line aim-icon me-3 flex-shrink-0"></i>
                    <div>
                      <h4>Fellowship &amp; Unity</h4>
                      <p>
                        To foster a strong sense of community, encouraging
                        members to live as one body of Christ, supporting each
                        other.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-md-6 mb-4"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="aim-item d-flex align-items-start p-3 rounded-3 shadow-sm h-100">
                    <i className="fas fa-handshake aim-icon me-3 flex-shrink-0"></i>
                    <div>
                      <h4>Leadership Development</h4>
                      <p>
                        To identify, train, and equip student leaders with
                        spiritual and practical skills for effective service
                        within and outside the Union.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-md-6 mb-4"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <div className="aim-item d-flex align-items-start p-3 rounded-3 shadow-sm h-100">
                    <i className="fas fa-graduation-cap aim-icon me-3 flex-shrink-0"></i>
                    <div>
                      <h4>Academic Excellence</h4>
                      <p>
                        To encourage members to excel in their academic pursuits
                        as a testimony to God&apos;s glory and a means of
                        impacting society.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-md-6 mb-4"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <div className="aim-item d-flex align-items-start p-3 rounded-3 shadow-sm h-100">
                    <i className="fas fa-hands-holding-circle aim-icon me-3 flex-shrink-0"></i>
                    <div>
                      <h4>Social Responsibility</h4>
                      <p>
                        To engage in community service and social justice
                        initiatives, reflecting Christ&apos;s love and
                        compassion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctrinal Basis */}
      <section className="py-5 doctrinal-section text-white">
        <div className="container">
          <h2 className="section-title text-center text-white">
            Our Doctrinal Basis
          </h2>
          <p className="text-center lead mb-5 text-white-50">
            Our beliefs are founded on the fundamental truths of the Holy
            Scripture, guiding all our activities and teachings.
          </p>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div
                className="doctrinal-content p-4 rounded-3 shadow-lg"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p>
                  The Murang&apos;a University of Technology Christian Union
                  believes in and holds to the following fundamental truths:
                </p>
                <ul className="list-unstyled doctrinal-list">
                  <li
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    <i className="fas fa-check-circle me-2"></i> The unity of
                    the Father, the Son and the Holy Spirit in the Godhead.
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="300"
                  >
                    <i className="fas fa-check-circle me-2"></i> The sovereignty
                    of God in creation, revelation, redemption and final
                    judgment.
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="400"
                  >
                    <i className="fas fa-check-circle me-2"></i> The divine
                    inspiration and infallibility of the Holy Scripture as
                    originally given, and its supreme authority in all matters
                    of faith and conduct.
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="500"
                  >
                    <i className="fas fa-check-circle me-2"></i> The universal
                    sinfulness and guilt of all men since the fall, rendering
                    them subject to God’s wrath and condemnation.
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="600"
                  >
                    <i className="fas fa-check-circle me-2"></i> Redemption from
                    the guilt, penalty, dominion and pollution of sin, solely
                    through the sacrificial death (as our representative and
                    substitute) of the Lord Jesus Christ, the incarnate Son of
                    God.
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="700"
                  >
                    <i className="fas fa-check-circle me-2"></i> The bodily
                    resurrection of the Lord Jesus Christ from the dead and His
                    ascension to the right hand of God the Father.
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="800"
                  >
                    <i className="fas fa-check-circle me-2"></i> The presence
                    and power of the Holy Spirit in the work of regeneration.
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="900"
                  >
                    <i className="fas fa-check-circle me-2"></i> The
                    justification of the sinner by grace alone through faith
                    alone.
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  >
                    <i className="fas fa-check-circle me-2"></i> The indwelling
                    and work of the Holy Spirit in the believer.
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="1100"
                  >
                    <i className="fas fa-check-circle me-2"></i> The one Holy
                    Universal Church which is the Body of Christ and to which
                    all true believers belong.
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="1200"
                  >
                    <i className="fas fa-check-circle me-2"></i> The expectation
                    of the personal, visible return of the Lord Jesus Christ.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Structure & Leadership */}
      <section className="py-5 structure-section bg-light">
        <div className="container">
          <h2 className="section-title text-center">
            Organizational Structure &amp; Leadership
          </h2>
          <p className="text-center lead mb-5">
            MUTCU is a student-led organization with a robust structure ensuring
            effective governance and ministry.
          </p>

          <div className="row justify-content-center">
            <div className="col-lg-8" data-aos="fade-up">
              <div className="structure-overview p-4 rounded-3 shadow-lg mb-4">
                <h3 className="section-subtitle text-center mb-4">
                  Executive Council
                </h3>
                <p>
                  The Executive Council is the highest governing leadership body
                  of MUTCU, responsible for overseeing all Union activities and
                  ensuring adherence to the constitution and policies. It
                  comprises appointed student leaders who serve diligently to
                  guide the Union&apos;s spiritual and administrative affairs.
                </p>
                <p>
                  New leaders are nominated annually through a democratic and
                  spiritually led process managed by an Electoral Commission of
                  final-year students, involving recommendations from the
                  general membership. A formal orientation and handing-over
                  process ensures a smooth transition of responsibilities,
                  fostering mentorship and continuity of institutional
                  knowledge.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div
              className="col-md-6 mb-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="structure-card p-4 rounded-3 shadow-sm h-100">
                <i className="fas fa-sitemap feature-icon mb-3"></i>
                <h4 className="card-title">Committees </h4>
                <p>
                  The Executive Council delegates responsibilities to various
                  committees , each focusing on specific areas of ministry such
                  as Prayer, Music, Missions &amp; Evangelism, Creative Arts,
                  Technical, and Welfare. Each ministry is managed by its
                  respective committee Coordinator, ensuring focused and
                  efficient operations.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 mb-4"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="structure-card p-4 rounded-3 shadow-sm h-100">
                <i className="fas fa-users-gear feature-icon mb-3"></i>
                <h4 className="card-title">Operational Policies</h4>
                <p>
                  All Union functions are meticulously guided by detailed
                  operational policies for each ministry. These policies ensure
                  accountability, transparency, and consistency in all
                  activities, from financial procedures managed by the Treasury
                  to asset management and event organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Committee */}
      <section className="py-5 executive-committee-section">
        <div className="container">
          <h2 className="section-title text-center">
            Meet Our Executive Committee
          </h2>
          <p className="text-center lead mb-5">
            Leading MUTCU with dedication and vision for the 2024/2025 Spiritual
            Year.
          </p>

          <div className="row justify-content-center">
            {/* Chairman */}
            <div
              className="col-6 col-md-4 col-lg-3 mb-4"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <Link
                to="/committees/chairman"
                className="executive-member-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100"
              >
                <img
                  src="/assets/images/EZEKIEL.jpg"
                  alt="Ezekiel Thaara"
                  className="img-fluid rounded-circle mb-3 border border-3 border-orange"
                />
                <h4 className="member-name">Ezekiel Thaara</h4>
                <p className="member-role">Chairman</p>
              </Link>
            </div>
            {/* 1st Vice Chair */}
            <div
              className="col-6 col-md-4 col-lg-3 mb-4"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <Link
                to="/committees/vice-chair1"
                className="executive-member-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100"
              >
                <img
                  src="/assets/images/JES.jpg"
                  alt="Jesca Kinya"
                  className="img-fluid rounded-circle mb-3 border border-3 border-navy"
                />
                <h4 className="member-name">Jesca Kinya</h4>
                <p className="member-role">1st Vice Chair</p>
              </Link>
            </div>
            {/* 2nd Vice Chair */}
            <div
              className="col-6 col-md-4 col-lg-3 mb-4"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <Link
                to="/committees/vice-chair2"
                className="executive-member-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100"
              >
                <img
                  src="/assets/images/MARTIN.jpg"
                  alt="Martin Gitau"
                  className="img-fluid rounded-circle mb-3 border border-3 border-orange"
                />
                <h4 className="member-name">Martin Gitau</h4>
                <p className="member-role">2nd Vice Chair</p>
              </Link>
            </div>
            {/* Secretary */}
            <div
              className="col-6 col-md-4 col-lg-3 mb-4"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <Link
                to="/committees/secretary"
                className="executive-member-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100"
              >
                <img
                  src="/assets/images/GRACE.jpg"
                  alt="Grace Kanyiri"
                  className="img-fluid rounded-circle mb-3 border border-3 border-navy"
                />
                <h4 className="member-name">Grace Kanyiri</h4>
                <p className="member-role">Secretary</p>
              </Link>
            </div>
            {/* Vice Secretary */}
            <div
              className="col-6 col-md-4 col-lg-3 mb-4"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <Link
                to="/committees/vice-secretary"
                className="executive-member-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100"
              >
                <img
                  src="/assets/images/DAISY.jpg"
                  alt="Daisy Mutheu"
                  className="img-fluid rounded-circle mb-3 border border-3 border-orange"
                />
                <h4 className="member-name">Daisy Mutheu</h4>
                <p className="member-role">Vice Secretary</p>
              </Link>
            </div>
            {/* Treasurer */}
            <div
              className="col-6 col-md-4 col-lg-3 mb-4"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <Link
                to="/committees/treasurer"
                className="executive-member-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100"
              >
                <img
                  src="/assets/images/JOY.jpg"
                  alt="Joy Karimi"
                  className="img-fluid rounded-circle mb-3 border border-3 border-navy"
                />
                <h4 className="member-name">Joy Karimi</h4>
                <p className="member-role">Treasurer</p>
              </Link>
            </div>
            {/* Bible Study & Discipleship */}
            <div
              className="col-6 col-md-4 col-lg-3 mb-4"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <Link
                to="/committees/bible-study"
                className="executive-member-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100"
              >
                <img
                  src="/assets/images/PURITY.jpg"
                  alt="Purity Njeri"
                  className="img-fluid rounded-circle mb-3 border border-3 border-orange"
                />
                <h4 className="member-name">Purity Njeri</h4>
                <p className="member-role">
                  Bible Study &amp; Discipleship Coordinator
                </p>
              </Link>
            </div>
            {/* Prayer Coordinator */}
            <div
              className="col-6 col-md-4 col-lg-3 mb-4"
              data-aos="zoom-in"
              data-aos-delay="800"
            >
              <Link
                to="/committees/prayer"
                className="executive-member-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100"
              >
                <img
                  src="/assets/images/PRAYER.jpg"
                  alt="Roy Ndege"
                  className="img-fluid rounded-circle mb-3 border border-3 border-navy"
                />
                <h4 className="member-name">Roy Ndege</h4>
                <p className="member-role">Prayer Coordinator</p>
              </Link>
            </div>
            {/* Missions & Evangelism */}
            <div
              className="col-6 col-md-4 col-lg-3 mb-4"
              data-aos="zoom-in"
              data-aos-delay="900"
            >
              <Link
                to="/committees/missions"
                className="executive-member-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100"
              >
                <img
                  src="/assets/images/YUSUF.jpg"
                  alt="Yusuf Muchiri"
                  className="img-fluid rounded-circle mb-3 border border-3 border-orange"
                />
                <h4 className="member-name">Yusuf Muchiri</h4>
                <p className="member-role">Missions &amp; Evangelism Coordinator</p>
              </Link>
            </div>
            {/* Music Coordinator */}
            <div
              className="col-6 col-md-4 col-lg-3 mb-4"
              data-aos="zoom-in"
              data-aos-delay="1000"
            >
              <Link
                to="/committees/music"
                className="executive-member-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100"
              >
                <img
                  src="/assets/images/JABEZ.jpg"
                  alt="Jabez Ayugu"
                  className="img-fluid rounded-circle mb-3 border border-3 border-navy"
                />
                <h4 className="member-name">Jabez Ayugu</h4>
                <p className="member-role">Music Coordinator</p>
              </Link>
            </div>
            {/* Technical Coordinator */}
            <div
              className="col-6 col-md-4 col-lg-3 mb-4"
              data-aos="zoom-in"
              data-aos-delay="1100"
            >
              <Link
                to="/committees/technical"
                className="executive-member-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100"
              >
                <img
                  src="/assets/images/JOSEPH.jpg"
                  alt="Joseph Mbogo"
                  className="img-fluid rounded-circle mb-3 border border-3 border-orange"
                />
                <h4 className="member-name">Joseph Mbogo</h4>
                <p className="member-role">Technical Coordinator</p>
              </Link>
            </div>
            {/* Creative Ministry Coordinator */}
            <div
              className="col-6 col-md-4 col-lg-3 mb-4"
              data-aos="zoom-in"
              data-aos-delay="1200"
            >
              <Link
                to="/committees/creative"
                className="executive-member-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100"
              >
                <img
                  src="/assets/images/Ingwee.JPG"
                  alt="Brian Mwaura"
                  className="img-fluid rounded-circle mb-3 border border-3 border-navy"
                />
                <h4 className="member-name">Brian Ingwee</h4>
                <p className="member-role">Creative Ministry Coordinator</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join MUTCU */}
      <section className="py-5 join-section text-white">
        <div className="container">
          <h2 className="section-title text-center text-white">
            Why Join MUTCU?
          </h2>
          <p className="text-center lead mb-5 text-white-50">
            Become part of a thriving community dedicated to spiritual growth
            and impactful service.
          </p>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row">
                <div
                  className="col-md-4 mb-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="join-benefit-card text-center p-4 rounded-3 shadow-sm h-100">
                    <i className="fas fa-hands-clapping feature-icon mb-3"></i>
                    <h4 className="card-title">lively Fellowship</h4>
                    <p>
                      Experience genuine Christian fellowship and build lasting
                      friendships in a supportive environment.
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-4 mb-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="join-benefit-card text-center p-4 rounded-3 shadow-sm h-100">
                    <i className="fas fa-brain feature-icon mb-3"></i>
                    <h4 className="card-title">Spiritual Growth</h4>
                    <p>
                      Deepen your faith through Bible studies, discipleship
                      programs, and powerful worship experiences.
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-4 mb-4"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="join-benefit-card text-center p-4 rounded-3 shadow-sm h-100">
                    <i className="fas fa-person-digging feature-icon mb-3"></i>
                    <h4 className="card-title">Service Opportunities</h4>
                    <p>
                      Engage in meaningful ministry and outreach, making a
                      tangible difference in the university and beyond.
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-4 mb-4"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="join-benefit-card text-center p-4 rounded-3 shadow-sm h-100">
                    <i className="fas fa-user-graduate feature-icon mb-3"></i>
                    <h4 className="card-title">Leadership Development</h4>
                    <p>
                      Develop essential leadership skills through various roles
                      and mentorship opportunities.
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-4 mb-4"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <div className="join-benefit-card text-center p-4 rounded-3 shadow-sm h-100">
                    <i className="fas fa-hand-holding-dollar feature-icon mb-3"></i>
                    <h4 className="card-title">Welfare Support</h4>
                    <p>
                      Receive and offer support through our Welfare Committee, a
                      tangible expression of community care.
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-4 mb-4"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <div className="join-benefit-card text-center p-4 rounded-3 shadow-sm h-100">
                    <i className="fas fa-lightbulb feature-icon mb-3"></i>
                    <h4 className="card-title">Impactful Presence</h4>
                    <p>
                      Contribute to a Christ-centered environment that impacts
                      the entire university and wider society.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="text-center mt-5"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            <Link
              to="/contact"
              className="btn btn-primary btn-lg me-3"
            >
              Join MUTCU Today!{" "}
              <i className="fas fa-user-plus ms-2"></i>
            </Link>
            <Link
              to="/ministries"
              className="btn btn-secondary btn-lg"
            >
              Explore Ministries{" "}
              <i className="fas fa-users-cog ms-2"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;