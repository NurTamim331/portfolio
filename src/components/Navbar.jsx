import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Education', to: 'education' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Achievements', to: 'achievements' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 shadow-xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center max-w-6xl">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-primary group-hover:border-cyan-400 group-hover:bg-cyan-500/20 transition-all duration-300">
            <Terminal size={18} />
          </div>
          <span className="text-xl font-bold tracking-tight text-text group-hover:text-primary transition-colors">
            Tamim<span className="text-primary font-mono">.dev</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-7">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-slate-300 hover:text-primary transition-colors cursor-pointer text-sm font-medium tracking-wide relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <a
            href="https://drive.google.com/file/d/1dIBX2Vturr0HpFkuU-K6ubGSm30FYUgq/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono font-semibold px-4 py-2 rounded-lg border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 transition-all shadow-sm"
          >
            CV / Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text p-1.5 rounded-lg border border-slate-800 bg-slate-900/60"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 shadow-2xl flex flex-col items-center py-6 space-y-4 md:hidden"
          >
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="text-slate-200 hover:text-primary transition-colors cursor-pointer text-base font-medium w-full text-center py-2"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://drive.google.com/file/d/1dIBX2Vturr0HpFkuU-K6ubGSm30FYUgq/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-xs font-mono font-semibold px-6 py-2.5 rounded-lg border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 transition-all mt-2"
            >
              CV / Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
