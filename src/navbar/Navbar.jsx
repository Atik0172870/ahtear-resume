import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import menuIcon from '../assets/circle-menu.svg';
import homeIcon from '../assets/home.svg';
import resumeIcon from '../assets/resume.svg';
import covverletterIcon from '../assets/covverletter.svg';
import videointerviewIcon from '../assets/video-interview.svg';
import Technology from '../assets/technology.png';
import project from '../assets/project.png';


import './Navbar.scss';

const ROUTES = {
    HOME: { id: 1, path: '/' },
    PROJECTS: { id: 2, path: '/projects' },
    TECHNOLOGY: { id: 3, path: '/technology' },
    TECHNOLOGY_OVERVIEW: { id: 4, path: '/technology-overview' },
    RESUME: { id: 5, path: '/resume' },
    COVER_LETTER: { id: 6, path: '/cover-letter' },
    VIDEO_INTERVIEW: { id: 7, path: '/video-interview' },
};

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const activeBtn = Object.values(ROUTES).find((route) => route.path === location.pathname)?.id ?? ROUTES.HOME.id;

    const navigateToRoute = (url) => {
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
                        <li className={`nav-item btn btn-sm li-btn ${activeBtn == ROUTES.HOME.id ? 'li-btn-select' : ''}`} onClick={() => { navigateToRoute(ROUTES.HOME.path) }}>
                            Home
                        </li>
                            <li className={`nav-item btn btn-sm li-btn ${activeBtn == ROUTES.PROJECTS.id ? 'li-btn-select' : ''}`} onClick={() => { navigateToRoute(ROUTES.PROJECTS.path) }}>
                            Projects
                        </li>
                        <li className={`nav-item btn btn-sm li-btn ${activeBtn == ROUTES.TECHNOLOGY.id ? 'li-btn-select' : ''}`} onClick={() => { navigateToRoute(ROUTES.TECHNOLOGY.path) }}>
                            Technolory
                        </li>
                        <li className={`nav-item btn btn-sm li-btn ${activeBtn == ROUTES.TECHNOLOGY_OVERVIEW.id ? 'li-btn-select' : ''}`} onClick={() => { navigateToRoute(ROUTES.TECHNOLOGY_OVERVIEW.path) }}>
                            Technolory Overview
                        </li>
                        <li className={`nav-item btn btn-sm li-btn ${activeBtn == ROUTES.RESUME.id ? 'li-btn-select' : ''}`} onClick={() => { navigateToRoute(ROUTES.RESUME.path) }}>
                            Resume
                        </li>
                        <li className={`nav-item btn btn-sm li-btn ${activeBtn == ROUTES.COVER_LETTER.id ? 'li-btn-select' : ''}`} onClick={() => { navigateToRoute(ROUTES.COVER_LETTER.path) }}>
                            Cover letter
                        </li>
                        <li className={`nav-item btn btn-sm li-btn ${activeBtn == ROUTES.VIDEO_INTERVIEW.id ? 'li-btn-select' : ''}`} onClick={() => { navigateToRoute(ROUTES.VIDEO_INTERVIEW.path) }}>
                            Video Interview
                        </li>
                        {/* <li className={`nav-item btn btn-sm li-btn ${activeBtn == 6 ? 'li-btn-select' : ''}`} onClick={() => { navigateToRoute('/pdf-cv') }}>
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
                    <span className="d-flex align-items-center gap-2" data-bs-dismiss="offcanvas" onClick={() => { navigateToRoute(ROUTES.HOME.path) }}>
                        <img src={homeIcon} title='Home' className={`menu-icon-all rounded-circle text-bg-light btn btn-sm  menu-icon ${activeBtn == ROUTES.HOME.id ? 'border border-3 border-warning' : ''}`} />
                        <span className={`${activeBtn == ROUTES.HOME.id ? 'text-warning border p-2 border-warning' : ''}`}>Home</span>
                    </span>
                     <span className="d-flex align-items-center gap-2" data-bs-dismiss="offcanvas" onClick={() => { navigateToRoute(ROUTES.PROJECTS.path) }}>
                        <img src={project} title='Project' className={`menu-icon-all rounded-circle text-bg-light btn btn-sm  menu-icon ${activeBtn == ROUTES.PROJECTS.id ? 'border border-3 border-warning' : ''}`} />
                        <span className={`${activeBtn == ROUTES.PROJECTS.id ? 'text-warning border p-2 border-warning' : ''}`}>Projects</span>
                    </span>
                    <span className="d-flex align-items-center gap-2" data-bs-dismiss="offcanvas" onClick={() => { navigateToRoute(ROUTES.TECHNOLOGY.path) }}>
                        <img src={Technology} title='Technology' className={`menu-icon-all rounded-circle text-bg-light btn btn-sm  menu-icon ${activeBtn == ROUTES.TECHNOLOGY.id ? 'border border-3 border-warning' : ''}`} />
                        <span className={`${activeBtn == ROUTES.TECHNOLOGY.id ? 'text-warning border p-2 p-2 border-warning' : ''}`}>Technology</span>
                    </span>
                    <span className="d-flex align-items-center gap-2 " data-bs-dismiss="offcanvas" onClick={() => { navigateToRoute(ROUTES.TECHNOLOGY_OVERVIEW.path) }}>
                        <img src={Technology} title='Technology' className={`menu-icon-all rounded-circle text-bg-light btn btn-sm  menu-icon ${activeBtn == ROUTES.TECHNOLOGY_OVERVIEW.id ? 'border border-3 border-warning' : ''}`} />
                        <span className={`${activeBtn == ROUTES.TECHNOLOGY_OVERVIEW.id ? 'text-warning border p-2 p-2 border-warning' : ''}`}>Technology Overview</span>
                    </span>
                    <span className="d-flex align-items-center gap-2" data-bs-dismiss="offcanvas" onClick={() => { navigateToRoute(ROUTES.RESUME.path) }}>
                        <img src={resumeIcon} title='Resume' className={`menu-icon-all rounded-circle text-bg-light btn btn-sm  menu-icon ${activeBtn == ROUTES.RESUME.id ? 'border border-3 border-warning' : ''}`} />
                        <span className={`${activeBtn == ROUTES.RESUME.id ? 'text-warning border p-2 p-2 border-warning border p-2 p-2 border-warning' : ''}`}>Resume</span>
                    </span>
                    <span className="d-flex align-items-center gap-2" data-bs-dismiss="offcanvas" onClick={() => { navigateToRoute(ROUTES.COVER_LETTER.path) }}>
                        <img src={covverletterIcon} title='Cover Letter' className={`menu-icon-all rounded-circle text-bg-light btn btn-sm  menu-icon ${activeBtn == ROUTES.COVER_LETTER.id ? 'border border-3 border-warning' : ''}`} />
                        <span className={`${activeBtn == ROUTES.COVER_LETTER.id ? 'text-warning border p-2 p-2 border-warning' : ''}`}>Cover Letter</span>
                    </span>
                    <span className="d-flex align-items-center gap-2" data-bs-dismiss="offcanvas" onClick={() => { navigateToRoute(ROUTES.VIDEO_INTERVIEW.path) }}>
                        <img src={videointerviewIcon} title='Video Interview' className={`menu-icon-all rounded-circle text-bg-light btn btn-sm  menu-icon ${activeBtn == ROUTES.VIDEO_INTERVIEW.id ? 'border border-3 border-warning' : ''}`} />
                        <span className={`${activeBtn == ROUTES.VIDEO_INTERVIEW.id ? 'text-warning border p-2 p-2 border-warning' : ''}`}>Video Interview</span>
                    </span>
                </div>
            </div>
        </>

    )

}

export default Navbar;
