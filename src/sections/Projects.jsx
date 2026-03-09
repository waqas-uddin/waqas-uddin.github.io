import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../data';

const techColors = {
  'React': '#61DAFB',
  'Node.js': '#68A063',
  'Express.js': '#999',
  'MongoDB': '#47A248',
  'Vite': '#646CFF',
  'TypeScript': '#3178C6',
  'Spring Boot': '#6DB33F',
  'Flutter': '#54C5F8',
  'HTML': '#E34F26',
  'CSS': '#1572B6',
  'JavaScript': '#F7DF1E',
  'C++': '#00599C',
};

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ y: 40 }}
    whileInView={{ y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
    whileHover={{ y: -8 }}
    className="glass rounded-2xl overflow-hidden border dark:border-dark-border border-slate-200 hover:border-primary/30 transition-all group"
  >
    {/* Project Image */}
    <div className="relative overflow-hidden" style={{ height: '180px' }}>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement.style.background = `linear-gradient(135deg, ${project.color}20, ${project.color}05)`;
        }}
      />
      {/* Top Color Bar */}
      <div
        className="absolute top-0 left-0 w-full h-1"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />
    </div>

    <div className="p-6">
      <h3 className="text-lg font-bold dark:text-white text-slate-900 mb-2 group-hover:text-primary transition-all">
        {project.title}
      </h3>

      <p className="dark:text-slate-400 text-slate-600 leading-relaxed mb-4 text-sm">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-full text-xs font-medium"
            style={{
              background: `${techColors[tech] || '#6C63FF'}15`,
              color: techColors[tech] || '#6C63FF',
              border: `1px solid ${techColors[tech] || '#6C63FF'}30`,
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium dark:text-slate-300 text-slate-700 glass border dark:border-dark-border border-slate-200 hover:border-primary/50 dark:hover:text-white hover:text-slate-900 transition-all"
        >
          <FaGithub size={16} /> GitHub
        </motion.a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <SectionTitle title="Featured Projects" subtitle="My Work" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;

