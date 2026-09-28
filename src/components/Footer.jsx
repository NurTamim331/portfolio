import { Briefcase, Code, GitBranch } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 text-center flex flex-col items-center border-t border-slate-800/60 relative z-10">
      <div className="flex gap-6 mb-6">
        <a
          href="https://github.com/NurTamim331"
          target="_blank"
          rel="noreferrer"
          className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-muted hover:text-primary hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 shadow-sm"
          aria-label="GitHub"
        >
          <GitBranch size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/md-nur-uddin-tamim-b2839729a/"
          target="_blank"
          rel="noreferrer"
          className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-muted hover:text-primary hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 shadow-sm"
          aria-label="LinkedIn"
        >
          <Briefcase size={20} />
        </a>
        <a
          href="https://codeforces.com/profile/CyberNUT"
          target="_blank"
          rel="noreferrer"
          className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-muted hover:text-primary hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 shadow-sm"
          aria-label="Codeforces"
        >
          <Code size={20} />
        </a>
      </div>
      <p className="text-xs font-mono text-muted">
        Designed & Built by <span className="text-primary font-medium">Nur Uddin Tamim</span> • © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
