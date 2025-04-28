import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const experiences = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Company",
    description: "Developed and maintained web applications using React and Next.js. Collaborated with cross-functional teams to deliver high-quality products.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    link: "https://github.com/shreyanshu005"
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Startup Inc",
    description: "Built scalable web applications and implemented new features. Optimized performance and improved user experience.",
    technologies: ["JavaScript", "Node.js", "MongoDB", "Express"],
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    link: "https://github.com/shreyanshu005"
  }
];

const WorkExperience = () => {
  const experienceRef = useRef(null);
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

    const experienceCards = experienceRef.current.querySelectorAll('.experience-card');
    
    gsap.fromTo(
      experienceCards,
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
          trigger: experienceRef.current,
          start: 'top 70%'
        }
      }
    );
  }, []);

  return (
    <section id="experience" ref={experienceRef} className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 ref={headingRef} className="text-4xl font-bold mb-16 text-center text-white">
          Work <span className="text-gray-400">Experience</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {experiences.map((experience) => (
            <div 
              key={experience.id}
              className="experience-card group relative rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative h-full bg-gray-900 p-6 border border-white/30 rounded-xl shadow-xl flex flex-col">
                <div className="mb-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={experience.icon}></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                    <p className="text-gray-400">{experience.company}</p>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6 flex-grow">{experience.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-white/10 text-white text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-black rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience; 