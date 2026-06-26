import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center mb-8">
          <h2 className="text-3xl font-bold text-text">About Me</h2>
          <div className="h-[1px] bg-muted/30 flex-grow ml-6"></div>
        </div>
        
        <div className="glass-panel p-8 rounded-2xl">
          <div className="space-y-4 text-muted text-lg leading-relaxed">
            <p>
              Hello! My name is Nur Uddin Tamim. I like to solve real world problmes, learn how things function and research to get new insights. I am a computer science and engineering student at United International University with a strong passion for software development, cybersecurity, machine learning, and system design. I started my BSCSE journey in 2023 knowing very minimal about computer science and coding
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of learning core computer science subjects and developed a strong foundation in programming and software development. I have also explored web development, machine learning and comptetive programming. I enjoy building secure and meaningful systems while continuously exploring how technology works at a deeper level. My experience includes developing web applications, researching intrusion detection systems using machine learning, and designing structured system workflows.
            </p>
            
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
