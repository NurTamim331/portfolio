import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import profilePic from '../assets/pic.jpg';
const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6 md:px-12 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 mix-blend-screen"
      ></motion.div>
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10 mix-blend-screen"
      ></motion.div>

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary font-medium tracking-wide mb-3 text-lg md:text-xl">Hi, my name is</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-text mb-4 leading-tight">
            Nur Uddin Tamim.
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold text-muted mb-6 leading-tight">
            I build secure and intelligent digital solutions.
          </h1>
          <p className="text-muted text-lg max-w-xl mb-10 mx-auto md:mx-0">
            I’m Nur Uddin Tamim — a Computer Science and Engineering student at United International University passionate about Cybersecurity, Machine Learning, and Web Development.

            I enjoy building secure and meaningful systems while continuously exploring how technology works at a deeper level. My experience includes developing web applications, researching intrusion detection systems using machine learning, and designing structured system workflows.

            I work with technologies like Python, JavaScript, React, Node.js, PHP, MySQL, and MongoDB, and I’m always focused on improving my skills through projects, research, and continuous learning.

            My goal is to build intelligent and secure solutions that solve real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="px-8 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              View My Work <ArrowRight size={20} />
            </Link>
            <a
              href="https://drive.google.com/file/d/1dIBX2Vturr0HpFkuU-K6ubGSm30FYUgq/view?usp=drive_link" 
              className="px-8 py-3 bg-transparent border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors flex items-center justify-center gap-2"
            >
              Resume <Download size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="relative group"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-surface bg-surface flex items-center justify-center">
              {/* Picture Placeholder */}
              <img
                src={profilePic}
                alt="Profile"
                className="object-cover w-full h-full  hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:opacity-0 transition-opacity duration-500"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bouncing Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer text-muted hover:text-primary transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Link to="about" smooth={true} duration={500} offset={-80}>
          <ChevronDown size={32} />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
