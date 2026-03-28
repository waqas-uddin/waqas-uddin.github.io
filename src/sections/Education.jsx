import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import SpotlightCard from '../components/SpotlightCard';
import { education } from '../data';
import { HiAcademicCap } from 'react-icons/hi';

const Education = () => {
  return (
    <SectionWrapper id="education">
      <SectionTitle title="Education" subtitle="Academic Background" />

      <div className="max-w-2xl mx-auto">
        {education.map((edu) => (
          <motion.div
            key={edu.id}
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
          >
            <SpotlightCard
              className="glass rounded-2xl p-8 border dark:border-dark-border border-slate-200 card-futuristic"
              spotlightColor={`${edu.color}18`}
            >
              <div className="flex items-start gap-6">
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0], scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${edu.color}18`, border: `1px solid ${edu.color}30`, boxShadow: `0 0 20px ${edu.color}20` }}
                >
                  <HiAcademicCap size={30} style={{ color: edu.color }} />
                </motion.div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <div>
                      <h3 className="font-display text-xl font-bold dark:text-white text-slate-900">{edu.institution}</h3>
                      <p className="font-medium mt-1 text-sm" style={{ color: edu.color }}>{edu.degree}</p>
                    </div>
                    <span
                      className="text-xs px-3 py-1.5 rounded-full font-medium font-mono"
                      style={{
                        background: `${edu.color}12`,
                        color: edu.color,
                        border: `1px solid ${edu.color}30`,
                      }}
                    >
                      {edu.period}
                    </span>
                  </div>
                  <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">
                    Focused on computer science fundamentals, software engineering, data structures, algorithms, and modern web development technologies.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;
