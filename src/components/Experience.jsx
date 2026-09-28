import { useState } from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const jobs = [
    {
      company: 'Geo Trips',
      title: 'Office Assistant',
      range: 'July 2022 - Present',
      duties: [
        'Managing client inquiries, ticketing operations, and customer service delivery.',
        'Executing specialized booking operations and flight itinerary inquiries using Galileo GDS (Travelport).',
        'Developing and maintaining an organized digital client directory to streamline operations.',
        'Assisting in day-to-day organizational accounts and financial records management.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text">Experience</h2>
          <div className="h-[1px] bg-slate-800 flex-grow ml-6"></div>
        </div>

        <div className="glass-panel p-8 rounded-2xl flex flex-col md:flex-row gap-8 border border-slate-800/80">
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-slate-800 min-w-[180px]">
            {jobs.map((job, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-3 text-left whitespace-nowrap text-sm font-medium transition-all ${
                  activeTab === index
                    ? 'text-cyan-400 border-b-2 md:border-b-0 md:border-l-2 border-cyan-400 bg-cyan-950/20'
                    : 'text-muted hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                {job.company}
              </button>
            ))}
          </div>

          <div className="min-h-[220px] flex-1">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-text mb-1">
                {jobs[activeTab].title} <span className="text-primary font-medium">@ {jobs[activeTab].company}</span>
              </h3>
              <p className="text-xs font-mono text-cyan-400/80 mb-6">{jobs[activeTab].range}</p>

              <ul className="space-y-3.5">
                {jobs[activeTab].duties.map((duty, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-300">
                    <span className="text-primary mr-3 font-mono">▸</span>
                    <span className="leading-relaxed">{duty}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
