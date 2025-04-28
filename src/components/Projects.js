import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Code Clash',
    description: 'A competitive coding platform supporting real-time 1v1 coding battles, live contests, and global leaderboards.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'WebRTC'],
    image: '/code-clash.jpg',
    link: 'https://github.com/Shreyanshu005/Code-clash',
    liveLink: 'https://code-clash-alpha.vercel.app/',
    status: 'ongoing'
  },
  {
    id: 2,
    title: 'Classence',
    description: 'A comprehensive class management platform supporting features such as class creation, scheduling, attendance tracking, and performance analytics.',
    technologies: ['React.js', 'Node.js', 'WebRTC', 'Socket.io'],
    image: '/classence.jpg',
    link: 'https://github.com/Shreyanshu005/Classence-Frontened',
    liveLink: 'https://classence.me/',
    status: 'completed'
  }
];

const Projects = () => {
  const projectsRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%'
        }
      }
    );

    const projectCards = projectsRef.current.querySelectorAll('.project-card');

    gsap.fromTo(
      projectCards,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 70%'
        }
      }
    );
  }, []);

  return (
    <section id="projects" ref={projectsRef} className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 ref={headingRef} className="text-4xl font-bold mb-16 text-center text-white">
          My <span className="text-gray-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group relative rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative h-full bg-gray-900 p-6 border border-white/30 rounded-xl shadow-xl flex flex-col">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-2xl font-bold group-hover:text-white transition-colors text-white">{project.title}</h3>
                  {project.status === 'ongoing' && (
                    <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                      Ongoing
                    </span>
                  )}
                </div>

                <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-white/10 text-white text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    window.open(project.link, '_blank');
                  }}
                  className="px-6 py-3 bg-white text-black rounded-lg font-medium text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20 cursor-pointer"
                >
                  View Project
                </button>

                {/* Top-right Arrow */}
                <div className="absolute right-4 top-4 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://github.com/SHREYANSHU" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-white text-white rounded-lg hover:bg-white/10 transition-all transform hover:scale-105"
          >
            See More On GitHub
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
