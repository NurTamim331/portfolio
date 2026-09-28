import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, User, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // 'idle', 'submitting', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formsubmit.co/ajax/nutamim2001@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New portfolio message from ${formData.name}`
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text">Get In Touch</h2>
          <div className="h-[1px] bg-slate-800 flex-grow ml-6"></div>
        </div>

        <div className="glass-panel p-8 sm:p-10 rounded-2xl relative overflow-hidden border border-slate-800/80">
          <p className="text-muted text-base md:text-lg mb-8 relative z-10">
            Interested in collaboration, research opportunities, or discussing engineering challenges? Send me a message and I'll get back to you promptly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-mono font-medium text-slate-300 flex items-center gap-2">
                  <User size={15} className="text-primary" />
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-text focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all placeholder:text-slate-600 text-sm"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-mono font-medium text-slate-300 flex items-center gap-2">
                  <Mail size={15} className="text-primary" />
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-text focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all placeholder:text-slate-600 text-sm"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-mono font-medium text-slate-300 flex items-center gap-2">
                <MessageSquare size={15} className="text-primary" />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-text focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all resize-none placeholder:text-slate-600 text-sm"
                placeholder="How can I assist you?"
              ></textarea>
            </div>

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2.5 text-emerald-300 bg-emerald-950/30 p-4 rounded-xl border border-emerald-800/40 text-sm"
              >
                <CheckCircle size={18} className="text-emerald-400 flex-shrink-0" />
                <p>Message sent successfully! I will get back to you soon.</p>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2.5 text-rose-300 bg-rose-950/30 p-4 rounded-xl border border-rose-800/40 text-sm"
              >
                <AlertCircle size={18} className="text-rose-400 flex-shrink-0" />
                <p>Oops! Something went wrong. Please try again later.</p>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="px-8 py-3.5 bg-primary text-slate-950 font-semibold rounded-xl hover:bg-primaryHover hover:shadow-glow-cyan transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed text-sm"
            >
              <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
              <Send size={16} className={status === 'submitting' ? 'animate-pulse' : ''} />
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
