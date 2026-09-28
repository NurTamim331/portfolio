import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const educationList = [
    {
      degree: 'B.Sc. in Computer Science and Engineering (BSCSE)',
      institution: 'United International University',
      year: '2023 - 2027 (Expected)',
      gpa: 'CGPA: 3.98',
      details: 'Key Focus: Vehicular Edge Computing, Machine Learning, Data Structures & Algorithms, Database Systems, Web Engineering, and System Design.'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Govt Science College, Tejgaon, Dhaka',
      year: '2021',
      gpa: 'GPA: 5.00 / 5.00',
      details: 'Science concentration with high distinction.'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Ideal School and College, Motijheel, Dhaka',
      year: '2018',
      gpa: 'GPA: 5.00 / 5.00',
      details: 'Science concentration with outstanding academic standing.'
    },
    {
      degree: 'Junior School Certificate (JSC)',
      institution: 'Motijheel Model High School and College',
      year: '2016',
      gpa: 'GPA: 5.00 / 5.00',
      details: 'General secondary curriculum.'
    }
  ];

  return (
    <section id="education" className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text">Education</h2>
          <div className="h-[1px] bg-slate-800 flex-grow ml-6"></div>
        </div>

        <div className="space-y-6">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 sm:p-7 rounded-2xl relative overflow-hidden group border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="p-3 bg-cyan-950/40 text-cyan-400 border border-cyan-800/40 rounded-xl">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-text group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-cyan-400/90 font-medium text-sm">{edu.institution}</p>
                  </div>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2">
                  <span className="px-3 py-1 bg-slate-800/70 border border-slate-700/60 text-slate-300 text-xs rounded-full font-mono">
                    {edu.year}
                  </span>
                  <span className="text-sm font-semibold text-emerald-400 font-mono">
                    {edu.gpa}
                  </span>
                </div>
              </div>
              <p className="text-muted text-sm sm:pl-14 leading-relaxed">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
