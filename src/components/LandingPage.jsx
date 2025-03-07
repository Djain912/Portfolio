import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Simplified Terminal Component
const SimpleTerminal = ({ onComplete }) => {
  const [visibleCommands, setVisibleCommands] = useState([]);
  const commands = [
    "> INITIALIZING PORTFOLIO...",
    "> LOADING PROJECTS...",
    "> SYSTEM READY"
  ];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCommands(prev => {
        if (prev.length < commands.length) {
          return [...prev, commands[prev.length]];
        }
        clearInterval(timer);
        setTimeout(() => onComplete(), 500);
        return prev;
      });
    }, 300);
  
    return () => clearInterval(timer);
  }, [commands, onComplete]);
  
  return (
    <div className="relative w-full max-w-md bg-black/70 backdrop-blur-lg rounded-lg border border-cyan-400/30 shadow-lg p-4">
      <div className="font-mono text-cyan-300 text-sm">
        {visibleCommands.map((cmd, i) => (
          <div key={i} className="mb-2">
            {cmd}
            {i === commands.length - 1 && (
              <span className="inline-block ml-2 text-green-400">✓</span>
            )}
          </div>
        ))}
        
        <div className="mt-4 flex items-center gap-2">
          <span className="text-cyan-500">$</span>
          <motion.div
            className="w-2 h-4 bg-cyan-400"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  );
};

// Simple Background Effect
const SimpleBackground = () => {
  return (
    <div className="absolute inset-0">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
      
      {/* Simple orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-400/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-purple-400/5 blur-2xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  );
};

// Main Landing Page
const LandingPage = () => {
  const navigate = useNavigate();
  const [systemReady, setSystemReady] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 300);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: loaded ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="relative h-screen bg-gray-950 overflow-hidden"
    >
      <SimpleBackground />
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        {!systemReady && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <SimpleTerminal onComplete={() => setSystemReady(true)} />
          </motion.div>
        )}

        {systemReady && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center space-y-6 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/10 max-w-md"
          >
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              DARSHAN JAIN
            </h1>
            
            <div className="text-cyan-300 text-lg">
              Developer • Innovator • Tech Enthusiast
            </div>
            
            <div className="flex justify-center">
              <motion.button
                onClick={() => navigate('/home')}
                className="px-6 py-2 bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 font-mono"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                View Portfolio
              </motion.button>
            </div>
            
            <div className="text-white/70">
              <p>
                Specialized in creating innovative web and mobile applications with cutting-edge technologies.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
              
              <a 
                href="mailto:contact@example.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Simple Footer */}
      <div className="absolute bottom-0 left-0 right-0 py-2 px-4 bg-black/20 text-center text-xs text-cyan-500/70 border-t border-cyan-500/10">
        <div className="flex justify-center items-center">
          <span>© {new Date().getFullYear()} Darshan Jain</span>
        </div>
      </div>
    </motion.div>
  );
};

export default LandingPage;