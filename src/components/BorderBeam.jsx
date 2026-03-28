/**
 * BorderBeam — 21st.dev-inspired animated conic-gradient border beam.
 *
 * Uses @property CSS (Chrome 85+, Firefox 128+, Safari 16.4+) to animate
 * --border-angle, creating a beam of light that travels around the card edge.
 *
 * Usage:
 *   <div className="relative ...">
 *     <BorderBeam />
 *     {children}
 *   </div>
 *
 * The parent must have `position: relative` and `overflow: hidden` OR you
 * can use the className prop to set border-radius matching the parent.
 */
const BorderBeam = ({
  colorFrom = '#6C63FF',
  colorTo = '#00D4FF',
  duration = 5,
  size = 200,
  className = '',
}) => (
  <div
    className={`border-beam absolute inset-0 rounded-[inherit] pointer-events-none ${className}`}
    style={{
      '--beam-color-from': colorFrom,
      '--beam-color-to': colorTo,
      '--beam-duration': `${duration}s`,
      '--beam-size': `${size}px`,
    }}
    aria-hidden="true"
  />
);

export default BorderBeam;
