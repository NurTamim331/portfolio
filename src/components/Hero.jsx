import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import profilePic from '../assets/pic.jpg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 max-w-6xl">
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-800/50 backdrop-blur-md mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono text-cyan-300 tracking-wide font-medium">
              Final Year CSE • VEC & ML Researcher
            </span>
          </div>

          <h2 className="text-primary font-mono tracking-wide mb-2 text-sm md:text-base font-medium">
            Hi, my name is
          </h2>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-text mb-3 leading-tight tracking-tight">
            Nur Uddin Tamim.
          </h1>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-200 via-slate-400 to-slate-500 bg-clip-text text-transparent mb-6 leading-tight">
            I engineer secure, intelligent distributed systems.
          </h2>

          <p className="text-muted text-base md:text-lg max-w-xl mb-8 leading-relaxed mx-auto md:mx-0">
            Computer Science and Engineering undergraduate at United International University. Focused on Vehicular Edge Computing (VEC), Machine Learning, Cybersecurity, and full-stack software architectures that solve complex real-world challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="px-7 py-3.5 bg-primary text-slate-950 font-semibold rounded-xl hover:bg-primaryHover hover:shadow-glow-cyan transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md group"
            >
              <span>Explore Projects</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://drive.google.com/file/d/1dIBX2Vturr0HpFkuU-K6ubGSm30FYUgq/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-slate-900/60 border border-slate-700/80 hover:border-cyan-500/40 text-slate-200 hover:text-primary font-semibold rounded-xl hover:bg-slate-800/60 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
            >
              <span>View Resume</span>
              <Download size={18} />
            </a>
          </div>
        </motion.div>

        {/* Profile Image with subtle floating animation and glowing border */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="relative group"
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Ambient backlight glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-700"></div>

            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900/90 shadow-2xl p-1.5 backdrop-blur-xl">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <img
                  src={profilePic}
                  alt="Nur Uddin Tamim"
                  className="object-cover w-full h-full transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bouncing Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer text-muted hover:text-primary transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Link to="about" smooth={true} duration={500} offset={-80} aria-label="Scroll to About section">
          <ChevronDown size={28} />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
