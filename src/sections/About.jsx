import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import SpotlightCard from '../components/SpotlightCard';
import AnimatedCounter from '../components/AnimatedCounter';
import BorderBeam from '../components/BorderBeam';
import { FaCode, FaServer, FaMobile } from 'react-icons/fa';

const About = () => {
  const cards = [
    { icon: FaCode, title: 'Frontend', desc: 'React, JavaScript, HTML5, CSS3, Tailwind CSS, Flutter', color: '#6C63FF' },
    { icon: FaServer, title: 'Backend', desc: 'Node.js, Express.js, Spring Boot, REST APIs', color: '#00D4FF' },
    { icon: FaMobile, title: 'Mobile', desc: 'Flutter, React Native concepts, Cross-platform', color: '#FF6B9D' },
  ];

  const stats = [
    { value: 5, suffix: '+', label: 'Projects Built' },
    { value: 2, suffix: '', label: 'Internships' },
    { value: 4, suffix: '+', label: 'Years Learning' },
  ];

  return (
    <SectionWrapper id="about">
      <SectionTitle title="About Me" subtitle="Who I Am" />

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ x: -40 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h3 className="font-display text-3xl font-bold dark:text-white text-slate-900 mb-5">
            Full Stack Developer &{' '}
            <span className="gradient-text">Problem Solver</span>
          </h3>
          <p className="dark:text-slate-400 text-slate-600 text-base leading-relaxed mb-4">
            Waqas Ahmed is a Full Stack Developer specializing in React, Node.js, Express.js, MongoDB, and Java Spring Boot. Experienced in building scalable RESTful APIs, authentication systems, and production-ready applications with clean architecture and modern development practices.
          </p>
          <p className="dark:text-slate-400 text-slate-600 leading-relaxed mb-8 text-sm">
            Currently pursuing a Bachelor of Science in Computer Science at FAST NUCES Karachi, with hands-on internship experience delivering real-world projects in both corporate and startup environments.
          </p>

          {/* Quick tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['React', 'Node.js', 'MongoDB', 'Spring Boot', 'TypeScript', 'Flutter'].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.08, boxShadow: '0 0 12px rgba(108,99,255,0.3)' }}
                className="px-3 py-1 rounded-full text-xs font-medium glass border border-primary/20 dark:text-slate-300 text-slate-700 transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Stats row with animated counters */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map(({ value, suffix, label }) => (
              <div key={label} className="relative text-center glass rounded-xl py-4 border border-primary/10 overflow-hidden group">
                <BorderBeam colorFrom="#6C63FF" colorTo="#00D4FF" duration={5} />
                <p className="font-display text-2xl font-bold gradient-text">
                  <AnimatedCounter target={value} suffix={suffix} />
                </p>
                <p className="text-xs dark:text-slate-400 text-slate-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ x: 40 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid gap-4"
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <SpotlightCard
                className="relative glass rounded-2xl p-6 flex items-center gap-5 border dark:border-dark-border border-slate-200 card-futuristic overflow-hidden"
                spotlightColor={`${card.color}18`}
              >
                <BorderBeam colorFrom={card.color} colorTo={`${card.color}80`} duration={6} />
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${card.color}18`,
                    border: `1px solid ${card.color}30`,
                    boxShadow: `0 0 15px ${card.color}20`,
                  }}
                >
                  <card.icon size={24} style={{ color: card.color }} />
                </motion.div>
                <div>
                  <h4 className="font-display dark:text-white text-slate-900 font-semibold text-base">{card.title}</h4>
                  <p className="dark:text-slate-400 text-slate-600 text-sm mt-1">{card.desc}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
