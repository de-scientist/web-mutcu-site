// src/pages/Home.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

declare const bootstrap: any;

const Home: React.FC = () => {
  useEffect(() => {
    const prayerForm = document.getElementById(
      "prayerForm",
    ) as HTMLFormElement | null;
    const newsletterForm = document.getElementById(
      "newsletterForm",
    ) as HTMLFormElement | null;

    const handlePrayerSubmit = (event: Event) => {
      event.preventDefault();
      const prayerRequestInput = document.getElementById(
        "prayerRequest",
      ) as HTMLTextAreaElement;
      const modalMessage = document.getElementById(
        "modalMessage",
      ) as HTMLElement;
      const modalElement = document.getElementById(
        "confirmationModal",
      ) as HTMLElement;
      const confirmationModal = new bootstrap.Modal(modalElement);

      if (prayerRequestInput.value.trim() === "") {
        prayerRequestInput.classList.add("is-invalid");
        return;
      } else {
        prayerRequestInput.classList.remove("is-invalid");
      }

      console.log("Prayer Request Submitted:", {
        name: (document.getElementById("prayerName") as HTMLInputElement)
          ?.value,
        request: prayerRequestInput.value,
      });

      modalMessage.innerHTML =
        "<p>Thank you for your prayer request! Our Prayer Ministry will intercede for you.</p>";
      confirmationModal.show();
      (prayerForm as HTMLFormElement).reset();
    };

    const handleNewsletterSubmit = (event: Event) => {
      event.preventDefault();
      const newsletterEmailInput = document.getElementById(
        "newsletterEmail",
      ) as HTMLInputElement;
      const modalMessage = document.getElementById(
        "modalMessage",
      ) as HTMLElement;
      const modalElement = document.getElementById(
        "confirmationModal",
      ) as HTMLElement;
      const confirmationModal = new bootstrap.Modal(modalElement);

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(newsletterEmailInput.value.trim())) {
        newsletterEmailInput.classList.add("is-invalid");
        return;
      } else {
        newsletterEmailInput.classList.remove("is-invalid");
      }

      console.log("Newsletter Signup Email:", newsletterEmailInput.value);

      modalMessage.innerHTML =
        "<p>Thank you for subscribing to our newsletter! You'll receive our latest updates directly in your inbox.</p>";
      confirmationModal.show();
      (newsletterForm as HTMLFormElement).reset();
    };

    if (prayerForm) {
      prayerForm.addEventListener("submit", handlePrayerSubmit);
    }
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", handleNewsletterSubmit);
    }

    return () => {
      if (prayerForm) {
        prayerForm.removeEventListener("submit", handlePrayerSubmit);
      }
      if (newsletterForm) {
        newsletterForm.removeEventListener("submit", handleNewsletterSubmit);
      }
    };
  }, []);

  return (
    <>
      {/* Hero Section with Slideshow */}
      <section className="hero-section">
        <div
          id="heroCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div
                className="hero-bg"
                style={{
                  backgroundImage:
                    "url('/assets/images/Lumii_20241023_192938507.jpg')",
                }}
              ></div>
              <div className="hero-overlay"></div>
              <div
                className="hero-content text-center text-white"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h1
                  className="display-3 mb-4"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  Inspire Love, Hope &amp; Godliness
                </h1>
                <p
                  className="lead mb-5"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  Join MUTCU to grow in faith, fellowship, and service at
                  Murang’a University of Technology.
                </p>
                <div data-aos="zoom-in" data-aos-delay="600">
                  <Link to="/contact" className="btn btn-primary btn-lg me-3">
                    Join Us <i className="fas fa-hand-point-right ms-2"></i>
                  </Link>
                  <Link to="/resources" className="btn btn-secondary btn-lg">
                    Watch Live <i className="fas fa-play-circle ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div
                className="hero-bg"
                style={{
                  backgroundImage: "url('/assets/images/church2.jpg')",
                }}
              ></div>
              <div className="hero-overlay"></div>
              <div
                className="hero-content text-center text-white"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h1
                  className="display-3 mb-4"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  We Are One, We Are MUTCU
                </h1>
                <p
                  className="lead mb-5"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  A family united in Christ, reaching out to transform lives
                  within and beyond.
                </p>
                <div data-aos="zoom-in" data-aos-delay="600">
                  <Link
                    to="/ministries"
                    className="btn btn-primary btn-lg me-3"
                  >
                    Explore Ministries <i className="fas fa-users-cog ms-2"></i>
                  </Link>
                  <Link to="/events" className="btn btn-secondary btn-lg">
                    Join an Event <i className="fas fa-calendar-alt ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <div
                className="hero-bg"
                style={{
                  backgroundImage: "url('/assets/images/church3.jpg')",
                }}
              ></div>
              <div className="hero-overlay"></div>
              <div
                className="hero-content text-center text-white"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h1
                  className="display-3 mb-4"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  Cultivating Christ-Centeredness
                </h1>
                <p
                  className="lead mb-5"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  Our vision is to be a model Christian Union impacting society.
                </p>
                <div data-aos="zoom-in" data-aos-delay="600">
                  <Link to="/about" className="btn btn-primary btn-lg me-3">
                    Our Vision <i className="fas fa-eye ms-2"></i>
                  </Link>
                  <Link to="/gallery" className="btn btn-secondary btn-lg">
                    View Gallery <i className="fas fa-images ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
            aria-label="Previous slide"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
            aria-label="Next slide"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* About MUTCU Section */}
      <section className="about-section py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title text-center">About MUTCU</h2>
          <p className="text-center lead mb-5">
            Murang’a University of Technology Christian Union (MUTCU) is a
            lively, student-led society in MUT. We are affiliated with
            FOCUS-Kenya, dedicated to inspiring love, hope, and godliness
            through discipleship, evangelism, mission work, and leadership
            development.
          </p>
          <div className="row align-items-center">
            <div
              className="col-lg-6 mb-4 mb-lg-0 order-lg-1 order-2"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h3 className="section-subtitle">Our Mission</h3>
              <p>
                To raise a family well-equipped in all aspects of life,
                exemplary to Jesus Christ, by encouraging unity as one body of
                Christ and reaching out to non-believers within and beyond.
              </p>
              <h3 className="section-subtitle mt-4">Our Vision</h3>
              <p>
                To be a model Christian Union cultivating Christ-centeredness
                among members to impact society.
              </p>
              <Link
                to="/about"
                className="btn btn-primary mt-3"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                Learn More About Us <i className="fas fa-info-circle ms-2"></i>
              </Link>
            </div>
            <div
              className="col-lg-6 order-lg-2 order-1 text-center"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <img
                src="/assets/images/prayer1.jpg"
                alt="MUTCU Community"
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>
          </div>
          <div className="row mt-5">
            <div
              className="col-12 text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3 className="section-subtitle">Doctrinal Basis</h3>
              <p className="text-muted">
                The Union's beliefs are based on the fundamental truths of
                Christianity as outlined in its constitution. This includes the
                unity of the Trinity, the sovereignty of God in creation and
                redemption, the divine inspiration and supreme authority of the
                Holy Scripture, the universal sinfulness of man, redemption
                solely through the sacrificial death of Jesus Christ, His bodily
                resurrection and ascension, and the sanctifying work of the Holy
                Spirit in every believer. This shared doctrinal foundation
                ensures unity in belief and purpose across all of MUTCU's
                diverse activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values-section py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title text-center text-white">
            Our Core Values
          </h2>
          <p className="text-center lead mb-5 text-white-50">
            Rooted in faith and community, our values guide everything we do.
          </p>
          <div className="row justify-content-center">
            {/* Faith */}
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="value-card text-center p-4 rounded-3 shadow-sm">
                <i className="fas fa-cross feature-icon mb-3"></i>
                <h4 className="value-title">Faith</h4>
                <p>
                  Rooted in the Bible and a personal relationship with Jesus
                  Christ, expressed through prayer, worship, and in-depth Bible
                  study.
                </p>
              </div>
            </div>
            {/* Love */}
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="value-card text-center p-4 rounded-3 shadow-sm">
                <i className="fas fa-heart feature-icon mb-3"></i>
                <h4 className="value-title">Love</h4>
                <p>
                  Demonstrating God’s unconditional love through genuine
                  fellowship and a welcoming heart for all, as we are a "home
                  away from home".
                </p>
              </div>
            </div>
            {/* Hope */}
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="value-card text-center p-4 rounded-3 shadow-sm">
                <i className="fas fa-lightbulb feature-icon mb-3"></i>
                <h4 className="value-title">Hope</h4>
                <p>
                  Inspiring our community through positive words, encouraging
                  actions, and unwavering faith in a world crambling with
                  uncertainities.
                </p>
              </div>
            </div>
            {/* Godliness */}
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="value-card text-center p-4 rounded-3 shadow-sm">
                <i className="fas fa-church feature-icon mb-3"></i>
                <h4 className="value-title">Godliness</h4>
                <p>
                  A commitment to striving for lives that honor and glorify God
                  in all things, reflected in both personal conduct and
                  collective activities.
                </p>
              </div>
            </div>
            {/* Community */}
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <div className="value-card text-center p-4 rounded-3 shadow-sm">
                <i className="fas fa-users feature-icon mb-3"></i>
                <h4 className="value-title">Community</h4>
                <p>
                  Dedicated to building a strong sense of belonging and mutual
                  support among members, where everyone feels valued and
                  connected.
                </p>
              </div>
            </div>
            {/* Service */}
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="value-card text-center p-4 rounded-3 shadow-sm">
                <i className="fas fa-hand-holding-heart feature-icon mb-3"></i>
                <h4 className="value-title">Service</h4>
                <p>
                  A core belief in putting faith into action by actively
                  reaching out to serve the practical and spiritual needs of
                  others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Preview */}
      <section className="ministries-section py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title text-center">Our Ministries</h2>
          <p className="text-center lead mb-5">
            Join a ministry to grow in faith and serve others.
          </p>
          <div className="row justify-content-center">
            {/* Music Ministry */}
            <div
              className="col-md-6 col-lg-3 mb-4"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="card ministry-card h-100 shadow-sm">
                <img
                  src="/assets/images/music1.jpg"
                  className="card-img-top"
                  alt="Music Ministry"
                />
                <div className="card-body text-center">
                  <i className="fas fa-music feature-icon mb-2"></i>
                  <h4 className="card-title">Music Ministry</h4>
                  <p className="card-text">
                    Leading and ministering worship through Choir, Band,
                    Instrumentalism and Praise &amp; Worship.
                  </p>
                  <Link
                    to="/ministries"
                    className="btn btn-primary btn-sm mt-2"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            {/* Bible Study & Discipleship */}
            <div
              className="col-md-6 col-lg-3 mb-4"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="card ministry-card h-100 shadow-sm">
                <img
                  src="/assets/images/bs1.jpg"
                  className="card-img-top"
                  alt="Bible Study & Discipleship"
                />
                <div className="card-body text-center">
                  <i className="fas fa-book-open feature-icon mb-2"></i>
                  <h4 className="card-title">Bible Study &amp; Discipleship</h4>
                  <p className="card-text">
                    Deepening faith through small groups- Bible Study, nurturing
                    classes for new believers, and resourcefull training
                    programs.
                  </p>
                  <Link
                    to="/ministries"
                    className="btn btn-primary btn-sm mt-2"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            {/* Missions & Evangelism */}
            <div
              className="col-md-6 col-lg-3 mb-4"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="card ministry-card h-100 shadow-sm">
                <img
                  src="/assets/images/mission1.jpg"
                  className="card-img-top"
                  alt="Missions & Evangelism"
                />
                <div className="card-body text-center">
                  <i className="fas fa-globe feature-icon mb-2"></i>
                  <h4 className="card-title">Missions &amp; Evangelism</h4>
                  <p className="card-text">
                    Sharing the Gospel through campus outreach, annual missions,
                    and hope ministry visits to children homes, prisons and
                    hospitals.
                  </p>
                  <Link
                    to="/ministries"
                    className="btn btn-primary btn-sm mt-2"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            {/* Creative Ministry */}
            <div
              className="col-md-6 col-lg-3 mb-4"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="card ministry-card h-100 shadow-sm">
                <img
                  src="/assets/images/dance3.jpg"
                  className="card-img-top"
                  alt="Creative Ministry"
                />
                <div className="card-body text-center">
                  <i className="fas fa-paint-brush feature-icon mb-2"></i>
                  <h4 className="card-title">Creative Ministry</h4>
                  <p className="card-text">
                    Expressing faith through drama, dance, spoken word,modelling
                    and other artistic talents.
                  </p>
                  <Link
                    to="/ministries"
                    className="btn btn-primary btn-sm mt-2"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="text-center mt-4"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <Link to="/ministries" className="btn btn-secondary btn-lg">
              View All Ministries <i className="fas fa-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="events-section py-5 bg-light" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title text-center">Upcoming Events</h2>
          <p className="text-center lead mb-5">
            Join us for worship, fellowship, and outreach!
          </p>
          <div className="row justify-content-center">
            {/* Event 1 */}
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="card event-card h-100 shadow-sm">
                <img
                  src="/assets/images/church1.jpg"
                  className="card-img-top"
                  alt="Prayer Kesha"
                />
                <div className="card-body">
                  <h4 className="card-title">Prayer Kesha</h4>
                  <p className="card-text">
                    <i className="far fa-calendar-alt me-2"></i>
                    <strong>Date:</strong> September 26, 2025
                  </p>
                  <p className="card-text">
                    <i className="far fa-clock me-2"></i>
                    <strong>Time:</strong> 7:00 PM - 9:30 PM
                  </p>
                  <p className="card-text">
                    Join us for a night of intercession and spiritual revival.
                  </p>
                  <Link to="/events" className="btn btn-primary btn-sm mt-2">
                    Details &amp; RSVP
                  </Link>
                </div>
              </div>
            </div>
            {/* Event 2 */}
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="card event-card h-100 shadow-sm">
                <img
                  src="/assets/images/Dance1.jpg"
                  className="card-img-top"
                  alt="Praise Fest"
                />
                <div className="card-body">
                  <h4 className="card-title">Praise Fest</h4>
                  <p className="card-text">
                    <i className="far fa-calendar-alt me-2"></i>
                    <strong>Date:</strong> November 7, 2025
                  </p>
                  <p className="card-text">
                    <i className="far fa-clock me-2"></i>
                    <strong>Time:</strong> 7:00 PM - 9:30 PM
                  </p>
                  <p className="card-text">
                    Celebrate our God through our Music Ministry in a lively
                    evening of praise and worship.
                  </p>
                  <Link to="/events" className="btn btn-primary btn-sm mt-2">
                    Details &amp; RSVP
                  </Link>
                </div>
              </div>
            </div>
            {/* Event 3 */}
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="card event-card h-100 shadow-sm">
                <img
                  src="/assets/images/final poster.png"
                  className="card-img-top"
                  alt="Creative Night"
                />
                <div className="card-body">
                  <h4 className="card-title">Creative Night </h4>
                  <p className="card-text">
                    <i className="far fa-calendar-alt me-2"></i>
                    <strong>Date:</strong> October 10, 2025
                  </p>
                  <p className="card-text">
                    <i className="far fa-clock me-2"></i>
                    <strong>Time:</strong> 8:00 PM - 5:30 AM
                  </p>
                  <p className="card-text">
                    Experience a night full of creativity on the theme Ashes to
                    Beauty though special ministrations and performance by our
                    Creative Arts Ministry (CREAM).
                  </p>
                  <Link to="/events" className="btn btn-primary btn-sm mt-2">
                    Details &amp; RSVP
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="text-center mt-4"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <Link to="/events" className="btn btn-secondary btn-lg">
              View All Events <i className="fas fa-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Prayer Request Section */}
      <section className="prayer-section py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title text-center">Need Prayers?</h2>
          <p className="text-center lead mb-5">
            Our Prayer Ministry is here to support you in faith and
            intercession. Submit your requests confidentially.
          </p>
          <div className="row justify-content-center">
            <div
              className="col-md-8 col-lg-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <form id="prayerForm" className="p-4 rounded-3 shadow-lg">
                <div className="mb-4">
                  <label htmlFor="prayerName" className="form-label">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="prayerName"
                    placeholder="Enter your name"
                    aria-describedby="prayerNameHelp"
                  />
                  <div id="prayerNameHelp" className="form-text">
                    You may submit anonymously if preferred.
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="prayerRequest" className="form-label">
                    Prayer Request <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    id="prayerRequest"
                    rows={6}
                    placeholder="Share your prayer request here..."
                    required
                    aria-describedby="prayerRequestError"
                  ></textarea>
                  <div id="prayerRequestError" className="invalid-feedback">
                    Please enter your prayer request.
                  </div>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Submit Request <i className="fas fa-paper-plane ms-2"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title text-center">What Our Members Say</h2>
          <p className="text-center lead mb-5 text-50">
            Hear from our Members about their MUTCU experience.
          </p>
          <div
            id="testimonialCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="7000"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div
                  className="testimonial-card mx-auto text-center p-4 rounded-3 shadow-sm"
                  data-aos="zoom-in"
                >
                  <i className="fas fa-quote-left fa-2x mb-3 text-orange"></i>
                  <p className="lead">
                    “MUTCU has been my family away from home. The fellowship and
                    discipleship have deepened my faith and helped me navigate
                    university life.”
                  </p>
                  <p className="mt-4">
                    <strong>
                      – Prudence Chepkurui, Computer Science, 4th Year
                    </strong>
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div
                  className="testimonial-card mx-auto text-center p-4 rounded-3 shadow-sm"
                  data-aos="zoom-in"
                >
                  <i className="fas fa-quote-left fa-2x mb-3 text-orange"></i>
                  <p className="lead">
                    “The Music Ministry has transformed my worship, teaching me
                    to serve with excellence and passion. It's truly inspiring.”
                  </p>
                  <p className="mt-4">
                    <strong>
                      – Joseph Mbogo, Electrical Engineering, 2nd Year
                    </strong>
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div
                  className="testimonial-card mx-auto text-center p-4 rounded-3 shadow-sm"
                  data-aos="zoom-in"
                >
                  <i className="fas fa-quote-left fa-2x mb-3 text-orange"></i>
                  <p className="lead">
                    “The Missions and Evangelism docket showed me how God uses
                    ordinary students to bring hope and transformation to
                    communities. It was a life-changing experience.”
                  </p>
                  <p className="mt-4">
                    <strong>– Grace Akinyi, Medical Lab, 2nd Year</strong>
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="prev"
              aria-label="Previous testimonial"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
              aria-label="Next testimonial"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="gallery-section py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title text-center">Our Gallery</h2>
          <p className="text-center lead mb-5">
            Moments from our fellowship, events, and outreach activities.
          </p>
          <div className="row justify-content-center">
            {/* Item 1 */}
            <div
              className="col-md-6 col-lg-3 mb-4"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <Link
                to="/gallery"
                className="gallery-item d-block rounded shadow-sm overflow-hidden"
              >
                <img
                  src="/assets/images/music1.jpg"
                  className="img-fluid"
                  alt="Worship Service"
                />
                <div className="gallery-overlay">
                  <span className="gallery-text">
                    <i className="fas fa-search-plus"></i> Worship Service
                  </span>
                </div>
              </Link>
            </div>
            {/* Item 2 */}
            <div
              className="col-md-6 col-lg-3 mb-4"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <Link
                to="/gallery"
                className="gallery-item d-block rounded shadow-sm overflow-hidden"
              >
                <img
                  src="/assets/images/mission1.jpg"
                  className="img-fluid"
                  alt="Prison Outreach"
                />
                <div className="gallery-overlay">
                  <span className="gallery-text">
                    <i className="fas fa-search-plus"></i> Evangelism
                  </span>
                </div>
              </Link>
            </div>
            {/* Item 3 */}
            <div
              className="col-md-6 col-lg-3 mb-4"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <Link
                to="/gallery"
                className="gallery-item d-block rounded shadow-sm overflow-hidden"
              >
                <img
                  src="/assets/images/film1.jpg"
                  className="img-fluid"
                  alt="Creative Night"
                />
                <div className="gallery-overlay">
                  <span className="gallery-text">
                    <i className="fas fa-search-plus"></i> Creative Night
                  </span>
                </div>
              </Link>
            </div>
            {/* Item 4 */}
            <div
              className="col-md-6 col-lg-3 mb-4"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <Link
                to="/gallery"
                className="gallery-item d-block rounded shadow-sm overflow-hidden"
              >
                <img
                  src="/assets/images/bs1.jpg"
                  className="img-fluid"
                  alt="Bible Study"
                />
                <div className="gallery-overlay">
                  <span className="gallery-text">
                    <i className="fas fa-search-plus"></i> Bible Study
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div
            className="text-center mt-4"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <Link to="/gallery" className="btn btn-secondary btn-lg">
              View Full Gallery <i className="fas fa-images ms-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section
        className="newsletter-section py-5 bg-gradient"
        data-aos="fade-up"
      >
        <div className="container">
          <h2 className="section-title text-center text">Stay Connected</h2>
          <p className="text-center lead mb-5 text-50">
            Subscribe to our newsletter for updates on events, devotionals, and
            ministry opportunities.
          </p>
          <div className="row justify-content-center">
            <div
              className="col-md-8 col-lg-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <form id="newsletterForm" className="p-4 rounded-3 shadow-lg">
                <div className="mb-4">
                  <label htmlFor="newsletterEmail" className="form-label text">
                    Email Address <span className="text-warning">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="newsletterEmail"
                    placeholder="your.email@example.com"
                    required
                    aria-describedby="newsletterEmailError"
                  />
                  <div id="newsletterEmailError" className="invalid-feedback">
                    Please enter a valid email address.
                  </div>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Subscribe <i className="fas fa-envelope-open-text ms-2"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      <div
        className="modal fade"
        id="confirmationModal"
        tabIndex={-1}
        aria-labelledby="confirmationModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-3 shadow-lg">
            <div className="modal-header bg-primary-dark text-white border-0 rounded-top-3">
              <h5 className="modal-title" id="confirmationModalLabel">
                Thank You!
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-4 text-center">
              <i className="fas fa-check-circle text-success fa-4x mb-3 animate-pop-in"></i>
              <p className="lead" id="modalMessage">
                Your submission has been received. We’ll get back to you soon!
                Have a blessed time ahead.
              </p>
            </div>
            <div className="modal-footer border-0 rounded-bottom-3">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
