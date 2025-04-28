import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
  const cubeRef = useRef(null);
  const particlesRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  
  // Mouse position for 3D effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Handle mouse move for 3D cube effect only
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calculate distance from center (normalized -1 to 1)
      const moveX = (clientX - centerX) / centerX;
      const moveY = (clientY - centerY) / centerY;
      
      setMousePosition({ x: moveX, y: moveY });
    };
    
    // Element references for animations
    const textElements = textRef.current.querySelectorAll('.animate-in');
    const buttonsEl = buttonsRef.current;
    const cubeEl = cubeRef.current;

    // Create animated particles (keeping the original implementation)
    const createParticles = () => {
      const particles = particlesRef.current;
      if (!particles) return;

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute rounded-full bg-blue-500 opacity-20';
        
        // Random size
        const size = Math.random() * 10 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        particles.appendChild(particle);
        
        // Animate each particle with GSAP
        gsap.to(particle, {
          x: `random(-100, 100)`,
          y: `random(-100, 100)`,
          opacity: Math.random() * 0.5,
          duration: Math.random() * 5 + 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: Math.random() * 2
        });
      }
    };

    // Animate elements on load
    const animateElements = () => {
      // Stagger animate text elements
      textElements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('animated');
        }, 300 * index);
      });
      
      // Animate buttons after text
      setTimeout(() => {
        buttonsEl.classList.add('animated');
      }, textElements.length * 300 + 200);
      
      // Animate cube after everything
      setTimeout(() => {
        cubeEl.classList.add('animated');
      }, textElements.length * 300 + 400);
    };

    // Create particles and start the animation sequence
    createParticles();
    setTimeout(animateElements, 500);
    
    // Add mouse move listener for cube interaction
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Generate tech icons for the cube
  const techIcons = [
    "next.js", "redux", "react.js", "tailwind", "express", "node.js"
  ];

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center pt-20 overflow-hidden relative bg-black">
      {/* Original particles implementation */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div ref={textRef} className="w-full md:w-3/5 md:pr-10 text-center md:text-left relative z-10">
          <div className="overflow-hidden animate-in transform translate-y-12 opacity-0 transition-all duration-700">
            <h2 className="text-2xl font-semibold text-white mb-3">Hello, I'm</h2>
          </div>
          
          <div className="overflow-hidden animate-in transform translate-y-12 opacity-0 transition-all duration-700">
            <h1 className="text-5xl md:text-7xl font-bold mb-2 text-white">
              Shreyanshu
            </h1>
          </div>
          
          <div className="overflow-hidden animate-in transform translate-y-12 opacity-0 transition-all duration-700 h-16">
            <h3 className="text-xl md:text-2xl text-gray-300 mb-6">
              <span className="text-gray-400">I'm a </span>
              <TypeAnimation
                sequence={[
                  'Frontend Architect',
                  1000,
                  'React Craftsman',
                  1000,
                  'UI/UX Designer',
                  1000,
                  'Web Innovator',
                  1000
                ]}
                speed={50}
                repeat={Infinity}
                className="text-white font-medium"
              />
            </h3>
          </div>
          
          <div className="overflow-hidden animate-in transform translate-y-12 opacity-0 transition-all duration-700">
            <p className="text-gray-400 mb-10 max-w-lg">
              Transforming ideas into exceptional digital experiences through clean, 
              efficient code and cutting-edge technologies. Specializing in creating 
              interactive, high-performance web applications that push the boundaries.
            </p>
          </div>
          
          <div 
            ref={buttonsRef} 
            className="flex flex-wrap gap-6 justify-center md:justify-start transform translate-y-12 opacity-0 transition-all duration-700"
          >
            <div className="flex gap-4">
            <a 
              href="#contact" 
                className="px-6 py-3 bg-white text-black rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
                className="px-6 py-3 border border-white text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black"
            >
              View Projects
            </a>
          </div>
        </div>
        </div>
        
        {/* 3D rotating cube - hidden on mobile/tablet */}
        <div 
          ref={cubeRef} 
          className="hidden lg:block w-2/5 flex justify-end items-center transform scale-75 opacity-0 transition-all duration-1000"
          style={{
            perspective: '1000px',
            transformStyle: 'preserve-3d'
          }}
        >
          <div 
            className="cube w-64 h-64 relative transform-gpu"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateY(${mousePosition.x * 30}deg) rotateX(${-mousePosition.y * 30}deg)`,
              transition: isHovering ? 'none' : 'transform 0.5s ease-out',
              animation: 'rotate 20s infinite linear'
            }}
          >
            {/* Cube faces with tech icons */}
            {['front', 'back', 'left', 'right', 'top', 'bottom'].map((face, index) => (
              <div
                key={face}
                className="cube-face absolute w-full h-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                style={{
                  transform: 
                    face === 'front' ? 'translateZ(128px)' :
                    face === 'back' ? 'rotateY(180deg) translateZ(128px)' :
                    face === 'left' ? 'rotateY(-90deg) translateZ(128px)' :
                    face === 'right' ? 'rotateY(90deg) translateZ(128px)' :
                    face === 'top' ? 'rotateX(90deg) translateZ(128px)' :
                    'rotateX(-90deg) translateZ(128px)'
                }}
              >
                <div className="text-6xl text-white/80 font-bold">
                  <span className="tech-icon">{techIcons[index % techIcons.length]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
      
      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        
        @keyframes rotate {
          from { transform: rotateX(0) rotateY(0); }
          to { transform: rotateX(360deg) rotateY(360deg); }
        }
        
        @keyframes glow-button {
          0%, 100% { transform: scale(0) translateX(-100%); opacity: 0; }
          50% { transform: scale(1) translateX(100%); opacity: 1; }
        }
        
        .cube-face {
          backface-visibility: visible;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }
        
        .animate-glow-button {
          animation: glow-button 3s infinite;
        }
        
        .animate-in.animated {
          opacity: 1;
          transform: translateY(0);
        }
        
        .animated {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        
        .tech-icon {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
        }
      `}</style>
    </section>
  );
};

export default Hero;