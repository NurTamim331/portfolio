import { motion } from 'framer-motion';
import { Code2, Database, Layout, Languages } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Python", "C", "C++", "Java", "JavaScript", "PHP", "Shell Scripting"]
    },
    {
      title: "Frameworks & Libraries",
      icon: Layout,
      skills: ["React", "Node.js", "Express", "Tailwind CSS", "Scikit-Learn"]
    },
    {
      title: "Databases, Protocols & Tools",
      icon: Database,
      skills: ["MongoDB", "MySQL", "Git & GitHub", "VEC / Edge Systems", "REST APIs", "WebSockets"]
    },
    {
      title: "Languages & Communication",
      icon: Languages,
      skills: ["English (Professional Working)", "Bengali (Native)"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text">Technical & Domain Skills</h2>
          <div className="h-[1px] bg-slate-800 flex-grow ml-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="glass-panel p-7 rounded-2xl border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-cyan-950/40 text-cyan-400 border border-cyan-800/40">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-text">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.04, y: -2 }}
                      className="px-3 py-1.5 bg-slate-900/80 text-slate-300 rounded-lg text-xs md:text-sm font-mono border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 hover:bg-slate-850 transition-all cursor-default shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
