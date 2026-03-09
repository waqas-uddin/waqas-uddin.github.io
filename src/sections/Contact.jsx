import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';

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

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
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
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold dark:text-white text-slate-900 mb-4">
            Let&apos;s Build Something <span className="gradient-text">Amazing</span>
          </h3>
          <p className="dark:text-slate-400 text-slate-600 leading-relaxed mb-8">
            I&apos;m currently open to new opportunities. Whether you have a project in mind, a question, or just want to say hello — feel free to reach out!
          </p>

          <div className="space-y-4">
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
                className="flex items-center gap-4 glass rounded-xl p-4 dark:border-dark-border border-slate-200 hover:border-primary/30 transition-all group border"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}15` }}
                >
                  <item.icon size={20} style={{ color: item.color }} />
                </div>
                <div>
                  <p className="text-xs dark:text-slate-500 text-slate-400 mb-0.5">{item.label}</p>
                  <p className="dark:text-slate-300 text-slate-700 font-medium text-sm">{item.value}</p>
                </div>
                <HiArrowRight className="ml-auto dark:text-slate-600 text-slate-400 group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ x: 50 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 dark:border-dark-border border-slate-200 border">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium dark:text-slate-400 text-slate-600 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full dark:bg-dark-card/50 bg-white/50 dark:border-dark-border border-slate-200 rounded-xl px-4 py-3 dark:text-white text-slate-900 dark:placeholder-slate-600 placeholder-slate-400 focus:outline-none focus:border-primary/50 transition-colors text-sm border"
                />
              </div>
              <div>
                <label className="block text-sm font-medium dark:text-slate-400 text-slate-600 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full dark:bg-dark-card/50 bg-white/50 dark:border-dark-border border-slate-200 rounded-xl px-4 py-3 dark:text-white text-slate-900 dark:placeholder-slate-600 placeholder-slate-400 focus:outline-none focus:border-primary/50 transition-colors text-sm border"
                />
              </div>
              <div>
                <label className="block text-sm font-medium dark:text-slate-400 text-slate-600 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or say hello..."
                  className="w-full dark:bg-dark-card/50 bg-white/50 dark:border-dark-border border-slate-200 rounded-xl px-4 py-3 dark:text-white text-slate-900 dark:placeholder-slate-600 placeholder-slate-400 focus:outline-none focus:border-primary/50 transition-colors resize-none text-sm border"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(108,99,255,0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl font-semibold text-white transition-all"
                style={{ background: submitted ? '#22C55E' : 'linear-gradient(135deg, #6C63FF, #00D4FF)' }}
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;

