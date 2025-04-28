import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const skillsData = [
  { category: 'Languages', skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'C++', 'Python'] },
  { category: 'Frameworks/Libraries', skills: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'Node.js', 'Express.js'] },
  { category: 'Tools & Technologies', skills: ['Git', 'GitHub', 'VS Code', 'WebRTC', 'Sockets', 'RESTful APIs'] },
  { category: 'Databases', skills: ['MongoDB', 'SQL'] }
];

const Skills = () => {
  const skillsRef = useRef(null);
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

    const skillCategories = skillsRef.current.querySelectorAll('.skill-category');
    
    gsap.fromTo(
      skillCategories,
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
          trigger: skillsRef.current,
          start: 'top 70%'
        }
      }
    );

    const skillItems = skillsRef.current.querySelectorAll('.skill-item');
    
    gsap.fromTo(
      skillItems,
      {
        scale: 0.8,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
        ease: 'back.out',
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 70%'
        }
      }
    );
  }, []);

  return (
    <section id="skills" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 ref={headingRef} className="text-4xl font-bold mb-16 text-center text-white">
          Technical <span className="text-gray-400">Skills</span>
        </h2>
        
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-category bg-gray-900 p-6 rounded-xl border border-white/20 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-white">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-item bg-gray-800/50 px-4 py-2 rounded-lg border border-white/10 hover:border-white/40 hover:bg-white/10 transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-white"></span>
                    <span className="text-white">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-bold mb-8 text-center text-white">Coding Profile</h3>
          <div className="max-w-xl mx-auto bg-gray-900 p-6 rounded-xl border border-white/20 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black font-bold">C</div>
                <h4 className="font-bold text-white">CodeChef</h4>
              </div>
              <a
                href="https://www.codechef.com/users/fry_day"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black"
              >
                View Profile
              </a>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Current Rating: <span className="text-white font-semibold">1600+</span></p>
                <p className="text-gray-400 text-sm">Max Rating: <span className="text-white font-semibold">1600+</span></p>
              </div>
              <div className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                3★
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;