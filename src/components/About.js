import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center text-white">
          About <span className="text-gray-400">Me</span>
        </h2>
        
        <div className="flex flex-col items-center">
          <div className="max-w-3xl text-center">
            <h3 className="text-2xl font-semibold mb-4 text-white">Frontend Developer & Problem Solver</h3>
            <p className="text-gray-400 mb-6">
              I'm a frontend developer specializing in building exceptional digital experiences. 
              Currently pursuing my Bachelor's in Computer Science with a focus on AI and ML at Ajay Kumar Garg Engineering College.
              I have a passion for creating intuitive, dynamic user interfaces and solving complex problems through clean, efficient code.
            </p>
            <p className="text-gray-400 mb-8">
              With experience in React, Next.js, and various frontend technologies, I'm constantly exploring new ways to push the 
              boundaries of what's possible on the web. I'm particularly interested in performance optimization, accessibility, 
              and creating seamless user experiences.
            </p>
            
            <div className="flex gap-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-3 bg-white text-black rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
              >
                Contact Me
              </a>
              <a
                href="https://drive.google.com/file/d/1zRDkPFM7F0KUkfb6egoeGGOxljaz864z/view?usp=drive_link"
                className="px-6 py-3 border border-white text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;