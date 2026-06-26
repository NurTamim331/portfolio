import React from 'react';
import { Code2, Briefcase, Code, GitBranch } from 'lucide-react'; // Using Code as fallback for Codeforces


const Footer = () => {
  return (
    <footer className="py-8 text-center flex flex-col items-center">
      <div className="flex gap-6 mb-6">
        <a
          href="https://github.com/NurTamim331" // GitHub Link
          target="_blank"
          rel="noreferrer"
          className="text-muted hover:text-primary transition-colors hover:-translate-y-1 transform duration-300"
          aria-label="GitHub"
        >
          <GitBranch />
        </a>
        <a
          href="https://www.linkedin.com/in/md-nur-uddin-tamim-b2839729a/" // LinkedIn Link
          target="_blank"
          rel="noreferrer"
          className="text-muted hover:text-primary transition-colors hover:-translate-y-1 transform duration-300"
          aria-label="LinkedIn"
        >
          <Briefcase size={24} />
        </a>
        <a
          href="https://codeforces.com/profile/CyberNUT" // Codeforces Link
          target="_blank"
          rel="noreferrer"
          className="text-muted hover:text-primary transition-colors hover:-translate-y-1 transform duration-300"
          aria-label="Codeforces"
        >
          <Code size={24} />
        </a>
      </div>
      <p className="text-sm font-mono text-muted">
        Designed & Built by <span className="text-primary">Nur Uddin Tamim</span>
      </p>
    </footer>
  );
};

export default Footer;
