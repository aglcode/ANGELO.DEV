import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';
import { React } from "developer-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-0"
          >
            <span className="text-xl font-display font-bold text-primary-400">
              Angelo A.
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center mb-6 md:mb-0"
          >
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-secondary-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-secondary-400 text-sm"
        >
          <p>© {currentYear} Angelo Almonte. All rights reserved.</p>
          <p className="mt-4 md:mt-0 flex items-center">
          <span className="ml-1"><React size={20} /></span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;