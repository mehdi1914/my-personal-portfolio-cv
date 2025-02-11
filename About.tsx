// Remove this line as it's not needed with modern JSX transform
// import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Briefcase, GraduationCap, Heart } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-neon-green mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-2xl border-2 border-neon-green">
              <img
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=1000"
                alt="Professional headshot"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black border-2 border-neon-green rounded-xl flex items-center justify-center">
              <Code2 size={32} className="text-neon-green" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-neon-green">Full-Stack Developer & UI/UX Enthusiast</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate developer with a keen eye for creating beautiful, functional, and user-friendly web applications. With expertise in both frontend and backend technologies, I bring ideas to life through clean code and intuitive design.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Briefcase className="text-neon-green" />
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <GraduationCap className="text-neon-green" />
                <span>BSc in Computer Science</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code2 className="text-neon-green" />
                <span>50+ Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="text-neon-green" />
                <span>Love for Clean Code</span>
              </div>
            </div>

            <div className="pt-4">
              <button className="bg-transparent border-2 border-neon-green text-neon-green px-6 py-2 rounded-full hover:bg-neon-green hover:text-black transition-colors duration-300">
                Download CV
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;