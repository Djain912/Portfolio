import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EnhancedLandingPage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  
  useEffect(() => {
    // Initial fade-in - faster (150ms instead of 300ms)
    setTimeout(() => {
      setIsVisible(true);
    }, 150);
    
    // Trigger the completion of animations - faster (1500ms instead of 3000ms)
    setTimeout(() => {
      setAnimationComplete(true);
    }, 1500);
  }, []);

  return (
    <div className="h-screen bg-gradient-to-b from-gray-900 to-black overflow-hidden relative">
      {/* Animated background with waves */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>
      
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-cyan-600/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-blue-600/5 blur-3xl"></div>
        <div className="absolute top-3/4 left-1/3 w-32 h-32 rounded-full bg-cyan-400/5 blur-xl"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="tech-icon" style={{top: '15%', left: '10%'}}>⚛️</div>
        <div className="tech-icon" style={{top: '25%', right: '15%'}}>📱</div>
        <div className="tech-icon" style={{bottom: '30%', left: '15%'}}>💻</div>
        <div className="tech-icon" style={{bottom: '20%', right: '10%'}}>🚀</div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1 flex items-center justify-center px-6">
          <div className={`text-center max-w-md mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {/* Animated DJ Monogram */}
            <div className="relative mx-auto w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">
              {/* Background glow effect */}
              <div className="absolute w-full h-full rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 glow-effect"></div>
              
              {/* Background circle with pulsing effect */}
              <div className={`absolute w-full h-full rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-600/10 pulse-effect ${animationComplete ? 'pulse-fast' : ''}`}></div>
              
              {/* Outer ring with rotating effect */}
              <div className={`absolute w-full h-full rounded-full border-2 border-cyan-500/30 rotating-ring ${animationComplete ? 'rotate-fast' : ''}`}></div>
              
              {/* Interactive circular progress */}
              <svg className="absolute w-full h-full" viewBox="0 0 100 100">
                <circle 
                  className="progress-ring" 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  fill="none" 
                  stroke="url(#gradientStroke)" 
                  strokeWidth="2"
                  strokeDasharray="283"
                  strokeDashoffset="283"
                />
                <defs>
                  <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* D letter with animation */}
              <div className={`absolute text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 d-animation ${animationComplete ? 'completed' : ''}`}>
                D
              </div>
              
              {/* J letter with animation */}
              <div className={`absolute text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 j-animation ${animationComplete ? 'completed' : ''}`}>
                J
              </div>
              
              {/* Particle effects */}
              <div className={`particles ${animationComplete ? 'active' : ''}`}>
                {[...Array(15)].map((_, i) => (
                  <div key={i} className="particle"></div>
                ))}
              </div>
            </div>
            
            {/* Name and title with divider - fades in after animation */}
            <div className={`mt-8 space-y-3 transition-opacity duration-700 ${animationComplete ? 'opacity-100' : 'opacity-0'}`}>
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Darshan Jain</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
              <p className="text-cyan-300 font-light tracking-wide">Developer • Innovator • Tech Enthusiast</p>
            </div>
            
            {/* Action button - slides up after animation with hover effect */}
            <div className={`mt-8 transition-all duration-500 transform ${animationComplete ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <button 
                onClick={() => navigate('/home')}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group"
              >
                <span className="relative flex items-center">
                  <span>Enter Portfolio</span>
                  <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                  <span className="absolute inset-0 w-full h-full bg-white rounded-full filter blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
                </span>
              </button>
            </div>
            
            {/* Social links - fade in last with interactive hover effects */}
            <div className={`mt-8 flex justify-center space-x-6 transition-all duration-500 delay-150 ${animationComplete ? 'opacity-100' : 'opacity-0'}`}>
              <a 
                href="https://github.com/Djain912" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 social-icon"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/darshanjain912" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 social-icon"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
              <a 
                href="mailto:djain93211@gmail.com" 
                target="_blank" 
                className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 social-icon"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Improved footer with subtle glowing border and typing effect */}
        <div className="py-3 px-4 text-center text-xs text-cyan-500/70 border-t border-cyan-500/10 backdrop-blur-sm bg-black/20">
          <span className="typing-text">© {new Date().getFullYear()} Darshan Jain • All Rights Reserved</span>
        </div>
      </div>
      
      {/* Enhanced animations */}
      <style jsx>{`
        /* Glow effect */
        .glow-effect {
          animation: glow 4s ease-in-out infinite;
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px 0px rgba(34, 211, 238, 0.3); }
          50% { box-shadow: 0 0 30px 10px rgba(59, 130, 246, 0.5); }
        }
        
        /* Pulse animation for the background - faster */
        .pulse-effect {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .pulse-fast {
          animation-duration: 4s;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.05); opacity: 0.6; }
        }
        
        /* Rotating ring animation - faster */
        .rotating-ring {
          animation: rotate 8s linear infinite;
        }
        
        .rotate-fast {
          animation-duration: 15s;
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
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
        
        /* D letter animation - faster */
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
        
        /* J letter animation - faster */
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
        
        /* Particle animations - more particles and faster */
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
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: linear-gradient(to right, #22d3ee, #3b82f6);
          opacity: 0;
        }
        
        .particles .particle:nth-child(1) { top: 20%; left: 50%; animation-delay: 0s; }
        .particles .particle:nth-child(2) { top: 40%; left: 80%; animation-delay: 0.1s; }
        .particles .particle:nth-child(3) { top: 60%; left: 30%; animation-delay: 0.2s; }
        .particles .particle:nth-child(4) { top: 80%; left: 60%; animation-delay: 0.3s; }
        .particles .particle:nth-child(5) { top: 30%; left: 20%; animation-delay: 0.4s; }
        .particles .particle:nth-child(6) { top: 70%; left: 40%; animation-delay: 0.5s; }
        .particles .particle:nth-child(7) { top: 50%; left: 70%; animation-delay: 0.6s; }
        .particles .particle:nth-child(8) { top: 10%; left: 30%; animation-delay: 0.7s; }
        .particles .particle:nth-child(9) { top: 90%; left: 80%; animation-delay: 0.8s; }
        .particles .particle:nth-child(10) { top: 40%; left: 10%; animation-delay: 0.9s; }
        .particles .particle:nth-child(11) { top: 15%; left: 40%; animation-delay: 1.0s; }
        .particles .particle:nth-child(12) { top: 85%; left: 20%; animation-delay: 1.1s; }
        .particles .particle:nth-child(13) { top: 35%; left: 90%; animation-delay: 1.2s; }
        .particles .particle:nth-child(14) { top: 65%; left: 50%; animation-delay: 1.3s; }
        .particles .particle:nth-child(15) { top: 25%; left: 60%; animation-delay: 1.4s; }
        
        @keyframes particle {
          0% { transform: translate(0, 0) scale(1); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 0.5; }
          100% { transform: translate(var(--tx, 50px), var(--ty, 50px)) scale(0); opacity: 0; }
        }
        
        /* Add dynamic particle directions */
        .particles .particle:nth-child(1) { --tx: 60px; --ty: -40px; }
        .particles .particle:nth-child(2) { --tx: -70px; --ty: -30px; }
        .particles .particle:nth-child(3) { --tx: 50px; --ty: 60px; }
        .particles .particle:nth-child(4) { --tx: -40px; --ty: 50px; }
        .particles .particle:nth-child(5) { --tx: 70px; --ty: 20px; }
        .particles .particle:nth-child(6) { --tx: -60px; --ty: -50px; }
        .particles .particle:nth-child(7) { --tx: -30px; --ty: 70px; }
        .particles .particle:nth-child(8) { --tx: 80px; --ty: 30px; }
        .particles .particle:nth-child(9) { --tx: -20px; --ty: -60px; }
        .particles .particle:nth-child(10) { --tx: 40px; --ty: -70px; }
        .particles .particle:nth-child(11) { --tx: -50px; --ty: 40px; }
        .particles .particle:nth-child(12) { --tx: 65px; --ty: -55px; }
        .particles .particle:nth-child(13) { --tx: -45px; --ty: -25px; }
        .particles .particle:nth-child(14) { --tx: 25px; --ty: 65px; }
        .particles .particle:nth-child(15) { --tx: -60px; --ty: 35px; }

        /* Wave animation */
        .wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100px;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%2322d3ee' fill-opacity='0.1' d='M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,149.3C672,171,768,181,864,165.3C960,149,1056,107,1152,85.3C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
          background-size: 1440px 100px;
          animation: wave 15s linear infinite;
        }
        
        .wave1 {
          opacity: 0.5;
          animation: wave-reverse 20s linear infinite;
          bottom: -25px;
        }
        
        .wave2 {
          opacity: 0.3;
          animation: wave 25s linear infinite;
          bottom: -50px;
          animation-delay: -5s;
        }
        
        .wave3 {
          opacity: 0.2;
          animation: wave-reverse 30s linear infinite;
          bottom: -75px;
          animation-delay: -10s;
        }
        
        @keyframes wave {
          0% { background-position-x: 0; }
          100% { background-position-x: 1440px; }
        }
        
        @keyframes wave-reverse {
          0% { background-position-x: 1440px; }
          100% { background-position-x: 0; }
        }
        
        /* Floating tech icons */
        .tech-icon {
          position: absolute;
          font-size: 1.5rem;
          opacity: 0.4;
          animation: float 8s ease-in-out infinite;
        }
        
        .tech-icon:nth-child(2) { animation-delay: -2s; }
        .tech-icon:nth-child(3) { animation-delay: -4s; }
        .tech-icon:nth-child(4) { animation-delay: -6s; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        
        /* Social icon hover effect */
        .social-icon {
          position: relative;
        }
        
        .social-icon::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: linear-gradient(45deg, #22d3ee, #3b82f6);
          opacity: 0;
          z-index: -1;
          transition: opacity 0.3s;
        }
        
        .social-icon:hover::after {
          opacity: 0.2;
        }
        
        /* Typing effect for footer text */
        .typing-text {
          position: relative;
          display: inline-block;
          width: fit-content;
          white-space: nowrap;
          overflow: hidden;
          border-right: 2px solid transparent;
          animation: typing 3s steps(40) 1s forwards, blink 0.7s step-end infinite alternate;
          opacity: 0;
        }
        
        @keyframes typing {
          0% { width: 0; opacity: 1; }
          99% { border-right-color: rgba(34, 211, 238, 0.5); }
          100% { width: 100%; opacity: 1; border-right-color: transparent; }
        }
        
        @keyframes blink {
          50% { border-right-color: rgba(34, 211, 238, 0.5); }
        }
      `}</style>
    </div>
  );
};

export default EnhancedLandingPage;