import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { HoverBorderGradient } from './ui/hover-border-gradient';
import { useEffect, useCallback } from "react";

import {
  React,
  JavaScript,
  HTML5,
  CSS3,
  Bootstrap5,
  TailwindCSS,
  NodeJs,
  ExpressJsLight,
  MongoDB,
  Firebase,
  MySQL,
  PHP,
  Git,
  GitHubLight,
  ViteJS, 
  Figma,
  DeveloperIcons,
  VisualStudioCode,
  ReactRouter,
  Netlify2,
  Render,
  ChatGPT,
  ClaudeAI,
  HuggingFace,
  NPM,
  Postman,
  ShadcnUI,
  Appwrite  
} from "developer-icons";

const skills = [
  { name: "React", icon: <React size={32} /> },
  { name: "React Router", icon: <ReactRouter size={32} /> },
  { name: "JavaScript", icon: <JavaScript size={32} /> },
  { name: "HTML5", icon: <HTML5 size={32} /> },
  { name: "CSS3", icon: <CSS3 size={32} /> },
  { name: "Bootstrap 5", icon: <Bootstrap5 size={32} />},
  { name: "Tailwind CSS", icon: <TailwindCSS size={32} /> },
  { name: "Node.js", icon: <NodeJs size={32} /> },
  { name: "Express.js", icon: <ExpressJsLight size={32} /> },
  { name: "MongoDB", icon: <MongoDB size={32} /> },
  { name: "Firebase", icon: <Firebase size={32} /> },
  { name: "MySQL", icon: <MySQL size={32} /> },
  { name: "PHP", icon: <PHP size={32} /> },
  { name: "Git", icon: <Git size={32} /> },
  { name: "GitHub", icon: <GitHubLight size={32} /> },
  { name: "Netlify", icon: <Netlify2 size={32} /> },
  { name: "Render", icon: <Render size={32} /> },
  { name: "ViteJS", icon: <ViteJS size={32} /> },
  { name: "Figma", icon: <Figma size={32} /> },
  { name: "Dev Icons", icon: <DeveloperIcons size={32} /> },
  { name: "VS Code", icon: <VisualStudioCode size={32} /> },
  { name: "ChatGPT", icon: <ChatGPT size={32} /> },
  { name: "Claude AI", icon: <ClaudeAI size={32} /> },
  { name: "H Face", icon: <HuggingFace size={32} /> },
  { name: "NPM", icon: <NPM size={32} /> },
  { name: "Postman", icon: <Postman size={32} /> },
  { name: "Shadcn UI", icon: <ShadcnUI size={32} /> },
  { name: "Appwrite", icon: <Appwrite size={32} /> }
];

const Skills = ({ onContactClick }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Embla Carousel setup with explicit AutoScroll options
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    AutoScroll({ playOnInit: true, speed: 2, stopOnInteraction: false, stopOnMouseEnter: false, stopOnFocusIn: false }),
  ]);

  // Function to resume scrolling
  const resumeAutoScroll = useCallback(() => {
    if (emblaApi && emblaApi.plugins().autoScroll) {
      const autoScroll = emblaApi.plugins().autoScroll;
      autoScroll.play();
    }
  }, [emblaApi]);

  // Handle slide click to prevent default and resume scrolling
  const handleSlideClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    resumeAutoScroll();
  }, [resumeAutoScroll]);

  // Ensure AutoScroll resumes when component is in view
  useEffect(() => {
    if (inView && emblaApi && emblaApi.plugins().autoScroll) {
      emblaApi.plugins().autoScroll.play();
    }
  }, [inView, emblaApi]);

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
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="embla__slide flex flex-col items-center min-w-[120px] max-w-[140px] rounded-lg p-4 shadow-md mx-2 pointer-events-auto"
                    onClick={handleSlideClick}
                  >
                    <div className="mb-2 pointer-events-none">{skill.icon}</div>
                    <span className="text-sm text-secondary-200 pointer-events-none">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Optional: gradient fade on sides */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12" />
          </div>
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
            as="button"
            onClick={onContactClick}
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