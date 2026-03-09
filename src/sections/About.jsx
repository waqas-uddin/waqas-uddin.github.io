import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import { FaCode, FaServer, FaMobile } from 'react-icons/fa';

const About = () => {
  const cards = [
    { icon: FaCode, title: 'Frontend', desc: 'React, JavaScript, HTML5, CSS3, Tailwind CSS, Flutter' },
    { icon: FaServer, title: 'Backend', desc: 'Node.js, Express.js, Spring Boot, REST APIs' },
    { icon: FaMobile, title: 'Mobile', desc: 'Flutter, React Native concepts, Cross-platform' },
  ];

  return (
    <SectionWrapper id="about">
      <SectionTitle title="About Me" subtitle="Who I Am" />

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Full Stack Developer &{' '}
            <span className="gradient-text">Problem Solver</span>
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            Waqas Ahmed is a Full Stack Developer specializing in React, Node.js, Express.js, MongoDB, and Java Spring Boot. Experienced in building scalable RESTful APIs, authentication systems, and production-ready applications with clean architecture and modern development practices.
          </p>
          <p className="text-slate-400 leading-relaxed mb-8">
            Currently pursuing a Bachelor of Science in Computer Science at FAST NUCES Karachi, with hands-on internship experience delivering real-world projects in both corporate and startup environments.
          </p>
          <div className="flex flex-wrap gap-3">
            {['React', 'Node.js', 'MongoDB', 'Spring Boot', 'TypeScript', 'Flutter'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 rounded-full text-sm font-medium glass border border-primary/30 text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-4"
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ x: 8, boxShadow: '0 0 30px rgba(108,99,255,0.15)' }}
              className="glass rounded-2xl p-6 flex items-center gap-5 border border-dark-border hover:border-primary/30 transition-all cursor-default"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, rgba(108,99,255,0.2), rgba(0,212,255,0.2))' }}
              >
                <card.icon size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg">{card.title}</h4>
                <p className="text-slate-400 text-sm mt-1">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
