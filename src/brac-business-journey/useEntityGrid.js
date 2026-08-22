import { useCallback, useImperativeHandle, useRef, useState } from 'react';

// Shared filter/expand/jump-to-card state for the Department and Module grids.
export function useEntityGrid(ref, defaultOpenIds = []) {
  const [filter, setFilter] = useState('all');
  const [openIds, setOpenIds] = useState(() => new Set(defaultOpenIds));
  const [linkedId, setLinkedId] = useState(null);
  const cardRefs = useRef({});

  const toggleOpen = useCallback((id) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }, []);

  const registerCardRef = useCallback((id) => (el) => { cardRefs.current[id] = el; }, []);

  useImperativeHandle(ref, () => ({
    jumpTo(id) {
      setFilter('all');
      setOpenIds((prev) => new Set(prev).add(id));
      setLinkedId(id);
      requestAnimationFrame(() => {
        cardRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
      setTimeout(() => setLinkedId((cur) => (cur === id ? null : cur)), 2200);
    },
  }), []);

  return { filter, setFilter, openIds, toggleOpen, linkedId, registerCardRef };
}
