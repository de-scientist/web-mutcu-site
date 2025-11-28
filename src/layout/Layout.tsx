import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { usePageEffects } from "../hooks/usePageEffects";

const Layout: React.FC = () => {
  usePageEffects();
  const location = useLocation();

  // Home uses Full Logo, inner pages use best logo – matches your HTML
  const logoSrc =
    location.pathname === "/"
      ? "/assets/images/Full Logo.png"
      : "/assets/images/best logo.png";

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    "nav-link" + (isActive ? " active" : "");

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" aria-label="Main navigation">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={logoSrc} alt="MUTCU Logo" height={60} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" className={linkClasses} end>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className={linkClasses}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/ministries" className={linkClasses}>
                  Ministries
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/events" className={linkClasses}>
                  Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/resources" className={linkClasses}>
                  Resources
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/gallery" className={linkClasses}>
                  Gallery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={linkClasses}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Page content */}
      <main style={{ marginTop: "80px" }}>
        <Outlet />
      </main>

      {/* Footer – copied from your HTML (index/about/ministries) */}
      <footer className="footer py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
              <h5 className="footer-title">About MUTCU</h5>
              <p className="footer-text">
                Murang’a University of Technology Christian Union is a non-denominational
                community dedicated to inspiring love, hope, and godliness through faith, unity,
                and service.
              </p>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <h5 className="footer-title">Quick Links</h5>
              <ul className="list-unstyled footer-links">
                <li>
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="nav-link">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/ministries" className="nav-link">
                    Ministries
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/events" className="nav-link">
                    Events
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/resources" className="nav-link">
                    Resources
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/gallery" className="nav-link">
                    Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="nav-link">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5 className="footer-title">Connect With Us</h5>
              <p className="footer-contact">
                <i className="fas fa-map-marker-alt me-2"></i> Murang’a University of Technology,
                Murang’a, Kenya
              </p>
              <p className="footer-contact">
                <i className="fas fa-phone me-2"></i> +254 712 345 678
              </p>
              <p className="footer-contact">
                <i className="fas fa-envelope me-2"></i> info@mutcu.ac.ke
              </p>
              <p className="footer-contact">
                <i className="fas fa-clock me-2"></i> Office Hours: Mon-Fri, 8:00 AM - 5:00 PM
              </p>
              <div className="social-icons mt-3">
                <a href="#" className="me-3" aria-label="Facebook">
                  <i className="fab fa-facebook-f fa-lg"></i>
                </a>
                <a href="#" className="me-3" aria-label="Instagram">
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-5 border-top pt-4">
            <p className="footer-text mb-1">
              &copy; 2025 Murang’a University of Technology Christian Union. All rights reserved.
            </p>
            <p className="footer-text">Designed by MUTCU Tech Team</p>
          </div>
        </div>
      </footer>
    </>>
  );
};

export default Layout;