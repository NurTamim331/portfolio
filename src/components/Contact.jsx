import React, { useState } from 'react';
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
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center mb-8">
          <h2 className="text-3xl font-bold text-text">Get In Touch</h2>
          <div className="h-[1px] bg-muted/30 flex-grow ml-6"></div>
        </div>

        <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

          <p className="text-muted text-lg mb-8 relative z-10">
            Have a question or want to work together? Leave your details and a message below, and I'll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-text flex items-center gap-2">
                  <User size={16} className="text-primary" />
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted/50"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-text flex items-center gap-2">
                  <Mail size={16} className="text-primary" />
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted/50"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-text flex items-center gap-2">
                <MessageSquare size={16} className="text-primary" />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none placeholder:text-muted/50"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-green-400 bg-green-400/10 p-4 rounded-lg border border-green-400/20"
              >
                <CheckCircle size={20} />
                <p>Message sent successfully! I will get back to you soon.</p>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-lg border border-red-400/20"
              >
                <AlertCircle size={20} />
                <p>Oops! Something went wrong. Please try again later.</p>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="group relative flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 bg-primary text-background font-medium rounded-lg hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                <Send size={18} className={`transition-transform duration-300 ${status === 'submitting' ? 'translate-x-12 opacity-0' : 'group-hover:translate-x-1 group-hover:-translate-y-1'}`} />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
