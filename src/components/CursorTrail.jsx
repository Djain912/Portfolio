import React, { useEffect, useState } from 'react';

export default function CursorTrail() {
  const [particles, setParticles] = useState([]);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    let particleId = 0;

    const handleMouseMove = (e) => {
      const newParticle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 8 + 4,
        life: 1,
      };

      setParticles(prev => [...prev, newParticle].slice(-20)); // Keep last 20 particles
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop) return;

    const interval = setInterval(() => {
      setParticles(prev =>
        prev
          .map(particle => ({
            ...particle,
            life: particle.life - 0.02,
          }))
          .filter(particle => particle.life > 0)
      );
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.life * 0.6,
            transform: `translate(-50%, -50%) scale(${particle.life})`,
            transition: 'opacity 0.3s, transform 0.3s',
          }}
        />
      ))}
    </div>
  );
}
