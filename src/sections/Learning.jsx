import { motion } from 'framer-motion';
import { FaSitemap, FaCloud, FaLayerGroup } from 'react-icons/fa';
import {
  SiDocker, SiKubernetes, SiGithubactions, SiTerraform, SiNginx,
  SiRedis, SiGraphql, SiNextdotjs, SiTypescript, SiPostgresql,
} from 'react-icons/si';
import { MdArchitecture } from 'react-icons/md';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import SpotlightCard from '../components/SpotlightCard';

const learningItems = [
  {
    icon: FaSitemap,
    title: 'System Design & Architecture',
    description:
      'Studying scalable distributed systems, microservices, event-driven architecture, and design patterns to build systems that handle millions of users.',
    color: '#6C63FF',
    tags: ['Microservices', 'Event-Driven', 'CAP Theorem', 'Load Balancing', 'Caching', 'Message Queues'],
    progress: 40,
  },
  {
    icon: FaCloud,
    title: 'DevOps',
    description:
      'Learning CI/CD pipelines, containerisation, infrastructure as code, and cloud-native practices to automate and streamline the software delivery lifecycle.',
    color: '#00D4FF',
    tags: ['Docker', 'Kubernetes', 'GitHub Actions', 'Terraform', 'Nginx', 'Redis'],
    tagIcons: [SiDocker, SiKubernetes, SiGithubactions, SiTerraform, SiNginx, SiRedis],
    progress: 30,
  },
  {
    icon: FaLayerGroup,
    title: 'Full-Stack Mastery',
    description:
      'Deepening expertise across the entire stack — from advanced React patterns and TypeScript to server-side rendering, GraphQL, and production-grade database design.',
    color: '#FF6B6B',
    tags: ['Next.js', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Testing', 'Performance'],
    tagIcons: [SiNextdotjs, SiTypescript, SiGraphql, SiPostgresql, null, null],
    progress: 60,
  },
];

const ProgressBar = ({ progress, color }) => (
  <div className="mt-5">
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-xs dark:text-slate-400 text-slate-500 font-medium">Progress</span>
      <span className="text-xs font-semibold" style={{ color }}>{progress}%</span>
    </div>
    <div className="w-full h-1.5 rounded-full dark:bg-dark-border bg-slate-200 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${progress}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
      />
    </div>
  </div>
);

const LearningCard = ({ icon: IconComp, title, description, color, tags, progress, index }) => (
  <motion.div
    initial={{ y: 30 }}
    whileInView={{ y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
    className="h-full"
  >
    <SpotlightCard
      className="glass rounded-2xl p-7 flex flex-col border dark:border-dark-border border-slate-200 card-futuristic h-full"
      spotlightColor={`${color}22`}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <motion.div
          whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
          transition={{ duration: 0.4 }}
          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${color}18`, border: `1px solid ${color}30` }}
        >
          <IconComp size={26} style={{ color }} />
        </motion.div>
        <div>
          <h3 className="font-display dark:text-white text-slate-900 font-bold text-lg leading-snug">
            {title}
          </h3>
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold mt-1 px-2 py-0.5 rounded-full"
            style={{ background: `${color}18`, color }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: color }} />
            In Progress
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed flex-1">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-full text-xs font-medium glass border"
            style={{ borderColor: `${color}30`, color }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Progress bar */}
      <ProgressBar progress={progress} color={color} />
    </SpotlightCard>
  </motion.div>
);

const Learning = () => {
  return (
    <SectionWrapper id="learning">
      <SectionTitle title="Currently Learning" subtitle="Interests & Growth" />

      {/* Intro blurb */}
      <motion.p
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center dark:text-slate-400 text-slate-600 text-base max-w-2xl mx-auto mb-14"
      >
        Beyond my current skill set, I'm actively investing time in these areas to level up as an engineer and become a more well-rounded developer.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {learningItems.map((item, i) => (
          <LearningCard key={item.title} {...item} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Learning;
