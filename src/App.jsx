import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { Route, Router, Routes, useNavigate } from "react-router-dom";
import Home from './home/Home.jsx';
import Technology from './technology/Technology.jsx';
import CoverLetter from './cover-letter/Cover-Letter';
import VideoInterview from './Video-interview';
import Resume from './resume/My-Resume';
// import PdfCv from './pdfCvContainer/PdfCv.jsx';



function App() {

  return (
    <div className='container-fluid mt-2 p-0'>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/cover-letter" element={<CoverLetter />} />
        <Route path="/video-interview" element={<VideoInterview />} />
        {/* <Route path="/pdf-cv" element={<PdfCv />} /> */}
      </Routes>
    </div>

  );
}

export default App;
