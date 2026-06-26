import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Java", "Python", "PHP", "JavaScript", "shell"]
    },
    {
      title: "Libraries & Frameworks",
      skills: ["React", "Node.js", "Tailwind CSS"]
    },
    {
      title: "Databases & Tools",
      skills: ["MongoDB", "Git","MySQL"]
    },
    {
      title: "Languages",
      skills: ["English (Fluent)", "Bengali (Native)"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center mb-12">
          <h2 className="text-3xl font-bold text-text">Technical & Language Skills</h2>
          <div className="h-[1px] bg-muted/30 flex-grow ml-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-panel p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-primary mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <motion.span 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-surface text-text rounded-full text-sm font-medium border border-white/5 hover:border-primary/50 hover:text-primary transition-colors cursor-default shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
