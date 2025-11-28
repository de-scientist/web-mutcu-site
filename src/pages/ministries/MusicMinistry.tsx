// src/pages/ministries/MusicMinistry.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

declare const bootstrap: any;

const MusicMinistry: React.FC = () => {
  useEffect(() => {
    // Form submission handler for join ministry modal (mirrors music-ministry.js logic)
    const form = document.getElementById("musicMinistryJoinForm") as HTMLFormElement | null;
    const handleSubmit = (e: Event) => {
      e.preventDefault();
      const formEl = e.currentTarget as HTMLFormElement;
      if (!formEl.checkValidity()) {
        e.stopPropagation();
        formEl.classList.add("was-validated");
        return;
      }

      // Simulate submission
      console.log("Music Ministry Join Form Submitted:", {
        name: (document.getElementById("joinName") as HTMLInputElement)?.value,
        email: (document.getElementById("joinEmail") as HTMLInputElement)?.value,
        interest: (document.getElementById("joinInterest") as HTMLSelectElement)?.value,
        message: (document.getElementById("joinMessage") as HTMLTextAreaElement)?.value,
      });

      // Show confirmation message
      formEl.classList.add("d-none");
      const confirmMsg = document.getElementById("modalConfirmationMessage");
      if (confirmMsg) {
        confirmMsg.classList.remove("d-none");
      }
    };

    if (form) {
      form.addEventListener("submit", handleSubmit);
    }

    return () => {
      if (form) {
        form.removeEventListener("submit", handleSubmit);
      }
    };
  }, []);

  return (
    <>
      {/* Hero */}
      <section
        className="page-hero-section d-flex align-items-center text-center text-white"
        style={{ backgroundImage: "url('/assets/images/music1.jpg')" }}
      >
        <div className="hero-overlay"></div>
        <div
          className="container position-relative"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="display-3 mb-3">MUTCU Music Ministry</h1>
          <p className="lead">Leading Worship and Glorifying God Through Song</p>
        </div>
      </section>

      {/* Ministry Introduction */}
      <section className="py-5 ministry-intro-section">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-7 mb-4 mb-lg-0"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h2 className="section-title text-start">About the Music Ministry</h2>
              <p className="lead">
                The Music Ministry of MUTCU is dedicated to leading the Union in
                vibrant and spiritually uplifting worship experiences. Comprising
                various teams including the choir, band, instrumentalists, and
                praise and worship leaders, this ministry plays a crucial role in
                creating an atmosphere where members can connect with God through
                music and song.
              </p>
              <p>
                Our goal is to foster a heart of worship and praise among the MUTCU
                family, ensuring that all musical presentations are excellent and
                align with the Union&apos;s spiritual goals. We believe that music
                is a powerful tool for evangelism, edification, and glorifying God.
              </p>
            </div>
            <div
              className="col-lg-5 text-center"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <img
                src="/assets/images/music1.jpg"
                alt="Music Ministry Performance"
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Ministries (Musical Ensembles) */}
      <section className="py-5 bg-light sub-ministries-section">
        <div className="container">
          <h2 className="section-title text-center">Our Musical Ensembles</h2>
          <p className="text-center lead mb-5">
            Within the Music Ministry, various teams come together to lead MUTCU in
            worship and praise. Click on the images to see more!
          </p>

          <div className="row">
            {/* Choir */}
            <div
              className="col-lg-6 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="sub-ministry-card p-4 rounded-3 shadow-sm h-100">
                <div className="card-image-container mb-4">
                  <a
                    href="#"
                    className="d-block"
                    data-bs-toggle="modal"
                    data-bs-target="#imageModal1"
                  >
                    <img
                      src="/assets/images/music1.jpg"
                      alt="MUTCU Choir"
                      className="img-fluid rounded-3"
                    />
                  </a>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-users-line choir-icon me-3"></i>
                  <h3 className="card-title mb-0">Choir</h3>
                </div>
                <p>
                  The MUTCU Choir leads congregational singing and presents special
                  hymns, and contemporary worship songs. They are dedicated to vocal
                  excellence and harmonious praise, enhancing our services.
                </p>
                <h6>Activities:</h6>
                <ul>
                  <li>Weekly rehearsals for Sunday services and special events.</li>
                  <li>Learning new songs and arrangements.</li>
                  <li>
                    Performing during weekly fellowships and major Union events.
                  </li>
                </ul>
                <p className="mb-0 text-muted">
                  <i className="fas fa-clock me-2"></i> <b>Meeting Times:</b>{" "}
                  Sundays, 2:00 PM - 4:00 PM (Room 7) - Other times confirmed
                  weekly.
                </p>
              </div>
            </div>

            {/* Praise and Worship */}
            <div
              className="col-lg-6 mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="sub-ministry-card p-4 rounded-3 shadow-sm h-100">
                <div className="card-image-container mb-4">
                  <a
                    href="#"
                    className="d-block"
                    data-bs-toggle="modal"
                    data-bs-target="#imageModal2"
                  >
                    <img
                      src="/assets/images/music1.jpg"
                      alt="MUTCU Praise and Worship Team"
                      className="img-fluid rounded-3"
                    />
                  </a>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-microphone-alt praise-icon me-3"></i>
                  <h3 className="card-title mb-0">Praise and Worship</h3>
                </div>
                <p>
                  The Praise and Worship team leads the congregation in contemporary
                  worship songs, thriving an energetic and intimate atmosphere of
                  praise. They are instrumental in engaging the congregation and
                  facilitating heartfelt worship.
                </p>
                <h6>Activities:</h6>
                <ul>
                  <li>Vocal practice and harmony training sessions.</li>
                  <li>
                    Leading praise and worship during weekly fellowships and Sunday
                    services.
                  </li>
                  <li>
                    Preparing worship sets for special events like MULEWO and Praise
                    Fests.
                  </li>
                </ul>
                <p className="mb-0 text-muted">
                  <i className="fas fa-clock me-2"></i> <b>Meeting Times:</b>Tuesday,
                  7:00 PM - 9:00 PM (Tuition Block) - Other times confirmed weekly.
                </p>
              </div>
            </div>

            {/* Band */}
            <div
              className="col-lg-6 mb-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="sub-ministry-card p-4 rounded-3 shadow-sm h-100">
                <div className="card-image-container mb-4">
                  <a
                    href="#"
                    className="d-block"
                    data-bs-toggle="modal"
                    data-bs-target="#imageModal3"
                  >
                    <img
                      src="/assets/images/music1.jpg"
                      alt="MUTCU Band"
                      className="img-fluid rounded-3"
                    />
                  </a>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-drum band-icon me-3"></i>
                  <h3 className="card-title mb-0">Band</h3>
                </div>
                <p>
                  The MUTCU Band forms the core instrumental support for our worship
                  services. This team provides the primary rhythm and melodic
                  foundation for the Praise and Worship team, creating a powerful
                  sound for corporate worship.
                </p>
                <h6>Activities:</h6>
                <ul>
                  <li>Regular practice sessions for band members.</li>
                  <li>
                    Providing instrumental backing for the Praise and Worship team.
                  </li>
                  <li>
                    Performing during weekly fellowships and special events.
                  </li>
                </ul>
                <p className="mb-0 text-muted">
                  <i className="fas fa-clock me-2"></i> <b>Meeting Times:</b>Thursday,
                  7:00 PM - 9:00 PM (Music Room) - Other times confirmed weekly.
                </p>
              </div>
            </div>

            {/* Instrumentalists */}
            <div
              className="col-lg-6 mb-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="sub-ministry-card p-4 rounded-3 shadow-sm h-100">
                <div className="card-image-container mb-4">
                  <a
                    href="#"
                    className="d-block"
                    data-bs-toggle="modal"
                    data-bs-target="#imageModal4"
                  >
                    <img
                      src="/assets/images/music1.jpg"
                      alt="MUTCU Instrumentalists"
                      className="img-fluid rounded-3"
                    />
                  </a>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-guitar instrumentalist-icon me-3"></i>
                  <h3 className="card-title mb-0">Instrumentalists</h3>
                </div>
                <p>
                  This group includes individual who play various instruments to
                  support different ministry activities and events. They provide
                  musical accompaniment to the Music Ministry
                </p>
                <h6>Activities:</h6>
                <ul>
                  <li>
                    Providing music for smaller fellowships or special occasions.
                  </li>
                  <li>Collaborating with other ministries for events.</li>
                  <li>Mentoring aspiring musicians in the Union.</li>
                </ul>
                <p className="mb-0 text-muted">
                  <i className="fas fa-clock me-2"></i> <b>Meeting Times:</b>Wednesdays,
                  7:00 PM - 9:00 PM (Room 15) - Other times confirmed weekly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Events */}
      <section className="py-5 key-events-section text-white">
        <div className="container">
          <h2 className="section-title text-center text-white">Featured Events</h2>
          <p className="text-center lead mb-5 text-white-50">
            The Music Ministry plays a vital role in some of MUTCU&apos;s most
            anticipated events.
          </p>
          <div className="row justify-content-center">
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="event-highlight-card p-4 rounded-3 shadow-sm h-100">
                <i className="fas fa-star event-icon mb-3"></i>
                <h4 className="card-title">Praise Fest</h4>
                <p>
                  A special service dedicated to high-energy praise and worship,
                  featuring ministrations from all Music Ministry teams. It&apos;s a
                  powerful time of corporate worship.
                </p>
                <p className="mb-0 text-muted">
                  <i className="fas fa-calendar-alt me-2"></i> Next Date: 7th November
                  (as per program)
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="event-highlight-card p-4 rounded-3 shadow-sm h-100">
                <i className="fas fa-holly-berry event-icon mb-3"></i>
                <h4 className="card-title">Christmas Cantata</h4>
                <p>
                  A collaborative worship experience, often with the Creative Arts
                  Ministry, celebrating the birth of Jesus through a blend of music,
                  drama, and other creative expressions. A highlight of the spiritual
                  year.
                </p>
                <p className="mb-0 text-muted">
                  <i className="fas fa-calendar-alt me-2"></i> Next Date: 12th December
                  (as per program)
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="event-highlight-card p-4 rounded-3 shadow-sm h-100">
                <i className="fas fa-hand-holding-heart event-icon mb-3"></i>
                <h4 className="card-title">Worship Experiences</h4>
                <p>
                  Special worship services held throughout the semester, providing
                  opportunities for members to engage in deep spiritual worship and
                  connect with God through music.
                </p>
                <p className="mb-0 text-muted">
                  <i className="fas fa-calendar-alt me-2"></i> Frequency: Weekly (Friday
                  Services)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Spotlight */}
      <section className="py-5 leadership-spotlight-section text-white">
        <div
          className="container text-center"
          data-aos="zoom-in"
        >
          <h2 className="section-title text-white">Ministry Leadership</h2>
          <p className="lead mb-4 text-white-50">
            Guided by dedicated leadership, our Music Ministry thrives.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <Link
                to="/committees/music"
                className="executive-member-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100 p-4"
              >
                <img
                  src="/assets/images/JABEZ.jpg"
                  alt="Jabez Ayugu"
                  className="img-fluid rounded-circle mb-3 border border-3 border-navy"
                />
                <h4 className="member-name">Jabez Ayugu</h4>
                <p className="member-role">Coordinator, Music Ministry</p>
                <span className="btn btn-sm btn-outline-light mt-2">
                  View Profile <i className="fas fa-user-circle ms-2"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action (opens modal) */}
      <section className="py-5 cta-section text-white">
        <div
          className="container text-center"
          data-aos="zoom-in"
        >
          <h2 className="section-title text-white">Join Our Music Ministry!</h2>
          <p className="lead mb-4 text-white-50">
            If you have a passion for worship through music, we invite you to join
            the Music Ministry. Click below to express your interest!
          </p>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            data-bs-toggle="modal"
            data-bs-target="#joinMinistryModal"
          >
            Join This Ministry <i className="fas fa-hand-fist ms-2"></i>
          </button>
        </div>
      </section>

      {/* Join Ministry Modal */}
      <div
        className="modal fade"
        id="joinMinistryModal"
        tabIndex={-1}
        aria-labelledby="joinMinistryModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-primary-dark text-white">
              <h5
                className="modal-title"
                id="joinMinistryModalLabel"
              >
                Join Music Ministry
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p className="text-center mb-4">
                Fill out the form below to express your interest in joining the Music
                Ministry. We'll get in touch with you shortly!
              </p>
              <form
                id="musicMinistryJoinForm"
                className="needs-validation"
                noValidate
              >
                <div className="mb-3">
                  <label
                    htmlFor="joinName"
                    className="form-label"
                  >
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="joinName"
                    required
                    placeholder="Jabez Ayugu"
                  />
                  <div className="invalid-feedback">
                    Please enter your full name.
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="joinEmail"
                    className="form-label"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="joinEmail"
                    required
                    placeholder="jabezayugu@mut.ac.ke"
                  />
                  <div className="invalid-feedback">
                    Please enter a valid university email address.
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="joinInterest"
                    className="form-label"
                  >
                    Area of Interest
                  </label>
                  <select
                    className="form-select"
                    id="joinInterest"
                    required
                  >
                    <option
                      value=""
                      disabled
                      selected
                    >
                      Select an area
                    </option>
                    <option value="choir">Choir </option>
                    <option value="band">Band </option>
                    <option value="instrumentalist"> Instrumentalists</option>
                    <option value="praise-worship">Praise and Worship </option>
                    <option value="general">General Interest</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select your primary area of interest.
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="joinMessage"
                    className="form-label"
                  >
                    Tell us about your musical experience or passion (Optional)
                  </label>
                  <textarea
                    className="form-control"
                    id="joinMessage"
                    rows={3}
                    placeholder="e.g., I play guitar and have experience leading worship..."
                  ></textarea>
                </div>
                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Submit Interest
                  </button>
                </div>
              </form>
              <div
                id="modalConfirmationMessage"
                className="mt-4 text-center d-none"
              >
                <i className="fas fa-check-circle fa-4x text-teal mb-3 animate-pop-in"></i>
                <p className="lead">
                  Thank you for your interest in the Music Ministry! We&apos;ve
                  received your submission and will get in touch with you soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modals for sub-ministries */}
      {/* Choir Modal */}
      <div
        className="modal fade"
        id="imageModal1"
        tabIndex={-1}
        aria-labelledby="imageModal1Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="imageModal1Label"
              >
                MUTCU Choir
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <img
                src="https://placehold.co/1600x900/ff9700/ffffff?text=Choir+Singing"
                alt="MUTCU Choir"
                className="img-fluid rounded-3"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Praise and Worship Modal */}
      <div
        className="modal fade"
        id="imageModal2"
        tabIndex={-1}
        aria-labelledby="imageModal2Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="imageModal2Label"
              >
                MUTCU Praise and Worship
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <img
                src="https://placehold.co/1600x900/30d5c8/ffffff?text=Praise+and+Worship"
                alt="MUTCU Praise and Worship Team"
                className="img-fluid rounded-3"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Band Modal */}
      <div
        className="modal fade"
        id="imageModal3"
        tabIndex={-1}
        aria-labelledby="imageModal3Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="imageModal3Label"
              >
                MUTCU Band
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <img
                src="https://placehold.co/1600x900/ff1229/ffffff?text=Band+Playing"
                alt="MUTCU Band"
                className="img-fluid rounded-3"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Instrumentalists Modal */}
      <div
        className="modal fade"
        id="imageModal4"
        tabIndex={-1}
        aria-labelledby="imageModal4Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="imageModal4Label"
              >
                MUTCU Instrumentalists
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <img
                src="https://placehold.co/1600x900/04003d/ffffff?text=Instrumentalists"
                alt="MUTCU Instrumentalists"
                className="img-fluid rounded-3"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicMinistry;