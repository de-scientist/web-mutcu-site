// BibleStudyDiscipleship.tsx
import React, { useEffect } from 'react';
// Assuming you are using React Router for navigation
import { Link } from 'react-router-dom';

// Define props interface (optional for this static component, but good practice)
interface BibleStudyDiscipleshipProps {}

// If AOS (Animate on Scroll) is handled globally, you might not need the logic below.
// If you want to ensure it initializes after the component mounts, you can use useEffect.
const BibleStudyDiscipleship: React.FC<BibleStudyDiscipleshipProps> = () => {
    // Note: If you're using a global script for AOS, you can remove this useEffect.
    // This is included to handle the functionality of the AOS scripts linked in the original HTML.
    useEffect(() => {
        // @ts-ignore - Assuming AOS is globally defined if you include the script
        if (typeof AOS !== 'undefined') {
            // @ts-ignore
            AOS.init({ once: true });
        }
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section
                className="page-hero-section d-flex align-items-center text-center text-white"
                style={{ backgroundImage: "url('/assets/images/PURITY.jpg')" }}
            >
                <div className="hero-overlay"></div>
                <div className="container position-relative" data-aos="fade-up" data-aos-duration="1000">
                    <h1 className="display-3 mb-3">Bible Study, Discipleship &amp; BEST</h1>
                    <p className="lead">Deepening Faith Through God's Word</p>
                </div>
            </section>

            {/* Profile/Ministry Details Section */}
            <section className="py-5 leader-profile-section">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Purity Njeri - Coordinator Card */}
                        <div className="col-6 col-md-4 col-lg-3 mb-4" data-aos="zoom-in" data-aos-delay="700">
                            {/* Converted <a> to <Link> for internal navigation */}
                            <Link to="#" className="executive-member-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100">
                                <img
                                    src="/assets/images/PURITY.jpg"
                                    alt="Purity Njeri"
                                    className="img-fluid rounded-circle mb-3 border border-3 border-orange"
                                />
                                <h4 className="member-name">Purity Njeri</h4>
                                <p className="member-role">Bible Study &amp; Discipleship Coordinator</p>
                            </Link>
                        </div>
                        <div className="col-lg-8" data-aos="fade-left" data-aos-delay="200">
                            <h3 className="section-title text-start">About the Bible Study, Discipleship &amp; BEST Ministry</h3>
                            <p>The **Bible Study, Discipleship &amp; BEST-P** (Bible Exposition Self-Training Program) Ministry is dedicated to equipping MUTCU members with a deeper understanding of the Holy Scripture and empowering spiritual maturity. This ministry runs various programs, including small group Bible studies, nurturing classes for new believers, and intensive training programs.</p>
                            <p>Purity Njeri, as the coordinator, leads the efforts to ensure members are grounded in biblical truths and encouraged to apply these teachings in their daily lives. The ministry aims to raise a family well-equipped in all aspects of life, exemplary to Jesus Christ.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Roles & Activities Section */}
            <section className="py-5 bg-light roles-responsibilities-section">
                <div className="container">
                    <h2 className="section-title text-center">Key Roles &amp; Activities</h2>
                    <p className="text-center lead mb-5">This ministry focuses on spiritual nourishment and growth.</p>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <ul className="list-unstyled roles-list">
                                <li data-aos="fade-up" data-aos-delay="100"><i className="fas fa-check-circle me-3"></i> Organizing and facilitating regular small group Bible studies for members.</li>
                                <li data-aos="fade-up" data-aos-delay="200"><i className="fas fa-check-circle me-3"></i> Conducting nurturing classes specifically designed for new believers to establish their faith.</li>
                                <li data-aos="fade-up" data-aos-delay="300"><i className="fas fa-check-circle me-3"></i> Coordinating the Bible Exposition Self-Training Program (**BEST-P**) for in-depth biblical understanding.</li>
                                <li data-aos="fade-up" data-aos-delay="400"><i className="fas fa-check-circle me-3"></i> Developing and providing resources for personal and group discipleship.</li>
                                <li data-aos="fade-up" data-aos-delay="500"><i className="fas fa-check-circle me-3"></i> Encouraging practical application of biblical teachings in members' daily lives and academic pursuits.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-5 cta-section text-white">
                <div className="container text-center" data-aos="zoom-in">
                    <h2 className="section-title text">Grow in Your Faith!</h2>
                    <p className="section-subtitle">Join our Bible Study and Discipleship programs to deepen your walk with Christ.</p>
                    {/* Converted <a> to <Link> for internal navigation */}
                    <Link to="../ministries.html" className="btn btn-primary btn-lg me-3">Explore All Ministries <i className="fas fa-users-cog ms-2"></i></Link>
                    <Link to="../contact.html" className="btn btn-secondary btn-lg">Contact Us <i className="fas fa-envelope ms-2"></i></Link>
                </div>
            </section>
        </>
    );
};

export default BibleStudyDiscipleship;