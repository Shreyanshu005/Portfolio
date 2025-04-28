import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const achievementsData = [
  {
    title: 'Runner Up',
    description: 'HackWithIndia Hackathon 2024, organised by HackWithDelhi.'
  },
  {
    title: '1st Position',
    description: 'Secured the 1st position out of 500+ participants in coding contest CodeCrunch at AKGEC, Ghaziabad.'
  },
  {
    title: '1st Position',
    description: 'Secured the 1st position out of 650+ participants in coding contest Include at AKGEC, Ghaziabad.'
  },
  {
    title: '2nd Position',
    description: 'Secured the 2nd position out of 500+ participants in coding contest iter8 at AKGEC, Ghaziabad.'
  },
  {
    title: 'Participant',
    description: 'Participated in Smart India Hackathon 2024, organised by Government Of India.'
  }
];

const Achievements = () => {
  const achievementsRef = useRef(null);
  const headingRef = useRef(null);
  const [counts, setCounts] = useState({
    contests: 0,
    hackathons: 0,
    awards: 0
  });

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

    const achievementItems = achievementsRef.current.querySelectorAll('.achievement-item');
    
    gsap.fromTo(
      achievementItems,
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
          trigger: achievementsRef.current,
          start: 'top 70%'
        }
      }
    );

    // Animated counters
    const counterBoxes = document.querySelectorAll('.counter-box');
    
    gsap.fromTo(
      counterBoxes,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: counterBoxes[0],
          start: 'top 80%',
          onEnter: () => {
            // Start counting animation
            gsap.to(counts, {
              contests: 10,
              hackathons: 5,
              awards: 8,
              duration: 2,
              onUpdate: () => {
                setCounts({
                  contests: Math.round(counts.contests),
                  hackathons: Math.round(counts.hackathons),
                  awards: Math.round(counts.awards)
                });
              }
            });
          }
        }
      }
    );
  }, []);

  return (
    <section id="achievements" ref={achievementsRef} className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 ref={headingRef} className="text-4xl font-bold mb-16 text-center text-white">
          My <span className="text-gray-400">Achievements</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((achievement) => (
            <div 
              key={achievement.title}
              className="group relative rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative h-full bg-gray-900 p-6 border border-white/30 rounded-xl shadow-xl flex flex-col">
                <div className="mb-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                </div>
                
                <p className="text-gray-400 mb-6 flex-grow">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;