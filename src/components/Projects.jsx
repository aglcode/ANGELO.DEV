import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiFilter } from 'react-icons/fi';
import hms from '../assets/projects/hms.webp';
import realstate from '../assets/projects/realstate.webp';
import wiki from '../assets/projects/wiki.webp';
import xiao from '../assets/projects/xiao.webp';
import videodl from '../assets/projects/youtube.webp';
import design1 from '../assets/projects/design1.webp';
import apple1 from '../assets/projects/apple1.webp';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');
  
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

  const projects = [
    {
      title: 'Youtube Video Downloader',
      description: 'API-based YouTube Video Downloader that allows users to download mp3/mp4 files by uploading links from YouTube, with the option to choose from a variety of high-quality resolutions.',
      image: videodl,
      technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
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
      technologies: ['React', 'OpenWeather API', 'TailwindCSS'],
      category: 'web',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Real-Estate Landing Page',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      image: realstate,
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      category: 'web',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Fan WikiPedia',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      image: wiki,
      technologies: ['React Native', 'Google Maps API', 'GraphQL'],
      category: 'web',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Minimalist Designer Portfolio',
      description: 'Developed a basic To-Do List using ReactJS with JSON server for CRUD operations, enabling users to add, edit, and delete data.',
      image: design1,
      technologies: ['Figma'],
      category: 'design',
      demoUrl: '#',
      githubUrl: 'https://github.com/aglcode/React-To-Do-List-'
    },
        {
      title: 'Apple Inspired',
      description: 'Developed a basic To-Do List using ReactJS with JSON server for CRUD operations, enabling users to add, edit, and delete data.',
      image: apple1,
      technologies: ['Figma'],
      category: 'design',
      demoUrl: '#',
      githubUrl: 'https://github.com/aglcode/React-To-Do-List-'
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading='lazy'
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white space-y-2">
                    <div className="flex gap-3">
                      <a href={project.demoUrl} className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                        <FiExternalLink />
                      </a>
                      <a href={project.githubUrl} className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                        <FiGithub />
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
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;