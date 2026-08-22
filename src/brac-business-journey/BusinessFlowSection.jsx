import React, { useEffect, useMemo, useRef, useState } from 'react';
import { STAGES, DOMAIN_COLOR, DOMAIN_LABEL_SHORT, DEPT_BY_ID, MOD_BY_ID } from './data';

const NODE_W = 82;
const pad = (n) => String(n + 1).padStart(2, '0');

function dwellTime(stage, speedMult) {
  const base = 2400 / speedMult;
  if (stage.branches) {
    const maxLen = Math.max(...stage.branches.tracks.map((t) => t.items.length));
    return Math.max(base, (maxLen + 1) * Math.max(260, 520 / speedMult) + 500);
  }
  return base;
}

function BusinessFlowSection({ onJumpToDept, onJumpToModule }) {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speedMult, setSpeedMult] = useState(1);
  const [branchStep, setBranchStep] = useState(0);
  const railOuterRef = useRef(null);
  const nodeRefs = useRef({});

  const stage = STAGES[current];

  const domainSegments = useMemo(() => {
    const segs = [];
    let i = 0;
    while (i < STAGES.length) {
      const dom = STAGES[i].domain;
      let j = i;
      while (j < STAGES.length && STAGES[j].domain === dom) j++;
      segs.push({ domain: dom, count: j - i, key: `${dom}-${i}` });
      i = j;
    }
    return segs;
  }, []);

  const goTo = (i) => setCurrent(((i % STAGES.length) + STAGES.length) % STAGES.length);

  // Autoplay, one dwell-timer per stage.
  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => goTo(current + 1), dwellTime(stage, speedMult));
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, current, speedMult]);

  // Start playing shortly after first mount, mirroring the original page.
  useEffect(() => {
    const t = setTimeout(() => setPlaying(true), 600);
    return () => clearTimeout(t);
  }, []);

  // Step the branch-track highlight animation whenever the stage changes.
  useEffect(() => {
    setBranchStep(0);
    if (!stage.branches) return;
    const maxLen = Math.max(...stage.branches.tracks.map((t) => t.items.length));
    const stepMs = Math.max(260, 520 / speedMult);
    let step = 0;
    const id = setInterval(() => {
      step += 1;
      setBranchStep(step);
      if (step > maxLen) clearInterval(id);
    }, stepMs);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, speedMult]);

  // Bring the active node into view — horizontal-only, so it never bubbles
  // into a vertical scroll of the page (rail-outer is the only scroller).
  useEffect(() => {
    const nodeEl = nodeRefs.current[current];
    const container = railOuterRef.current;
    if (!nodeEl || !container) return;
    const target = nodeEl.offsetLeft - container.clientWidth / 2 + nodeEl.clientWidth / 2;
    container.scrollTo({ left: target, behavior: 'smooth' });
  }, [current]);

  const pct = (current / (STAGES.length - 1)) * 100;
  const dept = DEPT_BY_ID[stage.dept];

  return (
    <>
      <div className="section-head" id="sec-flow">
        <span className="section-num">01</span>
        <span className="section-title">The Business Flow</span>
        <span className="section-sub">32 stages, grouped into 8 domains, each stage owned by one department.</span>
      </div>

      <div className="controls">
        <button className="btn icon primary" onClick={() => setPlaying((p) => !p)}>{playing ? '⏸ Pause' : '▶ Play'}</button>
        <button className="btn icon" onClick={() => { setPlaying(false); goTo(current - 1); }}>← Prev</button>
        <button className="btn icon" onClick={() => { setPlaying(false); goTo(current + 1); }}>Next ▶</button>
        <button className="btn icon" onClick={() => { setPlaying(false); goTo(0); }}>↺ Restart</button>
        <select className="speed-select" value={speedMult} onChange={(e) => setSpeedMult(parseFloat(e.target.value))}>
          <option value="1.6">Speed: Fast</option>
          <option value="1">Speed: Normal</option>
          <option value="0.55">Speed: Slow</option>
        </select>
        <div className="progress-readout">Stage <b>{pad(current)}</b> / 32</div>
      </div>

      <div className="rail-outer" ref={railOuterRef}>
        <div className="scroll-content" style={{ minWidth: STAGES.length * NODE_W }}>
          <div className="domain-band">
            {domainSegments.map((seg) => (
              <div key={seg.key} className="domain-seg" style={{ flex: seg.count, background: DOMAIN_COLOR[seg.domain] }}>
                {DOMAIN_LABEL_SHORT[seg.domain]}
              </div>
            ))}
          </div>
          <div className="rail">
            <div className="rail-line-bg" />
            <div className="rail-line-fg" style={{ width: `calc((100% - 38px) * ${pct / 100})` }} />
            {STAGES.map((s, i) => (
              <div
                key={s.title}
                ref={(el) => { nodeRefs.current[i] = el; }}
                className={`node ${i < current ? 'past' : ''} ${i === current ? 'active' : ''}`}
                style={{ '--phase-color': DOMAIN_COLOR[s.domain] }}
                onClick={() => { setPlaying(false); goTo(i); }}
              >
                <div className="stamp">{pad(i)}</div>
                <div className="node-label">{s.title}</div>
                <div className="dept-tag">{DEPT_BY_ID[s.dept] ? DEPT_BY_ID[s.dept].name : ''}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="loop-note">Stage 32 loops back to <span>07 · Product Selection</span> — a retained customer's new need re-enters the flow</div>

      <div className="detail" style={{ '--phase-color': DOMAIN_COLOR[stage.domain] }}>
        <div className="detail-top">
          <span className="detail-num">{pad(current)}</span>
          <span className="detail-title">{stage.title}</span>
          <span className="detail-phase">{DOMAIN_LABEL_SHORT[stage.domain]}</span>
        </div>
        <div className="detail-desc">{stage.desc}</div>
        <div className="detail-row">
          <span className="detail-row-label">Owning dept</span>
          <span className="dept-chip-mini" onClick={() => onJumpToDept(stage.dept)}>{dept ? dept.name : '—'}</span>
        </div>
        {stage.branches && (
          <div className="branches">
            {stage.branches.tracks.map((track) => (
              <div className="track" key={track.name} style={{ '--track-color': track.color }}>
                <div className="track-head">{track.name}</div>
                <div className="track-items">
                  {track.items.map((item, idx) => (
                    <div key={item} className={`titem ${idx < branchStep ? 'done' : ''} ${idx === branchStep ? 'live' : ''}`}>{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        {stage.modules.length > 0 && (
          <div className="detail-row">
            <span className="detail-row-label">Modules</span>
            {stage.modules.map((id) => {
              const m = MOD_BY_ID[id];
              if (!m) return null;
              return (
                <span key={id} className="mod-chip-mini" onClick={() => onJumpToModule(id)}>{m.name}</span>
              );
            })}
          </div>
        )}
      </div>

      <div className="legend">
        <div className="legend-item"><span className="legend-dot" style={{ background: 'var(--c-acquire)' }} />1 Acquire</div>
        <div className="legend-item"><span className="legend-dot" style={{ background: 'var(--c-know)' }} />2 Know</div>
        <div className="legend-item"><span className="legend-dot" style={{ background: 'var(--c-sell)' }} />3 Originate</div>
        <div className="legend-item"><span className="legend-dot" style={{ background: 'var(--c-assess)' }} />4 Assess / Decide</div>
        <div className="legend-item"><span className="legend-dot" style={{ background: 'var(--c-fund)' }} />5 Fulfill / Fund</div>
        <div className="legend-item"><span className="legend-dot" style={{ background: 'var(--c-use)' }} />6 Use / Service</div>
        <div className="legend-item"><span className="legend-dot" style={{ background: 'var(--c-control)' }} />7 Control</div>
        <div className="legend-item"><span className="legend-dot" style={{ background: 'var(--c-close)' }} />8 Settle / Close</div>
      </div>
    </>
  );
}

export default BusinessFlowSection;
