// src/pages/ministries/BibleStudyDiscipleship.tsx
import React from "react";

const BibleStudyDiscipleship: React.FC = () => {
  return (
    <>
      <section
        className="page-hero-section"
        style={{ backgroundImage: "url('/assets/images/bs1.jpg')" }}
        data-aos="fade-in"
      >
        <div className="hero-overlay"></div>
        <div className="container">
          <h1 data-aos="fade-up">
            MUTCU Bible Study &amp; Discipleship Ministry
          </h1>
          <p className="lead" data-aos="fade-up" data-aos-delay="100">
            Deepening Faith Through God&apos;s Word and Nurturing Growth
          </p>
        </div>
      </section>

      {/* TODO: port full body from bible-study-discipleship.html (sections, forms, etc.) 
          changing class->className, for->htmlFor, href->Link, etc.
      */}
    </>
  );
};

export default BibleStudyDiscipleship;
