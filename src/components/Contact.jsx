import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiLinkedin, FiGithub, FiInstagram, FiFacebook, FiX } from 'react-icons/fi';
import { BackgroundGradient } from './ui/background-gradient';
import { GlowingEffect } from './ui/glowing-effect';

const Contact = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
          <BackgroundGradient className="max-w-4xl w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-secondary-900 rounded-xl shadow-xl w-full p-4 sm:p-8 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={onClose}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-secondary-500 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-200"
              >
                <FiX size={24} />
              </button>

              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-2 sm:mb-4">Contact Information</h2>
                <p className="text-sm sm:text-base text-secondary-600 dark:text-secondary-300">
                  Feel free to reach out through any of these channels
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
                <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                  />
                  <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                    <div className="relative flex flex-1 flex-col items-center justify-center text-center gap-3">
                      <div className="w-fit rounded-lg border border-gray-600 p-2">
                        <FiMail size={20} className="sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-secondary-900 dark:text-white">
                          Email
                        </h3>
                        <a href="mailto:almonteangelo1236@gmail.com" className="text-sm sm:text-base text-secondary-600 dark:text-secondary-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors break-all">
                          almonteangelo1236@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                  />
                  <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                    <div className="relative flex flex-1 flex-col items-center justify-center text-center gap-3">
                      <div className="w-fit rounded-lg border border-gray-600 p-2">
                        <FiMapPin size={20} className="sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-secondary-900 dark:text-white">
                          Location
                        </h3>
                        <p className="text-sm sm:text-base text-secondary-600 dark:text-secondary-300">
                          Calamba City, Laguna, Philippines
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                  />
                  <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                    <div className="relative flex flex-1 flex-col items-center justify-center text-center gap-3">
                      <div className="w-fit rounded-lg border border-gray-600 p-2">
                        <FiPhone size={20} className="sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-secondary-900 dark:text-white">
                          Phone
                        </h3>
                        <a href="tel:+639165770827" className="text-sm sm:text-base text-secondary-600 dark:text-secondary-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                          +63 916 577 0827
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h4 className="text-base sm:text-lg font-medium text-secondary-900 dark:text-white mb-4 sm:mb-6">Social Profiles</h4>
                <div className="flex justify-center space-x-3 sm:space-x-4">
                  <a href="https://www.linkedin.com/in/angelo-almonte/" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-3 bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-300 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 rounded-lg transition-colors">
                    <FiLinkedin size={18} className="sm:w-5 sm:h-5" />
                  </a>
                  <a href="https://github.com/aglcode" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-3 bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-300 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 rounded-lg transition-colors">
                    <FiGithub size={18} className="sm:w-5 sm:h-5" />
                  </a>
                  <a href="https://www.instagram.com/gelomnt_/" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-3 bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-300 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 rounded-lg transition-colors">
                    <FiInstagram size={18} className="sm:w-5 sm:h-5" />
                  </a>
                  <a href="https://www.facebook.com/angelo.almonte.494264/" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-3 bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-300 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 rounded-lg transition-colors">
                    <FiFacebook size={18} className="sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </BackgroundGradient>
        </div>
      )}
    </>
  );
};

export default Contact;