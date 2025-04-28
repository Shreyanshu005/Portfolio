// App.jsx - Main application file
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import Loader from './components/Loader';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  const [loading, setLoading] = useState(true);
  const appRef = useRef(null);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      // Initial animations when page loads
      const sections = document.querySelectorAll('section');
      
      gsap.to(appRef.current, {
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut'
      });

      // Set up scroll animations for each section
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 50
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }
  }, [loading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative bg-gray-900 text-white overflow-hidden" ref={appRef} style={{ opacity: 0 }}>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <footer className="py-6 text-center text-gray-400 border-t border-gray-800">
        <p>© {new Date().getFullYear()} Shreyanshu. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;