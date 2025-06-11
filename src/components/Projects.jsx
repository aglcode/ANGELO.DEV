import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiEye, FiGithub, FiX } from 'react-icons/fi';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import hms from '../assets/projects/hms.webp';
import realstate from '../assets/projects/realstate.webp';
import wiki from '../assets/projects/wiki.webp';
import xiao from '../assets/projects/xiao.webp';
import videodl from '../assets/projects/youtube.webp';
import design1 from '../assets/projects/design1.webp';
import apple1 from '../assets/projects/apple1.webp';
import movo from '../assets/projects/movomock.webp';

// Import developer-icons
import {
  React as ReactIcon,
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

// Map technology names to icons
const techIcons = {
  "React": <ReactIcon size={24} />,
  "React Router": <ReactRouter size={24} />,
  "JavaScript": <JavaScript size={24} />,
  "HTML": <HTML5 size={24} />,
  "HTML5": <HTML5 size={24} />,
  "CSS": <CSS3 size={24} />,
  "CSS3": <CSS3 size={24} />,
  "Bootstrap 5": <Bootstrap5 size={24} />,
  "Bootstrap5": <Bootstrap5 size={24} />,
  "TailwindCSS": <TailwindCSS size={24} />,
  "Tailwind CSS": <TailwindCSS size={24} />,
  "Node.js": <NodeJs size={24} />,
  "NodeJs": <NodeJs size={24} />,
  "Express.js": <ExpressJsLight size={24} />,
  "ExpressJs": <ExpressJsLight size={24} />,
  "MongoDB": <MongoDB size={24} />,
  "Firebase": <Firebase size={24} />,
  "MySQL": <MySQL size={24} />,
  "PHP": <PHP size={24} />,
  "Git": <Git size={24} />,
  "GitHub": <GitHubLight size={24} />,
  "ViteJS": <ViteJS size={24} />,
  "Figma": <Figma size={24} />,
  "Netlify": <Netlify2 size={24} />,
  "Render": <Render size={24} />,
  "ChatGPT": <ChatGPT size={24} />,
  "Claude AI": <ClaudeAI size={24} />,
  "HuggingFace": <HuggingFace size={24} />,
  "NPM": <NPM size={24} />,
  "Postman": <Postman size={24} />,
  "Shadcn UI": <ShadcnUI size={24} />,
  "ShadcnUI": <ShadcnUI size={24} />,
  "Appwrite": <Appwrite size={24}/>
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  
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

  // Close modal when ESC key is pressed
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalOpen]);

  const projects = [
    {
      title: 'Movie Site',
      description: 'This is a movie streaming website where users can browse and search a wide selection of movies online. It features a sleek interface and user-friendly design for easy navigation.',
      image: movo,
      technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'React', 'API', 'Appwrite'],
      category: 'web',
      demoUrl: '#',
      githubUrl: 'https://github.com/https://github.com/aglcode/movo.git/YoutubeVideoDownloader'
    },
    {
      title: 'Apple Inspired',
      description: 'Developed a basic To-Do List using ReactJS with JSON server for CRUD operations, enabling users to add, edit, and delete data.',
      image: apple1,
      technologies: ['Figma'],
      category: 'design',
      demoUrl: '#',
      gdriveUrl: 'https://drive.google.com/drive/folders/1eyxcYkAldh2mZ6LHcKtlPp-31MStFtbV?usp=drive_link'
    },
        {
      title: 'Minimalist Designer Portfolio',
      description: 'Developed a basic To-Do List using ReactJS with JSON server for CRUD operations, enabling users to add, edit, and delete data.',
      image: design1,
      technologies: ['Figma'],
      category: 'design',
      demoUrl: '#',
      gdriveUrl: 'https://drive.google.com/drive/folders/1pxT10UZgJBnWXE1RAoIp661h9sWy3mwL?usp=drive_link'
    },
    {
      title: 'Youtube Video Downloader',
      description: 'API-based YouTube Video Downloader that allows users to download mp3/mp4 files by uploading links from YouTube, with the option to choose from a variety of high-quality resolutions.',
      image: videodl,
      technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'Express.js', 'React'],
      category: 'web',
      demoUrl: '#',
      githubUrl: 'https://github.com/aglcode/YoutubeVideoDownloader'
    },
    {
      title: 'Portfolio Template',
      description: 'A customizable portfolio template for creative professionals with smooth animations and responsive design.',
      image: xiao,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'web',
      demoUrl: '#',
      githubUrl: 'https://github.com/aglcode/xiao'
    },
    {
      title: 'Healthcare Management System',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      image: hms,
      technologies: ['HTML', 'CSS', 'Bootstrap 5', 'JavaScript', 'PHP', 'MySQL'],
      category: 'web',
      demoUrl: '#',
      githubUrl: 'https://github.com/aglcode/HMS.git'
    },
    {
      title: 'Real-Estate Landing Page',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      image: realstate,
      technologies: ['HTML', 'JavaScript', 'React', 'Tailwind CSS'],
      category: 'web',
      demoUrl: '#',
      githubUrl: 'https://github.com/aglcode/real-estate-landing-page'
    },
    {
      title: 'Fan WikiPedia',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      image: wiki,
      technologies: ['HTML', 'JavaScript', 'React', 'Tailwind CSS'],
      category: 'web',
      demoUrl: '#',
      githubUrl: 'https://github.com/aglcode/wuwawiki'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Clear selection after animation completes
  };

  return (
    <section 
      id="projects" 
      ref={ref} 
      className={`section ${isMobile ? 'bg-secondary-800/30' : 'bg-secondary-50 dark:bg-secondary-800/30'}`}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`mb-4 ${isMobile ? 'text-white' : 'text-secondary-900 dark:text-white'}`}>My Projects</h2>
          <p className={`max-w-2xl mx-auto ${isMobile ? 'text-secondary-300' : 'text-secondary-600 dark:text-secondary-300'}`}>
            Here's a selection of my recent work. Each project presented unique challenges 
            and opportunities to create something meaningful.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'all'
                ? 'bg-primary-500 text-white'
                : isMobile 
                  ? 'bg-secondary-700 text-secondary-300 hover:bg-secondary-600' 
                  : 'bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-600'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('web')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'web'
                ? 'bg-primary-500 text-white'
                : isMobile 
                  ? 'bg-secondary-700 text-secondary-300 hover:bg-secondary-600' 
                  : 'bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-600'
            }`}
          >
            Web Apps
          </button>
          <button
            onClick={() => setFilter('design')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'design'
                ? 'bg-primary-500 text-white'
                : isMobile 
                  ? 'bg-secondary-700 text-secondary-300 hover:bg-secondary-600' 
                  : 'bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-600'
            }`}
          >
            Designs
          </button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              className="card overflow-hidden group"
            >
              <div className="relative overflow-hidden aspect-video w-full h-full object-cover">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading='lazy'
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="text-white">
                    <h4 className="text-xl font-bold transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      {project.title}
                    </h4>
                  </div>
                  <div className="text-white space-y-2">
                    <div className="flex gap-3">
                      <button 
                        onClick={() => openModal(project)}
                        className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                      >
                        <FiEye />
                      </button>
                      <a 
                        href={project.category === 'design' ? project.gdriveUrl : project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                      >
                        {project.category === 'design' ? <FiExternalLink /> : <FiGithub />}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${isMobile ? 'text-white' : 'text-secondary-900 dark:text-white'}`}>
                  {project.title}
                </h3>
                <p className={`${isMobile ? 'text-secondary-300' : 'text-secondary-600 dark:text-secondary-300'} mb-4`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-2 py-1 text-xs rounded-full ${
                        isMobile 
                          ? 'bg-primary-900/30 text-primary-400' 
                          : 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                      } flex items-center gap-1`}
                    >
                      {techIcons[tech] && <span>{techIcons[tech]}</span>}
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {modalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-secondary-900/80"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className={`rounded-lg w-full max-w-lg overflow-hidden shadow-xl ${
                isMobile ? 'bg-secondary-900' : 'bg-white dark:bg-secondary-800'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full aspect-video object-cover"
                />
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 rounded-full bg-secondary-900/50 text-white hover:bg-secondary-900/70 transition-colors"
                >
                  <FiX size={20} />
                </button>
              </div>
              
              <div className="p-6">
                <h2 className={`text-2xl font-bold mb-2 ${isMobile ? 'text-white' : 'text-secondary-900 dark:text-white'}`}>
                  {selectedProject.title}
                </h2>
                <p className="text-secondary-600 dark:text-secondary-300 mb-6">
                  {selectedProject.description}
                </p>               
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-secondary-900 dark:text-white">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, techIndex) => (
                      <HoverBorderGradient
                        key={techIndex}
                        as="div"
                        className="flex items-center gap-2 px-3 py-1 rounded-ful bg-slate-900"
                        containerClassName=""
                      >
                        {techIcons[tech] && <span>{techIcons[tech]}</span>}
                        <span className="text-sm">{tech}</span>
                      </HoverBorderGradient>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 flex gap-4">
                  <a 
                    href={selectedProject.category === 'design' ? selectedProject.gdriveUrl : selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-md bg-secondary-100 dark:bg-secondary-700 text-secondary-900 dark:text-white hover:bg-secondary-200 dark:hover:bg-secondary-600 transition-colors"
                  >
                    {selectedProject.category === 'design' ? <FiExternalLink /> : <FiGithub />}
                    {selectedProject.category === 'design' ? 'View on Google Drive' : 'View Code'}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;