import React, { useState } from 'react';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/social.png';
import jsLogo from '../assets/js.png';
import reactLogo from '../assets/physics.png';
import nodejsLogo from '../assets/programing.png';
import pythonLogo from '../assets/python.png';
import javaLogo from '../assets/java.png';
import cLogo from '../assets/letter-c.png';
import cppLogo from '../assets/c-.png';
import expressjsLogo from '../assets/express-js.png';
import mongodbLogo from '../assets/mongo.svg';
import sql from '../assets/sql.svg';

// Define skill categories
const skills = [
  { 
    name: 'HTML', 
    logo: htmlLogo, 
    category: 'Frontend',
    proficiency: 95,
    color: 'from-orange-500 to-red-500',
    description: 'Semantic markup, accessibility, SEO optimization'
  },
  { 
    name: 'CSS', 
    logo: cssLogo, 
    category: 'Frontend',
    proficiency: 90,
    color: 'from-blue-500 to-purple-500',
    description: 'Responsive design, animations, Flexbox/Grid'
  },
  { 
    name: 'JavaScript', 
    logo: jsLogo, 
    category: 'Frontend',
    proficiency: 88,
    color: 'from-yellow-400 to-yellow-600',
    description: 'ES6+, DOM manipulation, async programming'
  },
  { 
    name: 'React JS', 
    logo: reactLogo, 
    category: 'Frontend',
    proficiency: 92,
    color: 'from-cyan-400 to-blue-500',
    description: 'Hooks, Context API, Redux, Next.js'
  },
  { 
    name: 'Node JS', 
    logo: nodejsLogo, 
    category: 'Backend',
    proficiency: 85,
    color: 'from-green-500 to-emerald-600',
    description: 'RESTful APIs, middleware, authentication'
  },
  { 
    name: 'Express JS', 
    logo: expressjsLogo, 
    category: 'Backend',
    proficiency: 83,
    color: 'from-gray-600 to-gray-800',
    description: 'Routing, middleware, API design'
  },
  { 
    name: 'MongoDB', 
    logo: mongodbLogo, 
    category: 'Database',
    proficiency: 80,
    color: 'from-green-600 to-green-800',
    description: 'Schema design, aggregation, indexing'
  },
  { 
    name: 'SQL', 
    logo: sql, 
    category: 'Database',
    proficiency: 78,
    color: 'from-blue-600 to-blue-800',
    description: 'Queries, joins, database design'
  },
  { 
    name: 'Python', 
    logo: pythonLogo, 
    category: 'Programming',
    proficiency: 75,
    color: 'from-blue-500 to-yellow-500',
    description: 'Data analysis, automation, web scraping'
  },
  { 
    name: 'Java', 
    logo: javaLogo, 
    category: 'Programming',
    proficiency: 70,
    color: 'from-red-500 to-orange-500',
    description: 'OOP, enterprise applications, Android'
  },
  { 
    name: 'C', 
    logo: cLogo, 
    category: 'Programming',
    proficiency: 65,
    color: 'from-blue-400 to-blue-600',
    description: 'Memory management, algorithms, system programming'
  },
  { 
    name: 'C++', 
    logo: cppLogo, 
    category: 'Programming',
    proficiency: 68,
    color: 'from-blue-500 to-blue-700',
    description: 'OOP, STL, game development basics'
  },
];

// Get unique categories
const categories = ['All', ...new Set(skills.map(skill => skill.category))];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Filter skills based on active category
  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <div id="skills" className="min-h-screen bg-gray-950 py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-blue-900/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="inline-block text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 relative">
            My Skills
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mt-6">
            A collection of technologies I've mastered throughout my journey as a developer.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold shadow-lg shadow-cyan-500/25'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="relative group"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300`}></div>
              <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl z-10">
                <div className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${skill.color} w-full transform origin-left transition-transform duration-1000 scale-x-0 group-hover:scale-x-100`}></div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="relative w-16 h-16 p-3 bg-gray-700/50 rounded-lg overflow-hidden">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-full h-full object-contain filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 rounded-lg"></div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-medium text-gray-400">{skill.category}</span>
                      <h3 className={`text-xl font-bold ${hoveredSkill === skill.name ? 'text-transparent bg-clip-text bg-gradient-to-r ' + skill.color : 'text-white'}`}>
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Proficiency bar */}
                  <div className="mt-4 mb-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">Proficiency</span>
                      <span className="text-gray-300 font-medium">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`} 
                        style={{ 
                          width: hoveredSkill === skill.name ? `${skill.proficiency}%` : '15%',
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Skill description */}
                  <p className="text-gray-400 text-sm mt-4 min-h-[40px]">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Radial gradient for background */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .bg-gradient-radial {
          background-image: radial-gradient(var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}