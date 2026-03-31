import { memo } from 'react';

/**
 * Full-page animated background with:
 * - CSS dot/grid pattern
 * - Floating gradient orbs (CSS keyframe animations — no JS animation overhead)
 * - Fade-edge vignette
 */
const AnimatedBackground = memo(() => (
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
    <div
      className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full anim-orb-purple"
      style={{
        background: 'radial-gradient(circle, rgba(108,99,255,0.18) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }}
    />

    {/* Cyan orb — bottom-right */}
    <div
      className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full anim-orb-cyan"
      style={{
        background: 'radial-gradient(circle, rgba(0,212,255,0.14) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }}
    />

    {/* Pink orb — center-right */}
    <div
      className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full anim-orb-pink"
      style={{
        background: 'radial-gradient(circle, rgba(255,107,157,0.1) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }}
    />
  </div>
));

AnimatedBackground.displayName = 'AnimatedBackground';

export default AnimatedBackground;
