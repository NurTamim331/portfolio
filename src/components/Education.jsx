import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const educationList = [
    {
      degree: 'B.Sc. in Computer Science and Engineering (BSCSE)',
      institution: 'United International University',
      year: '2023 - 2027',
      gpa: 'CGPA: 3.98',
      details: 'Relevant Coursework: Data Structures, Algorithms, Database Management, Web Engineering, system design, machine learning and artificial intelligence'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Govt Science College, Tejgaon Dhaka',
      year: '2021',
      gpa: 'Gpa: 5.00',
      details: 'Science Group.'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Ideal School and College',
      year: '2018',
      gpa: 'Gpa: 5.00',
      details: 'Science Group.'
    },
    {
      degree: 'Junior School Certificate (JSC)',
      institution: 'Motijheel Model High School and College',
      year: '2016',
      gpa: 'Gpa : 5.00',
      details: 'General curriculum.'
    }
  ];

  return (
    <section id="education" className="py-20 px-6 md:px-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center mb-12">
          <h2 className="text-3xl font-bold text-text">Education</h2>
          <div className="h-[1px] bg-muted/30 flex-grow ml-6"></div>
        </div>

        <div className="space-y-8">
          {educationList.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-primary transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out"></div>
              
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-surface rounded-lg text-primary">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text">{edu.degree}</h3>
                    <p className="text-primary font-medium">{edu.institution}</p>
                  </div>
                </div>
                <div className="text-left md:text-right">
                  <span className="inline-block px-3 py-1 bg-surface text-muted text-sm rounded-full font-mono mb-1">{edu.year}</span>
                  <p className="text-sm font-semibold text-text">{edu.gpa}</p>
                </div>
              </div>
              <p className="text-muted ml-16">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
