import { lazy, Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import BackToTop from './components/BackToTop';

const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Experience = lazy(() => import('./sections/Experience'));
const Education = lazy(() => import('./sections/Education'));
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./sections/Footer'));

function App() {
  return (
    <ThemeProvider>
      <div className="dark:bg-dark bg-slate-50 dark:text-white text-slate-900 min-h-screen transition-colors duration-300 relative">
        {/* Global animated background (fixed, behind everything) */}
        <AnimatedBackground />

        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Suspense fallback={null}>
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;

