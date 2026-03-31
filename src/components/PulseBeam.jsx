import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * PulseBeam — 21st.dev "Pulse Beams" component
 * Wraps children with animated SVG beam pulses that radiate outward,
 * creating a futuristic, glowing sonar/radar effect on the resume button.
 */

const BEAMS = [
  { angle: -45, delay: 0 },
  { angle: 45, delay: 0.3 },
  { angle: 135, delay: 0.6 },
  { angle: 225, delay: 0.9 },
];

const BEAM_LENGTH = 60;
const BEAM_START = 22;

const PulseBeam = memo(({ children, color = '#00D4FF', className = '' }) => {
  const shouldReduce = useReducedMotion();

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {/* SVG beams layer — positioned absolutely behind children */}
      {!shouldReduce && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ margin: '-30px' }}
          aria-hidden="true"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="-60 -60 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-visible"
            style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '160px', height: '160px' }}
          >
            {BEAMS.map((beam) => {
              const radians = (beam.angle * Math.PI) / 180;
              const x1 = Math.cos(radians) * BEAM_START;
              const y1 = Math.sin(radians) * BEAM_START;
              const x2 = Math.cos(radians) * (BEAM_START + BEAM_LENGTH);
              const y2 = Math.sin(radians) * (BEAM_START + BEAM_LENGTH);

              return (
                <motion.line
                  key={beam.angle}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={color}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 1, 0],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeOut',
                    delay: beam.delay,
                    repeatDelay: 1.5,
                  }}
                />
              );
            })}

            {/* Concentric pulsing rings */}
            {[1, 1.6].map((scale, idx) => (
              <motion.circle
                key={idx}
                cx={0}
                cy={0}
                r={BEAM_START - 2}
                fill="none"
                stroke={color}
                strokeWidth="1"
                initial={{ scale: 1, opacity: 0 }}
                animate={{
                  scale: [1, scale * 1.4],
                  opacity: [0.4, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeOut',
                  delay: idx * 0.8,
                  repeatDelay: 0.5,
                }}
                style={{ transformOrigin: '0px 0px' }}
              />
            ))}
          </svg>
        </div>
      )}

      {/* The actual content (button) */}
      {children}
    </div>
  );
});

PulseBeam.displayName = 'PulseBeam';

export default PulseBeam;
