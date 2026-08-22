import React, { useEffect, useRef, useState } from 'react';

function WorkflowStepper({ entity }) {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const intervalRef = useRef(null);

  const steps = entity.workflow;
  const total = steps.length;

  useEffect(() => {
    if (!playing) return;
    intervalRef.current = setInterval(() => {
      setCurrent((c) => {
        if (c >= total - 1) {
          setPlaying(false);
          return c;
        }
        return c + 1;
      });
    }, 850);
    return () => clearInterval(intervalRef.current);
  }, [playing, total]);

  const goTo = (i) => {
    setPlaying(false);
    setCurrent(Math.max(0, Math.min(total - 1, i)));
  };

  const handlePlayToggle = (e) => {
    e.stopPropagation();
    if (playing) { setPlaying(false); return; }
    if (current >= total - 1) setCurrent(0);
    setPlaying(true);
  };

  const handleReset = (e) => {
    e.stopPropagation();
    setPlaying(false);
    setCurrent(0);
  };

  const pct = total > 1 ? (current / (total - 1)) * 100 : 0;
  const detailText = (entity.workflowDesc && entity.workflowDesc[current]) || steps[current];

  return (
    <div className="wf-block">
      <div className="wf-head">
        <span className="wf-title">Internal Workflow</span>
        <button className="wf-btn" onClick={handlePlayToggle}>{playing ? '⏸ Pause' : '▶ Play'}</button>
        <button className="wf-btn" onClick={handleReset}>↺ Reset</button>
        <span className="wf-readout">Step {current + 1} / {total}</span>
      </div>
      <div className="wf-rail">
        <div className="wf-line-bg" />
        <div className="wf-line-fg" style={{ width: `calc((100% - 26px) * ${pct / 100})` }} />
        <div className="wf-steps">
          {steps.map((step, i) => (
            <div
              key={step}
              className={`wf-step ${i < current ? 'past' : ''} ${i === current ? 'active' : ''}`}
              onClick={(e) => { e.stopPropagation(); goTo(i); }}
            >
              <div className="wf-dot" />
              <div className="wf-step-label">{step}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="wf-detail-line">{detailText}</div>
    </div>
  );
}

export default WorkflowStepper;
