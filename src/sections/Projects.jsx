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
};

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
    whileHover={{ y: -10 }}
    className="glass rounded-2xl overflow-hidden border border-dark-border hover:border-primary/30 transition-all group"
  >
    {/* Top Color Bar */}
    <div
      className="h-1 w-full"
      style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
    />

    <div className="p-8">
      {/* Project Number */}
      <div
        className="text-5xl font-black mb-4 opacity-10 group-hover:opacity-20 transition-opacity"
        style={{ color: project.color }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-all">
        {project.title}
      </h3>

      <p className="text-slate-400 leading-relaxed mb-6 text-sm">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full text-xs font-medium"
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
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-300 glass border border-dark-border hover:border-primary/50 hover:text-white transition-all"
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
