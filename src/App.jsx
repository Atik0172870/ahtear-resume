import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import Resume from './My-Resume';
import profile_pic from './assets/Ahtear_rahman.JPG';
import { model } from './resume-data';
import Home from './Home';
import CoverLetter from './Cover-Letter';
import { coverLetterData } from './cover-letter-data';
import VideoInterview from './Video-interview';
import menuIcon from './assets/circle-menu.svg';
import homeIcon from './assets/home.svg';
import resumeIcon from './assets/resume.svg';
import covverletterIcon from './assets/covverletter.svg';
import videointerviewIcon from './assets/video-interview.svg';



function App() {
  const navigate = useNavigate();
  const [modeldata, setModel] = useState(model);
  const [searchValue, setSearchValue] = useState('');
  const [activeBtn, setAtiveBtn] = useState(1);


  const onSearchData = (event) => {
    const searchTerm = event.target.value;
    setSearchValue(searchTerm || '');
    // Create a new object for modeldata to avoid mutating the existing state
    const updatedModelData = {
      ...modeldata,
      firstPage: model.firstPage.filter(x => x.type.toString().trim().replace(/\s+/g, '')
        .toLowerCase().includes(searchTerm.toString().trim().replace(/\s+/g, '').toLowerCase())),
      secondPage: model.secondPage.filter(x => x.type.toString().trim().replace(/\s+/g, '')
        .toLowerCase().includes(searchTerm.toString().trim().replace(/\s+/g, '').toLowerCase())),
    };

    // Update the state with the new object
    setModel(updatedModelData);

  };
  const navigateToRoute = (url = '/', activeBtn) => {
    setAtiveBtn(activeBtn);
    navigate(url);
  }
  return (
    <div>
      <nav className="navbar navbar-expand-sm fixed-top navbar-dark bg-dark w-100 p-1">
        <div className="container ms-2 me-auto">
          <a className="navbar-brand d-flex align-items-center" >
            <img src={profile_pic} alt="Avatar Logo" style={{ width: '35px' }} className="rounded-circle" />
            <img src={menuIcon} title='Menu' className='menu-icon ms-2 rounded-circle text-bg-light btn btn-sm degree-icon' data-bs-toggle="offcanvas" data-bs-target="#demo" />
          </a>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className={`nav-item btn btn-sm text-white ${activeBtn == 1 ? 'btn-outline-secondary' : ''}`} onClick={() => { navigateToRoute('/', 1) }}>
                Home
              </li>
              <li className={`nav-item btn btn-sm text-white ${activeBtn == 2 ? 'btn-outline-secondary' : ''}`} onClick={() => { navigateToRoute('/resume', 2) }}>
                Resume
              </li>
              <li className={`nav-item btn btn-sm text-white ${activeBtn == 3 ? 'btn-outline-secondary' : ''}`} onClick={() => { navigateToRoute('/cover-letter', 3) }}>
                Cover letter
              </li>
              <li className={`nav-item btn btn-sm text-white ${activeBtn == 4 ? 'btn-outline-secondary' : ''}`} onClick={() => { navigateToRoute('/video-interview', 4) }}>
                Video Interview
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="offcanvas offcanvas-start text-bg-dark transparent-div" id="demo" style={{ width: 'auto' }}>
        <div className="offcanvas-header">
          <button type="button" className="btn btn-close btn-sm btn-close-white" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body p-0 d-flex align-items-center flex-column gap-4 justify-content-start mt-5">
          <img src={homeIcon} title='Home' className={`menu-icon-all rounded-circle text-bg-light btn btn-sm  degree-icon ${activeBtn == 1 ? 'border border-3 border-warning' : ''}`} onClick={() => { navigateToRoute('/', 1) }} />
          <img src={resumeIcon} title='Resume' className={`menu-icon-all rounded-circle text-bg-light btn btn-sm  degree-icon ${activeBtn == 2 ? 'border border-3 border-warning' : ''}`} onClick={() => { navigateToRoute('/resume', 2) }} />
          <img src={covverletterIcon} title='Cover Letter' className={`menu-icon-all rounded-circle text-bg-light btn btn-sm  degree-icon ${activeBtn == 3 ? 'border border-3 border-warning' : ''}`} onClick={() => { navigateToRoute('/cover-letter', 3) }} />
          <img src={videointerviewIcon} title='Video Interview' className={`menu-icon-all rounded-circle text-bg-light btn btn-sm  degree-icon ${activeBtn == 4 ? 'border border-3 border-warning' : ''}`} onClick={() => { navigateToRoute('/video-interview', 4) }} />

        </div>
      </div>
      <div className='container'>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/resume" element={<Resume data={modeldata} />} />
          <Route path="/cover-letter" element={<CoverLetter data={coverLetterData} />} />
          <Route path="/video-interview" element={<VideoInterview data={coverLetterData} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
