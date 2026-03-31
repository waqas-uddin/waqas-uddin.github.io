import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import SpotlightCard from '../components/SpotlightCard';

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';

const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'wa17555@gmail.com',
    href: 'mailto:wa17555@gmail.com',
    color: '#FF6B6B',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/waqas-uddin',
    href: 'https://github.com/waqas-uddin',
    color: '#6C63FF',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/waqas-ahmed',
    href: 'https://linkedin.com/in/waqas-ahmed-6baa89274',
    color: '#0077B5',
  },
];

const inputClass =
  'w-full dark:bg-dark/60 bg-white/60 border dark:border-dark-border border-slate-200 rounded-xl px-4 py-3 dark:text-white text-slate-900 dark:placeholder-slate-600 placeholder-slate-400 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm font-mono';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: formData.name, from_email: formData.email, message: formData.message },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      console.error('Email send failed:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <SectionWrapper id="contact">
      <SectionTitle title="Get In Touch" subtitle="Contact Me" />

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <motion.div
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h3 className="font-display text-2xl font-bold dark:text-white text-slate-900 mb-3">
            Let&apos;s Build Something <span className="gradient-text">Amazing</span>
          </h3>
          <p className="dark:text-slate-400 text-slate-600 leading-relaxed mb-8 text-sm">
            I&apos;m currently open to new opportunities. Whether you have a project in mind, a question, or just want to say hello — feel free to reach out!
          </p>

          <div className="space-y-5">
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 8 }}
              >
                <SpotlightCard
                  className="glass rounded-xl p-4 border dark:border-dark-border border-slate-200 card-futuristic flex items-center gap-4"
                  spotlightColor={`${item.color}15`}
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}15` }}
                  >
                    <item.icon size={19} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-xs dark:text-slate-500 text-slate-400 mb-0.5 font-mono tracking-wider uppercase">{item.label}</p>
                    <p className="dark:text-slate-300 text-slate-700 font-medium text-sm">{item.value}</p>
                  </div>
                  <HiArrowRight className="ml-auto dark:text-slate-600 text-slate-400 flex-shrink-0" size={15} />
                </SpotlightCard>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ x: 50 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <SpotlightCard
            className="glass rounded-2xl p-7 border dark:border-dark-border border-slate-200 card-futuristic"
            spotlightColor="rgba(108,99,255,0.08)"
          >
            {/* Form header */}
            <p className="text-xs font-mono text-primary/60 mb-5 tracking-widest">// send_message.js</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium dark:text-slate-400 text-slate-600 mb-1.5 font-mono">name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-medium dark:text-slate-400 text-slate-600 mb-1.5 font-mono">email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-medium dark:text-slate-400 text-slate-600 mb-1.5 font-mono">message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className={`${inputClass} resize-none`}
                />
              </div>
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={status === 'idle' ? { scale: 1.02, boxShadow: '0 0 30px rgba(108,99,255,0.5)' } : {}}
                whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                className="w-full py-3.5 rounded-xl font-semibold text-white transition-all disabled:opacity-70 disabled:cursor-not-allowed btn-neon"
                style={{
                  background:
                    status === 'sent' ? '#22C55E'
                      : status === 'error' ? '#EF4444'
                        : 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                }}
              >
                {status === 'sending' && '⏳ Sending...'}
                {status === 'sent' && '✓ Message Sent!'}
                {status === 'error' && '✗ Failed — Please try again'}
                {status === 'idle' && 'Send Message →'}
              </motion.button>
            </form>
          </SpotlightCard>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
