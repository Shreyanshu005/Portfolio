  return (
    <section id="technical-skills" ref={skillsRef} className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 ref={headingRef} className="text-4xl font-bold mb-16 text-center text-white">
          Technical <span className="text-gray-400">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div 
              key={skill.id}
              className="group relative rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative h-full bg-gray-900 p-6 border border-white/30 rounded-xl shadow-xl flex flex-col">
                <div className="mb-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={skill.icon}></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">{skill.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, index) => (
                    <span 
                      key={index}
                      className="bg-white/10 text-white text-xs px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-white text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://github.com/shreyanshu005"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-black rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
          >
            GitHub
          </a>
          <a
            href="https://www.codechef.com/users/fry_day"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black"
          >
      </div>
    </section>
  ); 