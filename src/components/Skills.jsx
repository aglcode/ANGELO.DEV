import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HoverEffect } from './ui/card-hover-effect';
import { HoverBorderGradient } from './ui/hover-border-gradient';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'Firebase', 'MySQL', 'PHP']
    },
    {
      category: 'Dev & Design Tools',
      items: ['Git', 'GitHub', 'Vite', 'Figma', 'Wix/Studio', 'VSCode', 'Xampp', 'Cursor']
    }
  ];

  return (
    <section id="skills" ref={ref} className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white md:text-secondary-900 dark:text-white">Technical Skills</h2>
          <p className="max-w-2xl mx-auto text-secondary-600 dark:text-secondary-300">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <HoverEffect items={skills} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between"
        >
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Want to work together?</h3>
            <p className="text-white/90 max-w-xl">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>
          <HoverBorderGradient
            as="a"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact').scrollIntoView({
                behavior: 'smooth',
              });
            }}
            className="text-white whitespace-nowrap"
            containerClassName="w-full md:w-auto"
          >
            Get In Touch
          </HoverBorderGradient>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;