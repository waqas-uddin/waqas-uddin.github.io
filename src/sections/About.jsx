import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import SpotlightCard from '../components/SpotlightCard';
import { FaCode, FaServer, FaMobile } from 'react-icons/fa';

const About = () => {
  const cards = [
    { icon: FaCode, title: 'Frontend', desc: 'React, JavaScript, HTML5, CSS3, Tailwind CSS, Flutter', color: '#6C63FF' },
    { icon: FaServer, title: 'Backend', desc: 'Node.js, Express.js, Spring Boot, REST APIs', color: '#00D4FF' },
    { icon: FaMobile, title: 'Mobile', desc: 'Flutter, React Native concepts, Cross-platform', color: '#FF6B9D' },
  ];

  const stats = [
    { value: '5+', label: 'Projects Built' },
    { value: '2', label: 'Internships' },
    { value: '4+', label: 'Years Learning' },
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
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-medium glass border border-primary/20 dark:text-slate-300 text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center glass rounded-xl py-4 border border-primary/10">
                <p className="font-display text-2xl font-bold gradient-text">{value}</p>
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
                className="glass rounded-2xl p-6 flex items-center gap-5 border dark:border-dark-border border-slate-200 card-futuristic"
                spotlightColor={`${card.color}18`}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${card.color}18`, border: `1px solid ${card.color}30` }}
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
