// src/pages/committees/MusicCommittee.tsx
import React from "react";

const MusicCommittee: React.FC = () => {
  return (
    <>
      {/* Hero – adjusted to known text: "MUTCU Music Ministry" */}
      <section
        className="page-hero-section d-flex align-items-center text-center text-white"
        style={{ backgroundImage: "url('/assets/images/music1.jpg')" }}
      >
        <div className="hero-overlay"></div>
        <div className="container">
          <h1 className="display-3 mb-3">MUTCU Music Ministry</h1>
          <p className="lead">Leading Worship and Glorifying God Through Song</p>
        </div>
      </section>

      {/* Basic content skeleton – fill from your original HTML */}
      <section className="py-5 leader-profile-section">
        <div className="container">
          {/* TODO: copy over full content from committees/music.html body
              (excluding <nav>, <footer>, and <script> tags), then:
              - Change class -> className
              - Convert any internal .html links to <Link> components
              - Fix image src to /assets/... paths
          */}
        </div>
      </section>
    </>
  );
};

export default MusicCommittee;