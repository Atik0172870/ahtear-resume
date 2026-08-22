import React, { useEffect, useRef, useState } from 'react';
import './BracBusinessJourney.scss';
import BusinessFlowSection from './BusinessFlowSection';
import LiveHandoffMap from './LiveHandoffMap';
import DepartmentsGrid from './DepartmentsGrid';
import ModulesGrid from './ModulesGrid';

const NAV_ITEMS = [
  { id: 'sec-flow', label: '01 · The Business Flow' },
  { id: 'sec-handoff', label: '02 · Live Handoff Map' },
  { id: 'sec-departments', label: '03 · Departments' },
  { id: 'sec-modules', label: '04 · Modules' },
];

const STAT_ITEMS = [
  { target: 'sec-flow', num: 8, label: 'Domains' },
  { target: 'sec-flow', num: 32, label: 'Stages' },
  { target: 'sec-handoff', num: 6, label: 'Live Scenarios' },
  { target: 'sec-departments', num: 21, label: 'Departments' },
  { target: 'sec-modules', num: 24, label: 'Modules' },
];

// Reads the app's own fixed-top navbar height live (48px desktop, 56px on
// the collapsed mobile layout) instead of guessing a fixed constant.
function getAppNavbarHeight() {
  const navbar = document.querySelector('.navbar-div');
  return navbar ? navbar.getBoundingClientRect().height : 48;
}

function BracBusinessJourney() {
  const deptGridRef = useRef(null);
  const modGridRef = useRef(null);
  const [activeNav, setActiveNav] = useState(NAV_ITEMS[0].id);

  const jumpToDept = (id) => deptGridRef.current?.jumpTo(id);
  const jumpToModule = (id) => modGridRef.current?.jumpTo(id);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - (getAppNavbarHeight() + 74);
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  useEffect(() => {
    function updateScrollSpy() {
      let currentId = NAV_ITEMS[0].id;
      const scrollPos = window.scrollY + 90 + getAppNavbarHeight();
      NAV_ITEMS.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) currentId = item.id;
      });
      setActiveNav(currentId);
    }
    window.addEventListener('scroll', updateScrollSpy, { passive: true });
    updateScrollSpy();
    return () => window.removeEventListener('scroll', updateScrollSpy);
  }, []);

  return (
    <div className="brac-journey-page">
      <div className="brac-journey">
        <div className="wrap">
          <header>
            <div>
              <div className="eyebrow">BRAC Bank · Retail Banking</div>
              <h1>Master Business &amp; Department Blueprint</h1>
              <div className="subtitle">The full 32-stage journey across 8 business domains, a live animated map of how cases actually move between departments — including what happens when work gets sent back — and what every department and module is responsible for.</div>
            </div>
            <div className="ledger-id">
              FOLIO No. RB / 2026 — REV.3<br />
              8 DOMAINS · 32 STAGES · 6 SCENARIOS<br />
              20+ DEPARTMENTS · 24 MODULES
            </div>
          </header>

          <nav className="stickynav">
            <div className="stickynav-inner">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className={`navlink ${activeNav === item.id ? 'on' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  <span className="navdot" />{item.label}
                </div>
              ))}
            </div>
          </nav>

          <div className="howto">
            <div className="howto-cell">
              <div className="howto-num">01</div>
              <div className="howto-title">Watch the whole journey</div>
              <div className="howto-desc">Press play on the top rail to see a customer's entire lifecycle stamp through, stage by stage.</div>
            </div>
            <div className="howto-cell">
              <div className="howto-num">02</div>
              <div className="howto-title">See where cases bounce back</div>
              <div className="howto-desc">Run a scenario on the handoff map to watch a real case move between desks — and loop back when work gets returned.</div>
            </div>
            <div className="howto-cell">
              <div className="howto-num">03</div>
              <div className="howto-title">Drill into who's responsible</div>
              <div className="howto-desc">Click any department or module chip anywhere on the page to jump straight to its full responsibility record.</div>
            </div>
          </div>

          <div className="statbar">
            {STAT_ITEMS.map((stat) => (
              <div key={stat.label} className="stat-cell" onClick={() => scrollToSection(stat.target)}>
                <div className="stat-num">{stat.num}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="caveat">
            <b>Scope note —</b> the stage-to-department mapping below is my best-effort construction from the business blueprint and department breakdown you provided. It is not confirmed against BRAC Bank's actual internal org chart, queue names, or SLAs — validate it against real SOPs before treating it as an engineering spec.
          </div>

          <BusinessFlowSection onJumpToDept={jumpToDept} onJumpToModule={jumpToModule} />
          <LiveHandoffMap onJumpToDept={jumpToDept} />

          <div className="section-head" id="sec-departments">
            <span className="section-num">03</span>
            <span className="section-title">The Department Responsibility Directory</span>
            <span className="section-sub">Who does what: purpose, human duty, system duty, upstream and downstream handoffs, and each department's own internal workflow.</span>
          </div>
          <DepartmentsGrid ref={deptGridRef} />

          <div className="section-head" id="sec-modules">
            <span className="section-num">04</span>
            <span className="section-title">The Module &amp; Responsibility Ledger</span>
            <span className="section-sub">The 24 functional modules behind the departments above — each with its own playable internal workflow.</span>
          </div>
          <ModulesGrid ref={modGridRef} onJumpToDept={jumpToDept} />

          <footer>Click any stamp to jump to a stage · Click a department chip to see who owns it · Click a module chip to see how it works · Business-domain blueprint, retail banking journey</footer>
        </div>
      </div>
    </div>
  );
}

export default BracBusinessJourney;
