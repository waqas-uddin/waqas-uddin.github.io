import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiDownload, HiArrowRight, HiExternalLink } from 'react-icons/hi';
import BorderBeam from '../components/BorderBeam';

const TYPING_TEXTS = ['Full Stack Developer', 'React Developer', 'Node.js Developer'];

const TECH_TAGS = ['React', 'Node.js', 'MongoDB', 'Spring Boot', 'TypeScript', 'Flutter'];

/* Floating tech tag badge */
const FloatingTag = ({ label, style, delay }) => (
  <motion.div
    initial={{ scale: 0, rotate: -10 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ type: 'spring', stiffness: 260, damping: 20, delay }}
    className="absolute hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-primary/20 text-xs font-medium dark:text-slate-300 text-slate-600 select-none animate-float"
    style={style}
  >
    <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'linear-gradient(135deg,#6C63FF,#00D4FF)' }} />
    {label}
  </motion.div>
);

/* Animated code block shown on desktop */
const CodeBlock = () => (
  <motion.div
    initial={{ x: 60 }}
    animate={{ x: 0 }}
    transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    className="hidden lg:block relative"
  >
    {/* Outer glow */}
    <div
      className="absolute -inset-4 rounded-3xl pointer-events-none"
      style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(108,99,255,0.15) 0%, transparent 70%)',
        filter: 'blur(20px)',
      }}
    />
    <div
      className="relative glass rounded-2xl p-6 font-mono text-sm border border-primary/20 max-w-xs w-full overflow-hidden"
      style={{ boxShadow: '0 0 40px rgba(108,99,255,0.12), inset 0 0 40px rgba(108,99,255,0.03)' }}
    >
      {/* Animated border beam */}
      <BorderBeam colorFrom="#6C63FF" colorTo="#00D4FF" duration={4} className="border-beam-active" />

      {/* Window dots */}
      <div className="flex gap-1.5 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-400/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
        <div className="w-3 h-3 rounded-full bg-green-400/80" />
      </div>

      {/* Code content */}
      <div className="space-y-1.5 relative z-10">
        <p>
          <span className="text-accent/80">const</span>{' '}
          <span className="text-primary/90">developer</span>{' '}
          <span className="dark:text-slate-400 text-slate-500">= {'{'}</span>
        </p>
        {[
          { key: 'name', val: "'Waqas Ahmed'", color: 'text-green-400/80' },
          { key: 'role', val: "'Full Stack Dev'", color: 'text-green-400/80' },
          { key: 'stack', val: "['React','Node']", color: 'text-yellow-400/80' },
          { key: 'passion', val: "'Clean Code'", color: 'text-pink-400/80' },
          { key: 'open', val: 'true', color: 'text-accent/80' },
        ].map(({ key, val, color }, i) => (
          <motion.p
            key={key}
            initial={{ x: -10 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.9 + i * 0.1 }}
            className="pl-4"
          >
            <span className="dark:text-slate-400 text-slate-500">{key}:</span>{' '}
            <span className={color}>{val}</span>
            <span className="dark:text-slate-500 text-slate-400">,</span>
          </motion.p>
        ))}
        <p><span className="dark:text-slate-400 text-slate-500">{'}'}</span></p>
        <motion.p
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="text-primary/70 mt-2"
        >
          █
        </motion.p>
      </div>

      {/* Scan line inside code block */}
      <motion.div
        className="absolute left-0 w-full h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(108,99,255,0.3), transparent)' }}
        animate={{ top: ['-2px', '110%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
      />
    </div>
  </motion.div>
);

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => { mountedRef.current = false; };
  }, []);

  useEffect(() => {
    const currentText = TYPING_TEXTS[textIndex];
    const speed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!mountedRef.current) return;
      if (!isDeleting) {
        const next = currentText.slice(0, displayText.length + 1);
        setDisplayText(next);
        if (next.length === currentText.length) {
          setTimeout(() => {
            if (mountedRef.current) setIsDeleting(true);
          }, 1500);
        }
      } else {
        const next = displayText.slice(0, -1);
        setDisplayText(next);
        if (next.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % TYPING_TEXTS.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayText, isDeleting, textIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated scan line */}
      <motion.div
        className="absolute left-0 w-full h-px pointer-events-none z-10"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(108,99,255,0.5), rgba(0,212,255,0.5), transparent)' }}
        animate={{ top: ['-2px', '100vh'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
      />

      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      {/* Floating tech tags (desktop only) */}
      {TECH_TAGS.map((tag, i) => (
        <FloatingTag
          key={tag}
          label={tag}
          delay={0.8 + i * 0.15}
          style={{
            top: `${15 + (i % 3) * 25}%`,
            ...(i < 3 ? { left: `${4 + i * 2}%` } : { right: `${4 + (i - 3) * 2}%` }),
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${3.5 + i * 0.5}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

          {/* LEFT — main text */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">

            {/* Status badge */}
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm dark:text-slate-300 text-slate-600 mb-6 border border-primary/20 badge-glow"
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-green-400"
                style={{ boxShadow: '0 0 8px rgba(74,222,128,0.8)' }}
              />
              Available for opportunities
            </motion.div>

            {/* Name with glitch effect */}
            <motion.h1
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-display text-6xl md:text-7xl xl:text-8xl font-bold dark:text-white text-slate-900 mb-4 leading-tight tracking-tight"
            >
              Waqas{' '}
              <span
                className="gradient-text glitch"
                data-text="Ahmed"
              >
                Ahmed
              </span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-3xl font-bold mb-6 h-10 flex items-center justify-center lg:justify-start gap-1"
            >
              <span className="gradient-text-animate">{displayText}</span>
              <span className="typing-cursor" />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg dark:text-slate-400 text-slate-600 max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0"
            >
              Building scalable and high-performance web applications using modern technologies.
              Crafting digital experiences that make an impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: '0 0 35px rgba(108,99,255,0.6), 0 0 70px rgba(108,99,255,0.25)' }}
                whileTap={{ scale: 0.95 }}
                className="btn-neon flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white text-sm"
                style={{ background: 'linear-gradient(135deg, #6C63FF, #00D4FF)' }}
              >
                View Projects <HiArrowRight />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(108,99,255,0.15)' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold dark:text-white text-slate-900 text-sm glass border border-primary/25 hover:border-primary/50 transition-all"
              >
                Contact Me
              </motion.a>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0,212,255,0.35)' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-accent text-sm glass border border-accent/25 hover:border-accent/50 transition-all"
              >
                <HiDownload size={17} />
                Resume
                <HiExternalLink size={14} className="opacity-60" />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              {[
                { icon: FaGithub, href: 'https://github.com/waqas-uddin', label: 'GitHub', glow: 'rgba(108,99,255,0.5)' },
                { icon: FaLinkedin, href: 'https://linkedin.com/in/waqas-ahmed-6baa89274', label: 'LinkedIn', glow: 'rgba(0,212,255,0.4)' },
              ].map(({ icon: IconComp, href, label, glow }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -4, boxShadow: `0 0 25px ${glow}` }}
                  whileTap={{ scale: 0.9 }}
                  className="w-11 h-11 rounded-full glass flex items-center justify-center dark:text-slate-400 text-slate-500 dark:hover:text-white hover:text-slate-900 transition-colors border border-primary/20 hover:border-primary/50"
                >
                  <IconComp size={19} />
                </motion.a>
              ))}

              <div className="h-6 w-px dark:bg-slate-700 bg-slate-300 mx-1" />

              <motion.a
                href="/resume.pdf"
                download="Waqas_Ahmed_Resume.pdf"
                whileHover={{ scale: 1.15, y: -4, boxShadow: '0 0 25px rgba(0,212,255,0.5)' }}
                whileTap={{ scale: 0.9 }}
                title="Download Resume"
                className="w-11 h-11 rounded-full glass flex items-center justify-center text-accent transition-colors border border-accent/20 hover:border-accent/50"
              >
                <HiDownload size={19} />
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT — code preview (desktop only) */}
          <CodeBlock />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs dark:text-slate-500 text-slate-400 font-mono tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [1, 0.4, 1] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="w-px h-10 bg-gradient-to-b from-primary to-transparent"
        />
      </div>
    </section>
  );
};

export default Hero;
