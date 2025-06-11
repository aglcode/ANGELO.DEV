import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight } from 'react-icons/fi';
import { TextHoverEffect } from './ui/text-hover-effect';
import {Alert} from "@heroui/alert";
import { HoverBorderGradient } from './ui/hover-border-gradient';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="home" 
      ref={ref} 
      className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden"
    >
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="px-4 sm:px-6" // Removed max-w-4xl mx-auto
        >
          <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[8rem] lg:text-[12rem] font-bold leading-[0.9] tracking-tighter mb-11 text-white text-left">
            ANGELO 
            ALMONTE
            <br />
            {/* <div
              className="text-[3.5rem] sm:text-[5rem] md:text-[8rem] lg:text-[12rem] font-bold leading-[0.9] tracking-tighter mb-6"
              style={{ opacity: 1 }} // Set opacity to 1 for full visibility
            >
              <TextHoverEffect text="ALMONTE" textSize="text-[3.5rem] sm:text-[5rem] md:text-[8rem] lg:text-[12rem]" />
            </div> */}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-16">
            <div>
              <p className="text-lg sm:text-xl text-secondary-300 mb-8">
                Building fast, modern websites with clean code and creative solutions. Focused on front-end and back-end development for seamless user experiences.
              </p>
              
              <div className="flex gap-4 sm:gap-6">
                 <HoverBorderGradient
                  as="a"
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#projects').scrollIntoView({
                      behavior: 'smooth',
                    });
                  }}
                  className="group flex items-center gap-2 text-white"
                  containerClassName="w-full sm:w-auto"
                >
                  View Projects
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </HoverBorderGradient>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8 mt-8 md:mt-0">
              <div className="border-l-2 border-primary-500 pl-4 sm:pl-6">
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2">Web Development / Design</h3>
                <p className="text-sm sm:text-base text-secondary-300">I focus on creating websites that combine solid development practices with thoughtful design to deliver clean, functional, and engaging user experiences.</p>
              </div>
              <div className="border-l-2 border-primary-500 pl-4 sm:pl-6">
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2">Graphics Design</h3>
                <p className="text-sm sm:text-base text-secondary-300">I design visual content like logos, social media assets, and layouts that enhance brand identity and communicate ideas effectively.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 bottom-0 w-full h-full bg-gradient-to-tl from-secondary-800 to-transparent">
          <div className="absolute right-8 sm:right-32 bottom-8 sm:bottom-32 w-32 sm:w-64 h-32 sm:h-64 rounded-full bg-primary-500/10 filter blur-3xl"></div>
          <div className="absolute right-16 sm:right-48 bottom-16 sm:bottom-48 w-48 sm:w-96 h-48 sm:h-96 rounded-full bg-accent-500/5 filter blur-3xl"></div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;