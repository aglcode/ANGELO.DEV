import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import FloatingAlert from './components/FloatingAlert';
import Graphs from './components/Graphs';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col bg-secondary-900 relative w-full overflow-hidden"
    >
      <Header />
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <FloatingAlert />
      {/* <Graphs /> */}
    </motion.div>
  );
}

export default App;