import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiLayout, FiUsers, FiTrendingUp } from 'react-icons/fi';
import angelo from '../assets/img/angelo.jpg';
import almonte from '../assets/img/almonte.jpg';
import { useEffect, useState } from 'react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // State to track if we're on mobile
  const [isMobile, setIsMobile] = useState(false);
  
  // Check for mobile on component mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const aboutItems = [
    {
      icon: <FiCode />,
      title: 'Clean Code',
      description: 'I write clean, maintainable code that follows best practices and industry standards.'
    },
    {
      icon: <FiLayout />,
      title: 'Responsive Design',
      description: 'I create websites that look great on all devices, from mobile phones to desktop computers.'
    },
    {
      icon: <FiUsers />,
      title: 'User-Focused',
      description: 'I prioritize the user experience in everything I build, creating intuitive interfaces.'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Performance',
      description: 'I optimize for speed and performance to ensure fast loading times and smooth interactions.'
    }
  ];

  return (
    <section 
      id="about" 
      ref={ref} 
      className={`section ${isMobile ? 'bg-secondary-800/30 text-white' : 'bg-secondary-50 dark:bg-secondary-800/30'}`}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`mb-4 ${isMobile ? 'text-white' : 'text-secondary-900 dark:text-white'}`}>About Me</h2>
          <p className={`max-w-2xl mx-auto ${isMobile ? 'text-secondary-300' : 'text-secondary-600 dark:text-secondary-300'}`}>
            I'm a frontend developer with a passion for creating beautiful, functional websites 
            and applications that deliver exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img 
                  src={angelo}
                  alt="Profile" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-75"
                />
              </div>
              <div className={`absolute -bottom-6 -right-6 p-6 ${isMobile ? 'bg-secondary-900' : 'bg-white dark:bg-secondary-900'} rounded-2xl shadow-lg`}>
                <p className="font-display font-bold">Angelo L. Almonte</p>
                <p className={`${isMobile ? 'text-secondary-400' : 'text-secondary-600 dark:text-secondary-400'} text-sm`}>Frontend Developer</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className={`text-2xl font-bold mb-6 ${isMobile ? 'text-white' : 'text-secondary-900 dark:text-white'}`}>
              Crafting Digital Experiences with Precision & Passion
            </h3>
            <p className={`mb-6 ${isMobile ? 'text-secondary-300' : 'text-secondary-600 dark:text-secondary-300'}`}>
              Hi, I'm Angelo. It's great to meet you! I'm excited to share my interests and learn more about you as well. I have over a year in web development. I do different kinds of projects, like full-stack systems. But I myself excel at websites, more on front-end works. I'd love graphical representation. Also, I have a keen eye for designs and colors.
            </p>
            <p className={`mb-8 ${isMobile ? 'text-secondary-300' : 'text-secondary-600 dark:text-secondary-300'}`}>
              I believe that a well-designed interface can greatly enhance user experience, and I'm constantly seeking inspiration from various sources to refine my skills. In addition to web development, I enjoy exploring new design trends and technologies to stay ahead in this ever-evolving field. 
            </p>

            <div className="grid grid-cols-2 gap-6">
              {aboutItems.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                  className="flex flex-col"
                >
                  <div className="text-primary-500 dark:text-primary-400 text-xl mb-2">
                    {item.icon}
                  </div>
                  <h4 className={`text-lg font-semibold mb-1 ${isMobile ? 'text-white' : 'text-secondary-900 dark:text-white'}`}>
                    {item.title}
                  </h4>
                  <p className={`text-sm ${isMobile ? 'text-secondary-400' : 'text-secondary-600 dark:text-secondary-400'}`}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;