import { motion } from 'framer-motion';
import { Mail, Phone, UserCheck } from 'lucide-react';

const References = () => {
  const references = [
    {
      name: 'Mr. Imran Hossain',
      designation: 'Audit Officer',
      organization: 'Excelsior Group of Companies',
      email: 'iemran35@gmail.com',
      phone: '+88 01772-794491'
    },
    {
      name: 'Mr. Harun Ur Rashid',
      designation: 'HR Manager',
      organization: 'PRAN-RFL Group',
      email: 'harun3523@gmail.com',
      phone: '+88 01918-172199'
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text">References</h2>
          <div className="h-[1px] bg-slate-800 flex-grow ml-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {references.map((ref, index) => (
            <div
              key={index}
              className="glass-panel p-7 rounded-2xl relative overflow-hidden group border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3.5 mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-950/40 text-cyan-400 border border-cyan-800/40">
                  <UserCheck size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text">{ref.name}</h3>
                  <p className="text-cyan-400 font-medium text-xs font-mono">{ref.designation} • {ref.organization}</p>
                </div>
              </div>

              <div className="space-y-2 text-sm text-slate-300 pt-3 border-t border-slate-800/60">
                <div className="flex items-center gap-2">
                  <Mail size={15} className="text-muted" />
                  <a href={`mailto:${ref.email}`} className="hover:text-primary transition-colors text-xs font-mono">
                    {ref.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={15} className="text-muted" />
                  <span className="text-xs font-mono text-muted">{ref.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default References;
