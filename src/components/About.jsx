import React, { useState, useEffect } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageHovered, setImageHovered] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById('about-me');
    if (aboutSection) observer.observe(aboutSection);

    return () => observer.disconnect();
  }, []);

  const techIcons = [
    { icon: "⚛️", name: "React", delay: 0 },
    { icon: "🟢", name: "Node.js", delay: 100 },
    { icon: "💾", name: "Database", delay: 200 },
    { icon: "🎨", name: "Design", delay: 300 }
  ];

  const stats = [
    { number: "15+", label: "Projects Completed", delay: 600 },
    { number: "2+", label: "Years Experience", delay: 700 },
    { number: "50+", label: "Technologies Learned", delay: 800 },
    { number: "100%", label: "Client Satisfaction", delay: 900 }
  ];
  
  return (
    <div id="about-me" className="min-h-screen bg-white py-20 relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gray-200 rounded-full animate-pulse" 
             style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-gray-300 rounded-full animate-pulse" 
             style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-gray-200 rounded-full animate-pulse" 
             style={{ animationDelay: '2s', animationDuration: '5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Content Section */}
          <div 
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Title */}
            <div className="space-y-4">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 tracking-tight">
                About
              </h2>
              <div className="w-16 h-0.5 bg-black transform origin-left transition-all duration-700 delay-300" 
                   style={{ scaleX: isVisible ? 1 : 0 }} />
            </div>

            {/* Description with enhanced typography */}
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p className="transform transition-all duration-700 delay-500" 
                 style={{ 
                   opacity: isVisible ? 1 : 0, 
                   transform: isVisible ? 'translateY(0px)' : 'translateY(20px)'
                 }}>
                Hi, I'm <span className="text-gray-900 font-medium relative group">
                  Darshan Jain
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </span>, a passionate Full Stack Web Developer with experience as an intern at Elight Labs. I enjoy building dynamic, responsive web applications from the ground up.
              </p>
              
              <p className="transform transition-all duration-700 delay-700" 
                 style={{ 
                   opacity: isVisible ? 1 : 0, 
                   transform: isVisible ? 'translateY(0px)' : 'translateY(20px)'
                 }}>
                With a keen eye for detail and a commitment to excellence, I love turning ideas into reality, tackling new challenges, and continuously learning to enhance my skills.
              </p>
            </div>

            {/* Enhanced Stats Grid */}
            {/* <div className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
                  style={{ 
                    opacity: isVisible ? 1 : 0,
                    transform: `${isVisible ? 'translateY(0px)' : 'translateY(30px)'} ${hoveredStat === index ? 'scale(1.05)' : 'scale(1)'}`,
                    transitionDelay: `${stat.delay}ms`
                  }}
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <div className={`p-6 bg-gradient-to-br ${
                    hoveredStat === index 
                      ? 'from-blue-50 to-purple-50 shadow-lg' 
                      : 'from-gray-50 to-white shadow-md'
                  } rounded-lg border transition-all duration-300`}>
                    <div className={`text-3xl font-bold ${
                      hoveredStat === index ? 'text-blue-600' : 'text-gray-900'
                    } transition-colors duration-300`}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Enhanced Image Section */}
          <div 
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative group w-full max-w-md mx-auto lg:mx-0">
              {/* Main image container */}
              <div 
                className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100 rounded-lg cursor-pointer transform transition-all duration-700 group-hover:scale-105 group-hover:-rotate-1 shadow-xl"
                onMouseEnter={() => setImageHovered(true)}
                onMouseLeave={() => setImageHovered(false)}
              >
                {/* Your actual image - using try/import instead of public path */}
                <img 
                  src="/src/assets/ME.jpg" 
                  alt="Darshan Jain - Full Stack Developer"
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    imageHovered ? 'scale-110 brightness-110' : 'scale-100'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  onError={(e) => {
                    // Fallback if image doesn't load - show gradient placeholder
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                
                {/* Fallback placeholder (hidden by default, shown if image fails to load) */}
                <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center relative overflow-hidden" style={{ display: 'none' }}>
                  {/* Profile silhouette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  <div className="text-white text-center z-10">
                    <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-lg font-medium">Darshan Jain</p>
                    <p className="text-sm opacity-80">Full Stack Developer</p>
                  </div>
                  
                  {/* Animated background patterns */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full" style={{
                      backgroundImage: `radial-gradient(circle at 20% 20%, white 2px, transparent 2px)`,
                      backgroundSize: '40px 40px',
                      animation: 'float 6s ease-in-out infinite'
                    }} />
                  </div>
                </div>
                
                {/* Interactive overlay */}
                <div className={`absolute inset-0 transition-all duration-500 ${
                  imageHovered 
                    ? 'bg-gradient-to-t from-black/30 via-transparent to-transparent' 
                    : 'bg-transparent'
                }`} />

                {/* Enhanced hover info */}
                <div className={`absolute bottom-4 left-4 right-4 transform transition-all duration-500 ${
                  imageHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-2xl border border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Full Stack Developer</p>
                        <p className="text-xs text-gray-600 mt-1">React • Node.js • MongoDB</p>
                      </div>
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      </div>
                    </div>
                    <div className="mt-3 flex space-x-2">
                      <div className="flex-1 h-1 bg-gray-200 rounded">
                        <div className="h-full bg-blue-500 rounded" style={{ width: '85%' }} />
                      </div>
                      <span className="text-xs text-gray-500">85%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced floating elements - responsive positioning */}
              <div className={`absolute -top-3 -right-3 lg:-top-4 lg:-right-4 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full transition-all duration-500 flex items-center justify-center shadow-lg ${
                imageHovered ? 'scale-125 rotate-45' : 'scale-100 rotate-0'
              }`}>
                <span className="text-lg lg:text-2xl">✨</span>
              </div>
              
              <div className={`absolute -bottom-3 -left-3 lg:-bottom-4 lg:-left-4 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full transition-all duration-500 flex items-center justify-center shadow-lg ${
                imageHovered ? 'scale-125 -rotate-45' : 'scale-100 rotate-0'
              }`} style={{ transitionDelay: '100ms' }}>
                <span className="text-base lg:text-lg">🚀</span>
              </div>
              
              {/* Interactive tech icons - responsive positioning */}
              <div className={`absolute -right-4 lg:-right-16 top-1/2 transform -translate-y-1/2 space-y-3 lg:space-y-4 transition-all duration-700 ${
                imageHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 lg:translate-x-8'
              }`}>
                {techIcons.map((tech, index) => (
                  <div 
                    key={index}
                    className="group/icon w-10 h-10 lg:w-14 lg:h-14 bg-white shadow-xl rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-125 hover:shadow-2xl cursor-pointer relative border-2 border-transparent hover:border-blue-200"
                    style={{ 
                      transitionDelay: `${tech.delay + 200}ms`,
                      zIndex: 10
                    }}
                    title={tech.name}
                  >
                    <span className="text-base lg:text-xl transition-transform duration-300 group-hover/icon:scale-110">
                      {tech.icon}
                    </span>
                    
                    {/* Enhanced tooltip - hidden on mobile, shown on desktop */}
                    <div className="hidden lg:block absolute right-full mr-4 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover/icon:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-xl">
                      {tech.name}
                      <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
                    </div>
                    
                    {/* Ripple effect */}
                    <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover/icon:opacity-20 group-hover/icon:animate-ping" />
                  </div>
                ))}
              </div>

              {/* Enhanced pulse effect */}
              <div className={`absolute inset-0 rounded-lg border-2 transition-all duration-1000 ${
                imageHovered ? 'border-blue-400 opacity-60 scale-110' : 'border-transparent opacity-0 scale-100'
              }`}>
                <div className={`absolute inset-0 rounded-lg border-2 border-blue-400 transition-all duration-1000 ${
                  imageHovered ? 'opacity-30 scale-110' : 'opacity-0 scale-100'
                }`} style={{ animationDelay: '0.5s' }} />
              </div>

              {/* Interactive corner elements */}
              <div className={`absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-white/50 transition-all duration-500 ${
                imageHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
              }`} />
              <div className={`absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-white/50 transition-all duration-500 ${
                imageHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
              }`} style={{ transitionDelay: '100ms' }} />
              <div className={`absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-white/50 transition-all duration-500 ${
                imageHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
              }`} style={{ transitionDelay: '200ms' }} />
              <div className={`absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-white/50 transition-all duration-500 ${
                imageHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
              }`} style={{ transitionDelay: '300ms' }} />
            </div>
          </div>
        </div>

        {/* Enhanced bottom decorative line */}
        <div 
          className={`mt-20 relative transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gray-400 rounded-full">
            <div className="absolute inset-0 bg-gray-400 rounded-full animate-ping opacity-20" />
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 0.2; }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(180deg); }
          }
        `}
      </style>

      {/* Hidden SEO content for About section */}
      <div className="sr-only" aria-hidden="true">
        <h2>About Darshan Jain - Professional Full Stack Developer</h2>
        <p>
          Darshan Jain is a passionate and dedicated Full Stack Web Developer from Mumbai, India, with comprehensive 
          experience in building modern, scalable, and responsive web applications. With a strong foundation in both 
          frontend and backend technologies, Darshan excels at transforming ideas into fully functional digital solutions.
        </p>
        <h3>Professional Journey</h3>
        <p>
          Darshan's journey in software development began during his academic years at Thadomal Shahani Engineering College, 
          where he pursued Computer Engineering. His passion for coding and problem-solving led him to intern at Elight Labs 
          as a Full Stack Developer in June-July 2023, where he gained valuable hands-on experience in remote work and 
          professional software development practices.
        </p>
        <p>
          Currently, Darshan serves as a Full Stack Developer Intern at ZootechX (September 2025 - Present), working in 
          a hybrid environment where he contributes to building innovative solutions using cutting-edge technologies. 
          His role involves developing scalable web applications, implementing responsive designs, and integrating 
          various APIs and services.
        </p>
        <h3>Technical Skills and Expertise</h3>
        <p>
          Darshan possesses a diverse skill set spanning multiple programming languages and frameworks. His expertise 
          includes React.js for building dynamic user interfaces, Node.js and Express.js for backend development, 
          MongoDB and MySQL for database management, and Flutter and React Native for mobile application development.
        </p>
        <p>
          He is proficient in modern JavaScript (ES6+), TypeScript for type-safe code, Python for scripting and data 
          manipulation, and various CSS frameworks including Tailwind CSS and Bootstrap for responsive design. 
          Darshan also has experience with version control using Git and GitHub, deployment platforms like Netlify and 
          Vercel, and cloud services including Firebase and AWS.
        </p>
        <h3>Problem-Solving and Innovation</h3>
        <p>
          With a keen eye for detail and a commitment to excellence, Darshan approaches every project with a 
          problem-solving mindset. He believes in writing clean, maintainable code and following best practices 
          in software development. His ability to quickly learn new technologies and adapt to changing requirements 
          makes him a valuable asset to any development team.
        </p>
        <h3>Achievements and Recognition</h3>
        <p>
          Darshan's technical prowess has been recognized through multiple achievements, including winning the 
          Codeissance Hackathon in the Industry Domain with the LeadVault project, becoming a finalist in Smart India 
          Hackathon 2025 with CivicConnect, and showcasing the innovative Attendify project at the Tantravihar state-level 
          tech fest. These accomplishments demonstrate his ability to deliver high-quality solutions under pressure and 
          collaborate effectively with team members.
        </p>
        <h3>Work Philosophy</h3>
        <p>
          Darshan believes in continuous learning and staying updated with the latest trends in web development. 
          He is passionate about creating user-centric applications that not only meet technical requirements but 
          also provide exceptional user experiences. His approach combines technical expertise with creative 
          problem-solving to deliver solutions that exceed expectations.
        </p>
        <h3>Collaboration and Communication</h3>
        <p>
          As a team player, Darshan excels in collaborative environments, working effectively with designers, 
          product managers, and fellow developers. His strong communication skills enable him to articulate 
          technical concepts clearly and contribute to productive discussions about architecture and implementation strategies.
        </p>
        <p>
          Darshan Jain is committed to building the future of web and mobile applications, one line of code at a time.
          His portfolio showcases over 15 completed projects demonstrating proficiency across the full development stack.
        </p>
      </div>
    </div>
  );
}