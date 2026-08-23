
import { data, printResumePDF } from './resume-data';
import profile_pic from '../assets/Ahtear_rahman.JPG';
import print_icon from '../assets/icons8-print-16.png';
import degree_icon from '../assets/mortarboard-education-svgrepo-com.svg';
import React, { useRef, useState } from 'react';
import './My-Resume.scss';

const PAGE_1_EXPERIENCE_COUNT = 2;

function SectionHeader({ icon, children }) {
  return (
    <h2 className="resume-section-header">
      {icon ? <img src={icon} className="resume-section-header__icon" alt="" /> : null}
      {children}
    </h2>
  );
}

function TechnologiesSection() {
  return (
    <section className="resume-section">
      <SectionHeader>Technologies</SectionHeader>
      <div className="tech-grid">
        {data.technologies.map((tech) => (
          <div className="tech-row" key={tech.label}>
            <strong className="tech-label">{tech.label}</strong>
            <span className="tech-value" dangerouslySetInnerHTML={{ __html: tech.value }} />
          </div>
        ))}
      </div>
    </section>
  );
}

function ExperienceEntry({ entry }) {
  return (
    <div className="experience-entry">
      <div className="experience-entry__head">
        <strong className="experience-entry__role">{entry.role}</strong>
        <span className="experience-entry__date">{entry.dateRange}</span>
      </div>
      <div className="experience-entry__company">
        {entry.company}{' => '}
        {entry.companyLinks.map((link, i) => (
          <React.Fragment key={link.href}>
            <a href={link.href} target="_blank" rel="noreferrer">{link.text}</a>
            {' | '}{link.href} {i < entry.companyLinks.length - 1 ? '| ' : ''}
          </React.Fragment>
        ))}

      </div>
      <div className="experience-entry__info">
        {entry.infoLines.map((line, i) => (
          <React.Fragment key={line}>
            <span dangerouslySetInnerHTML={{ __html: line }} />
            {i < entry.infoLines.length - 1 ? <br /> : null}
          </React.Fragment>
        ))}
      </div>
      {entry.bulletsHeader ? (
        <div className="experience-entry__bullets-header">{entry.bulletsHeader}</div>
      ) : null}
      <ul className="experience-entry__bullets">
        {entry.bullets.map((bullet) => (
          <li key={bullet} dangerouslySetInnerHTML={{ __html: bullet }} />
        ))}
      </ul>
    </div>
  );
}

function PageFooter({ pageNumber, totalPages }) {
  return (
    <div className="resume-page-footer">
      <span>MD Ahtear Rahman</span>
      <span>Experience: {data.experience} &middot; Page {pageNumber} of {totalPages}</span>
    </div>
  );
}

function Resume() {
  const page1Ref = useRef();
  const page2Ref = useRef();
  const [isDownloading, setIsDownloading] = useState(false);
  const firstPageExperience = data.experienceEntries.slice(0, PAGE_1_EXPERIENCE_COUNT);
  const secondPageExperience = data.experienceEntries.slice(PAGE_1_EXPERIENCE_COUNT);

  const handleDownloadPdf = async () => {
    setIsDownloading(true);
    try {
      await printResumePDF([page1Ref, page2Ref], 'AHTEAR-RAHMAN-CV');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className='mt-5 pt-5 d-flex flex-column align-items-center my-resume'>
      <div className='card border-0 a4-page resume-page' ref={page1Ref}>
        <div className='card-body resume-page__body'>
          <header className='resume-header'>
            <div className='resume-header__text'>
              <h1 className='resume-header__name'>{data.name}</h1>
              <p className='resume-header__title'>{data.title}</p>
              <p className='resume-header__skills' dangerouslySetInnerHTML={{ __html: data.skillsLine }} />
              <div className='resume-header__contacts '>
                {data.contacts.map((contact) => (
                  <span key={contact.label}>
                    {contact.label}: {contact.href
                      ? <a href={contact.href} target="_blank" rel="noreferrer">{contact.value}</a>
                      : contact.value}
                  </span>
                ))}
              </div>
            </div>
            {/* <img src={profile_pic} className='resume-header__photo' alt='MD Ahtear Rahman' /> */}
          </header>

          <section className="resume-section">
            <SectionHeader>Professional Summary</SectionHeader>
            <p className="resume-summary">{data.summary}</p>
          </section>

          <section className="resume-section">
            <SectionHeader>Key Achievements</SectionHeader>
            <ul className="key-achievements-list">
              {data.keyAchievements.map((item) => (
                <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </section>

          <TechnologiesSection />

          <section className="resume-section">
            <SectionHeader>Job Experience and Working History</SectionHeader>
            <div className="experience-list">
              {firstPageExperience.map((entry) => (
                <ExperienceEntry entry={entry} key={entry.role + entry.dateRange} />
              ))}
            </div>
          </section>

          <PageFooter pageNumber={1} totalPages={2} />
        </div>
      </div>

      <div className='card border-0 a4-page resume-page mt-4' ref={page2Ref}>
        <div className='card-body resume-page__body'>
          <section className="resume-section">
            <SectionHeader>Job Experience and Working History (continued)</SectionHeader>
            <div className="experience-list">
              {secondPageExperience.map((entry) => (
                <ExperienceEntry entry={entry} key={entry.role + entry.dateRange} />
              ))}
            </div>
          </section>

          <section className="resume-section">
            <SectionHeader icon={degree_icon}>Vendor Certification</SectionHeader>
            <ol className="two-col-list">
              {data.certifications.map((cert) => (
                <>
                  <li className='fw-semibold' key={cert.text}>
                    {cert.text} 
                    {/* <a href={cert.href} target="_blank" rel="noreferrer" className="cert-link">{cert.linkText}</a> */}
                    {/* <span>{cert.href}</span> */}
                  </li>
                  <p className='m-0'>{cert.href}</p>
                </>
              ))}
            </ol>
          </section>

          <section className="resume-section">
            <SectionHeader icon={degree_icon}>Academic Qualification / Degree</SectionHeader>
            {data.education.map((group) => (
              <div className="education-group" key={group.group}>
                <h3 className="education-group__title">{group.group}</h3>
                <ol className="two-col-list">
                  {group.items.map((line) => (
                    <li className='fw-medium' key={line}>{line}</li>
                  ))}
                </ol>
              </div>
            ))}
          </section>

          <div className="split-section">
            <section className="resume-section">
              <SectionHeader>Language Proficiency</SectionHeader>
              <p>{data.languages}</p>
            </section>
            <section className="resume-section">
              <SectionHeader>Activities</SectionHeader>
              <p>{data.activities}</p>
            </section>
          </div>

          <section className="resume-section">
            <SectionHeader>Notable Personal Projects</SectionHeader>
            <ul className="personal-projects-list">
              {data.personalProjects.map((project) => (
                <li key={project.name}>
                  <a href={project.href} target="_blank" rel="noreferrer" className="fw-semibold">{project.name}</a>: {project.description}
                </li>
              ))}
            </ul>
          </section>

          <PageFooter pageNumber={2} totalPages={2} />
        </div>
      </div>

      <div className='text-end mt-2 mb-2 d-flex gap-3 no-print'>
        <button className='btn btn-sm bg-dark btn-outline-warning text-white btn-print-2' onClick={() => window.print()}>
          <img src={print_icon} className='rounded-circle degree-icon' /> Print
        </button>
        <button className='btn btn-sm bg-dark btn-outline-warning text-white btn-print-2' onClick={handleDownloadPdf} disabled={isDownloading}>
          {isDownloading ? 'Preparing PDF…' : 'Download PDF'}
        </button>
      </div>
    </div>
  );
}
export default Resume;
