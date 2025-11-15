import React, { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Determine current section
      const sections = ['home', 'about-me', 'skills', 'projects', 'publications', 'awards', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setCurrentSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Color based on section
  const getColor = () => {
    switch(currentSection) {
      case 'home': return 'bg-gradient-to-r from-blue-500 to-purple-500';
      case 'about-me': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'skills': return 'bg-gradient-to-r from-pink-500 to-red-500';
      case 'projects': return 'bg-gradient-to-r from-red-500 to-orange-500';
      case 'publications': return 'bg-gradient-to-r from-orange-500 to-yellow-500';
      case 'awards': return 'bg-gradient-to-r from-yellow-500 to-green-500';
      case 'contact': return 'bg-gradient-to-r from-green-500 to-blue-500';
      default: return 'bg-gradient-to-r from-blue-500 to-purple-500';
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200 dark:bg-gray-800">
      <div
        className={`h-full transition-all duration-300 ${getColor()}`}
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Section indicator */}
      {currentSection && (
        <div className="absolute top-2 right-4 text-xs font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 px-3 py-1 rounded-full shadow-md border border-gray-200 dark:border-gray-700 capitalize">
          {currentSection.replace('-', ' ')}
        </div>
      )}
    </div>
  );
}
