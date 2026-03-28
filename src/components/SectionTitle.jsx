import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      {/* Subtitle with bracket decorators */}
      <motion.p
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase mb-4 text-primary"
      >
        <span className="text-primary/40">{'['}</span>
        {subtitle}
        <span className="text-primary/40">{']'}</span>
      </motion.p>

      <motion.h2
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-display text-4xl md:text-5xl font-bold dark:text-white text-slate-900"
      >
        {title}
      </motion.h2>

      {/* Gradient underline */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '80px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="h-0.5 mx-auto mt-4 rounded-full"
        style={{ background: 'linear-gradient(90deg, #6C63FF, #00D4FF)' }}
      />
    </div>
  );
};

export default SectionTitle;
