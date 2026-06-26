import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const jobs = [
    {
      company: 'Geo Trips',
      title: 'Office Assistant ',
      range: 'July 2022 - Present',
      duties: [
        'Managing customer service ',
        'Solving customer queries and operations using GDS (Galileo).',
        'Creating and managing a digital client directory for the company',
        'Handling the accounce part of the organization'
      ]
    },
    // {
    //   company: '[Company 2]',
    //   title: '[Previous Job Title]',
    //   range: '[Start Date] - [End Date]',
    //   duties: [
    //     'Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery',
    //     'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness',
    //     'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more'
    //   ]
    // }
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-12 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center mb-8">
          <h2 className="text-3xl font-bold text-text">Where I've Worked</h2>
          <div className="h-[1px] bg-muted/30 flex-grow ml-6"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible no-scrollbar border-b md:border-b-0 md:border-l border-surface min-w-[150px]">
            {jobs.map((job, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-3 text-left whitespace-nowrap text-sm font-medium transition-all ${
                  activeTab === index 
                    ? 'text-primary border-b-2 md:border-b-0 md:border-l-2 border-primary bg-primary/5' 
                    : 'text-muted hover:text-text hover:bg-surface/50'
                }`}
              >
                {job.company}
              </button>
            ))}
          </div>

          <div className="min-h-[300px]">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-text mb-1">
                {jobs[activeTab].title} <span className="text-primary">@ {jobs[activeTab].company}</span>
              </h3>
              <p className="text-sm text-muted mb-6 font-mono">{jobs[activeTab].range}</p>
              
              <ul className="space-y-4">
                {jobs[activeTab].duties.map((duty, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary mr-3 mt-1">▹</span>
                    <span className="text-muted leading-relaxed">{duty}</span>
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
