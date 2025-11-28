import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Ministries from "./pages/Ministries";
import Events from "./pages/Events";
import Resources from "./pages/Resources";";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
// src/App.tsx (add at top with other imports)
import Chairman from "./pages/committees/Chairman";
import ViceChair1 from "./pages/committees/ViceChair1";
import ViceChair2 from "./pages/committees/ViceChair2";
import Secretary from "./pages/committees/Secretary";
import ViceSecretary from "./pages/committees/ViceSecretary";
import Treasurer from "./pages/committees/Treasurer";
import BibleStudyCommittee from "./pages/committees/BibleStudyCommittee";
import PrayerCommittee from "./pages/committees/PrayerCommittee";
import MissionsCommittee from "./pages/committees/MissionsCommittee";
import MusicCommittee from "./pages/committees/MusicCommittee";
import TechnicalCommittee from "./pages/committees/TechnicalCommittee";
import CreativeCommittee from "./pages/committees/CreativeCommittee";

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        {/* You can add sub-routes here for committees/* and ministries/* pages */}
      </Route>
    </Routes>
  );
};

export default App;