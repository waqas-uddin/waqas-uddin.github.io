import { memo, useId } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * BackgroundPaths — 21st.dev "Background Paths / Shape Landing Hero"
 * Animated diagonal SVG paths that flow across the hero background,
 * creating a futuristic, tech-inspired visual effect.
 */

const PATHS_PER_SIDE = 8;

// Pre-compute stable durations outside the component to keep renders pure
const PATH_DURATIONS = Array.from({ length: PATHS_PER_SIDE }, (_, i) => 20 + (i % 5) * 2.5);

const FloatingPaths = memo(({ position }) => {
  const uid = useId();
  const gradientId = `pathGrad-${uid.replace(/:/g, '')}`;
  const shouldReduce = useReducedMotion();

  const paths = Array.from({ length: PATHS_PER_SIDE }, (_, i) => {
    const offset = i * 10 * position;
    const yBase = -189 + i * 12;
    return {
      id: i,
      d: [
        `M${-380 - offset} ${yBase}`,
        `C${-380 - offset} ${yBase}`,
        `${-312 - offset} ${216 - i * 12}`,
        `${152 - offset} ${343 - i * 12}`,
        `C${616 - offset} ${470 - i * 12}`,
        `${684 - offset} ${875 - i * 12}`,
        `${684 - offset} ${875 - i * 12}`,
      ].join(' '),
      width: 0.5 + i * 0.04,
      duration: PATH_DURATIONS[i],
      delay: i * 0.4,
    };
  });

  if (shouldReduce) {
    return (
      <div className="absolute inset-0 w-full h-full">
        <svg className="w-full h-full" viewBox="0 0 696 316" fill="none" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6C63FF" />
              <stop offset="50%" stopColor="#00D4FF" />
              <stop offset="100%" stopColor="#6C63FF" />
            </linearGradient>
          </defs>
          {paths.map((path) => (
            <path key={path.id} d={path.d} fill="none" stroke={`url(#${gradientId})`} strokeWidth={path.width} opacity={0.2} />
          ))}
        </svg>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full" style={{ willChange: 'transform', contain: 'strict' }}>
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
              opacity: [0, 0.6 + (path.id / PATHS_PER_SIDE) * 0.4, 0],
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
});

FloatingPaths.displayName = 'FloatingPaths';

const BackgroundPaths = memo(() => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
    <FloatingPaths position={1} />
    <FloatingPaths position={-1} />
  </div>
));

BackgroundPaths.displayName = 'BackgroundPaths';

export default BackgroundPaths;
