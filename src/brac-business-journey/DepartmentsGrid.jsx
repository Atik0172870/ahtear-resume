import React, { forwardRef } from 'react';
import { DEPT_DOMAINS, DEPARTMENTS, DOMAIN_COLOR } from './data';
import WorkflowStepper from './WorkflowStepper';
import { useEntityGrid } from './useEntityGrid';

const DepartmentsGrid = forwardRef(function DepartmentsGrid(_props, ref) {
  const { filter, setFilter, openIds, toggleOpen, linkedId, registerCardRef } = useEntityGrid(ref);

  const filtered = DEPARTMENTS.filter((d) => filter === 'all' || d.domain === filter);

  return (
    <>
      <div className="filters">
        <div className={`chip ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All departments</div>
        {DEPT_DOMAINS.map((d) => (
          <div key={d.id} className={`chip ${filter === d.id ? 'active' : ''}`} onClick={() => setFilter(d.id)}>
            {d.label.replace(/^\d+\s·\s/, '')}
          </div>
        ))}
      </div>
      <div className="mod-grid">
        {filtered.map((d) => {
          const isOpen = openIds.has(d.id);
          return (
            <div
              key={d.id}
              id={`deptcard-${d.id}`}
              ref={registerCardRef(d.id)}
              className={`mod-card ${isOpen ? 'open' : ''} ${linkedId === d.id ? 'linked' : ''}`}
              style={{ '--cat-color': DOMAIN_COLOR[d.domain] }}
              onClick={(e) => { if (e.target.closest('.wf-block')) return; toggleOpen(d.id); }}
            >
              <div className="mod-card-top">
                <span className="mod-code">{d.code}</span>
                <span className="mod-name">{d.name}</span>
              </div>
              <div className="mod-purpose">{d.purpose}</div>
              {!isOpen && <div className="mod-expand-hint">Click to expand ▾</div>}
              {isOpen && (
                <div className="mod-detail">
                  <div className="mod-field full">
                    <div className="flow-pair">
                      <b>{d.receives}</b>
                      <span className="arrow">→ receives → this desk → hands to →</span>
                      <b>{d.handsTo}</b>
                    </div>
                  </div>
                  <div className="mod-field"><b>Human duty</b><span>{d.human}</span></div>
                  <div className="mod-field"><b>System duty</b><span>{d.system}</span></div>
                  <WorkflowStepper entity={d} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
});

export default DepartmentsGrid;
