import React, { forwardRef, useMemo } from 'react';
import { CATS, MODULES, CAT_COLOR, DEPT_BY_ID } from './data';
import WorkflowStepper from './WorkflowStepper';
import { useEntityGrid } from './useEntityGrid';

const FLAGSHIP_IDS = MODULES.filter((m) => m.flagship).map((m) => m.id);

const ModulesGrid = forwardRef(function ModulesGrid({ onJumpToDept }, ref) {
  const { filter, setFilter, openIds, toggleOpen, linkedId, registerCardRef } = useEntityGrid(ref, FLAGSHIP_IDS);

  const filtered = useMemo(() => MODULES.filter((m) => filter === 'all' || m.cat === filter), [filter]);

  return (
    <>
      <div className="filters">
        <div className={`chip ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All modules</div>
        {CATS.map((c) => (
          <div key={c.id} className={`chip ${filter === c.id ? 'active' : ''}`} onClick={() => setFilter(c.id)}>
            {c.label}
          </div>
        ))}
      </div>
      <div className="mod-grid">
        {filtered.map((m) => {
          const isOpen = openIds.has(m.id);
          const dept = DEPT_BY_ID[m.dept];
          return (
            <div
              key={m.id}
              id={`modcard-${m.id}`}
              ref={registerCardRef(m.id)}
              className={`mod-card ${isOpen ? 'open' : ''} ${linkedId === m.id ? 'linked' : ''}`}
              style={{ '--cat-color': CAT_COLOR[m.cat] }}
              onClick={(e) => { if (e.target.closest('.wf-block') || e.target.closest('[data-role="owner"]')) return; toggleOpen(m.id); }}
            >
              <div className="mod-card-top">
                <span className="mod-code">{m.code}</span>
                <span className="mod-name">{m.name}</span>
                {m.flagship ? <span className="flagship-tag">Worked Example</span> : null}
                <span
                  className="mod-owner"
                  data-role="owner"
                  onClick={(e) => { e.stopPropagation(); onJumpToDept(m.dept); }}
                >
                  {dept ? dept.name : ''}
                </span>
              </div>
              <div className="mod-purpose">{m.purpose}</div>
              {!isOpen && <div className="mod-expand-hint">Click to expand ▾</div>}
              {isOpen && (
                <div className="mod-detail">
                  <div className="mod-field"><b>Customer role</b><span>{m.customer}</span></div>
                  <div className="mod-field"><b>Bank / officer role</b><span>{m.bank}</span></div>
                  <div className="mod-field"><b>System role</b><span>{m.system}</span></div>
                  <div className="mod-field"><b>Input</b><span>{m.input}</span></div>
                  <div className="mod-field"><b>Output</b><span>{m.output}</span></div>
                  <div className="mod-field"><b>Depends on</b><span>{m.dependsOn}</span></div>
                  <div className="mod-field full"><b>Used by</b><span>{m.usedBy}</span></div>
                  <WorkflowStepper entity={m} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
});

export default ModulesGrid;
