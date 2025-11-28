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

import MusicMinistry from "./pages/ministries/MusicMinistry";
import BibleStudyDiscipleship from "./pages/ministries/BibleStudyDiscipleship";
import MissionsEvangelism from "./pages/ministries/MissionsEvangelism";
import CreativeArts from "./pages/ministries/CreativeArts";
import PrayerMinistry from "./pages/ministries/PrayerMinistry";
import WelfareCommittee from "./pages/ministries/WelfareCommittee";
import HospitalityMinistry from "./pages/ministries/HospitalityMinistry";
import TechnicalDepartment from "./pages/ministries/TechnicalDepartment";
import RMC from "./pages/ministries/RMC";

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
        <Route path="/committees/chairman" element={<Chairman />} />
<Route path="/committees/vice-chair1" element={<ViceChair1 />} />
<Route path="/committees/vice-chair2" element={<ViceChair2 />} />
<Route path="/committees/secretary" element={<Secretary />} />
<Route path="/committees/vice-secretary" element={<ViceSecretary />} />
<Route path="/committees/treasurer" element={<Treasurer />} />
<Route path="/committees/bible-study" element={<BibleStudyCommittee />} />
<Route path="/committees/prayer" element={<PrayerCommittee />} />
<Route path="/committees/missions" element={<MissionsCommittee />} />
<Route path="/committees/music" element={<MusicCommittee />} />
<Route path="/committees/technical" element={<TechnicalCommittee />} />
<Route path="/committees/creative" element={<CreativeCommittee />} />
       <Route path="/ministries/music-ministry" element={<MusicMinistry />} />
<Route path="/ministries/bible-study-discipleship" element={<BibleStudyDiscipleship />} />
<Route path="/ministries/missions-evangelism" element={<MissionsEvangelism />} />
<Route path="/ministries/creative-arts" element={<CreativeArts />} />
<Route path="/ministries/prayer-ministry" element={<PrayerMinistry />} />
<Route path="/ministries/welfare-committee" element={<WelfareCommittee />} />
<Route path="/ministries/hospitality-ministry" element={<HospitalityMinistry />} />
<Route path="/ministries/technical-department" element={<TechnicalDepartment />} />
<Route path="/ministries/RMC" element={<RMC />} />
        {/* You can add sub-routes here for committees/* and ministries/* pages */}
      </Route>
    </Routes>
  );
};

export default App;