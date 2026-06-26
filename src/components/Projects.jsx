import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Folder } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Comparative analysis of machine learning algorithms on CICIDS2017 dataset for network intrusion detection',
      description: 'This research was part of our machine learning course. Here we tried to solved the class imbalance problem of this dataset using SMOTE-Tomek algorithm. We also used 10 different algorithms from 5 different algorithm families to figure out which works better for Intrusion detection systems using 14 different metrices',
      techStack: ['Python', 'Scikit-learn'],
      github: '#',
      external: '#'
    },
    {
      title: 'Nest Quest',
      description: 'For my Systems analysis and design course, I worked on this system design project Called Nest Quest. It is a market place for Real estate where users will be able to make their buying decision in a more informed way. The residents of an area can post alerts like crime, no gas, no water etc. This data along with ai model will suggest a price for real estate to the customer. Users are also allowed to purchase plots in groups and connect with each other via the system. ',
      techStack: ['Figma'],
      github: '#',
      external: 'https://www.figma.com/design/aqLZ8QYCvJgdqY6PYureTZ/Nest-Quest?node-id=0-1&t=sSWn2tpBsV05tBsP-1'
    },
    {
      title: 'Farm Hub',
      description: 'This project was initially built for the Database management systems course. It is built for the farmers to track their crop growth, see weather updates, buy items from the marketplace , get disease prediction based on the symptoms. During the computer security course, we added 20 new security features to it making it a robust and secure platform for the farmers.',
      techStack: ['Html', 'Tailwind Css', 'PHP', 'MySql', 'Figma'],
      github: 'https://github.com/labiba-zoha/Smart-Farm-HUB-',
      external: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center mb-12">
          <h2 className="text-3xl font-bold text-text">Academic & Personal Projects</h2>
          <div className="h-[1px] bg-muted/30 flex-grow ml-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-panel p-8 rounded-xl flex flex-col h-full group"
            >
              <div className="flex justify-between items-center mb-8">
                <Folder size={40} className="text-primary" />
                <div className="flex gap-4">
                  <a href={project.github} className="text-muted hover:text-primary transition-colors">
                    <Code2 size={20} />
                  </a>
                  <a href={project.external} className="text-muted hover:text-primary transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors cursor-pointer">
                {project.title}
              </h3>

              <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-auto">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-950/40 text-cyan-300 border border-cyan-800/50 backdrop-blur-sm shadow-sm transition-all duration-300 group-hover:border-cyan-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
