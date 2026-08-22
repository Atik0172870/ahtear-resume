import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import Home from './home/Home.jsx';
import Technology from './technology/Technology.jsx';
import TechnologyOverview from './technology-overview/TechnologyOverview.jsx'

import CoverLetter from './cover-letter/Cover-Letter';
import VideoInterview from './Video-interview';
import Resume from './resume/My-Resume';
import Project from './projects/Project.jsx';
import BracBusinessJourney from './brac-business-journey/BracBusinessJourney.jsx';

// import PdfCv from './pdfCvContainer/PdfCv.jsx';



function App() {

  return (
    <div className='container-fluid m-0 p-0'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/technology-overview" element={<TechnologyOverview />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/cover-letter" element={<CoverLetter />} />
        <Route path="/video-interview" element={<VideoInterview />} />
        <Route path="/business-automation" element={<BracBusinessJourney />} />
        {/* <Route path="/pdf-cv" element={<PdfCv />} /> */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>

  );
}

export default App;
