import { useId } from 'react';
import { motion } from 'framer-motion';

/**
 * BackgroundPaths — 21st.dev "Background Paths / Shape Landing Hero"
 * Animated diagonal SVG paths that flow across the hero background,
 * creating a futuristic, tech-inspired visual effect.
 */

const NUM_PATHS = 36;

// Pre-compute stable random durations outside the component to keep renders pure
const PATH_DURATIONS = Array.from({ length: NUM_PATHS }, (_, i) => 20 + (i % 5) * 2.5);

const FloatingPaths = ({ position }) => {
  const uid = useId();
  const gradientId = `pathGrad-${uid.replace(/:/g, '')}`;
  const paths = Array.from({ length: NUM_PATHS }, (_, i) => {
    const offset = i * 5 * position;
    const yBase = -189 + i * 6;
    return {
      id: i,
      d: [
        `M${-380 - offset} ${yBase}`,
        `C${-380 - offset} ${yBase}`,
        `${-312 - offset} ${216 - i * 6}`,
        `${152 - offset} ${343 - i * 6}`,
        `C${616 - offset} ${470 - i * 6}`,
        `${684 - offset} ${875 - i * 6}`,
        `${684 - offset} ${875 - i * 6}`,
      ].join(' '),
      width: 0.5 + i * 0.03,
      duration: PATH_DURATIONS[i],
      delay: i * 0.2,
    };
  });

  return (
    <div className="absolute inset-0 w-full h-full">
      <svg
        className="w-full h-full"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6C63FF" />
            <stop offset="50%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#6C63FF" />
          </linearGradient>
        </defs>

        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth={path.width}
            initial={{ pathLength: 0.3, opacity: 0 }}
            animate={{
              pathLength: [0.3, 1.5],
              opacity: [0, 0.6 + (path.id / NUM_PATHS) * 0.4, 0],
            }}
            transition={{
              duration: path.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: path.delay,
              times: [0, 0.5, 1],
            }}
          />
        ))}
      </svg>
    </div>
  );
};

const BackgroundPaths = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
    <FloatingPaths position={1} />
    <FloatingPaths position={-1} />
  </div>
);

export default BackgroundPaths;
