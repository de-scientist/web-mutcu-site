// src/pages/Home.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

declare const bootstrap: any;

const Home: React.FC = () => {
  useEffect(() => {
    // Prayer form behaviour (from assets/js/index.js)
    const prayerForm = document.getElementById("prayerForm") as HTMLFormElement | null;
    const newsletterForm = document.getElementById("newsletterForm") as HTMLFormElement | null;

    const handlePrayerSubmit = (event: Event) => {
      event.preventDefault();
      const prayerRequestInput = document.getElementById("prayerRequest") as HTMLTextAreaElement;
      const modalMessage = document.getElementById("modalMessage") as HTMLElement;
      const modalElement = document.getElementById("confirmationModal") as HTMLElement;
      const confirmationModal = new bootstrap.Modal(modalElement);

      if (prayerRequestInput.value.trim() === "") {
        prayerRequestInput.classList.add("is-invalid");
        return;
      } else {
        prayerRequestInput.classList.remove("is-invalid");
      }

      console.log("Prayer Request Submitted:", {
        name: (document.getElementById("prayerName") as HTMLInputElement).value,
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
        "newsletterEmail"
      ) as HTMLInputElement;
      const modalMessage = document.getElementById("modalMessage") as HTMLElement;
      const modalElement = document.getElementById("confirmationModal") as HTMLElement;
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
      {/* Hero Section with Carousel (convert from index.html) */}
      <section className="hero-section">
        <div
          id="heroCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div
                className="hero-bg"
                style={{ backgroundImage: "url('/assets/images/Lumii_20241023_192938507.jpg')" }}
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
                  Join MUTCU to grow in faith, fellowship, and service at Murang’a
                  University of Technology.
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

            {/* ...second and third carousel-item blocks from index.html,
                only changing hrefs to <Link to="..."> where applicable and
                class -> className, style -> TSX style object... */}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
            aria-label="Previous slide"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
            aria-label="Next slide"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Then copy the rest of your sections from index.html, in order:
          - About MUTCU section
          - Core Values
          - Ministries preview
          - Upcoming Events
          - Prayer Request (keep ids: prayerForm, prayerName, prayerRequest)
          - Testimonials carousel
          - Gallery preview
          - Newsletter (keep ids: newsletterForm, newsletterEmail)
          - Confirmation Modal (keep id="confirmationModal" and id="modalMessage")
         Apply the same mechanical changes:
          - class → className
          - for → htmlFor
          - href="contact.html" → <Link to="/contact">, etc.
      */}
    </>
  );
};

export default Home;