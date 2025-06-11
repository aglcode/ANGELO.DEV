import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { HoverBorderGradient } from './ui/hover-border-gradient';

const Header = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact', onClick: onContactClick },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-secondary-900/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container py-4 flex items-center justify-between">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="block w-10 h-10"
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <g clipPath="url(#clip0)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0V50L100 100L0 150V200L100 150V200L200 150V100V50L100 0V50L0 0ZM100 50V100V150L200 100L100 50Z"
                fill="url(#paint0_linear)"
              />
            </g>
            <defs>
              <linearGradient id="paint0_linear" x1="14" y1="26" x2="179" y2="179.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E9B8FF" />
                <stop offset="1" stopColor="#F9ECFF" />
              </linearGradient>
              <clipPath id="clip0">
                <rect width="200" height="200" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </motion.a>

        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`nav-link ${
                activeSection === link.href.substring(1) ? 'active' : ''
              }`}
              onClick={(e) => {
                e.preventDefault();
                if (link.onClick) {
                  link.onClick();
                } else {
                  document.querySelector(link.href).scrollIntoView({
                    behavior: 'smooth',
                  });
                  setActiveSection(link.href.substring(1));
                }
              }}
            >
              {link.name === 'Contact' ? (
                <HoverBorderGradient>
                  {link.name}
                </HoverBorderGradient>
              ) : (
                link.name
              )}
              {activeSection === link.href.substring(1) && (
                <motion.span
                  layoutId="navIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500"
                ></motion.span>
              )}
            </motion.a>
          ))}
        </nav>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="md:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </motion.button>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-secondary-900 border-t border-secondary-800"
        >
          <nav className="container py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link ${
                  activeSection === link.href.substring(1) ? 'active' : ''
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  if (link.onClick) {
                    link.onClick();
                    setMobileMenuOpen(false);
                  } else {
                    document.querySelector(link.href).scrollIntoView({
                      behavior: 'smooth',
                    });
                    setMobileMenuOpen(false);
                    setActiveSection(link.href.substring(1));
                  }
                }}
              >
                {link.name === 'Contact' ? (
                  <HoverBorderGradient>
                    {link.name}
                  </HoverBorderGradient>
                ) : (
                  link.name
                )}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;