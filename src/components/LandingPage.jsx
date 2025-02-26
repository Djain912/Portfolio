import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// 3D Rotating Cube Component (NEW)
const RotatingCube = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientY / window.innerHeight - 0.5) * 40;
      const y = (e.clientX / window.innerWidth - 0.5) * -40;
      setRotation({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 perspective-500 hidden lg:block">
      <motion.div 
        className="w-full h-full relative transform-style-3d"
        animate={{ 
          rotateX: rotation.x,
          rotateY: rotation.y
        }}
        transition={{ type: "spring", stiffness: 30 }}
      >
        {/* Front */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent border border-cyan-400/50 backdrop-blur-sm">
          <div className="flex items-center justify-center h-full text-cyan-400 font-mono">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              &lt;/&gt;
            </motion.div>
          </div>
        </div>
        {/* Back */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent border border-purple-400/50 backdrop-blur-sm transform rotate-y-180">
          <div className="flex items-center justify-center h-full text-purple-400 font-mono">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              DEV
            </motion.div>
          </div>
        </div>
        {/* Top */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent border border-blue-400/50 backdrop-blur-sm transform rotate-x-90">
          <div className="flex items-center justify-center h-full text-blue-400 font-mono">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              AI
            </motion.div>
          </div>
        </div>
        {/* Bottom */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent border border-emerald-400/50 backdrop-blur-sm transform rotate-x--90">
          <div className="flex items-center justify-center h-full text-emerald-400 font-mono">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ML
            </motion.div>
          </div>
        </div>
        {/* Left */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent border border-red-400/50 backdrop-blur-sm transform rotate-y--90">
          <div className="flex items-center justify-center h-full text-red-400 font-mono">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              UI
            </motion.div>
          </div>
        </div>
        {/* Right */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent border border-amber-400/50 backdrop-blur-sm transform rotate-y-90">
          <div className="flex items-center justify-center h-full text-amber-400 font-mono">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              UX
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Audio Visualizer Component (NEW)
const AudioVisualizer = () => {
  const [peaks, setPeaks] = useState(Array(30).fill(0));
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPeaks(prev => prev.map(() => Math.random() * 100));
    }, 150);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="absolute bottom-0 left-0 right-0 h-20 flex items-end justify-center gap-1 opacity-30 pointer-events-none">
      {peaks.map((peak, i) => (
        <motion.div
          key={i}
          className="w-1 md:w-2 bg-gradient-to-t from-cyan-400 to-purple-500"
          animate={{ height: `${peak}%` }}
          transition={{ duration: 0.2 }}
        />
      ))}
    </div>
  );
};

// Particle Trail Component (IMPROVED)
const ParticleTrail = () => {
  const [particles, setParticles] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const particleCount = 20;
  const trailLife = 2000; // ms
  const particleIdRef = useRef(0);
  
  useEffect(() => {
    const updateMousePos = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updateMousePos);
    return () => window.removeEventListener('mousemove', updateMousePos);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const newParticle = {
        id: particleIdRef.current++,
        x: mousePos.x,
        y: mousePos.y,
        size: Math.random() * 5 + 2,
        color: Math.random() > 0.5 ? 'bg-cyan-400' : 'bg-purple-400',
        born: Date.now()
      };
      
      setParticles(prev => [...prev, newParticle]);
      
      // Clean up old particles
      setParticles(prev => prev.filter(p => Date.now() - p.born < trailLife));
    }, 50);
    
    return () => clearInterval(interval);
  }, [mousePos]);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => {
        const opacity = 1 - (Date.now() - particle.born) / trailLife;
        
        return (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full ${particle.color}`}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: particle.x,
              top: particle.y,
              opacity,
              filter: `blur(${particle.size / 2}px)`
            }}
            animate={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: [opacity, 0]
            }}
            transition={{
              duration: trailLife / 1000,
              ease: "easeOut"
            }}
          />
        );
      })}
    </div>
  );
};

// Floating Tech Icons Component (IMPROVED)
const TechIconsCloud = () => {
  const icons = ['⚛️', '🚀', '💻', '🌐', '🔗', '📱', '🔧', '💾', '🎮', '🧠', '🧑‍💻', '📈', '🤖', '👩‍🎓', '🌟', '🔍', '🎨', '📊'];
  
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl md:text-3xl opacity-10 hover:opacity-30"
          initial={{
            x: Math.random() * 100,
            y: Math.random() * 100,
            rotate: Math.random() * 360
          }}
          animate={{
            y: [0, -100, 0],
            rotate: [0, 180],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear'
          }}
          style={{
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 90 + 5}%`,
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
};

// Glowing Orbs Component (IMPROVED)
const GlowingOrbs = () => {
  const orbs = [
    { color: 'bg-cyan-400/10', x: '20%', y: '30%', size: 'w-64 h-64', blur: 'blur-3xl' },
    { color: 'bg-purple-400/10', x: '75%', y: '70%', size: 'w-48 h-48', blur: 'blur-2xl' },
    { color: 'bg-blue-400/10', x: '60%', y: '20%', size: 'w-40 h-40', blur: 'blur-3xl' },
    { color: 'bg-emerald-400/10', x: '30%', y: '80%', size: 'w-56 h-56', blur: 'blur-2xl' },
  ];
  
  return (
    <>
      {orbs.map((orb, i) => (
        <motion.div 
          key={i}
          className={`absolute ${orb.color} ${orb.size} rounded-full ${orb.blur}`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity
          }}
          style={{
            left: orb.x,
            top: orb.y
          }}
        />
      ))}
    </>
  );
};

// Cybernetic HUD Component (IMPROVED)
const CyberHUD = () => {
  const [stats, setStats] = useState({
    code: 0,
    projects: 0,
    experience: 0,
    efficiency: 0
  });
  
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        code: Math.min(prev.code + 357, 150000),
        projects: Math.min(prev.projects + 1, 42),
        experience: Math.min(prev.experience + 0.1, 5.2),
        efficiency: Math.min(prev.efficiency + 0.5, 98.5)
      }));
    }, 100);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="absolute top-0 left-0 right-0 flex flex-col md:flex-row justify-between text-cyan-400 font-mono text-xs md:text-sm z-10 p-2 md:p-4 backdrop-blur-sm bg-black/10 border-b border-cyan-500/30">
      <div className="hud-panel flex items-center gap-2">
        <motion.div 
          className="w-2 h-2 rounded-full bg-cyan-400"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="text-cyan-500">SYS_TIME</span>
        <motion.span 
          className="glowing-text"
          animate={{ textShadow: ["0 0 5px #00ffff", "0 0 10px #00ffff", "0 0 5px #00ffff"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {time.toLocaleTimeString()}
        </motion.span>
      </div>
      
      <div className="hud-panel flex items-center gap-2">
        <span className="text-cyan-500">CODE_LINES</span>
        <motion.span 
          className="glowing-text"
          animate={{ textShadow: ["0 0 5px #00ffff", "0 0 10px #00ffff", "0 0 5px #00ffff"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {stats.code.toLocaleString()}
        </motion.span>
      </div>
      
      <div className="hud-panel flex items-center gap-2">
        <span className="text-cyan-500">PROJECTS</span>
        <div className="flex items-center gap-2">
          <div className="h-2 w-20 bg-cyan-900/50 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-cyan-400"
              initial={{ width: 0 }}
              animate={{ width: `${(stats.projects/42)*100}%` }}
              transition={{ duration: 2 }}
            />
          </div>
          <span>{stats.projects}</span>
        </div>
      </div>
      
      <div className="hud-panel flex items-center gap-2">
        <span className="text-cyan-500">EFFICIENCY</span>
        <div className="flex items-center gap-2">
          <div className="h-2 w-20 bg-cyan-900/50 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-cyan-400"
              initial={{ width: 0 }}
              animate={{ width: `${stats.efficiency}%` }}
              transition={{ duration: 2 }}
            />
          </div>
          <span>{stats.efficiency.toFixed(1)}%</span>
        </div>
      </div>
    </div>
  );
};

// Neural Network Visualization (IMPROVED)
const NeuralWeb = () => {
  const generateNodes = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      active: false
    }));
  }, []);
  
  const [activeNodes, setActiveNodes] = useState([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const newActiveNode = Math.floor(Math.random() * generateNodes.length);
      setActiveNodes(prev => {
        const newActive = [...prev, newActiveNode];
        if (newActive.length > 5) {
          return newActive.slice(1);
        }
        return newActive;
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [generateNodes.length]);
  
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {generateNodes.map((node, i) => (
          <g key={node.id}>
            {generateNodes.map((target, j) => {
              // Create connections between nodes
              if (i % 5 === 0 && j % 7 === 0 && i !== j) {
                const isActive = activeNodes.includes(i) && activeNodes.includes(j);
                return (
                  <motion.line
                    key={`line-${i}-${j}`}
                    x1={node.x}
                    y1={node.y}
                    x2={target.x}
                    y2={target.y}
                    className={isActive ? "stroke-cyan-400/60" : "stroke-cyan-400/10"}
                    strokeWidth={isActive ? "0.5" : "0.2"}
                    animate={isActive ? {
                      strokeDashoffset: [0, 100],
                      pathLength: [0, 1]
                    } : {}}
                    transition={{ duration: 1 }}
                  />
                );
              }
              return null;
            })}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={activeNodes.includes(i) ? "1" : "0.5"}
              className={activeNodes.includes(i) ? "fill-cyan-400" : "fill-cyan-400/50"}
              animate={{
                scale: activeNodes.includes(i) ? [1, 1.5, 1] : [0.8, 1, 0.8],
                opacity: activeNodes.includes(i) ? [0.5, 1, 0.5] : [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 1 + Math.random(),
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

// Holographic Terminal (IMPROVED)
const HologramTerminal = ({ onComplete }) => {
  const [visibleCommands, setVisibleCommands] = useState([]);
  const commands = [
    "> INITIALIZING PORTFOLIO_OS v2.5.1...",
    "> LOADING CREDENTIALS...",
    "> ACCESSING PROJECT_REPOSITORIES...",
    "> ESTABLISHING SECURE CONNECTION...",
    "> VERIFYING IDENTITY...",
    "> CYBERSECURITY PROTOCOLS ENGAGED...",
    "> COMPILING ACHIEVEMENTS...",
    "> SYSTEM READY"
  ];
  
  const [glitchText, setGlitchText] = useState("");
  
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
      let result = "";
      for (let i = 0; i < 20; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      setGlitchText(result);
    }, 100);
    
    return () => clearInterval(glitchInterval);
  }, []);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCommands(prev => {
        if (prev.length < commands.length) {
          return [...prev, commands[prev.length]];
        }
        clearInterval(timer);
        setTimeout(() => onComplete(), 500); // Reduced from 1000ms to 500ms
        return prev;
      });
    }, 100); // Reduced from 600ms to 300ms
  
    return () => clearInterval(timer);
  }, [commands, onComplete]);
  
  return (
    <motion.div 
      className="relative h-64 md:h-72 w-full max-w-2xl bg-black/70 backdrop-blur-lg rounded-lg border border-cyan-400/30 shadow-2xl shadow-cyan-500/20 overflow-hidden"
      initial={{ y: 20 }}
      animate={{ y: [20, 0, 5, 0], rotateX: [10, 0, 2, 0] }}
      transition={{ duration: 1 }}
    >
      {/* Terminal scanlines */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,_transparent_24%,_rgba(0,255,255,0.05)_25%,_transparent_26%)] bg-[length:100%_3px] animate-scanline" />
      
      {/* Glitch effect */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-6 bg-red-500/10 text-xs text-red-400 font-mono overflow-hidden opacity-0"
        animate={{ opacity: [0, 0.7, 0], x: [-10, 0, 10, 0] }}
        transition={{ duration: 0.2, repeat: 10, repeatDelay: 3 }}
      >
        {glitchText}
      </motion.div>
      
      {/* Terminal content */}
      <div className="relative z-10 p-6 h-full font-mono text-cyan-300 text-sm md:text-base overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 text-xs border-b border-cyan-500/30 pb-2">
          <span className="text-cyan-500">SECURE_TERMINAL v2.5.1</span>
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ◉ CONNECTED
          </motion.span>
        </div>
        
        {/* Commands */}
        {visibleCommands.map((cmd, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="command-line mb-2"
          >
            {cmd}
            {i === commands.length - 1 && (
              <motion.span 
                className="inline-block ml-2 text-green-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                ✓
              </motion.span>
            )}
          </motion.div>
        ))}
        
        {/* Command prompt */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-cyan-500">root@darshan:~$</span>
          <motion.div
            className="w-2 h-4 bg-cyan-400"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
      </div>
      
      {/* Holographic effect */}
      <div className="absolute inset-0 rounded-lg border border-cyan-400/20 pointer-events-none">
        <div className="absolute -inset-2 bg-cyan-400/5 filter blur-xl animate-hologram" />
      </div>
    </motion.div>
  );
};

// Digital Rain Effect (NEW)
const DigitalRain = () => {
  const columns = 20;
  const [rainDrops, setRainDrops] = useState([]);
  
  useEffect(() => {
    // Initialize rain drops
    const initialDrops = [];
    for (let i = 0; i < columns; i++) {
      initialDrops.push({
        id: i,
        column: i,
        value: String.fromCharCode(0x30A0 + Math.random() * 96),
        y: Math.floor(Math.random() * -20),
        speed: 1 + Math.random() * 2
      });
    }
    setRainDrops(initialDrops);
    
    const interval = setInterval(() => {
      setRainDrops(prev => prev.map(drop => {
        // Update position
        const newY = drop.y + drop.speed;
        
        // If drop goes off screen, reset at top with new value
        if (newY > 100) {
          return {
            ...drop,
            y: Math.floor(Math.random() * -20),
            value: String.fromCharCode(0x30A0 + Math.random() * 96),
            speed: 1 + Math.random() * 2
          };
        }
        
        // Occasionally change character
        if (Math.random() > 0.9) {
          return {
            ...drop,
            value: String.fromCharCode(0x30A0 + Math.random() * 96)
          };
        }
        
        return { ...drop, y: newY };
      }));
    }, 100);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {rainDrops.map(drop => (
        <div
          key={drop.id}
          className="absolute text-cyan-400 font-bold"
          style={{
            left: `${(drop.column / columns) * 100}%`,
            top: `${drop.y}%`,
            textShadow: '0 0 5px #00ffff'
          }}
        >
          {drop.value}
        </div>
      ))}
    </div>
  );
};

// Main Landing Page
const LandingPage = () => {
  const navigate = useNavigate();
  const [systemReady, setSystemReady] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate load time
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
      <ParticleTrail />
      <TechIconsCloud />
      <GlowingOrbs />
      <NeuralWeb />
      <CyberHUD />
      <DigitalRain />
      <AudioVisualizer />
      
      {!systemReady && <RotatingCube />}
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <AnimatePresence>
          {!systemReady && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <HologramTerminal onComplete={() => setSystemReady(true)} />
            </motion.div>
          )}
        </AnimatePresence>

        {systemReady && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center space-y-8 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/10"
          >
            <motion.div
              className="relative inline-block"
              animate={{ 
                filter: ["drop-shadow(0 0 10px #00ffff)", "drop-shadow(0 0 30px #00ffff)", "drop-shadow(0 0 10px #00ffff)"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                DARSHAN JAIN
              </h1>
              
              {/* Glitch effect */}
              <motion.div
                className="absolute inset-0 text-4xl md:text-6xl lg:text-7xl font-bold text-cyan-400 opacity-0"
                animate={{ 
                  x: [0, -10, 5, 0],
                  opacity: [0, 0.5, 0],
                  skewX: [0, -20, 0]
                }}
                transition={{ 
                  duration: 0.2,
                  repeat: Infinity,
                  repeatDelay: 5
                }}
              >
                DARSHAN JAIN
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-cyan-300 text-lg md:text-xl"
            >
              <span className="typing-text">Developer • Innovator • Tech Enthusiast</span>
            </motion.div>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.button
                onClick={() => navigate('/home')}
                className="cyber-button px-8 py-3 bg-cyan-500/10 backdrop-blur-md border border-cyan-400/30 text-cyan-400 font-mono relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px #00ffff"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="relative z-10">INITIALIZE SYSTEM</span>
                <motion.div 
                  className="absolute inset-0 bg-cyan-400/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              
            </motion.div>
            
            <motion.div
              className="text-white/70 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <p className="mb-4">
                <motion.span
                  animate={{ 
                    textShadow: ["0 0 0px #00ffff", "0 0 10px #00ffff", "0 0 0px #00ffff"] 
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-cyan-400"
                >
                  &lt;Develop&gt;
                </motion.span> 
                Specialized in creating innovative web and mobile applications with cutting-edge technologies
                <motion.span
                  animate={{ 
                    textShadow: ["0 0 0px #00ffff", "0 0 10px #00ffff", "0 0 0px #00ffff"] 
                  }}
                  transition={{ duration: 3, delay: 1, repeat: Infinity }}
                  className="text-cyan-400"
                >
                  &lt;/Develop&gt;
                </motion.span>
              </p>
              <p>
                <motion.span
                  animate={{ 
                    textShadow: ["0 0 0px #a855f7", "0 0 10px #a855f7", "0 0 0px #a855f7"] 
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-purple-400"
                >
                  &lt;Innovate&gt;
                </motion.span> 
                Leveraging AI, machine learning, and modern frameworks to solve complex problems and enhance user experiences
                <motion.span
                  animate={{ 
                    textShadow: ["0 0 0px #a855f7", "0 0 10px #a855f7", "0 0 0px #a855f7"] 
                  }}
                  transition={{ duration: 3, delay: 1, repeat: Infinity }}
                  className="text-purple-400"
                >
                  &lt;/Innovate&gt;
                </motion.span>
              </p>
            </motion.div>
            
            {/* Social Links */}
            <motion.div
              className="flex justify-center gap-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
              
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: -5 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </motion.a>
              
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </motion.a>
              
              <motion.a
                href="mailto:contact@example.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: -5 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </div>
      
      {/* Footer with cyberpunk style */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 py-3 px-4 bg-black/20 backdrop-blur-sm border-t border-cyan-500/10 text-center text-xs md:text-sm text-cyan-500/70"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <span>© {new Date().getFullYear()} Darshan Jain</span>
          <div className="flex items-center gap-1">
            <motion.div 
              className="w-2 h-2 rounded-full bg-cyan-400"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>SYSTEM STATUS: ONLINE</span>
          </div>
          <div className="hidden sm:block">
            <div className="cyber-version">v2.5.1_ALPHA</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;