import React from 'react';
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

const languages = [
  { name: 'HTML', logo: htmlLogo },
  { name: 'CSS', logo: cssLogo },
  { name: 'JavaScript', logo: jsLogo },
  { name: 'React JS', logo: reactLogo },
  { name: 'Node JS', logo: nodejsLogo },
  { name: 'Python', logo: pythonLogo },
  { name: 'Java', logo: javaLogo },
  { name: 'C', logo: cLogo },
  { name: 'C++', logo: cppLogo },
  { name: 'Express JS', logo: expressjsLogo },
  { name: 'MongoDB', logo: mongodbLogo },
  { name: 'SQL', logo: sql },
];

export default function Languages() {
  return (
    <div className="min-h-screen bg-gray-950 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-[#00FFFF] text-center mb-8">
          What I Know?
        </h2>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {languages.map((language, index) => (
            <div
              key={language.name}
              className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100} // Stagger animations
            >
              <img
                src={language.logo}
                alt={language.name}
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-white text-xl">{language.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
