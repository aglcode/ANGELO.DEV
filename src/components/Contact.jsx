import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiMapPin, FiPhone, FiLinkedin, FiGithub, FiInstagram, FiFacebook } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
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

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitError) setSubmitError('');
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    // Validation
    if (!formData.name.trim()) {
      setSubmitError('Please enter your name.');
      setIsSubmitting(false);
      return;
    }
    if (!validateEmail(formData.email)) {
      setSubmitError('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }
    if (!formData.subject.trim()) {
      setSubmitError('Please enter a subject.');
      setIsSubmitting(false);
      return;
    }
    if (!formData.message.trim()) {
      setSubmitError('Please enter a message.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: "Visitor: " + formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      console.log('Email sent successfully', response);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitError('Failed to send message. Please try again later or contact me directly at almonteangelo1236@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };
    return (
      <section id="contact" ref={ref} className={`section ${isMobile ? 'bg-secondary-800/30' : ''}`}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`mb-4 ${isMobile ? 'text-white' : 'text-secondary-900 dark:text-white'}`}>Get In Touch</h2>
            <p className={`max-w-2xl mx-auto ${isMobile ? 'text-secondary-300' : 'text-secondary-600 dark:text-secondary-300'}`}>
              Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2"
            >
              <h3 className={`text-2xl font-bold mb-6 ${isMobile ? 'text-white' : 'text-secondary-900 dark:text-white'}`}>
                Contact Information
              </h3>
              <p className={`mb-8 ${isMobile ? 'text-secondary-300' : 'text-secondary-600 dark:text-secondary-300'}`}>
                Feel free to reach out through any of the following channels. I'm always interested in new projects and opportunities.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className={`p-3 ${isMobile ? 'bg-primary-900/30 text-primary-400' : 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'} rounded-lg mr-4`}>
                    <FiMail size={20} />
                  </div>
                  <div>
                    <h4 className={`text-lg font-medium ${isMobile ? 'text-white' : 'text-secondary-900 dark:text-white'} mb-1`}>Email</h4>
                    <a href="mailto:almonteangelo1236@gmail.com" className={`${isMobile ? 'text-secondary-300 hover:text-primary-400' : 'text-secondary-600 dark:text-secondary-300 hover:text-primary-500 dark:hover:text-primary-400'} transition-colors`}>
                      almonteangelo1236@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className={`p-3 ${isMobile ? 'bg-primary-900/30 text-primary-400' : 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'} rounded-lg mr-4`}>
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <h4 className={`text-lg font-medium ${isMobile ? 'text-white' : 'text-secondary-900 dark:text-white'} mb-1`}>Location</h4>
                    <p className={`${isMobile ? 'text-secondary-300' : 'text-secondary-600 dark:text-secondary-300'}`}>
                      Calamba City, Laguna, Philippines
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className={`p-3 ${isMobile ? 'bg-primary-900/30 text-primary-400' : 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'} rounded-lg mr-4`}>
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <h4 className={`text-lg font-medium ${isMobile ? 'text-white' : 'text-secondary-900 dark:text-white'} mb-1`}>Phone</h4>
                    <a href="tel:+639165770827" className={`${isMobile ? 'text-secondary-300 hover:text-primary-400' : 'text-secondary-600 dark:text-secondary-300 hover:text-primary-500 dark:hover:text-primary-400'} transition-colors`}>
                      +63 916 577 0827
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className={`text-lg font-medium ${isMobile ? 'text-white' : 'text-secondary-900 dark:text-white'} mb-4`}>Social Profiles</h4>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/angelo-almonte/" target="_blank" rel="noopener noreferrer" className={`p-3 ${isMobile ? 'bg-secondary-800 text-secondary-300 hover:bg-primary-900/30 hover:text-primary-400' : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-300 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400'} rounded-lg transition-colors`}>
                    <FiLinkedin size={20} />
                  </a>
                  <a href="https://github.com/aglcode" target="_blank" rel="noopener noreferrer" className={`p-3 ${isMobile ? 'bg-secondary-800 text-secondary-300 hover:bg-primary-900/30 hover:text-primary-400' : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-300 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400'} rounded-lg transition-colors`}>
                    <FiGithub size={20} />
                  </a>
                  <a href="https://www.instagram.com/gelomnt_/" target="_blank" rel="noopener noreferrer" className={`p-3 ${isMobile ? 'bg-secondary-800 text-secondary-300 hover:bg-primary-900/30 hover:text-primary-400' : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-300 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400'} rounded-lg transition-colors`}>
                    <FiInstagram size={20} />
                  </a>
                  <a href="https://www.facebook.com/angelo.almonte.494264/" target="_blank" rel="noopener noreferrer" className={`p-3 ${isMobile ? 'bg-secondary-800 text-secondary-300 hover:bg-primary-900/30 hover:text-primary-400' : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-300 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400'} rounded-lg transition-colors`}>
                    <FiFacebook size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-3"
            >
              <div className={`card p-8 ${isMobile ? 'bg-secondary-900' : ''}`}>
                <h3 className={`text-2xl font-bold mb-6 ${isMobile ? 'text-white' : 'text-secondary-900 dark:text-white'}`}>
                  Send Me a Message
                </h3>

                {submitSuccess && (
                  <div className="mb-6 p-4 rounded-lg bg-success-500/10 text-success-600 dark:text-success-500 border border-success-500/20">
                    Thank you for your message! It has been sent to almonteangelo1236@gmail.com.
                  </div>
                )}

                {submitError && (
                  <div className="mb-6 p-4 rounded-lg bg-error-500/10 text-error-600 dark:text-error-500 border border-error-500/20">
                    {submitError}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className={`block text-sm font-medium ${isMobile ? 'text-secondary-300' : 'text-secondary-700 dark:text-secondary-300'} mb-2`}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border ${isMobile ? 'border-secondary-700 bg-secondary-900 text-white' : 'border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white'} focus:border-primary-500 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-colors`}
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={`block text-sm font-medium ${isMobile ? 'text-secondary-300' : 'text-secondary-700 dark:text-secondary-300'} mb-2`}>
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border ${isMobile ? 'border-secondary-700 bg-secondary-900 text-white' : 'border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white'} focus:border-primary-500 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-colors`}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className={`block text-sm font-medium ${isMobile ? 'text-secondary-300' : 'text-secondary-700 dark:text-secondary-300'} mb-2`}>
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border ${isMobile ? 'border-secondary-700 bg-secondary-900 text-white' : 'border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white'} focus:border-primary-500 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-colors`}
                      placeholder="State your business"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className={`block text-sm font-medium ${isMobile ? 'text-secondary-300' : 'text-secondary-700 dark:text-secondary-300'} mb-2`}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg border ${isMobile ? 'border-secondary-700 bg-secondary-900 text-white' : 'border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white'} focus:border-primary-500 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-colors resize-none`}
                      placeholder="Leave me a message"
                    />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  export default Contact;