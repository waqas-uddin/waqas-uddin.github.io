import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-dark-border py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-slate-500 text-sm flex items-center gap-1"
        >
          Built with <FaHeart className="text-red-500" size={12} /> by{' '}
          <span className="gradient-text font-semibold">Waqas Ahmed</span>
        </motion.p>
        <div className="flex items-center gap-4">
          {[
            { icon: FaGithub, href: 'https://github.com/waqas-uddin' },
            { icon: FaLinkedin, href: 'https://linkedin.com/in/waqas-ahmed-6baa89274' },
          ].map(({ icon: Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              className="text-slate-500 hover:text-primary transition-colors"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>
        <p className="text-slate-600 text-xs">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
