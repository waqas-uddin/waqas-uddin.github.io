import { motion } from 'framer-motion';
import {
  SiReact, SiJavascript, SiHtml5, SiCss, SiTailwindcss, SiFlutter,
  SiNodedotjs, SiExpress, SiSpringboot, SiMongodb, SiMysql, SiCplusplus
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';
import { BsDatabase } from 'react-icons/bs';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';

const skillsData = {
  Frontend: [
    { name: 'React', Icon: SiReact, color: '#61DAFB' },
    { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
    { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', Icon: SiCss, color: '#1572B6' },
    { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Flutter', Icon: SiFlutter, color: '#54C5F8' },
  ],
  Backend: [
    { name: 'Node.js', Icon: SiNodedotjs, color: '#68A063' },
    { name: 'Express.js', Icon: SiExpress, color: '#CCCCCC' },
    { name: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F' },
    { name: 'REST APIs', Icon: TbApi, color: '#FF6B6B' },
    { name: 'JWT Auth', Icon: MdSecurity, color: '#6C63FF' },
  ],
  Databases: [
    { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
    { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
  ],
  Languages: [
    { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Java', Icon: FaJava, color: '#ED8B00' },
    { name: 'C++', Icon: SiCplusplus, color: '#00599C' },
    { name: 'SQL', Icon: BsDatabase, color: '#336791' },
  ],
};

const SkillCard = ({ name, Icon, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35, delay, ease: [0.25, 0.1, 0.25, 1] }}
    whileHover={{ y: -8, boxShadow: `0 20px 40px ${color}20` }}
    className="glass rounded-2xl p-5 flex flex-col items-center gap-3 border border-dark-border hover:border-white/10 transition-all cursor-default group"
  >
    <div
      className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
      style={{ background: `${color}15` }}
    >
      <Icon size={28} style={{ color }} />
    </div>
    <span className="text-slate-300 text-sm font-medium text-center">{name}</span>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-dark-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Tech Stack" subtitle="Skills & Expertise" />

        <div className="space-y-12">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-lg font-semibold text-slate-400 mb-6 flex items-center gap-3"
              >
                <span
                  className="w-8 h-px"
                  style={{ background: 'linear-gradient(90deg, #6C63FF, #00D4FF)' }}
                />
                {category}
              </motion.h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skills.map((skill, i) => (
                  <SkillCard key={skill.name + i} {...skill} delay={i * 0.05} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
