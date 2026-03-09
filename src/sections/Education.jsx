import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import { education } from '../data';
import { HiAcademicCap } from 'react-icons/hi';

const Education = () => {
  return (
    <SectionWrapper id="education">
      <SectionTitle title="Education" subtitle="Academic Background" />

      <div className="max-w-2xl mx-auto">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5, boxShadow: `0 20px 60px ${edu.color}15` }}
            className="glass rounded-2xl p-8 border border-dark-border hover:border-primary/30 transition-all"
          >
            <div className="flex items-start gap-6">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${edu.color}20`, border: `1px solid ${edu.color}30` }}
              >
                <HiAcademicCap size={30} style={{ color: edu.color }} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                    <p className="text-primary font-medium mt-1">{edu.degree}</p>
                  </div>
                  <span
                    className="text-xs px-3 py-1.5 rounded-full font-medium"
                    style={{
                      background: `${edu.color}15`,
                      color: edu.color,
                      border: `1px solid ${edu.color}30`,
                    }}
                  >
                    {edu.period}
                  </span>
                </div>
                <p className="text-slate-400 text-sm">
                  Focused on computer science fundamentals, software engineering, data structures, algorithms, and modern web development technologies.
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;
