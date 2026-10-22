import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Code2,
  FolderGit2,
  Cpu,
  Globe,
  Sparkles,
  ShieldCheck,
  Layers,
  Radio,
  Plane,
  Compass,
  MapPin,
  Users,
  Server,
  Activity,
  X,
  BookOpen,
  Filter
} from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeTag, setActiveTag] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const dialogRef = useRef(null);

  const tagFilters = ['React', 'Node.js', 'MySQL', 'WebSockets', 'AI / Gemini'];

  const projects = [
    {
      id: 'lagatour',
      title: 'LagaTour – Social Travel Platform & Collaborative Expedition Planner',
      tagline: 'Next-Gen Social Travel Platform & Collaborative Expedition Planner',
      category: 'Software',
      badge: 'Flagship Full-Stack',
      badgeColor: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300',
      icon: Compass,
      featured: true,
      role: 'Full-Stack Developer & System Architect',
      type: 'Full-Stack Web Application (Production Live)',
      description: 'A full-stack social travel ecosystem and expedition manager tailored for Bangladesh tourism. Features AI-powered dynamic itinerary generation (Gemini Flash), real-time WebSocket messaging, an interactive 64-district map with live GPS locking, collaborative trip expense splitters, and client-side zero-shot AI vision moderation.',
      highlights: [
        'AI Tour Architect: Automated dual-package itinerary generator powered by Google Gemini 1.5 Flash with 1-click group sync',
        'Real-Time WebSockets: Scalable Socket.IO architecture for private chats, group expedition channels & sub-second presence',
        'Geospatial & GPS: Interactive Leaflet map covering all 64 districts with live browser GPS coordinate locking & safety reviews',
        'Client AI Moderation: Dual-layer zero-shot image moderation using in-browser Transformers.js WebAssembly + Gemini Vision',
        'Cloud Architecture: Decoupled zero-cost production hosting on Vercel Edge, Render Web Service & TiDB Cloud Serverless MySQL'
      ],
      techStack: ['React', 'Node.js', 'MySQL', 'WebSockets', 'AI / Gemini', 'TiDB Cloud', 'Tailwind CSS', 'Leaflet.js', 'Transformers.js'],
      github: 'https://github.com/NurTamim331/LagaTour.git',
      external: 'https://laga-tour-flax.vercel.app/',
      apiEndpoint: 'https://lagatour-api.onrender.com/',
      status: 'Production Live',
      hasCaseStudy: true,
      caseStudy: {
        role: 'Full-Stack Developer & System Architect',
        type: 'Full-Stack Web Application (Production Live)',
        tagline: 'Next-Gen Social Travel Platform & Collaborative Expedition Planner',
        liveDemo: 'https://laga-tour-flax.vercel.app/',
        github: 'https://github.com/NurTamim331/LagaTour.git',
        apiEndpoint: 'https://lagatour-api.onrender.com/',
        stackCategories: [
          {
            label: 'Frontend',
            items: ['React 19', 'Vite', 'Tailwind CSS', 'DaisyUI', 'Leaflet.js (OpenStreetMap)', 'Lucide Icons']
          },
          {
            label: 'Backend',
            items: ['Node.js (ESM)', 'Express.js', 'Socket.IO (WebSockets)', 'Nodemailer (Gmail SMTP)', 'bcryptjs']
          },
          {
            label: 'Database & Cloud',
            items: ['TiDB Cloud Serverless (MySQL)', 'Render Web Service', 'Vercel Edge CDN']
          },
          {
            label: 'AI & Computer Vision',
            items: ['Google Gemini 1.5 Flash API', 'HuggingFace Transformers.js (@xenova/transformers WebAssembly)']
          }
        ],
        pillars: [
          {
            title: 'AI-Driven Tour Package Builder',
            icon: Sparkles,
            points: [
              'Integrated Google Gemini 1.5 Flash to automatically generate dual-package sequential itineraries (Custom Budget vs. Heritage exploration) matching travel style, budget, duration, and transportation heuristics.',
              'Enabled 1-click synchronization of AI packages directly into community expedition groups.'
            ]
          },
          {
            title: 'Real-Time WebSockets Engine',
            icon: Activity,
            points: [
              'Built a scalable Socket.IO real-time infrastructure supporting private 1-on-1 chats and group expedition coordination with sub-second message latency, typing status, presence, and unread counters.'
            ]
          },
          {
            title: 'Geospatial & GPS Discovery Engine',
            icon: MapPin,
            points: [
              'Implemented an interactive Leaflet vector map covering all 64 districts in Bangladesh with live browser GPS coordinate locking (+25 discovery points) and community safety review ratings (1.0–5.0★).'
            ]
          },
          {
            title: 'Expedition Manager & Group Expense Splitter',
            icon: Users,
            points: [
              'Architected a joint tour management portal featuring shared checklists, member join/approval flows, and an automated group expense calculator splitting costs per traveler.'
            ]
          },
          {
            title: 'Dual-Layer Photographic AI Moderation',
            icon: ShieldCheck,
            points: [
              'Built a dual-layer content filter using in-browser HuggingFace Transformers.js (clip-vit-base-patch32 WebAssembly) combined with server-side Gemini Vision to block NSFW, clip-art, memes, and ensure authentic travel photo uploads.'
            ]
          },
          {
            title: 'Cloud Architecture & Zero-Cost Production Hosting',
            icon: Server,
            points: [
              'Architected a decoupled deployment pairing Vercel global edge CDN for the React SPA, Render Web Service for continuous Node.js & WebSocket processes, and TiDB Cloud Serverless for encrypted, high-availability MySQL data persistence.'
            ]
          }
        ]
      }
    },
    {
      id: 'geotrips',
      title: 'GEO Trips – Travel Agency Platform & Back-Office CRM',
      tagline: 'Full-Stack Travel Agency & Back-Office Automation CRM',
      category: 'Software',
      badge: 'Featured Full-Stack',
      badgeColor: 'border-sky-500/40 bg-sky-500/10 text-sky-300',
      icon: Plane,
      featured: true,
      role: 'Full-Stack Developer',
      type: 'Production Web Application',
      description: 'GEO Trips is a full-stack travel agency platform and back-office management system built with Next.js 15, TypeScript, and Supabase. The public portal features an interactive trip planner, dynamic visa document guides, and a self-service client dashboard for tracking bookings and payments. Behind the scenes, a secure admin CRM automates agency operations—replacing manual spreadsheets with centralized lead pipelines, serialized invoice generation, vendor cost tracking, and real-time profit analytics.',
      highlights: [
        'Interactive trip planner, dynamic visa document guides & client dashboard',
        'Secure admin CRM with centralized lead pipelines & serialized invoice generation',
        'Vendor cost tracking and real-time profit analytics replacing spreadsheets'
      ],
      techStack: ['Next.js 15', 'TypeScript', 'Supabase', 'React', 'Tailwind CSS', 'PostgreSQL'],
      github: 'https://github.com/NurTamim331/geo_portfolio',
      external: 'https://geotrips.netlify.app/',
      status: 'Live Demo',
      hasCaseStudy: true,
      caseStudy: {
        role: 'Full-Stack Developer',
        type: 'Production Web Application',
        tagline: 'Full-Stack Travel Agency & Back-Office Automation CRM',
        liveDemo: 'https://geotrips.netlify.app/',
        github: 'https://github.com/NurTamim331/geo_portfolio',
        stackCategories: [
          {
            label: 'Frontend & Framework',
            items: ['Next.js 15 (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS']
          },
          {
            label: 'Database & Auth',
            items: ['Supabase', 'PostgreSQL', 'Row-Level Security (RLS)', 'Supabase Auth']
          },
          {
            label: 'CRM & Features',
            items: ['Interactive Trip Planner', 'Visa Guide Engine', 'Invoicing & Analytics', 'Lead Pipeline']
          }
        ],
        pillars: [
          {
            title: 'Interactive Client Trip Planner & Visa Guide',
            icon: Globe,
            points: [
              'Custom trip builder with dynamic pricing estimates and step-by-step visa document prerequisites tailored by nationality and destination.'
            ]
          },
          {
            title: 'Automated Operations & Admin CRM',
            icon: Server,
            points: [
              'Eliminated manual spreadsheets through automated pipeline stages, serialized invoice PDF generation, vendor disbursement tracking, and net profit dashboards.'
            ]
          }
        ]
      }
    },
    {
      id: 'fyp-vec',
      title: 'Priority-Aware & Hybrid V2I/V2V Task Scheduling in Vehicular Edge Computing',
      tagline: 'Distributed Edge Scheduling for Safety-Critical Connected Vehicles',
      category: 'Research',
      badge: 'Final Year Thesis',
      badgeColor: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300',
      icon: Radio,
      featured: true,
      role: 'Lead Undergraduate Researcher',
      type: 'Computer Science & Engineering Thesis',
      description: 'Addresses severe latency spikes and deadline violations in connected vehicle networks. Formulates a unified hybrid scheduling framework combining multi-threaded Roadside Units (RSU) with dynamic deadline-derived priority shifting to protect safety-critical tasks. Integrates a cooperative Vehicle-to-Vehicle (V2V) fallback that offloads RSU overflow tasks to nearby vehicular cluster heads and idle helper vehicles during peak traffic surges.',
      highlights: [
        'Deadline-derived priority classification ensuring zero delay for safety tasks',
        'Multi-threaded RSU dynamic thread shifting & preemption',
        'Cooperative V2V fallback to idle vehicular helper nodes during traffic surges'
      ],
      techStack: ['Vehicular Edge Computing (VEC)', 'V2I & V2V Protocols', 'Task Scheduling Algorithms', 'Distributed Systems', 'Python'],
      github: null,
      external: null,
      status: 'Ongoing Research',
      hasCaseStudy: false
    },
    {
      id: 'ml-ids',
      title: 'Comparative Analysis of ML Algorithms on CICIDS2017 Dataset for Network Intrusion Detection',
      tagline: 'Benchmarking 10 Machine Learning Models on Imbalanced Attack Telemetry',
      category: 'Research',
      badge: 'Machine Learning Research',
      badgeColor: 'border-blue-500/40 bg-blue-500/10 text-blue-300',
      icon: Cpu,
      featured: false,
      role: 'ML Researcher',
      type: 'Research Publication',
      description: 'Research investigating intrusion detection system optimization. Solved the severe class imbalance problem of the benchmark CICIDS2017 dataset utilizing the SMOTE-Tomek algorithm. Evaluated 10 distinct machine learning models spanning 5 algorithm families against 14 performance metrics to benchmark IDS efficacy under adversary attack scenarios.',
      highlights: [
        'Resolved critical dataset class imbalance using SMOTE-Tomek synthesis',
        'Benchmarked 10 algorithms across 5 distinct ML families using 14 metrics'
      ],
      techStack: ['Python', 'Scikit-learn', 'SMOTE-Tomek', 'Machine Learning', 'Data Analysis'],
      github: '#',
      external: 'https://docs.google.com/document/d/16_FD6TbmmGzZF5H0nPtjDb2hE48pmx-B/edit?usp=sharing&ouid=117247079500673675144&rtpof=true&sd=true',
      status: 'Completed Paper',
      hasCaseStudy: false
    },
    {
      id: 'nest-quest',
      title: 'Nest Quest – Intelligent Real Estate & Community Marketplace',
      tagline: 'Predictive Valuation & Community Transparency Platform',
      category: 'Software',
      badge: 'System Design',
      badgeColor: 'border-purple-500/40 bg-purple-500/10 text-purple-300',
      icon: Layers,
      featured: false,
      role: 'System Designer',
      type: 'Architecture & UI Prototype',
      description: 'A real estate platform architecture designed to empower buyers with community-driven transparency. Integrates resident alert systems (local safety, utility shortages, crime indices) fused with an AI valuation model to suggest fair real estate pricing. Facilitates collective land acquisition with group purchasing workflows and communication channels.',
      highlights: [
        'Community alert telemetry integrated into predictive valuation pricing',
        'Collaborative group purchasing and social real estate networking'
      ],
      techStack: ['System Design', 'Figma', 'Predictive Valuation', 'Workflow Architecture'],
      github: '#',
      external: 'https://www.figma.com/design/aqLZ8QYCvJgdqY6PYureTZ/Nest-Quest?node-id=0-1&t=sSWn2tpBsV05tBsP-1',
      status: 'Design Prototype',
      hasCaseStudy: false
    },
    {
      id: 'farm-hub',
      title: 'Smart Farm HUB – Secure Crop Management & Farmer Marketplace',
      tagline: 'Agricultural Platform Fortified with 20 Security Safeguards',
      category: 'Software',
      badge: 'Full-Stack & Security',
      badgeColor: 'border-amber-500/40 bg-amber-500/10 text-amber-300',
      icon: ShieldCheck,
      featured: false,
      role: 'Full-Stack & Security Engineer',
      type: 'Open Source Web System',
      description: 'An agricultural management and marketplace ecosystem engineered for rural farmers. Enables crop growth monitoring, localized meteorological updates, symptom-based crop disease diagnosis, and a peer-to-peer marketplace. Fortified with 20 modern web security defenses against SQL injection, XSS, and unauthorized session tampering.',
      highlights: [
        'Integrated symptom-driven crop disease prediction and weather alerts',
        'Hardened with 20 computer security protocols and defensive safeguards'
      ],
      techStack: ['PHP', 'MySQL', 'Tailwind CSS', 'HTML5', 'Web Security', 'Figma'],
      github: 'https://github.com/labiba-zoha/Smart-Farm-HUB-',
      external: '#',
      status: 'Open Source',
      hasCaseStudy: false
    }
  ];

  // Filtering logic: category + technology tag
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeFilter === 'all' || project.category.toLowerCase() === activeFilter.toLowerCase();
    const matchesTag =
      activeTag === 'all' ||
      project.techStack.some((tech) => {
        const t = tech.toLowerCase();
        const a = activeTag.toLowerCase();
        if (a === 'ai / gemini') return t.includes('gemini') || t.includes('ai');
        if (a === 'websockets') return t.includes('websocket') || t.includes('socket');
        if (a === 'mysql') return t.includes('mysql') || t.includes('tidb');
        return t.includes(a);
      });
    return matchesCategory && matchesTag;
  });

  // Modal dialog lifecycle & light-dismiss fallback
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedProject) {
      if (!dialog.open) {
        dialog.showModal();
      }
      document.body.style.overflow = 'hidden';
    } else {
      if (dialog.open) {
        dialog.close();
      }
      document.body.style.overflow = '';
    }

    // Fallback for browsers that do not yet support closedby="any"
    const handleDialogClick = (event) => {
      if (event.target === dialog) {
        dialog.close();
      }
    };

    dialog.addEventListener('click', handleDialogClick);

    return () => {
      dialog.removeEventListener('click', handleDialogClick);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-6xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 text-primary font-mono text-sm mb-2">
              <Sparkles size={16} />
              <span>INNOVATION & ENGINEERING</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text tracking-tight">
              Featured Works & Research
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 p-1 bg-surface/70 border border-slate-800 rounded-xl backdrop-blur-md self-start md:self-auto">
            {['all', 'Software', 'Research'].map((tab) => (
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

        {/* Tag Filters Row */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-5 border-b border-slate-800/70">
          <div className="flex items-center gap-1.5 text-xs text-muted font-mono mr-2">
            <Filter size={14} className="text-primary" />
            <span>Tech Filter:</span>
          </div>

          <button
            onClick={() => setActiveTag('all')}
            className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
              activeTag === 'all'
                ? 'bg-slate-800 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800/80 hover:border-slate-700'
            }`}
          >
            All Tags
          </button>

          {tagFilters.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? 'all' : tag)}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                activeTag === tag
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <span>{tag}</span>
              {activeTag === tag && <span className="text-[10px]">✕</span>}
            </button>
          ))}

          {activeTag !== 'all' && (
            <span className="text-xs text-emerald-400 font-mono ml-auto">
              Filtering by #{activeTag} ({filteredProjects.length})
            </span>
          )}
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
                              title="Live Demo"
                            >
                              <ExternalLink size={17} />
                            </a>
                          )}
                          {project.hasCaseStudy && (
                            <button
                              onClick={() => setSelectedProject(project)}
                              className="p-1.5 rounded-lg text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/40 transition-all cursor-pointer"
                              title="View Case Study & Architecture"
                            >
                              <BookOpen size={17} />
                            </button>
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
                    <h3 className="text-lg md:text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="mb-4 space-y-1.5 border-t border-slate-800/60 pt-3">
                        {project.highlights.slice(0, 3).map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start text-xs text-slate-300/90 leading-tight">
                            <span className="text-cyan-400 mr-2 font-mono">▸</span>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Case Study Deep Dive CTA */}
                    {project.hasCaseStudy && (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="w-full my-3 py-2 px-3 rounded-xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-transparent border border-emerald-500/30 hover:border-emerald-400/60 text-emerald-300 hover:text-white text-xs font-medium flex items-center justify-between group/btn transition-all duration-300 shadow-sm cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          <Sparkles size={14} className="text-emerald-400" />
                          <span>Case Study & Architecture</span>
                        </span>
                        <span className="font-mono text-[11px] group-hover/btn:translate-x-1 transition-transform">
                          Deep Dive →
                        </span>
                      </button>
                    )}
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/50 mt-auto">
                    {project.techStack.map((tech, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          const matched = tagFilters.find((t) =>
                            tech.toLowerCase().includes(t.toLowerCase())
                          );
                          if (matched) setActiveTag(matched);
                        }}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/50 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors cursor-pointer text-left"
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Case Study Modal with Light-Dismiss Behavior */}
      <dialog
        ref={dialogRef}
        {...({ closedby: 'any' })}
        aria-labelledby="case-study-title"
        aria-modal="true"
        onClose={() => setSelectedProject(null)}
        className="backdrop:bg-slate-950/85 backdrop:backdrop-blur-md bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-0 m-auto max-w-4xl w-[94vw] max-h-[88vh] text-text outline-none open:flex open:flex-col overflow-hidden"
      >
        {selectedProject && (
          <div className="flex flex-col h-full max-h-[88vh] overflow-hidden bg-slate-900">
            {/* Modal Header */}
            <div className="p-6 md:p-7 border-b border-slate-800 bg-slate-900/95 backdrop-blur-md flex items-start justify-between gap-4 sticky top-0 z-20">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={`text-xs font-mono font-medium px-2.5 py-0.5 rounded-full border ${selectedProject.badgeColor}`}>
                    {selectedProject.badge}
                  </span>
                  {selectedProject.type && (
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
                      {selectedProject.type}
                    </span>
                  )}
                  {selectedProject.role && (
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/40 text-cyan-300 border border-cyan-800/40">
                      {selectedProject.role}
                    </span>
                  )}
                </div>
                <h2 id="case-study-title" className="text-2xl md:text-3xl font-bold text-text">
                  {selectedProject.title}
                </h2>
                {selectedProject.tagline && (
                  <p className="text-emerald-400 font-mono text-sm mt-1">
                    {selectedProject.tagline}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close case study modal"
                className="p-2 rounded-xl text-muted hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-all cursor-pointer flex-shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-7 text-slate-300">
              {/* Action Links Bar */}
              <div className="flex flex-wrap items-center gap-3 p-3.5 bg-slate-950/60 rounded-xl border border-slate-800">
                {selectedProject.external && selectedProject.external !== '#' && (
                  <a
                    href={selectedProject.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary text-slate-950 font-semibold rounded-lg hover:bg-primaryHover text-xs md:text-sm flex items-center gap-2 transition-all shadow-glow-cyan"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink size={16} />
                  </a>
                )}
                {selectedProject.github && selectedProject.github !== '#' && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 rounded-lg text-xs md:text-sm flex items-center gap-2 transition-all hover:text-primary"
                  >
                    <Code2 size={16} />
                    <span>GitHub Repository</span>
                  </a>
                )}
                {selectedProject.apiEndpoint && (
                  <a
                    href={selectedProject.apiEndpoint}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 rounded-lg text-xs md:text-sm flex items-center gap-2 transition-all hover:text-cyan-400"
                  >
                    <Server size={16} />
                    <span>Backend API Endpoint</span>
                  </a>
                )}
              </div>

              {/* Executive Overview */}
              <div className="p-5 rounded-xl bg-gradient-to-r from-emerald-950/30 via-slate-900 to-slate-900 border border-emerald-500/30">
                <h3 className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Sparkles size={16} />
                  <span>Executive Summary</span>
                </h3>
                <p className="text-slate-200 text-sm md:text-base leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Architecture & Tech Stack Grid */}
              {selectedProject.caseStudy?.stackCategories && (
                <div>
                  <h3 className="text-lg font-bold text-text mb-3 flex items-center gap-2">
                    <Layers size={18} className="text-primary" />
                    <span>Architecture & Technical Ecosystem</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.caseStudy.stackCategories.map((cat, cIdx) => (
                      <div key={cIdx} className="p-4 rounded-xl bg-slate-950/50 border border-slate-800">
                        <div className="text-xs font-mono font-semibold text-cyan-300 uppercase tracking-wider mb-2">
                          {cat.label}
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.items.map((item, iIdx) => (
                            <span
                              key={iIdx}
                              className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800/90 text-slate-200 border border-slate-700/60"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Engineering Case Study Pillars */}
              {selectedProject.caseStudy?.pillars && (
                <div>
                  <h3 className="text-lg font-bold text-text mb-3 flex items-center gap-2">
                    <Cpu size={18} className="text-primary" />
                    <span>Detailed Case Study & Technical Implementation</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.caseStudy.pillars.map((pillar, pIdx) => {
                      const PillarIcon = pillar.icon || Sparkles;
                      return (
                        <div
                          key={pIdx}
                          className="p-5 rounded-xl bg-slate-950/50 border border-slate-800/80 hover:border-emerald-500/30 transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center gap-2.5 mb-3 text-emerald-300 font-semibold text-sm md:text-base">
                              <div className="p-2 rounded-lg bg-emerald-950/40 text-emerald-400 border border-emerald-800/40 flex-shrink-0">
                                <PillarIcon size={17} />
                              </div>
                              <span>{pillar.title}</span>
                            </div>
                            <div className="space-y-2 text-xs md:text-sm text-slate-300 leading-relaxed">
                              {pillar.points.map((pt, ptIdx) => (
                                <div key={ptIdx} className="flex items-start gap-2">
                                  <span className="text-emerald-400 font-mono mt-0.5">▸</span>
                                  <span>{pt}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Default Highlights if no case study pillars */}
              {!selectedProject.caseStudy?.pillars && selectedProject.highlights && (
                <div>
                  <h3 className="text-lg font-bold text-text mb-3">Key Highlights</h3>
                  <div className="space-y-2">
                    {selectedProject.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start text-sm text-slate-300">
                        <span className="text-cyan-400 mr-2 font-mono">▸</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 md:p-5 border-t border-slate-800 bg-slate-900/95 backdrop-blur-md flex items-center justify-between gap-3 sticky bottom-0 z-20">
              <span className="text-xs font-mono text-muted hidden sm:inline">
                Press <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-300">Esc</kbd> or click outside to dismiss
              </span>
              <div className="flex items-center gap-3 ml-auto">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-all cursor-pointer"
                >
                  Close
                </button>
                {selectedProject.external && selectedProject.external !== '#' && (
                  <a
                    href={selectedProject.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-950 bg-primary hover:bg-primaryHover transition-all flex items-center gap-1.5 shadow-glow-cyan"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
};

export default Projects;
