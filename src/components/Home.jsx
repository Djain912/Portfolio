import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../App.css';
import sample from '../assets/abtic.png';
import resume from '../assets/Resume.pdf';
import { Button } from "@nextui-org/react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownload = () => {
    // Create a direct link and trigger click programmatically
    const link = document.createElement('a');
    link.href = resume;
    link.download = "Darshan_Jain_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-cyan-500/10"
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 15 + 20}s`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.1,
                animation: 'float 20s infinite ease-in-out'
              }}
            />
          ))}
        </div>
      </div>

      {/* Shooting stars animation */}
      <div className="stars-container">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="shooting-star"
            style={{
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative pt-12 flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 md:px-12 lg:flex-row lg:items-center">
        <div 
          className={`flex flex-col items-start text-left p-6 sm:p-8 md:p-12 lg:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}
        >
          <div className="relative">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">
              Hello, <span className="relative">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Darshan Jain
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
              </span>
            </h1>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">here</h2>
          </div>

          <div className="mt-8 h-16">
            <TypeAnimation
              className="text-gray-300"
              sequence={[
                '"Turning Ideas into Digital Reality"',
                1000,
                '"Full Stack Developer & Problem Solver"',
                1000,
                '"Crafting Exceptional User Experiences"',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontStyle: 'italic', fontSize: '1.25em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </div>

          <div className="mt-12 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              onClick={handleDownload}
              color="primary" 
              className="relative overflow-hidden group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-lg py-2 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Download Resume
              </span>
              <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </Button>
            
          </div>
        </div>

        <div 
          className={`flex items-center justify-center lg:w-1/2 p-6 mt-8 lg:mt-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl animate-pulse"></div>
            <div className="relative rounded-full overflow-hidden">
              <img 
                src={sample} 
                alt="Darshan Jain" 
                className="w-full max-w-md transition-all duration-500 hover:scale-105 hover:brightness-110"
                style={{ filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.5))' }}
              />
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        .stars-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .shooting-star {
          position: absolute;
          width: 150px;
          height: 1px;
          background: linear-gradient(to right, rgba(0,0,0,0), rgba(6, 182, 212, 0.8), rgba(0,0,0,0));
          transform: rotate(-45deg);
          animation: shooting 6s linear infinite;
        }

        @keyframes shooting {
          0% {
            transform: translateX(0) translateY(0) rotate(-45deg);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          20% {
            transform: translateX(300px) translateY(300px) rotate(-45deg);
            opacity: 0;
          }
          100% {
            transform: translateX(300px) translateY(300px) rotate(-45deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}