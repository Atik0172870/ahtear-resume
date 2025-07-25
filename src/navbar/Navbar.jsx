import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import profile_pic from '../assets/Ahtear_rahman.JPG';
import menuIcon from '../assets/circle-menu.svg';
import homeIcon from '../assets/home.svg';
import resumeIcon from '../assets/resume.svg';
import covverletterIcon from '../assets/covverletter.svg';
import videointerviewIcon from '../assets/video-interview.svg';
import Technology from '../assets/technology.png';

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
                        <li className={`nav-item btn btn-sm li-btn ${activeBtn == 2 ? 'li-btn-select' : ''}`} onClick={() => { navigateToRoute('/technology', 2) }}>
                            Technolory
                        </li>
                        <li className={`nav-item btn btn-sm li-btn ${activeBtn == 3 ? 'li-btn-select' : ''}`} onClick={() => { navigateToRoute('/technology-overview', 3) }}>
                            Technolory Overview
                        </li>
                        <li className={`nav-item btn btn-sm li-btn ${activeBtn == 4 ? 'li-btn-select' : ''}`} onClick={() => { navigateToRoute('/resume', 4) }}>
                            Resume
                        </li>
                        <li className={`nav-item btn btn-sm li-btn ${activeBtn == 5 ? 'li-btn-select' : ''}`} onClick={() => { navigateToRoute('/cover-letter', 5) }}>
                            Cover letter
                        </li>
                        <li className={`nav-item btn btn-sm li-btn ${activeBtn == 6 ? 'li-btn-select' : ''}`} onClick={() => { navigateToRoute('/video-interview', 6) }}>
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
                <div className="offcanvas-body p-0 d-flex align-items-center flex-column gap-3 justify-content-start mt-4 p-2">
                    <span className="d-flex align-items-center flex-column"  onClick={() => { navigateToRoute('/', 1) }}>Home
                        <img src={homeIcon} title='Home' className={`menu-icon-all rounded-circle text-bg-light btn btn-sm  menu-icon ${activeBtn == 1 ? 'border border-3 border-warning' : ''}`} />
                    </span>
                    <span className="d-flex align-items-center flex-column"  onClick={() => { navigateToRoute('/technology', 2) }}>Technology
                        <img src={Technology} title='Technology' className={`menu-icon-all rounded-circle text-bg-light btn btn-sm  menu-icon ${activeBtn == 2 ? 'border border-3 border-warning' : ''}`} />
                    </span>
                        <span className="d-flex align-items-center flex-column"  onClick={() => { navigateToRoute('/technology-overview', 3) }}>Technology Overview
                        <img src={Technology} title='Technology' className={`menu-icon-all rounded-circle text-bg-light btn btn-sm  menu-icon ${activeBtn == 3 ? 'border border-3 border-warning' : ''}`} />
                    </span>
                    <span className="d-flex align-items-center flex-column"  onClick={() => { navigateToRoute('/resume', 4) }}>Resume
                        <img src={resumeIcon} title='Resume' className={`menu-icon-all rounded-circle text-bg-light btn btn-sm  menu-icon ${activeBtn == 4 ? 'border border-3 border-warning' : ''}`} />
                    </span>
                    <span className="d-flex align-items-center flex-column"  onClick={() => { navigateToRoute('/cover-letter', 5) }}>Cover Letter
                        <img src={covverletterIcon} title='Cover Letter' className={`menu-icon-all rounded-circle text-bg-light btn btn-sm  menu-icon ${activeBtn == 5 ? 'border border-3 border-warning' : ''}`} />
                    </span>
                    <span className="d-flex align-items-center flex-column"  onClick={() => { navigateToRoute('/video-interview', 6) }}>Video Interview
                        <img src={videointerviewIcon} title='Video Interview' className={`menu-icon-all rounded-circle text-bg-light btn btn-sm  menu-icon ${activeBtn == 6 ? 'border border-3 border-warning' : ''}`} />
                    </span>
                    {/* <img src={videointerviewIcon} title='Video Interview' className={`menu-icon-all rounded-circle text-bg-light btn btn-sm  menu-icon ${activeBtn == 6 ? 'border border-3 border-warning' : ''}`} onClick={() => { navigateToRoute('/pdf-cv', 6) }} /> */}
                </div>
            </div>
        </>

    )

}

export default Navbar;