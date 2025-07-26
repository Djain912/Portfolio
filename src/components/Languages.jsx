import React, { useState, useEffect } from 'react';

// Placeholder logos - replace these with your actual logo imports
const htmlLogo = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg';
const cssLogo = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg';
const jsLogo = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
const reactLogo = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg';
const nodejsLogo = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg';
const pythonLogo = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg';
const javaLogo = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg';
const cLogo = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg';
const cppLogo = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg';
const expressjsLogo = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg';
const mongodbLogo = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg';
const sqlLogo = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg';
const reactNativeLogo = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg';
const flutterLogo = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg';

// Define skill categories with logos
const skills = [
  { 
    name: 'HTML', 
    logo: htmlLogo,
    category: 'Frontend'
  },
  { 
    name: 'CSS', 
    logo: cssLogo,
    category: 'Frontend'
  },
  { 
    name: 'JavaScript', 
    logo: jsLogo,
    category: 'Frontend'
  },
  { 
    name: 'React', 
    logo: reactLogo,
    category: 'Frontend'
  },
  { 
    name: 'React Native', 
    logo: reactNativeLogo,
    category: 'Mobile'
  },
  { 
    name: 'Flutter', 
    logo: flutterLogo,
    category: 'Mobile'
  },
  { 
    name: 'Node.js', 
    logo: nodejsLogo,
    category: 'Backend'
  },
  { 
    name: 'Express', 
    logo: expressjsLogo,
    category: 'Backend'
  },
  { 
    name: 'MongoDB', 
    logo: mongodbLogo,
    category: 'Database'
  },
  { 
    name: 'SQL', 
    logo: sqlLogo,
    category: 'Database'
  },
  { 
    name: 'Python', 
    logo: pythonLogo,
    category: 'Programming'
  },
  { 
    name: 'Java', 
    logo: javaLogo,
    category: 'Programming'
  },
  { 
    name: 'C', 
    logo: cLogo,
    category: 'Programming'
  },
  { 
    name: 'C++', 
    logo: cppLogo,
    category: 'Programming'
  },
];

const categories = ['All', ...new Set(skills.map(skill => skill.category))];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) observer.observe(skillsSection);

    return () => observer.disconnect();
  }, []);

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <div id="skills" className="min-h-screen bg-gray-50 py-20 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(45deg, black 1px, transparent 1px), linear-gradient(-45deg, black 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative">
        {/* Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 tracking-tight mb-4">
            Skills
          </h2>
          <div className="w-16 h-0.5 bg-black mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Technologies I've mastered throughout my development journey.
          </p>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            These are the tools I’ve mastered... and now occasionally supervise while AI does the real work 😁.
          </p>
        </div>

        {/* Category Filter */}
        <div 
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'text-gray-900 border-b-2 border-black'
                  : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div 
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group cursor-default"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{ 
                transitionDelay: `${index * 50}ms` 
              }}
            >
              <div className="relative p-6 bg-white border border-gray-100 rounded-lg transition-all duration-300 hover:shadow-lg hover:border-gray-200 hover:-translate-y-1">
                {/* Skill Logo */}
                <div className="w-12 h-12 mx-auto mb-3 p-2 bg-gray-50 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-gray-100 group-hover:scale-110">
                  <img 
                    src={skill.logo} 
                    alt={skill.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                
                {/* Skill Name */}
                <h3 className="text-center text-sm font-medium text-gray-900 mb-1">
                  {skill.name}
                </h3>
                
                {/* Category */}
                <p className="text-center text-xs text-gray-500">
                  {skill.category}
                </p>
                
                {/* Hover indicator */}
                <div className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ${
                  hoveredSkill === skill.name ? 'w-full' : 'w-0'
                }`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div 
          className={`mt-20 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
        />
      </div>
    </div>
  );
}