import { motion } from 'framer-motion';
import {
  SiReact, SiJavascript, SiHtml5, SiCss, SiTailwindcss, SiFlutter,
  SiNodedotjs, SiExpress, SiSpringboot, SiMongodb, SiMysql, SiCplusplus
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';
import { BsDatabase } from 'react-icons/bs';
import SectionTitle from '../components/SectionTitle';
import SpotlightCard from '../components/SpotlightCard';
import BorderBeam from '../components/BorderBeam';

const skillsData = {
  Frontend: [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss, color: '#1572B6' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Flutter', icon: SiFlutter, color: '#54C5F8' },
  ],
  Backend: [
    { name: 'Node.js', icon: SiNodedotjs, color: '#68A063' },
    { name: 'Express.js', icon: SiExpress, color: '#CCCCCC' },
    { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
    { name: 'REST APIs', icon: TbApi, color: '#FF6B6B' },
    { name: 'JWT Auth', icon: MdSecurity, color: '#6C63FF' },
  ],
  Databases: [
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  ],
  Languages: [
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Java', icon: FaJava, color: '#ED8B00' },
    { name: 'C++', icon: SiCplusplus, color: '#00599C' },
    { name: 'SQL', icon: BsDatabase, color: '#336791' },
  ],
};

const SkillCard = ({ name, icon: IconComp, color, delay }) => (
  <motion.div
    initial={{ scale: 0.85 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35, delay, ease: [0.25, 0.1, 0.25, 1] }}
    className="group"
  >
    <SpotlightCard
      className="relative glass rounded-2xl p-5 flex flex-col items-center gap-3 border dark:border-dark-border border-slate-200 card-futuristic h-full overflow-hidden"
      spotlightColor={`${color}22`}
    >
      <BorderBeam colorFrom={color} colorTo={`${color}60`} duration={5} />
      <motion.div
        whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.3 }}
        className="w-14 h-14 rounded-xl flex items-center justify-center"
        style={{
          background: `${color}15`,
          boxShadow: `0 0 15px ${color}20`,
        }}
      >
        <IconComp size={28} style={{ color }} />
      </motion.div>
      <span className="dark:text-slate-300 text-slate-700 text-sm font-medium text-center">{name}</span>
    </SpotlightCard>
  </motion.div>
);

const categoryColors = {
  Frontend: '#6C63FF',
  Backend: '#00D4FF',
  Databases: '#47A248',
  Languages: '#F59E0B',
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 dark:bg-dark-card/20 bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Tech Stack" subtitle="Skills & Expertise" />

        <div className="space-y-14">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category}>
              <motion.div
                initial={{ x: -20 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex items-center gap-3 mb-6"
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{
                    background: categoryColors[category] || '#6C63FF',
                    boxShadow: `0 0 8px ${categoryColors[category] || '#6C63FF'}`,
                  }}
                />
                <span
                  className="text-sm font-semibold tracking-widest uppercase"
                  style={{ color: categoryColors[category] || '#6C63FF' }}
                >
                  {category}
                </span>
                <div
                  className="flex-1 h-px"
                  style={{ background: `linear-gradient(90deg, ${categoryColors[category] || '#6C63FF'}40, transparent)` }}
                />
              </motion.div>

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
