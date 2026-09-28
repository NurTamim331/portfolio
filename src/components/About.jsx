import { motion } from 'framer-motion';
import { Award, Cpu, ShieldCheck } from 'lucide-react';

const About = () => {
  const highlights = [
    { label: 'Academic Standing', val: '3.98 CGPA', desc: 'United International University', icon: Award },
    { label: 'Scholarships', val: '7 Trimesters', desc: '100% Merit Scholarship', icon: ShieldCheck },
    { label: 'Core Specialization', val: 'VEC & ML', desc: 'Edge Computing & Security', icon: Cpu },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-text">About Me</h2>
          <div className="h-[1px] bg-slate-800 flex-grow ml-6"></div>
        </div>

        <div className="glass-panel p-8 md:p-10 rounded-2xl relative overflow-hidden">
          {/* Subtle accent glow in top corner */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-5 text-slate-300 text-base md:text-lg leading-relaxed mb-8">
            <p>
              Hello! My name is <span className="text-text font-semibold">Nur Uddin Tamim</span>. I am a passionate Computer Science and Engineering undergraduate at United International University with a strong interest in software engineering, vehicular edge computing, machine learning, and cybersecurity.
            </p>
            <p>
              Over the course of my academic journey, I have built a solid foundation in core computer science disciplines, distributed architectures, and competitive programming. I enjoy building robust, secure digital systems and investigating real-world engineering bottlenecks—from optimizing task scheduling across smart vehicle networks to architecting modern web platforms.
            </p>
            <p>
              I work proficiently with technologies like Python, JavaScript, React, Node.js, PHP, MySQL, and MongoDB, always seeking opportunities to learn, engineer, and create tangible impact.
            </p>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 hover:border-cyan-500/30 transition-all flex items-center gap-3.5"
                >
                  <div className="p-2.5 rounded-lg bg-cyan-950/40 text-cyan-400 border border-cyan-800/40">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-text leading-tight">{item.val}</div>
                    <div className="text-xs text-muted leading-tight mt-0.5">{item.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
