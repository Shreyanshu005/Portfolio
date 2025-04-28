import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Experience = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const animateTimeline = () => {
      const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
      
      gsap.fromTo(
        timelineItems,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
          }
        }
      );
    };

    animateTimeline();
  }, []);

  return (
    <section id="experience" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center text-white">
          Work <span className="text-gray-400">Experience</span>
        </h2>
        
        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-white/30"></div>
          
          {/* Timeline items */}
          <div className="timeline-item mb-16 md:mb-24 relative flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
              <div className="bg-gray-900 p-6 rounded-lg shadow-xl border border-white/30 hover:border-white/50 transition-all hover:shadow-white/10">
                <h3 className="text-xl font-bold mb-2 text-white">Frontend Developer</h3>
                <p className="text-gray-400 mb-4">Software Incubator - SDC</p>
                <p className="text-gray-400">
                  Collaborating with cross-functional teams to develop, maintain, and enhance
                  cross-platform mobile applications, ensuring seamless performance and high user satisfaction.
                </p>
                <a
                  href="https://github.com/shreyanshu005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-4 py-2 bg-white text-black rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
                >
                  View GitHub
                </a>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12 relative">
              <div className="hidden  absolute left-0 top-0 -mt-2 h-5 w-5 rounded-full border-4 border-white bg-gray-900"></div>
              <div className="hidden md:block absolute left-0 md:left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 h-5 w-5 rounded-full border-4 border-white bg-gray-900"></div>
              <span className="text-gray-400 font-semibold">Oct 2024 - Present</span>
            </div>
          </div>
          
          <div className="timeline-item relative flex flex-col md:flex-row-reverse md:items-center">
            <div className="md:w-1/2 md:pl-12 md:text-left mb-8 md:mb-0">
              <div className="bg-gray-900 p-6 rounded-lg shadow-xl border border-white/30 hover:border-white/50 transition-all hover:shadow-white/10">
                <h3 className="text-xl font-bold mb-2 text-white">Freelance Projects</h3>
                <p className="text-gray-400 mb-4">Software Development Center</p>
                <p className="text-gray-400">
                  Independently handling various freelance projects, delivering tailored web solutions
                  to meet diverse client requirements with a focus on responsive design and performance.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 md:pr-12 relative">
              <div className="hidden absolute left-0 top-0 -mt-2 h-5 w-5 rounded-full border-4 border-white bg-gray-900"></div>
              <div className="hidden md:block absolute right-0 md:left-full top-1/2 transform -translate-y-1/2 -translate-x-1/2 h-5 w-5 rounded-full border-4 border-white bg-gray-900"></div>
              <span className="text-gray-400 font-semibold md:text-right block">Oct 2024 - Present</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;