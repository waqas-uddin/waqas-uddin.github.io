import { useRef, useState, useCallback } from 'react';

/**
 * SpotlightCard — 21st.dev-inspired card with a radial glow
 * that follows the mouse position within the card.
 *
 * Usage:
 *   <SpotlightCard className="glass rounded-2xl p-6 ...">
 *     {children}
 *   </SpotlightCard>
 */
const SpotlightCard = ({
  children,
  className = '',
  spotlightColor = 'rgba(108, 99, 255, 0.13)',
  ...rest
}) => {
  const cardRef = useRef(null);
  const rafRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (rect) setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      rafRef.current = null;
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    setIsHovered(false);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
      {...rest}
    >
      {/* Spotlight overlay */}
      <div
        className="absolute inset-0 rounded-[inherit] pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle 180px at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent 70%)`,
          zIndex: 1,
        }}
      />
      {/* Content sits above the overlay */}
      <div className="relative z-[2]">{children}</div>
    </div>
  );
};

export default SpotlightCard;
