import React, { useState, useEffect } from 'react';
import img from '../assets/person.png';
import '../App.css';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div id="about-me" className="relative min-h-screen bg-gray-950 py-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse items-center lg:items-start justify-center gap-8 lg:flex-row lg:justify-between">
          {/* Content section */}
          <div className="w-full lg:w-1/2 text-left" data-aos="fade-up">
            <div className="relative inline-block mb-8">
              <h1 className="text-5xl sm:text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                About Me
              </h1>
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
            </div>
            
            <div className="relative p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 shadow-xl">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-cyan-500/20 rounded-full blur-md"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full blur-md"></div>
              
              <p className="text-white/90 text-lg sm:text-xl leading-relaxed mb-6">
                Hi, I'm <span className="font-semibold text-cyan-400">Darshan Jain</span>, a passionate Full Stack Web Developer with experience as an intern at Elight Labs. I enjoy building dynamic, responsive web applications from the ground up, with proficiency in both front-end and back-end development.
              </p>
              
              <p className="text-white/90 text-lg sm:text-xl leading-relaxed">
                With a keen eye for detail and a commitment to excellence, I love turning ideas into reality, tackling new challenges, and continuously learning to enhance my skills.
              </p>
              
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 bg-gray-800/50 rounded-lg text-center transform transition-transform hover:scale-105 hover:bg-gray-800">
                  <div className="text-cyan-400 text-3xl font-bold">2+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg text-center transform transition-transform hover:scale-105 hover:bg-gray-800">
                  <div className="text-cyan-400 text-3xl font-bold">15+</div>
                  <div className="text-gray-400 text-sm">Projects</div>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg text-center transform transition-transform hover:scale-105 hover:bg-gray-800">
                  <div className="text-cyan-400 text-3xl font-bold">10+</div>
                  <div className="text-gray-400 text-sm">Technologies</div>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg text-center transform transition-transform hover:scale-105 hover:bg-gray-800">
                  <div className="text-cyan-400 text-3xl font-bold">100%</div>
                  <div className="text-gray-400 text-sm">Dedication</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image section */}
          <div className="w-full lg:w-1/2 flex items-center justify-center" data-aos="fade-down">
            <div className={`relative group transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400/30 blur-sm animate-pulse"></div>
              
              {/* Image container with light effect */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-gray-800 shadow-2xl shadow-cyan-500/20 z-10">
                <div className="absolute -inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-blue-500/20 z-0"></div>
                
                {/* Actual image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={img} 
                    alt="Darshan Jain" 
                    className="w-full max-w-md object-cover transform transition-transform duration-500 group-hover:scale-105" 
                  />
                  
                  {/* Overlay with tech icons */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end justify-center p-6">
                    <div className="flex space-x-4">
                      {['💻', '🚀', '⚛️', '🔥', '📱'].map((icon, index) => (
                        <div 
                          key={index}
                          className="w-10 h-10 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center transform transition-transform hover:scale-110"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <span className="text-xl">{icon}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating shapes */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-cyan-500/20 rounded-full blur-lg animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-500/20 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}