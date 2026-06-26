import React from 'react';
import { motion } from 'framer-motion';

const References = () => {
  const references = [
    {
      name: 'Mr. Imran Hossain ',
      designation: 'Audit Officer ',
      organization: 'Excelsior Group of Company ',
      email: 'iemran35@gmail.com',
      phone: '+88 01772-794491'
    },
    {
      name: 'Mr. Harun Ur Rashid  ',
      designation: 'HR Manager ',
      organization: 'PRAN RFL Group',
      email: 'harun3523@gmail.com',
      phone: '+88 01918-172199'
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center mb-12">
          <h2 className="text-3xl font-bold text-text">References</h2>
          <div className="h-[1px] bg-muted/30 flex-grow ml-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {references.map((ref, index) => (
            <div key={index} className="glass-panel p-6 rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              <h3 className="text-xl font-bold text-text mb-1">{ref.name}</h3>
              <p className="text-primary font-medium text-sm mb-4">{ref.designation}, {ref.organization}</p>

              <div className="space-y-2 text-sm text-muted">
                <p>Email: <a href={`mailto:${ref.email}`} className="hover:text-primary transition-colors">{ref.email}</a></p>
                <p>Phone: {ref.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default References;
