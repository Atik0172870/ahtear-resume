import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FLOW_NODES, FLOW_EDGES, SCENARIOS, COLW, nodeXY, edgePathD, DEPT_BY_ID } from './data';

function LiveHandoffMap({ onJumpToDept }) {
  const [scenarioId, setScenarioId] = useState(SCENARIOS[0].id);
  const [flowStepIdx, setFlowStepIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [flowSpeed, setFlowSpeed] = useState(1);
  const [visited, setVisited] = useState(() => new Set());
  const [feedbackHit, setFeedbackHit] = useState(() => new Set());
  const [litEdges, setLitEdges] = useState({});
  const [tokenXY, setTokenXY] = useState(null);
  const [activeNodeId, setActiveNodeId] = useState(null);
  const [log, setLog] = useState([]);
  const logRef = useRef(null);
  const flowmapOuterRef = useRef(null);

  const scenario = useMemo(() => SCENARIOS.find((s) => s.id === scenarioId), [scenarioId]);

  const mapWidth = useMemo(() => (Math.max(...FLOW_NODES.map((n) => n.col)) + 1) * COLW + 60, []);

  const resetFlowState = () => {
    setVisited(new Set());
    setFeedbackHit(new Set());
    setLitEdges({});
    setLog([]);
    setTokenXY(null);
    setActiveNodeId(null);
    setFlowStepIdx(0);
  };

  // Reset whenever the chosen scenario changes.
  useEffect(() => {
    setPlaying(false);
    resetFlowState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scenarioId]);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [log]);

  function applyStep(idx) {
    const step = scenario.steps[idx];
    const prevStep = idx > 0 ? scenario.steps[idx - 1] : null;
    setTokenXY(nodeXY(step.node));
    if (prevStep) {
      const key = `${prevStep.node}>${step.node}`;
      setLitEdges((prev) => ({ ...prev, [key]: step.feedbackHop ? 'feedback' : 'main' }));
    }
    setVisited((prev) => new Set(prev).add(step.node));
    setActiveNodeId(step.node);
    if (step.feedback) setFeedbackHit((prev) => new Set(prev).add(step.node));
    setLog((prev) => [...prev, { idx, note: step.note, isFeedback: !!(step.feedback || step.feedbackHop) }]);
  }

  // Drives playback: plays the first hop instantly, subsequent hops every
  // 1300ms/speed, then auto-pauses ~900ms/speed after the final hop.
  useEffect(() => {
    if (!playing) return;
    if (flowStepIdx >= scenario.steps.length) return;
    const delay = flowStepIdx === 0 ? 0 : 1300 / flowSpeed;
    const t = setTimeout(() => {
      applyStep(flowStepIdx);
      const next = flowStepIdx + 1;
      if (next >= scenario.steps.length) {
        setTimeout(() => setPlaying(false), 900 / flowSpeed);
      }
      setFlowStepIdx(next);
    }, delay);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, flowStepIdx, flowSpeed, scenarioId]);

  // Follow the moving token — horizontal-only, so it never bubbles into a
  // vertical scroll of the page (flowmap-outer is the only scroller).
  useEffect(() => {
    const container = flowmapOuterRef.current;
    if (!container || !tokenXY) return;
    const target = tokenXY.x - container.clientWidth / 2;
    container.scrollTo({ left: target, behavior: 'smooth' });
  }, [tokenXY]);

  const handlePlayClick = () => {
    if (playing) { setPlaying(false); return; }
    if (flowStepIdx >= scenario.steps.length) resetFlowState();
    setPlaying(true);
  };

  const handleReset = () => {
    setPlaying(false);
    resetFlowState();
    flowmapOuterRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
  };

  const activeNode = activeNodeId ? FLOW_NODES.find((n) => n.id === activeNodeId) : null;

  return (
    <>
      <div className="section-head" id="sec-handoff">
        <span className="section-num">02</span>
        <span className="section-title">The Live Department Handoff Map</span>
        <span className="section-sub">Watch an actual case move between desks — including what happens when it gets sent back.</span>
      </div>

      <div className="controls">
        <select className="speed-select" style={{ minWidth: 280 }} value={scenarioId} onChange={(e) => setScenarioId(e.target.value)}>
          {SCENARIOS.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
        </select>
        <button className="btn icon primary" onClick={handlePlayClick}>{playing ? '⏸ Pause' : '▶ Run Scenario'}</button>
        <button className="btn icon" onClick={handleReset}>↺ Reset</button>
        <select className="speed-select" value={flowSpeed} onChange={(e) => setFlowSpeed(parseFloat(e.target.value))}>
          <option value="1.6">Speed: Fast</option>
          <option value="1">Speed: Normal</option>
          <option value="0.5">Speed: Slow</option>
        </select>
        <div className="progress-readout">Hop <b>{Math.min(flowStepIdx, scenario.steps.length)}</b> / {scenario.steps.length}</div>
      </div>

      <div className="flowmap-outer" ref={flowmapOuterRef}>
        <div className="flowmap-inner" style={{ width: mapWidth, height: 490 }}>
          <svg className="flow-svg" viewBox={`0 0 ${mapWidth} 490`}>
            <defs>
              <marker id="arrow-main" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="var(--gold)" />
              </marker>
              <marker id="arrow-feedback" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="var(--c-control)" />
              </marker>
            </defs>
            {FLOW_EDGES.map((e) => {
              const key = `${e.from}>${e.to}`;
              const lit = litEdges[key];
              const baseCls = e.type === 'main' ? 'edge-main' : 'edge-feedback';
              const litCls = lit === 'feedback' ? ' lit-feedback' : lit === 'main' ? ' lit-main' : '';
              return (
                <path
                  key={key}
                  d={edgePathD(e)}
                  className={baseCls + litCls}
                  markerEnd={e.type === 'main' ? 'url(#arrow-main)' : 'url(#arrow-feedback)'}
                />
              );
            })}
          </svg>
          <div>
            {FLOW_NODES.map((n) => {
              const xy = nodeXY(n.id);
              const dept = DEPT_BY_ID[n.id];
              return (
                <div
                  key={n.id}
                  className={`flow-node ${n.terminal ? 'terminal' : ''} ${activeNodeId === n.id ? 'active' : ''} ${visited.has(n.id) ? 'visited' : ''} ${feedbackHit.has(n.id) ? 'feedback-hit' : ''}`}
                  style={{ left: xy.x, top: xy.y }}
                  title={dept ? `${dept.name} — ${dept.purpose}` : undefined}
                  onClick={() => { if (dept) onJumpToDept(n.id); }}
                >
                  <div className="flow-node-dot">{dept ? dept.code.replace('DEPT-', '') : ''}</div>
                  <div className="flow-node-label">{n.label}</div>
                </div>
              );
            })}
          </div>
          <div className={`flow-token ${tokenXY ? 'on' : ''}`} style={{ left: tokenXY ? tokenXY.x : 0, top: tokenXY ? tokenXY.y : 0 }} />
        </div>
      </div>

      <div className="flow-log-panel">
        <div className="flow-log-head">
          <span className="wf-title">Case Narrative</span>
          <span className="wf-readout">{activeNode ? activeNode.label : 'Not started'}</span>
        </div>
        <div className="flow-log" ref={logRef}>
          {log.length === 0 ? (
            <span className="flow-log-empty">Choose a scenario above and press Run to see a case move through the departments — including any feedback loop.</span>
          ) : log.map((entry, i) => (
            <div key={entry.idx} className={`flow-log-line ${entry.isFeedback ? 'is-feedback' : ''} ${i === log.length - 1 ? 'is-latest' : ''}`}>
              <b>Hop {entry.idx + 1}</b>{entry.note}
            </div>
          ))}
        </div>
      </div>

      <div className="legend" style={{ marginTop: 20 }}>
        <div className="legend-item"><span className="legend-dot" style={{ background: 'var(--gold)' }} />Forward handoff</div>
        <div className="legend-item"><span className="legend-dot" style={{ background: 'var(--c-control)' }} />Feedback / return / decline path</div>
      </div>
    </>
  );
}

export default LiveHandoffMap;
