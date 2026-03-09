import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { HiSun, HiMoon } from 'react-icons/hi';
import { navLinks } from '../data';
import { useActiveSection } from '../hooks/useActiveSection';
import { useTheme } from '../context/useTheme';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const activeSection = useActiveSection();
  const rafRef = useRef(null);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
        rafRef.current = null;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] dark:bg-dark-border bg-slate-200">
        <motion.div
          className="h-full origin-left"
          style={{
            background: 'linear-gradient(90deg, #6C63FF, #00D4FF)',
            scaleX: scrollYProgress,
          }}
        />
      </div>

      <motion.nav
        className={`fixed top-1 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'py-3 glass shadow-2xl shadow-primary/5' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text"
          >
            WA.
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.href.slice(1)
                    ? 'gradient-text'
                    : 'dark:text-slate-400 text-slate-600 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {link.name}
              </motion.a>
            ))}

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full glass flex items-center justify-center dark:text-slate-400 text-slate-600 dark:hover:text-white hover:text-slate-900 transition-colors border dark:border-dark-border border-slate-200"
              aria-label="Toggle theme"
            >
              {isDark ? <HiSun size={18} /> : <HiMoon size={18} />}
            </motion.button>
          </div>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-full glass flex items-center justify-center dark:text-slate-400 text-slate-600 border dark:border-dark-border border-slate-200"
              aria-label="Toggle theme"
            >
              {isDark ? <HiSun size={16} /> : <HiMoon size={16} />}
            </motion.button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="dark:text-white text-slate-900 p-2"
            >
              {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-y-0 right-0 w-72 z-40 glass shadow-2xl p-8 flex flex-col gap-6 pt-24"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ x: 5 }}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'gradient-text'
                    : 'dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-900'
                }`}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

