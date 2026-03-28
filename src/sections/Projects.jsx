import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import SpotlightCard from '../components/SpotlightCard';
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
    whileHover={{ y: -6 }}
    className="h-full"
  >
    <SpotlightCard
      className="glass rounded-2xl overflow-hidden border dark:border-dark-border border-slate-200 card-futuristic h-full flex flex-col"
      spotlightColor={`${project.color}18`}
    >
      {/* Top color accent */}
      <div
        className="h-1 w-full flex-shrink-0"
        style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}40)` }}
      />

      {/* Project image / fallback gradient */}
      <div
        className="relative overflow-hidden flex-shrink-0"
        style={{ height: '160px', background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)` }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500"
          loading="lazy"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        {/* Subtle corner glow */}
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(circle at 0% 0%, ${project.color}20 0%, transparent 60%)` }}
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3
          className="text-base font-bold dark:text-white text-slate-900 mb-2"
          style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}
        >
          {project.title}
        </h3>

        <p className="dark:text-slate-400 text-slate-600 leading-relaxed mb-4 text-sm flex-1">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 rounded-full text-xs font-medium"
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
        <div className="flex gap-3 mt-auto">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: `0 0 15px ${project.color}40` }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium dark:text-slate-300 text-slate-700 glass border dark:border-dark-border border-slate-200 hover:border-primary/50 dark:hover:text-white hover:text-slate-900 transition-all"
          >
            <FaGithub size={15} /> GitHub
          </motion.a>
        </div>
      </div>
    </SpotlightCard>
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
