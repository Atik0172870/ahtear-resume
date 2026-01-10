import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import profile_pic from '../assets/Ahtear_rahman.JPG';
import menuIcon from '../assets/circle-menu.svg';
import homeIcon from '../assets/home.svg';
import resumeIcon from '../assets/resume.svg';
import covverletterIcon from '../assets/covverletter.svg';
import videointerviewIcon from '../assets/video-interview.svg';
import Technology from '../assets/technology.png';
import project from '../assets/project.png';


import './Navbar.scss';

function Navbar() {
    const navigate = useNavigate();
    const [activeBtn, setAtiveBtn] = useState(1);

    useEffect(() => {
        navigateToRoute('/', 1)
    }, [])

    const navigateToRoute = (url = '/', activeBtn) => {
        setAtiveBtn(activeBtn);
        navigate(url);
    }

    return (
        // <!-- Navbar -->
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark navbar-div p-2 fixed-top border-0 border">
                {/* <a className="navbar-brand d-flex align-items-center" >
                    <img src={profile_pic} alt="Avatar Logo" className="rounded-circle profile_pic" />
                </a> */}
                <button className="navbar-toggler btn btn-sm" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-mobile">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav me-auto">
                        <li className={`nav-item btn btn-sm li-btn ${activeBtn == 1 ? 'li-btn-select' : ''}`} onClick={() => { navigateToRoute('/', 1) }}>
                            Home
                        </li>
                            <li className={`nav-item btn btn-sm li-btn ${activeBtn == 2 ? 'li-btn-select' : ''}`} onClick={() => { navigateToRoute('/projects', 2) }}>
                            Projects
                        </li>
                        <li className={`nav-item btn btn-sm li-btn ${activeBtn == 3 ? 'li-btn-select' : ''}`} onClick={() => { navigateToRoute('/technology', 3) }}>
                            Technolory
                        </li>
                        <li className={`nav-item btn btn-sm li-btn ${activeBtn == 4 ? 'li-btn-select' : ''}`} onClick={() => { navigateToRoute('/technology-overview', 4) }}>
                            Technolory Overview
                        </li>
                        <li className={`nav-item btn btn-sm li-btn ${activeBtn == 5 ? 'li-btn-select' : ''}`} onClick={() => { navigateToRoute('/resume', 5) }}>
                            Resume
                        </li>
                        <li className={`nav-item btn btn-sm li-btn ${activeBtn == 6 ? 'li-btn-select' : ''}`} onClick={() => { navigateToRoute('/cover-letter', 6) }}>
                            Cover letter
                        </li>
                        <li className={`nav-item btn btn-sm li-btn ${activeBtn == 7 ? 'li-btn-select' : ''}`} onClick={() => { navigateToRoute('/video-interview', 7) }}>
                            Video Interview
                        </li>
                        {/* <li className={`nav-item btn btn-sm li-btn ${activeBtn == 6 ? 'li-btn-select' : ''}`} onClick={() => { navigateToRoute('/pdf-cv', 6) }}>
                            PDF CV
                        </li> */}
                    </ul>
                </div>
            </nav>
            <div className="offcanvas offcanvas-start text-bg-dark transparent-div" id="offcanvas-mobile" style={{ width: 'auto' }}>
                <div className="offcanvas-header">
                    <button type="button" className="btn btn-close btn-sm btn-close-white" data-bs-dismiss="offcanvas"></button>
                </div>
                <div className="offcanvas-body p-0 d-flex align-items-start flex-column gap-3 justify-content-start mt-4 p-3">
                    <span className="d-flex align-items-center gap-2" onClick={() => { navigateToRoute('/', 1) }}>
                        <img src={homeIcon} title='Home' className={`menu-icon-all rounded-circle text-bg-light btn btn-sm  menu-icon ${activeBtn == 1 ? 'border border-3 border-warning' : ''}`} />
                        <span className={`${activeBtn == 1 ? 'text-warning border p-2 border-warning' : ''}`}>Home</span>
                    </span>
                     <span className="d-flex align-items-center gap-2" onClick={() => { navigateToRoute('/projects', 2) }}>
                        <img src={project} title='Project' className={`menu-icon-all rounded-circle text-bg-light btn btn-sm  menu-icon ${activeBtn == 2 ? 'border border-3 border-warning' : ''}`} />
                        <span className={`${activeBtn == 2 ? 'text-warning border p-2 border-warning' : ''}`}>Projects</span>
                    </span>
                    <span className="d-flex align-items-center gap-2" onClick={() => { navigateToRoute('/technology', 3) }}>
                        <img src={Technology} title='Technology' className={`menu-icon-all rounded-circle text-bg-light btn btn-sm  menu-icon ${activeBtn == 3 ? 'border border-3 border-warning' : ''}`} />
                        <span className={`${activeBtn == 3 ? 'text-warning border p-2 p-2 border-warning' : ''}`}>Technology</span>
                    </span>
                    <span className="d-flex align-items-center gap-2 " onClick={() => { navigateToRoute('/technology-overview', 4) }}>
                        <img src={Technology} title='Technology' className={`menu-icon-all rounded-circle text-bg-light btn btn-sm  menu-icon ${activeBtn == 4 ? 'border border-3 border-warning' : ''}`} />
                        <span className={`${activeBtn == 4 ? 'text-warning border p-2 p-2 border-warning' : ''}`}>Technology Overview</span>
                    </span>
                    <span className="d-flex align-items-center gap-2" onClick={() => { navigateToRoute('/resume', 5) }}>
                        <img src={resumeIcon} title='Resume' className={`menu-icon-all rounded-circle text-bg-light btn btn-sm  menu-icon ${activeBtn == 5 ? 'border border-3 border-warning' : ''}`} />
                        <span className={`${activeBtn == 5 ? 'text-warning border p-2 p-2 border-warning border p-2 p-2 border-warning' : ''}`}>Resume</span>
                    </span>
                    <span className="d-flex align-items-center gap-2" onClick={() => { navigateToRoute('/cover-letter', 6) }}>
                        <img src={covverletterIcon} title='Cover Letter' className={`menu-icon-all rounded-circle text-bg-light btn btn-sm  menu-icon ${activeBtn == 6 ? 'border border-3 border-warning' : ''}`} />
                        <span className={`${activeBtn == 6 ? 'text-warning border p-2 p-2 border-warning' : ''}`}>Cover Letter</span>
                    </span>
                    <span className="d-flex align-items-center gap-2" onClick={() => { navigateToRoute('/video-interview', 7) }}>
                        <img src={videointerviewIcon} title='Video Interview' className={`menu-icon-all rounded-circle text-bg-light btn btn-sm  menu-icon ${activeBtn == 7 ? 'border border-3 border-warning' : ''}`} />
                        <span className={`${activeBtn == 7 ? 'text-warning border p-2 p-2 border-warning' : ''}`}>Video Interview</span>
                    </span>
                    {/* <img src={videointerviewIcon} title='Video Interview' className={`menu-icon-all rounded-circle text-bg-light btn btn-sm  menu-icon ${activeBtn == 6 ? 'border border-3 border-warning' : ''}`} onClick={() => { navigateToRoute('/pdf-cv', 6) }} /> */}
                </div>
            </div>
        </>

    )

}

export default Navbar;