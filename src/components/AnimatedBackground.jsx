import { motion } from 'framer-motion';

/**
 * Full-page animated background with:
 * - CSS dot/grid pattern
 * - Floating gradient orbs
 * - Fade-edge vignette
 */
const AnimatedBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
    {/* Dot grid */}
    <div className="absolute inset-0 bg-dot opacity-100" />

    {/* Vignette — fades edges so grid doesn't compete with content */}
    <div
      className="absolute inset-0"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 50% 0%, transparent 60%, var(--bg-primary) 100%)',
      }}
    />

    {/* Purple orb — top-left */}
    <motion.div
      animate={{ scale: [1, 1.25, 1], opacity: [0.18, 0.28, 0.18] }}
      transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(108,99,255,0.18) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }}
    />

    {/* Cyan orb — bottom-right */}
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.22, 0.12] }}
      transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(0,212,255,0.14) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }}
    />

    {/* Pink orb — center-right */}
    <motion.div
      animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }}
      transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
      className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(255,107,157,0.1) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }}
    />
  </div>
);

export default AnimatedBackground;
