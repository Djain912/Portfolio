import React, { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const roles = ['Full Stack Developer', 'Problem Solver', 'Tech Enthusiast'];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Custom typing animation
  useEffect(() => {
    let timeout;
    const currentText = roles[currentRole];
    
    if (isTyping) {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRole, roles]);

  const [showPdfViewer, setShowPdfViewer] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);

  // Load PDF URL when component mounts
  useEffect(() => {
    import('../assets/DarshanJainResume.pdf')
      .then((module) => {
        setPdfUrl(module.default);
      })
      .catch((error) => {
        console.error('Error loading PDF:', error);
        setPdfUrl('/DarshanJainResume.pdf'); // Fallback to public folder
      });
  }, []);

  const handleDownload = () => {
    // // Path to your resume PDF (should be in public folder)
    // const resumeUrl = '/resume/Darshan_Jain_Resume.pdf';
    
    // // Download the PDF
    // const link = document.createElement('a');
    // link.href = resumeUrl;
    // link.download = 'Darshan_Jain_Resume.pdf';
    // link.target = '_blank';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
    
    // Show PDF viewer popup
    setShowPdfViewer(true);
    
    console.log('Resume downloaded and viewer opened');
  };

  const closePdfViewer = () => {
    setShowPdfViewer(false);
  };

  const scrollToContact = () => {
    // Scroll to the existing contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // If contact section doesn't exist (e.g., on landing page), 
      // you might want to navigate to /home#contact
      console.log('Contact section not found on current page');
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Enhanced cursor follower */}
      <div 
        className={`fixed w-6 h-6 rounded-full pointer-events-none transition-all duration-300 ease-out z-50 ${
          isHovering ? 'bg-blue-500/50 scale-150' : 'bg-black/5'
        }`}
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      />

      {/* Multi-layered Grid System */}
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

      {/* Dynamic grid lines that follow mouse */}
      <div className="absolute inset-0 pointer-events-none">
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

      <div className="relative flex flex-col items-center justify-center min-h-screen px-6 sm:px-12 z-10">
        {/* Main content */}
        <div 
          className={`text-center max-w-4xl transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Name with subtle animation */}
          <div className="mb-8">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-light tracking-tight text-gray-900 mb-4 relative">
              <span className="inline-block hover:scale-105 transition-transform duration-500 cursor-default relative">
                Darshan
                {/* Grid-inspired underline */}
                <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent scale-x-0 hover:scale-x-100 transition-transform duration-500"></div>
              </span>
              <br />
              <span className="inline-block hover:scale-105 transition-transform duration-500 cursor-default delay-100 relative">
                Jain
                <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent scale-x-0 hover:scale-x-100 transition-transform duration-500"></div>
              </span>
            </h1>
            
            {/* Grid-pattern divider */}
            <div className="flex justify-center items-center gap-2 mb-4">
              <div className="w-2 h-2 border border-gray-300 rotate-45"></div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
              <div className="w-2 h-2 bg-black rotate-45"></div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
              <div className="w-2 h-2 border border-gray-300 rotate-45"></div>
            </div>
          </div>

          {/* Enhanced typing animation */}
          <div className="mb-12 h-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent opacity-50 blur-sm"></div>
            <p className="text-xl sm:text-2xl text-gray-600 font-light relative">
              {displayText}
              <span className="animate-pulse ml-1 text-blue-500">|</span>
            </p>
          </div>

          {/* Interactive buttons with grid-inspired design */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={handleDownload}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="group relative px-8 py-3 bg-black text-white font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-105 active:scale-95 overflow-hidden"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)'
              }}
            >
              <span className="relative z-10">View Resume</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Resume
              </span>
              
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                   style={{
                     backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                     backgroundSize: '8px 8px'
                   }} 
              />
            </button>
            
            <button 
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={scrollToContact}
              className="group relative px-8 py-3 border border-black text-black font-medium transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 active:scale-95 overflow-hidden"
              style={{
                clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)'
              }}
            >
              Get In Touch
              
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                   style={{
                     backgroundImage: `linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)`,
                     backgroundSize: '8px 8px'
                   }} 
              />
            </button>
          </div>
        </div>

        {/* Enhanced floating elements with grid-inspired shapes */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute transition-all duration-1000"
              style={{
                top: `${20 + i * 25}%`,
                left: `${10 + i * 30}%`,
                transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
              }}
            >
              <div 
                className="w-6 h-6 border border-black/10 rotate-45 animate-pulse"
                style={{
                  animationDelay: `${i * 2}s`,
                  animationDuration: '4s'
                }}
              />
            </div>
          ))}
          {[...Array(3)].map((_, i) => (
            <div
              key={i + 3}
              className="absolute transition-all duration-1000"
              style={{
                top: `${30 + i * 20}%`,
                right: `${15 + i * 25}%`,
                transform: `translate(${mousePosition.x * -0.05}px, ${mousePosition.y * -0.05}px)`,
              }}
            >
              <div 
                className="w-4 h-4 bg-black/5 animate-pulse"
                style={{
                  animationDelay: `${(i + 1) * 1.5}s`,
                  animationDuration: '4s',
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                }}
              />
            </div>
          ))}
        </div>

        {/* Enhanced scroll indicator with grid design */}
        <div 
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-400 mb-2 uppercase tracking-wider">Scroll</span>
            <div className="relative">
              <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent" />
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 border border-gray-400 rotate-45 bg-white animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {showPdfViewer && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full h-5/6 flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800">Resume - Darshan Jain</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    if (pdfUrl) {
                      const link = document.createElement('a');
                      link.href = pdfUrl;
                      link.download = 'DarshanJainResume.pdf';
                      link.click();
                    }
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                >
                  Download PDF
                </button>
                <button
                  onClick={closePdfViewer}
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors text-sm"
                >
                  Close
                </button>
              </div>
            </div>
            
            {/* PDF Viewer */}
            <div className="flex-1 p-4">
              {pdfUrl ? (
                <iframe
                  src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
                  className="w-full h-full border border-gray-300 rounded"
                  title="Resume PDF Viewer"
                />
              ) : (
                <div className="w-full h-full border border-gray-300 rounded flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading PDF...</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Fallback message */}
            <div className="p-4 text-center text-gray-600 text-sm border-t border-gray-200">
              <p>Can't view the PDF? <a href={pdfUrl || '#'} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Open in new tab</a> or download it above.</p>
            </div>
          </div>
        </div>
      )}

      {/* Subtle background animation */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-20"
          style={{
            backgroundSize: '200% 200%',
            animation: 'gradient 15s ease infinite'
          }}
        />
      </div>

      {/* Styles for animations */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
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
      `}</style>
    </div>
  );
}