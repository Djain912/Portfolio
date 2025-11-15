import React, { useState, useEffect } from 'react';

const EnhancedLandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // Initial fade-in
    setTimeout(() => {
      setIsVisible(true);
    }, 150);
    
    // Trigger the completion of animations
    setTimeout(() => {
      setAnimationComplete(true);
    }, 1500);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Throttle mouse move updates for better performance
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleEnterPortfolio = () => {
    // Logic to navigate to the portfolio section
    window.location.href = '/home';
  };

  return (
    <div className="h-screen bg-white overflow-hidden relative">
      {/* Enhanced cursor follower - hidden on mobile for better performance */}
      <div 
        className="hidden md:block fixed w-6 h-6 rounded-full pointer-events-none transition-all duration-300 ease-out z-50 bg-black/5"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      />

      {/* Multi-layered Grid System - matching home page */}
      {/* Base grid - static */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.4) 1px, transparent 1px), 
              linear-gradient(90deg, rgba(0,0,0,0.4) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      {/* Secondary grid - larger, animated */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.6) 1px, transparent 1px), 
              linear-gradient(90deg, rgba(59, 130, 246, 0.6) 1px, transparent 1px)
            `,
            backgroundSize: '120px 120px',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            animation: 'gridFloat 20s ease-in-out infinite'
          }} 
        />
      </div>

      {/* Tertiary grid - dots pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.8) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
          }} 
        />
      </div>

      {/* Dynamic grid lines that follow mouse - hidden on mobile */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        {/* Vertical line following mouse X */}
        <div 
          className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent transition-all duration-300"
          style={{
            left: mousePosition.x,
            opacity: mousePosition.x > 0 ? 0.5 : 0
          }}
        />
        {/* Horizontal line following mouse Y */}
        <div 
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transition-all duration-300"
          style={{
            top: mousePosition.y,
            opacity: mousePosition.y > 0 ? 0.5 : 0
          }}
        />
      </div>

      {/* Grid intersection highlights */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/10 rounded-full transition-all duration-500"
            style={{
              left: `${(i % 4) * 25 + 12.5}%`,
              top: `${Math.floor(i / 4) * 33 + 16.5}%`,
              transform: `scale(${1 + Math.sin(Date.now() * 0.001 + i) * 0.3})`,
              opacity: 0.3 + Math.sin(Date.now() * 0.002 + i) * 0.2
            }}
          />
        ))}
      </div>

      {/* Main grid accent lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Major vertical lines */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent opacity-20"
            style={{
              left: `${i * 25}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
        {/* Major horizontal lines */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-20"
            style={{
              top: `${i * 25 + 12.5}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-blue-100 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-purple-100 blur-3xl"></div>
        <div className="absolute top-3/4 left-1/3 w-32 h-32 rounded-full bg-cyan-100 blur-xl"></div>
      </div>
      
      {/* Floating geometric elements - matching home page style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-6 h-6 border border-gray-300 rotate-45 animate-pulse opacity-20"
          style={{top: '15%', left: '10%', animationDelay: '0s', animationDuration: '4s'}}
        />
        <div 
          className="absolute w-4 h-4 bg-gray-200 opacity-20 animate-pulse"
          style={{top: '25%', right: '15%', animationDelay: '1s', animationDuration: '4s', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}
        />
        <div 
          className="absolute w-5 h-5 border border-blue-300 rotate-45 animate-pulse opacity-20"
          style={{bottom: '30%', left: '15%', animationDelay: '2s', animationDuration: '4s'}}
        />
        <div 
          className="absolute w-3 h-3 bg-purple-200 rounded-full animate-pulse opacity-20"
          style={{bottom: '20%', right: '10%', animationDelay: '3s', animationDuration: '4s'}}
        />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1 flex items-center justify-center px-6">
          <div className={`text-center max-w-md mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {/* Minimalist DJ Monogram */}
            <div className="relative mx-auto w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 flex items-center justify-center mb-6 sm:mb-8">
              {/* Subtle background circle */}
              <div className="absolute w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-blue-50 opacity-50"></div>
              
              {/* Outer ring with clean styling */}
              <div className={`absolute w-full h-full rounded-full border border-gray-300 transition-all duration-1000 ${animationComplete ? 'border-blue-400' : ''}`}></div>
              
              {/* Clean progress ring */}
              <svg className="absolute w-full h-full" viewBox="0 0 100 100">
                <circle 
                  className="progress-ring" 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  fill="none" 
                  stroke="rgba(59, 130, 246, 0.3)" 
                  strokeWidth="1"
                  strokeDasharray="283"
                  strokeDashoffset="283"
                />
              </svg>
              
              {/* D letter with clean styling */}
              <div className={`absolute text-5xl sm:text-6xl md:text-7xl font-light text-gray-900 d-animation ${animationComplete ? 'completed' : ''}`}>
                D
              </div>
              
              {/* J letter with clean styling */}
              <div className={`absolute text-5xl sm:text-6xl md:text-7xl font-light text-gray-900 j-animation ${animationComplete ? 'completed' : ''}`}>
                J
              </div>
              
              {/* Minimalist particle effects */}
              <div className={`particles ${animationComplete ? 'active' : ''}`}>
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="particle"></div>
                ))}
              </div>
            </div>
            
            {/* Name and title with clean styling */}
            <div className={`space-y-3 sm:space-y-4 transition-opacity duration-700 ${animationComplete ? 'opacity-100' : 'opacity-0'}`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-gray-900">
                Darshan Jain
              </h1>
              
              {/* Grid-pattern divider - matching home page */}
              <div className="flex justify-center items-center gap-2">
                <div className="w-2 h-2 border border-gray-300 rotate-45"></div>
                <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
                <div className="w-2 h-2 bg-black rotate-45"></div>
                <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
                <div className="w-2 h-2 border border-gray-300 rotate-45"></div>
              </div>
              
              <p className="text-sm sm:text-base text-gray-600 font-light tracking-wide px-4">Full Stack Developer</p>
            </div>
            
            {/* Action button with home page styling */}
            <div className={`mt-6 sm:mt-8 transition-all duration-500 transform ${animationComplete ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <button 
                onClick={handleEnterPortfolio}
                className="group relative px-6 sm:px-8 py-3 w-full sm:w-auto bg-black text-white font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-105 active:scale-95 overflow-hidden"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)'
                }}
              >
                <span className="relative z-10">Enter Portfolio</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Enter Portfolio
                </span>
                
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                     style={{
                       backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                       backgroundSize: '8px 8px'
                     }} 
                />
              </button>
            </div>
            
            {/* Social links with clean styling */}
            <div className={`mt-6 sm:mt-8 flex justify-center space-x-4 sm:space-x-6 transition-all duration-500 delay-150 ${animationComplete ? 'opacity-100' : 'opacity-0'}`}>
              <a 
                href="https://github.com/Djain912" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub Profile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/darshanjain912" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
              <a 
                href="mailto:djain93211@gmail.com" 
                className="text-gray-400 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
                aria-label="Email Contact"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Clean footer with grid-inspired styling */}
        <div className="py-4 px-4 text-center text-xs text-gray-500 border-t border-gray-200">
          <div className="flex justify-center items-center gap-2 mb-2">
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="w-8 h-px bg-gray-300"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="w-8 h-px bg-gray-300"></div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
          </div>
          <span>© {new Date().getFullYear()} Darshan Jain • Crafted with precision</span>
        </div>
      </div>
      
      {/* Matching animations and styles */}
      <style jsx>{`
        @keyframes gridFloat {
          0%, 100% {
            transform: translate(0px, 0px) rotate(0deg);
          }
          33% {
            transform: translate(10px, 5px) rotate(1deg);
          }
          66% {
            transform: translate(-5px, 10px) rotate(-1deg);
          }
        }
        
        /* Progress ring animation */
        .progress-ring {
          animation: progress 2s ease forwards;
          animation-delay: 0.5s;
        }
        
        @keyframes progress {
          0% { stroke-dashoffset: 283; }
          100% { stroke-dashoffset: 0; }
        }
        
        /* D letter animation */
        .d-animation {
          animation: slideInD 0.8s ease forwards;
          opacity: 0;
          transform: translateX(-20px);
        }
        
        .d-animation.completed {
          opacity: 1;
          transform: translateX(-10px);
        }
        
        @keyframes slideInD {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(-10px); }
        }
        
        /* J letter animation */
        .j-animation {
          animation: slideInJ 0.8s ease forwards;
          animation-delay: 0.3s;
          opacity: 0;
          transform: translateX(20px);
        }
        
        .j-animation.completed {
          opacity: 1;
          transform: translateX(10px);
        }
        
        @keyframes slideInJ {
          0% { opacity: 0; transform: translateX(30px); }
          100% { opacity: 1; transform: translateX(10px); }
        }
        
        /* Clean particle animations */
        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        
        .particles.active .particle {
          animation: particle 2s linear infinite;
        }
        
        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.6);
          opacity: 0;
        }
        
        .particles .particle:nth-child(1) { top: 20%; left: 50%; animation-delay: 0s; }
        .particles .particle:nth-child(2) { top: 40%; left: 80%; animation-delay: 0.2s; }
        .particles .particle:nth-child(3) { top: 60%; left: 30%; animation-delay: 0.4s; }
        .particles .particle:nth-child(4) { top: 80%; left: 60%; animation-delay: 0.6s; }
        .particles .particle:nth-child(5) { top: 30%; left: 20%; animation-delay: 0.8s; }
        .particles .particle:nth-child(6) { top: 70%; left: 40%; animation-delay: 1.0s; }
        .particles .particle:nth-child(7) { top: 50%; left: 70%; animation-delay: 1.2s; }
        .particles .particle:nth-child(8) { top: 25%; left: 85%; animation-delay: 1.4s; }
        
        @keyframes particle {
          0% { transform: translate(0, 0) scale(1); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 0.5; }
          100% { transform: translate(var(--tx, 30px), var(--ty, 30px)) scale(0); opacity: 0; }
        }
        
        .particles .particle:nth-child(1) { --tx: 40px; --ty: -30px; }
        .particles .particle:nth-child(2) { --tx: -50px; --ty: -20px; }
        .particles .particle:nth-child(3) { --tx: 35px; --ty: 40px; }
        .particles .particle:nth-child(4) { --tx: -30px; --ty: 35px; }
        .particles .particle:nth-child(5) { --tx: 45px; --ty: 15px; }
        .particles .particle:nth-child(6) { --tx: -40px; --ty: -35px; }
        .particles .particle:nth-child(7) { --tx: -25px; --ty: 45px; }
        .particles .particle:nth-child(8) { --tx: 50px; --ty: 20px; }
      `}</style>
    </div>
  );
};

export default EnhancedLandingPage;