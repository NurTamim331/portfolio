import { motion } from 'framer-motion';
import { Award, BookOpen } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Academic Honors */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-cyan-950/40 text-cyan-400 border border-cyan-800/40">
                <Award size={22} />
              </div>
              <h2 className="text-2xl font-bold text-text">Honors & Awards</h2>
            </div>
            <ul className="space-y-4">
              {[
                {
                  title: '100% Merit-Based Tuition Waiver & Scholarship',
                  desc: 'Awarded full tuition scholarship across 7 trimesters based on exceptional academic standing.',
                  org: 'United International University',
                  year: '2023 - Present'
                },
              ].map((item, index) => (
                <li key={index} className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-500/30 transition-all">
                  <h4 className="text-base font-bold text-text mb-1">{item.title}</h4>
                  <p className="text-xs text-muted mb-3 leading-relaxed">{item.desc}</p>
                  <div className="flex items-center justify-between text-xs text-cyan-400 font-mono pt-2 border-t border-slate-800/60">
                    <span>{item.org}</span>
                    <span>{item.year}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Training */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-blue-950/40 text-blue-400 border border-blue-800/40">
                <BookOpen size={22} />
              </div>
              <h2 className="text-2xl font-bold text-text">Training & Certifications</h2>
            </div>
            <ul className="space-y-4">
              {[
                {
                  title: 'Galileo GDS Airline Reservation & Global Ticketing',
                  org: 'Travelport',
                  duration: 'Comprehensive Certification'
                },
                {
                  title: 'Cisco Certified Network Associate (CCNA)',
                  org: 'United International University',
                  duration: '6 Months Intensive'
                },
                {
                  title: 'Full-Stack Web Development Course',
                  org: 'Programming Hero',
                  duration: '8 Months Track'
                },
              ].map((item, index) => (
                <li key={index} className="glass-panel p-5 rounded-2xl border border-slate-800/80 hover:border-blue-500/30 transition-all">
                  <h4 className="text-sm font-bold text-text mb-1">{item.title}</h4>
                  <div className="flex items-center justify-between text-xs text-muted font-mono pt-1">
                    <span className="text-slate-300">{item.org}</span>
                    <span className="text-cyan-400/80">{item.duration}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
