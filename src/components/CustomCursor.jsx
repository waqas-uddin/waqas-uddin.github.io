import { useEffect, useRef } from 'react';

/**
 * CustomCursor — 21st.dev-inspired glow cursor
 * Shows a small dot that follows instantly + a ring that lerps behind.
 * Only visible on devices that support hover (no touch).
 *
 * Uses event delegation for interactive elements so no cleanup is needed
 * when the DOM changes dynamically.
 */
const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(hover: none)').matches) return;

    let x = -100, y = -100;
    let rx = -100, ry = -100;
    let raf;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = x + 'px';
        dotRef.current.style.top = y + 'px';
      }
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      rx = lerp(rx, x, 0.12);
      ry = lerp(ry, y, 0.12);
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px';
        ringRef.current.style.top = ry + 'px';
      }
      raf = requestAnimationFrame(tick);
    };

    // Use event delegation on document — no per-element listener management needed
    const onDocEnter = (e) => {
      if (e.target.closest('a, button')) {
        dotRef.current?.classList.add('cursor-hover');
        ringRef.current?.classList.add('cursor-hover');
      }
    };
    const onDocLeave = (e) => {
      if (e.target.closest('a, button')) {
        dotRef.current?.classList.remove('cursor-hover');
        ringRef.current?.classList.remove('cursor-hover');
      }
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onDocEnter, { passive: true });
    document.addEventListener('mouseout', onDocLeave, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onDocEnter);
      document.removeEventListener('mouseout', onDocLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
