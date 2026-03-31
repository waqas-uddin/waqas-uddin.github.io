import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiDownload, HiArrowRight, HiExternalLink } from 'react-icons/hi';
import BackgroundPaths from '../components/BackgroundPaths';
import PulseBeam from '../components/PulseBeam';

const TYPING_TEXTS = ['Full Stack Developer', 'React Developer', 'Node.js Developer'];

/* Small animated "code block" shown on desktop beside the text */
const CodeBlock = () => (
  <motion.div
    initial={{ x: 60, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    className="hidden lg:block glass rounded-2xl p-6 font-mono text-sm border border-primary/20 max-w-xs w-full"
    style={{ boxShadow: '0 0 40px rgba(108,99,255,0.1)' }}
  >
    {/* Window dots */}
    <div className="flex gap-1.5 mb-4">
      <div className="w-3 h-3 rounded-full bg-red-400/80" />
      <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
      <div className="w-3 h-3 rounded-full bg-green-400/80" />
    </div>
    <div className="space-y-1.5">
      <p><span className="text-accent/70">const</span> <span className="text-primary/90">developer</span> <span className="dark:text-slate-400 text-slate-500">= {'{'}</span></p>
      <p className="pl-4"><span className="dark:text-slate-400 text-slate-500">name:</span> <span className="text-green-400/80">&apos;Waqas Ahmed&apos;</span><span className="dark:text-slate-500 text-slate-400">,</span></p>
      <p className="pl-4"><span className="dark:text-slate-400 text-slate-500">role:</span> <span className="text-green-400/80">&apos;Full Stack Dev&apos;</span><span className="dark:text-slate-500 text-slate-400">,</span></p>
      <p className="pl-4"><span className="dark:text-slate-400 text-slate-500">stack:</span> <span className="text-yellow-400/80">['React', 'Node']</span><span className="dark:text-slate-500 text-slate-400">,</span></p>
      <p className="pl-4"><span className="dark:text-slate-400 text-slate-500">open:</span> <span className="text-accent/80">true</span><span className="dark:text-slate-500 text-slate-400">,</span></p>
      <p><span className="dark:text-slate-400 text-slate-500">{'}'}</span></p>
      <motion.p
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        className="text-primary/70 mt-2"
      >
        █
      </motion.p>
    </div>
  </motion.div>
);

/**
 * ScrollMediaExpansion — 21st.dev "Scroll Media Expansion Hero"
 * A preview frame that starts small/contracted and expands to full-width
 * as the user scrolls down past the hero section.
 */
const ScrollMediaExpansion = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.7, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], [32, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.7], [0, 1, 1]);

  return (
    <div ref={ref} className="w-full mt-16 flex justify-center px-4">
      <motion.div
        style={{ scale, borderRadius, opacity }}
        aria-label="Interactive preview showing portfolio statistics"
        className="w-full max-w-5xl overflow-hidden border border-primary/20 dark:bg-dark-card bg-white/80"
        whileHover={{ boxShadow: '0 0 60px rgba(108,99,255,0.15)' }}
      >
        {/* Mock browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-primary/10 dark:bg-dark/80 bg-slate-100/80 backdrop-blur-sm">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <div className="w-3 h-3 rounded-full bg-green-400/80" />
          </div>
          <div className="flex-1 mx-4">
            <div className="glass rounded-full px-4 py-1 text-xs font-mono dark:text-slate-500 text-slate-400 flex items-center gap-2 max-w-xs mx-auto">
              <span className="text-green-400/70">●</span>
              <span>waqas-uddin.github.io</span>
            </div>
          </div>
        </div>

        {/* Preview content inside the "browser" */}
        <div className="relative dark:bg-dark/60 bg-slate-50/60 p-8 min-h-[220px] flex items-center justify-center overflow-hidden">
          {/* Grid lines */}
          <div className="absolute inset-0 bg-grid opacity-40" />

          {/* Animated accent scanning lines */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-0 right-0 h-px"
              style={{
                top: `${30 + i * 30}%`,
                background: `linear-gradient(90deg, transparent, rgba(${i === 1 ? '0,212,255' : '108,99,255'},0.3), transparent)`,
              }}
              animate={{ x: ['-100%', '100%'] }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 1.2,
              }}
            />
          ))}

          {/* Tech stats display */}
          <div className="relative z-10 flex flex-wrap justify-center gap-6">
            {[
              { label: 'Projects', value: '15+', color: '#6C63FF' },
              { label: 'Experience', value: '2+ yrs', color: '#00D4FF' },
              { label: 'Technologies', value: '20+', color: '#FF6B9D' },
              { label: 'Commits', value: '500+', color: '#00FF94' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="glass rounded-xl px-6 py-4 border border-primary/20 text-center min-w-[120px]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                style={{ '--hover-color': stat.color }}
              >
                <div
                  className="text-2xl font-bold font-display mb-1"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-xs dark:text-slate-400 text-slate-500 font-mono tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = TYPING_TEXTS[textIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.slice(0, displayText.length + 1));
        if (displayText.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(displayText.slice(0, -1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % TYPING_TEXTS.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center overflow-hidden">
      {/* 21st.dev Background Paths / Shape Landing Hero */}
      <BackgroundPaths />

      {/* Animated scan line */}
      <motion.div
        className="absolute left-0 w-full h-px pointer-events-none z-10"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(108,99,255,0.4), rgba(0,212,255,0.4), transparent)' }}
        animate={{ top: ['-2px', '100vh'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
      />

      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      {/* Hero content (fills viewport height) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 pb-0 flex-1 flex items-center">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

          {/* LEFT — main text */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">

            {/* Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm dark:text-slate-300 text-slate-600 mb-6 border border-primary/20"
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-green-400"
              />
              Available for opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-display text-6xl md:text-7xl xl:text-8xl font-bold dark:text-white text-slate-900 mb-4 leading-tight tracking-tight"
            >
              Waqas{' '}
              <span className="gradient-text">Ahmed</span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-xl md:text-3xl font-bold mb-6 h-10 flex items-center justify-center lg:justify-start gap-1"
            >
              <span className="gradient-text">{displayText}</span>
              <span className="typing-cursor" />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-base md:text-lg dark:text-slate-400 text-slate-600 max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0"
            >
              Building scalable and high-performance web applications using modern technologies.
              Crafting digital experiences that make an impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10"
            >
              {/* Primary CTA */}
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(108,99,255,0.5), 0 0 60px rgba(108,99,255,0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="btn-neon flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white text-sm"
                style={{ background: 'linear-gradient(135deg, #6C63FF, #00D4FF)' }}
              >
                View Projects <HiArrowRight />
              </motion.a>

              {/* Contact */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold dark:text-white text-slate-900 text-sm glass border border-primary/25 hover:border-primary/50 transition-colors"
              >
                Contact Me
              </motion.a>

              {/* Resume — 21st.dev Pulse Beams wrapping the button */}
              <PulseBeam color="#00D4FF">
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,212,255,0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-accent text-sm glass border border-accent/25 hover:border-accent/50 transition-colors"
                >
                  <HiDownload size={17} />
                  Resume
                  <HiExternalLink size={14} className="opacity-60" />
                </motion.a>
              </PulseBeam>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              {[
                { icon: FaGithub, href: 'https://github.com/waqas-uddin', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://linkedin.com/in/waqas-ahmed-6baa89274', label: 'LinkedIn' },
              ].map(({ icon: IconComp, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3, boxShadow: '0 0 20px rgba(108,99,255,0.4)' }}
                  whileTap={{ scale: 0.9 }}
                  className="w-11 h-11 rounded-full glass flex items-center justify-center dark:text-slate-400 text-slate-500 dark:hover:text-white hover:text-slate-900 transition-colors border border-primary/20 hover:border-primary/50"
                >
                  <IconComp size={19} />
                </motion.a>
              ))}

              {/* Divider */}
              <div className="h-6 w-px dark:bg-slate-700 bg-slate-300 mx-1" />

              {/* Inline resume download icon */}
              <motion.a
                href="/resume.pdf"
                download="Waqas_Ahmed_Resume.pdf"
                whileHover={{ scale: 1.15, y: -3, boxShadow: '0 0 20px rgba(0,212,255,0.4)' }}
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
      <div className="relative z-10 py-6 flex flex-col items-center gap-2">
        <span className="text-xs dark:text-slate-500 text-slate-400 font-mono tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-10 bg-gradient-to-b from-primary to-transparent"
        />
      </div>

      {/* 21st.dev Scroll Media Expansion Hero */}
      <ScrollMediaExpansion />
    </section>
  );
};

export default Hero;
