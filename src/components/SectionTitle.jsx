import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-primary text-sm font-semibold tracking-widest uppercase mb-3"
      >
        {subtitle}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-white"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '80px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="h-1 mx-auto mt-4 rounded-full"
        style={{ background: 'linear-gradient(90deg, #6C63FF, #00D4FF)' }}
      />
    </div>
  );
};

export default SectionTitle;
