import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, FolderGit2, Cpu, Globe, Sparkles, ShieldCheck, Layers, Radio } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 'fyp-vec',
      title: 'Priority-Aware & Hybrid V2I/V2V Task Scheduling in Vehicular Edge Computing',
      category: 'Research',
      badge: 'Final Year Thesis',
      badgeColor: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300',
      icon: Radio,
      featured: true,
      description: 'Addresses severe latency spikes and deadline violations in connected vehicle networks. Formulates a unified hybrid scheduling framework combining multi-threaded Roadside Units (RSU) with dynamic deadline-derived priority shifting to protect safety-critical tasks. Integrates a cooperative Vehicle-to-Vehicle (V2V) fallback that offloads RSU overflow tasks to nearby vehicular cluster heads and idle helper vehicles during peak traffic surges.',
      highlights: [
        'Deadline-derived priority classification ensuring zero delay for safety tasks',
        'Multi-threaded RSU dynamic thread shifting & preemption',
        'Cooperative V2V fallback to idle vehicular helper nodes during traffic surges'
      ],
      techStack: ['Vehicular Edge Computing (VEC)', 'V2I & V2V Protocols', 'Task Scheduling Algorithms', 'Distributed Systems', 'Python'],
      github: null,
      external: null,
      status: 'Ongoing Research'
    },
    {
      id: 'lagatour',
      title: 'LagaTour – Community Travel Platform & AI Trip Architect',
      category: 'Software',
      badge: 'Featured Software Project',
      badgeColor: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300',
      icon: Globe,
      featured: true,
      description: 'A comprehensive travel platform for tour lovers. Enables explorers to share tour stories, publish itineraries, and engage through community reactions and comments. Features an interaction-based points and ranking leaderboard, a custom tour expedition creator with an AI package builder powered by Google Gemini, real-time traveler and admin messaging, and a collaborative group planner with activity logging.',
      highlights: [
        'AI Package Builder powered by Google Gemini for custom tour itineraries',
        'Interaction-based reputation system with points & user tier rankings',
        'Real-time messaging system & collaborative group planner with audit logs'
      ],
      techStack: ['React', 'Node.js', 'Express', 'Google Gemini API', 'WebSockets', 'MongoDB', 'Tailwind CSS'],
      github: '#',
      external: '#',
      status: 'Active Development'
    },
    {
      id: 'ml-ids',
      title: 'Comparative Analysis of ML Algorithms on CICIDS2017 Dataset for Network Intrusion Detection',
      category: 'Research',
      badge: 'Machine Learning Research',
      badgeColor: 'border-blue-500/40 bg-blue-500/10 text-blue-300',
      icon: Cpu,
      featured: false,
      description: 'Research investigating intrusion detection system optimization. Solved the severe class imbalance problem of the benchmark CICIDS2017 dataset utilizing the SMOTE-Tomek algorithm. Evaluated 10 distinct machine learning models spanning 5 algorithm families against 14 performance metrics to benchmark IDS efficacy under adversary attack scenarios.',
      highlights: [
        'Resolved critical dataset class imbalance using SMOTE-Tomek synthesis',
        'Benchmarked 10 algorithms across 5 distinct ML families using 14 metrics'
      ],
      techStack: ['Python', 'Scikit-learn', 'SMOTE-Tomek', 'Machine Learning', 'Data Analysis'],
      github: '#',
      external: 'https://docs.google.com/document/d/16_FD6TbmmGzZF5H0nPtjDb2hE48pmx-B/edit?usp=sharing&ouid=117247079500673675144&rtpof=true&sd=true',
      status: 'Completed Paper'
    },
    {
      id: 'nest-quest',
      title: 'Nest Quest – Intelligent Real Estate & Community Marketplace',
      category: 'Software',
      badge: 'System Design',
      badgeColor: 'border-purple-500/40 bg-purple-500/10 text-purple-300',
      icon: Layers,
      featured: false,
      description: 'A real estate platform architecture designed to empower buyers with community-driven transparency. Integrates resident alert systems (local safety, utility shortages, crime indices) fused with an AI valuation model to suggest fair real estate pricing. Facilitates collective land acquisition with group purchasing workflows and communication channels.',
      highlights: [
        'Community alert telemetry integrated into predictive valuation pricing',
        'Collaborative group purchasing and social real estate networking'
      ],
      techStack: ['System Design', 'Figma', 'Predictive Valuation', 'Workflow Architecture'],
      github: '#',
      external: 'https://www.figma.com/design/aqLZ8QYCvJgdqY6PYureTZ/Nest-Quest?node-id=0-1&t=sSWn2tpBsV05tBsP-1',
      status: 'Design Prototype'
    },
    {
      id: 'farm-hub',
      title: 'Smart Farm HUB – Secure Crop Management & Farmer Marketplace',
      category: 'Software',
      badge: 'Full-Stack & Security',
      badgeColor: 'border-amber-500/40 bg-amber-500/10 text-amber-300',
      icon: ShieldCheck,
      featured: false,
      description: 'An agricultural management and marketplace ecosystem engineered for rural farmers. Enables crop growth monitoring, localized meteorological updates, symptom-based crop disease diagnosis, and a peer-to-peer marketplace. Fortified with 20 modern web security defenses against SQL injection, XSS, and unauthorized session tampering.',
      highlights: [
        'Integrated symptom-driven crop disease prediction and weather alerts',
        'Hardened with 20 computer security protocols and defensive safeguards'
      ],
      techStack: ['PHP', 'MySQL', 'Tailwind CSS', 'HTML5', 'Web Security', 'Figma'],
      github: 'https://github.com/labiba-zoha/Smart-Farm-HUB-',
      external: '#',
      status: 'Open Source'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-6xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-primary font-mono text-sm mb-2">
              <Sparkles size={16} />
              <span>INNOVATION & ENGINEERING</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text tracking-tight">
              Featured Works & Research
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 p-1 bg-surface/70 border border-slate-800 rounded-xl backdrop-blur-md self-start md:self-auto">
            {['all', 'Research', 'Software'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all ${
                  activeFilter === tab
                    ? 'bg-primary text-slate-950 font-semibold shadow-glow-cyan'
                    : 'text-muted hover:text-text hover:bg-slate-800/50'
                }`}
              >
                {tab === 'all' ? 'All Works' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const IconComponent = project.icon || FolderGit2;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className={`glass-panel p-7 rounded-2xl flex flex-col justify-between relative group overflow-hidden border transition-all duration-300 ${
                    project.featured
                      ? 'border-cyan-500/30 hover:border-cyan-400/60 shadow-lg hover:shadow-glow-cyan bg-gradient-to-b from-slate-900/80 to-slate-900/50'
                      : 'border-slate-800/80 hover:border-slate-700/80 hover:shadow-xl'
                  }`}
                >
                  {/* Subtle top card glow line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-400/80 transition-all duration-500" />

                  {/* Top Bar: Icon, Badge, and Action Links */}
                  <div>
                    <div className="flex justify-between items-start gap-3 mb-5">
                      <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/50 text-primary group-hover:scale-105 group-hover:border-primary/40 transition-all duration-300">
                        <IconComponent size={22} />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className={`text-[11px] font-mono font-medium px-2.5 py-1 rounded-full border ${project.badgeColor}`}>
                          {project.badge}
                        </span>

                        {/* Action Links */}
                        <div className="flex items-center gap-1.5 ml-1">
                          {project.github && project.github !== '#' && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded-lg text-muted hover:text-primary hover:bg-slate-800/80 transition-all"
                              title="Source Code"
                            >
                              <Code2 size={17} />
                            </a>
                          )}
                          {project.external && project.external !== '#' && (
                            <a
                              href={project.external}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded-lg text-muted hover:text-primary hover:bg-slate-800/80 transition-all"
                              title="Live / External Resource"
                            >
                              <ExternalLink size={17} />
                            </a>
                          )}
                          {!project.external && !project.github && project.status && (
                            <span className="text-[10px] font-mono text-cyan-400/80 bg-cyan-950/40 border border-cyan-800/40 px-2 py-0.5 rounded-md">
                              {project.status}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Highlights (if any) */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="mb-5 space-y-1.5 border-t border-slate-800/60 pt-3">
                        {project.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start text-xs text-slate-300/90 leading-tight">
                            <span className="text-cyan-400 mr-2 font-mono">▸</span>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/50 mt-auto">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/50 group-hover:border-cyan-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
