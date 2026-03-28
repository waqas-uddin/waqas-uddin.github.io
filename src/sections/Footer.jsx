import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="border-t dark:border-primary/10 border-slate-200 py-10 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="text-xl font-display font-bold gradient-text"
          >
            WA.
          </motion.a>

          {/* Quick nav */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="text-xs dark:text-slate-500 text-slate-400 hover:text-primary transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Social + Resume */}
          <div className="flex items-center gap-3">
            {[
              { icon: FaGithub, href: 'https://github.com/waqas-uddin', label: 'GitHub' },
              { icon: FaLinkedin, href: 'https://linkedin.com/in/waqas-ahmed-6baa89274', label: 'LinkedIn' },
            ].map(({ icon: IconComp, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-9 h-9 rounded-full glass flex items-center justify-center dark:text-slate-500 text-slate-400 hover:text-primary transition-colors border dark:border-dark-border border-slate-200"
              >
                <IconComp size={16} />
              </motion.a>
            ))}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1, boxShadow: '0 0 15px rgba(0,212,255,0.3)' }}
              title="Download Resume"
              className="w-9 h-9 rounded-full glass flex items-center justify-center text-accent border border-accent/20 hover:border-accent/50 transition-colors"
            >
              <HiDownload size={16} />
            </motion.a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t dark:border-dark-border border-slate-100 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="dark:text-slate-600 text-slate-400 text-xs flex items-center gap-1">
            Built with <FaHeart className="text-red-400/80" size={10} /> by{' '}
            <span className="gradient-text font-semibold">Waqas Ahmed</span>
          </p>
          <p className="dark:text-slate-600 text-slate-400 text-xs font-mono">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
