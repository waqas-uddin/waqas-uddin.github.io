import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import { experiences } from '../data';
import { HiBriefcase } from 'react-icons/hi';

const Experience = () => {
  return (
    <section id="experience" className="py-24 dark:bg-dark-card/30 bg-slate-100/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Work Experience" subtitle="My Journey" />

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, #6C63FF, #00D4FF, transparent)' }}
          />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ x: -40 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute left-0 w-12 h-12 rounded-full flex items-center justify-center border-2"
                  style={{
                    background: `${exp.color}20`,
                    borderColor: exp.color,
                  }}
                >
                  <HiBriefcase style={{ color: exp.color }} size={20} />
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 5, boxShadow: `0 0 30px ${exp.color}15` }}
                  className="glass rounded-2xl p-6 border dark:border-dark-border border-slate-200 hover:border-primary/20 transition-all"
                >
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold dark:text-white text-slate-900">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{
                        background: `${exp.color}15`,
                        color: exp.color,
                        border: `1px solid ${exp.color}30`,
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 dark:text-slate-400 text-slate-600 text-sm">
                        <span className="text-primary mt-1 flex-shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

