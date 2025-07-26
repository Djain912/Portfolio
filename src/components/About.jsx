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
            <div className="relative group">
              {/* Main image container */}
              <div 
                className="relative w-80 h-96 sm:w-96 sm:h-[28rem] overflow-hidden bg-gray-100 rounded-lg cursor-pointer transform transition-all duration-700 group-hover:scale-105 group-hover:-rotate-1 shadow-xl"
                onMouseEnter={() => setImageHovered(true)}
                onMouseLeave={() => setImageHovered(false)}
              >
                {/* Your actual image */}
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

              {/* Enhanced floating elements with better positioning */}
              <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full transition-all duration-500 flex items-center justify-center shadow-lg ${
                imageHovered ? 'scale-125 rotate-45' : 'scale-100 rotate-0'
              }`}>
                <span className="text-2xl">✨</span>
              </div>
              
              <div className={`absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full transition-all duration-500 flex items-center justify-center shadow-lg ${
                imageHovered ? 'scale-125 -rotate-45' : 'scale-100 rotate-0'
              }`} style={{ transitionDelay: '100ms' }}>
                <span className="text-lg">🚀</span>
              </div>
              
              {/* Interactive tech icons with improved positioning */}
              <div className={`absolute -right-16 top-1/2 transform -translate-y-1/2 space-y-4 transition-all duration-700 ${
                imageHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}>
                {techIcons.map((tech, index) => (
                  <div 
                    key={index}
                    className="group/icon w-14 h-14 bg-white shadow-xl rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-125 hover:shadow-2xl cursor-pointer relative border-2 border-transparent hover:border-blue-200"
                    style={{ 
                      transitionDelay: `${tech.delay + 200}ms`,
                      zIndex: 10
                    }}
                    title={tech.name}
                  >
                    <span className="text-xl transition-transform duration-300 group-hover/icon:scale-110">
                      {tech.icon}
                    </span>
                    
                    {/* Enhanced tooltip */}
                    <div className="absolute right-full mr-4 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover/icon:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-xl">
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
    </div>
  );
}