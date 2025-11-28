// BibleStudyDiscipleship.tsx
import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

// Type definition for form data
interface FormData {
    fullName: string;
    email: string;
    areaOfInterest: string;
    experience: string;
}

const BibleStudyDiscipleship: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        areaOfInterest: '',
        experience: '',
    });
    const [successMessageVisible, setSuccessMessageVisible] = useState(false);

    // Functionality: Initialize AOS (Animate On Scroll)
    useEffect(() => {
        // @ts-ignore: AOS is loaded via CDN/global script, safe to ignore type error if using CDN setup
        if (typeof AOS !== 'undefined') {
            // @ts-ignore
            AOS.init({ once: true });
        }
    }, []);

    // Functionality: Handle form input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value,
        }));
    };

    // Functionality: Handle form submission
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        
        // In a real application, you would send formData to an API endpoint here.
        console.log('Form Submitted:', formData);

        // Show success message and clear form fields
        setSuccessMessageVisible(true);
        setFormData({
            fullName: '',
            email: '',
            areaOfInterest: 'Select an area', // Reset select field to default placeholder
            experience: '',
        });

        // Hide success message after 5 seconds
        setTimeout(() => {
            setSuccessMessageVisible(false);
        }, 5000);
    };

    return (
        <>
            {/* Ministry Hero Section */}
            <section
                className="page-hero-section"
                style={{ backgroundImage: "url('/bible-study-hero.jpg')" }} // Assuming path is relative to the root public folder
                data-aos="fade-in"
            >
                <div className="hero-overlay"></div>
                <div className="container">
                    <h1 data-aos="fade-up">MUTCU Bible Study &amp; Discipleship Ministry</h1>
                    <p className="lead" data-aos="fade-up" data-aos-delay="100">Deepening Faith Through God's Word and Nurturing Growth</p>
                </div>
            </section>

            {/* Ministry Intro Section */}
            <section className="ministry-intro-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 text-center mb-4 mb-lg-0">
                            <img src="/purity-njeri.jpg" alt="Purity Njeri" className="img-fluid rounded-circle" data-aos="zoom-in" />
                            <h3 className="mt-3">Purity Njeri</h3>
                            <p className="text-muted">Bible Study &amp; Discipleship Coordinator</p>
                        </div>
                        <div className="col-lg-7">
                            <h2 className="section-title" data-aos="fade-right">About the Bible Study &amp; Discipleship Ministry</h2>
                            <p data-aos="fade-right" data-aos-delay="100">The **Bible Study, Discipleship &amp; BEST-P Ministry** is dedicated to equipping MUTCU members with a deeper understanding of the Holy Scripture and building spiritual maturity. This ministry runs various programs, including small group Bible studies, nurturing classes for new believers, and intensive training like BEST-P.</p>
                            <p data-aos="fade-right" data-aos-delay="200">Our aim is to deepen and strengthen the spiritual life of members through Bible study, prayer, and fellowship, ensuring they are grounded in biblical truths and apply them in daily lives, as per MUTCU's aims of discipleship.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sub-Ministries Section */}
            <section className="sub-ministries-section">
                <div className="container">
                    <h2 className="section-title text-center" data-aos="fade-up">Our Discipleship Programs</h2>
                    <p className="lead text-center" data-aos="fade-up" data-aos-delay="100">The ministry offers structured programs to foster spiritual growth. Click on the cards to learn more!</p>
                    <div className="row">
                        {/* Bible Study Groups */}
                        <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="sub-ministry-card">
                                <div className="card-body text-center">
                                    <i className="fas fa-book-open choir-icon mb-3"></i>
                                    <h4 className="card-title">Bible Study Groups</h4>
                                    <p className="card-text">Small groups for in-depth Bible study and application.</p>
                                    <h6>Activities</h6>
                                    <ul>
                                        <li>Weekly discussions using official guides</li>
                                        <li>Personal application of scripture</li>
                                        <li>Fellowship and prayer</li>
                                    </ul>
                                    <p className="text-muted"><i className="fas fa-clock me-2"></i>Mondays, 7:00 PM - 9:00 PM (Groups of 8-10 members)</p>
                                </div>
                            </div>
                        </div>
                        {/* Nurturing Classes */}
                        <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="sub-ministry-card">
                                <div className="card-body text-center">
                                    <i className="fas fa-seedling band-icon mb-3"></i>
                                    <h4 className="card-title">Nurturing Classes</h4>
                                    <p className="card-text">Classes to ground new believers in faith foundations.</p>
                                    <h6>Activities</h6>
                                    <ul>
                                        <li>Teachings on basic Christian principles</li>
                                        <li>Discussions and Q&amp;A</li>
                                        <li>Spiritual mentorship</li>
                                    </ul>
                                    <p className="text-muted"><i className="fas fa-clock me-2"></i>Thursdays, 7:00 PM - 9:00 PM</p>
                                </div>
                            </div>
                        </div>
                        {/* BEST-P Program */}
                        <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="400">
                            <div className="sub-ministry-card">
                                <div className="card-body text-center">
                                    <i className="fas fa-graduation-cap praise-icon mb-3"></i>
                                    <h4 className="card-title">BEST-P Program</h4>
                                    <p className="card-text">Intensive Bible exposition training for deeper understanding.</p>
                                    <h6>Activities</h6>
                                    <ul>
                                        <li>11-week curriculum on scripture exposition</li>
                                        <li>Practical assignments and discussions</li>
                                        <li>Equipping for ministry</li>
                                    </ul>
                                    <p className="text-muted"><i className="fas fa-clock me-2"></i>Sundays, 2:00 PM - 4:00 PM</p>
                                </div>
                            </div>
                        </div>
                        {/* Baptism */}
                        <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="500">
                            <div className="sub-ministry-card">
                                <div className="card-body text-center">
                                    <i className="fas fa-water instrumentalists-icon mb-3"></i>
                                    <h4 className="card-title">Baptism</h4>
                                    <p className="card-text">Public declaration of faith through baptism.</p>
                                    <h6>Activities</h6>
                                    <ul>
                                        <li>Preparation classes</li>
                                        <li>Baptism ceremony</li>
                                        <li>Follow-up discipleship</li>
                                    </ul>
                                    <p className="text-muted"><i className="fas fa-clock me-2"></i>Once per spiritual year</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Events Section */}
            <section className="key-events-section">
                <div className="container">
                    <h2 className="section-title text-center" data-aos="fade-up">Featured Events</h2>
                    <p className="lead text-center" data-aos="fade-up" data-aos-delay="100">The ministry hosts events to enhance biblical understanding and discipleship.</p>
                    <div className="row">
                        <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="200">
                            <div className="event-highlight-card">
                                <div className="card-body text-center">
                                    <i className="fas fa-book event-icon"></i>
                                    <h5 className="card-title">Bible Study Exposition</h5>
                                    <p className="card-text">In-depth exposition of scripture themes.</p>
                                    <p className="text-muted"><i className="fas fa-calendar-alt me-2"></i>Next Date: 5th September</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="300">
                            <div className="event-highlight-card">
                                <div className="card-body text-center">
                                    <i className="fas fa-user-graduate event-icon"></i>
                                    <h5 className="card-title">Discipleship Training</h5>
                                    <p className="card-text">Workshops on practical Christian living.</p>
                                    <p className="text-muted"><i className="fas fa-calendar-alt me-2"></i>Frequency: Semesterly</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="400">
                            <div className="event-highlight-card">
                                <div className="card-body text-center">
                                    <i className="fas fa-bible event-icon"></i>
                                    <h5 className="card-title">The Father of Faith Bible Exposition</h5>
                                    <p className="card-text">Special series on faith from scripture.</p>
                                    <p className="text-muted"><i className="fas fa-calendar-alt me-2"></i>Next Date: 7th December</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Spotlight Section */}
            <section className="leadership-spotlight-section">
                <div className="container">
                    <h2 className="section-title text-center" data-aos="fade-up">Ministry Leadership</h2>
                    <p className="lead text-center" data-aos="fade-up" data-aos-delay="100">Guided by dedicated leadership, our Bible Study &amp; Discipleship Ministry thrives.</p>
                    <div className="row justify-content-center">
                        <div className="col-md-4 col-lg-3 mb-4" data-aos="zoom-in">
                            <div className="executive-member-card">
                                <img src="/purity-njeri.jpg" alt="Purity Njeri" className="img-fluid rounded-circle mb-2 border-orange" />
                                <h5 className="member-name">Purity Njeri</h5>
                                <p className="member-role">Bible Study &amp; Discipleship Coordinator</p>
                                {/* Converted <a> to <Link> for internal navigation */}
                                <Link to="#" className="btn btn-outline-light btn-sm">View Profile</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section (with Form Functionality) */}
            <section className="cta-section">
                <div className="container">
                    <h2 className="section-title text-center" data-aos="fade-up">Join Our Bible Study &amp; Discipleship Ministry!</h2>
                    <p className="lead text-center" data-aos="fade-up" data-aos-delay="100">If you have a passion for God's Word and discipling others, we invite you to join. Fill out the form below to express your interest!</p>
                    <div className="row justify-content-center">
                        <div className="col-md-8" data-aos="fade-up" data-aos-delay="200">
                            {/* Converted HTML form to a controlled React form */}
                            <form id="join-bible-study-form" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="fullName" className="form-label">Your Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fullName"
                                        placeholder="Please enter your full name."
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Your Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Please enter a valid university email address."
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="areaOfInterest" className="form-label">Area of Interest</label>
                                    <select
                                        className="form-select"
                                        id="areaOfInterest"
                                        required
                                        value={formData.areaOfInterest}
                                        onChange={handleChange}
                                    >
                                        <option value="Select an area" disabled>Select an area</option>
                                        <option>Bible Study Groups</option>
                                        <option>Nurturing Classes</option>
                                        <option>BEST-P Program</option>
                                        <option>General Interest</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="experience" className="form-label">Tell us about your experience or passion (Optional)</label>
                                    <textarea
                                        className="form-control"
                                        id="experience"
                                        rows={3}
                                        value={formData.experience}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Submit Interest</button>
                            </form>
                            
                            {/* Success Message display based on state */}
                            {successMessageVisible && (
                                <div id="success-message" className="mt-3 text-success animate-pop-in">
                                    Thank you for your interest in the Bible Study &amp; Discipleship Ministry! We've received your submission and will get in touch with you soon.
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="row mt-4 justify-content-center">
                        <div className="col-md-4 text-center" data-aos="fade-up" data-aos-delay="300">
                            {/* Converted <a> to <Link> for internal navigation */}
                            <Link to="/join-group.html" className="btn btn-primary">Join a Bible Study Group</Link>
                        </div>
                        <div className="col-md-4 text-center" data-aos="fade-up" data-aos-delay="400">
                            {/* Converted <a> to <Link> for internal navigation */}
                            <Link to="/events.html#bible-events" className="btn btn-secondary">View Discipleship Events</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="sub-ministries-section">
                <div className="container">
                    <h2 className="section-title text-center" data-aos="fade-up">Ministry in Action</h2>
                    <div className="row">
                        <div className="col-md-3 mb-4" data-aos="zoom-in">
                            <img src="/bible-study-group.jpg" alt="Bible Study Group" className="img-fluid rounded" />
                            <p className="text-center mt-2">Bible Study Group Session</p>
                        </div>
                        <div className="col-md-3 mb-4" data-aos="zoom-in" data-aos-delay="100">
                            <img src="/nurturing-class.jpg" alt="Nurturing Class" className="img-fluid rounded" />
                            <p className="text-center mt-2">Nurturing Class</p>
                        </div>
                        <div className="col-md-3 mb-4" data-aos="zoom-in" data-aos-delay="200">
                            <img src="/best-p.jpg" alt="BEST-P Program" className="img-fluid rounded" />
                            <p className="text-center mt-2">BEST-P Training</p>
                        </div>
                        <div className="col-md-3 mb-4" data-aos="zoom-in" data-aos-delay="300">
                            <img src="/baptism.jpg" alt="Baptism Ceremony" className="img-fluid rounded" />
                            <p className="text-center mt-2">Baptism Ceremony</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BibleStudyDiscipleship;