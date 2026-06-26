import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="more" className="py-20 px-6 md:px-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Achievements */}
          <div>
            <div className="flex items-center mb-8">
              <Award className="text-primary mr-3" size={28} />
              <h2 className="text-2xl font-bold text-text">Achievements</h2>
            </div>
            <ul className="space-y-6">
              {[
                { title: 'Full Scholarship in 7 Trimesters out of 12 at United International University during BSCSE', org: 'United Internationl University', year: '2023-2027' },
                // { title: '[Achievement 2]', org: '[Organization/Event]', year: '[Year]' },
              ].map((item, index) => (
                <li key={index} className="glass-panel p-5 rounded-lg border-l-4 border-l-primary">
                  <h4 className="text-lg font-semibold text-text">{item.title}</h4>
                  <p className="text-sm text-muted mt-1">{item.org} &bull; <span className="font-mono">{item.year}</span></p>
                </li>
              ))}
            </ul>
          </div>

          {/* Training and Workshops */}
          <div>
            <div className="flex items-center mb-8">
              <BookOpen className="text-primary mr-3" size={28} />
              <h2 className="text-2xl font-bold text-text">Training & Workshops</h2>
            </div>
            <ul className="space-y-6">
              {[
                { title: 'GDS of Galileo Airlines Reservation and Ticketing. ', org: 'Travelport', duration: '30 Days' },
                { title: 'CCNA', org: 'United International University', duration: '6 months' },
                { title: 'Web Development', org: 'Programming Hero', duration: '8 months' },
              ].map((item, index) => (
                <li key={index} className="glass-panel p-5 rounded-lg border-l-4 border-l-secondary">
                  <h4 className="text-lg font-semibold text-text">{item.title}</h4>
                  <p className="text-sm text-muted mt-1">{item.org} &bull; <span className="font-mono">{item.duration}</span></p>
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
