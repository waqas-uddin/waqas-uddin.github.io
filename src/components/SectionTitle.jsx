import { motion } from 'framer-motion';

const letterVariants = {
  hidden: { y: 40, rotateX: -90 },
  visible: (i) => ({
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, delay: i * 0.04, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      {/* Subtitle badge */}
      <motion.p
        initial={{ y: 16, scale: 0.9 }}
        whileInView={{ y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.28em] uppercase mb-5 px-4 py-1.5 rounded-full glass border border-primary/20 text-primary badge-glow"
      >
        <span
          className="w-1.5 h-1.5 rounded-full bg-primary"
          style={{ boxShadow: '0 0 6px rgba(108,99,255,0.9)' }}
        />
        {subtitle}
        <span
          className="w-1.5 h-1.5 rounded-full bg-accent"
          style={{ boxShadow: '0 0 6px rgba(0,212,255,0.9)' }}
        />
      </motion.p>

      {/* Title with per-letter reveal */}
      <div
        className="font-display text-4xl md:text-5xl font-bold dark:text-white text-slate-900 overflow-hidden"
        style={{ perspective: '600px' }}
      >
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-flex flex-wrap justify-center gap-x-[0.06em]"
        >
          {title.split('').map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              className="inline-block"
              style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.span>
      </div>

      {/* Animated gradient underline */}
      <div className="flex items-center justify-center gap-2 mt-5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '48px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-px rounded-full"
          style={{ background: 'linear-gradient(90deg, transparent, #6C63FF)' }}
        />
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.45 }}
          className="w-1.5 h-1.5 rounded-full bg-primary"
          style={{ boxShadow: '0 0 8px rgba(108,99,255,0.9)' }}
        />
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '80px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-px rounded-full"
          style={{ background: 'linear-gradient(90deg, #6C63FF, #00D4FF)' }}
        />
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="w-1 h-1 rounded-full bg-accent"
          style={{ boxShadow: '0 0 8px rgba(0,212,255,0.9)' }}
        />
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '48px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-px rounded-full"
          style={{ background: 'linear-gradient(90deg, #00D4FF, transparent)' }}
        />
      </div>
    </div>
  );
};

export default SectionTitle;
