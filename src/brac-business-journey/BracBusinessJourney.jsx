import React from 'react';
import './BracBusinessJourney.scss';

function BracBusinessJourney() {
  // The embedded page calls scrollIntoView() on its own rail on load, which
  // scrolls the iframe's document down and clips its header — reset it once
  // the page has finished its own initial render/animation setup.
  const handleLoad = (event) => {
    const win = event.target.contentWindow;
    setTimeout(() => {
      try {
        win.scrollTo(0, 0);
      } catch {
        // cross-origin or already-unloaded iframe — nothing to reset
      }
    }, 100);
  };

  return (
    <div className="brac-journey-page">
      <iframe
        className="brac-journey-frame"
        src={`${import.meta.env.BASE_URL}brac-bank-business-journey.html`}
        title="BRAC Bank Business Journey"
        onLoad={handleLoad}
      />
    </div>
  );
}

export default BracBusinessJourney;
