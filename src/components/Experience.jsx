import React, { useState, useEffect } from "react";

// Experience data
const experiences = [
  {
    position: "Full Stack Developer Intern",
    company: "ZootechX",
    type: "Internship",
    duration: "Sep 2025 - Present",
    location: "Mumbai, India",
    workMode: "Hybrid",
    current: true,
    logo: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
    companyLink: "https://www.zootechx.com/",
    description: "Building AI-powered solutions for E-commerce, Real Estate, and ERP systems while leading client onboarding and digital transformation initiatives.",
    technologies: ["React", "Node.js", "Python", "AI/ML", "TTS/STT", "MongoDB", "Express"],
    responsibilities: [
      "Engineered AI-powered chatbots for E-commerce and Real Estate, integrating TTS (Text-to-speech)/STT (Speech-to-text) and gamified UI features like 'Spin the Wheel' and product comparison tools, boosting user engagement by 30%",
      "Developed an ERP for a Coca-Cola Distributor, automating sales, dispatch, settlement, and payroll, reducing manual processes by 40% through digital transformation",
      "Utilized Python for PDF bill extraction and structured data parsing, cutting reporting time by 50% and improving accuracy",
      "Led client onboarding, overseeing requirements, architecture, and deployment independently"
    ]
  },
  {
    position: "Web Developer Intern",
    company: "Elightlabs",
    type: "Internship",
    duration: "Jun 2023 - Jul 2023",
    period: "2 mos",
    location: "Mumbai, India",
    workMode: "Remote",
    current: false,
    logo: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
    companyLink: "https://in.linkedin.com/company/elightlabs",
    certificateUrl: "https://go.screenpal.com/watch/cTlniCnqdnr",
    description: "Designed and developed dynamic, responsive web applications using modern technologies with RESTful API integration.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "RESTful APIs"],
    responsibilities: [
      "Designed and developed dynamic, responsive web applications using modern technologies",
      "Integrated RESTful APIs to enhance functionality and streamline data flow",
      "Ensured seamless cross-device user experiences with responsive design practices",
      "Collaborated effectively in a remote work environment"
    ]
  }
];

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredExperience, setHoveredExperience] = useState(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const experienceSection = document.getElementById('experience');
    if (experienceSection) observer.observe(experienceSection);

    return () => observer.disconnect();
  }, []);

  const toggleDescription = (index) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="experience" className="min-h-screen bg-white py-20 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
          backgroundSize: '30px 30px'
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
            Work Experience
          </h2>
          <div className="w-16 h-0.5 bg-black mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional journey and industry experience
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms` 
                }}
                onMouseEnter={() => setHoveredExperience(index)}
                onMouseLeave={() => setHoveredExperience(null)}
              >
                <div className={`md:flex md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white border border-gray-100 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-gray-200 hover:-translate-y-1 group">
                      {/* Card Header */}
                      <div className="relative h-32 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            {exp.companyLink ? (
                              <a 
                                href={exp.companyLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl sm:text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300 flex items-center gap-2 justify-center"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {exp.company}
                                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            ) : (
                              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                                {exp.company}
                              </h3>
                            )}
                            <p className="text-xs text-gray-600 mt-1">{exp.workMode}</p>
                          </div>
                        </div>
                        
                        {/* Current Badge */}
                        {exp.current && (
                          <div className="absolute top-3 right-3">
                            <span className="px-3 py-1 text-xs font-semibold bg-green-500 text-white rounded-full shadow-md animate-pulse">
                              Current
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Card Content */}
                      <div className="p-6">
                        {/* Position & Type */}
                        <div className="mb-4">
                          <h4 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">
                            {exp.position}
                          </h4>
                          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                            <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-100">
                              {exp.type}
                            </span>
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {exp.location}
                            </span>
                          </div>
                        </div>

                        {/* Duration */}
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{exp.duration}</span>
                          {exp.period && (
                            <>
                              <span className="text-gray-400">•</span>
                              <span>{exp.period}</span>
                            </>
                          )}
                        </div>

                        {/* Description */}
                        {exp.description && (
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            {exp.description}
                          </p>
                        )}

                        {/* Responsibilities */}
                        {expandedDescriptions[index] && exp.responsibilities && exp.responsibilities.length > 0 && (
                          <div className="mb-4 animate-fadeIn">
                            <h5 className="text-sm font-semibold text-gray-900 mb-2">Key Responsibilities:</h5>
                            <ul className="space-y-1">
                              {exp.responsibilities.map((resp, respIndex) => (
                                <li key={respIndex} className="flex items-start gap-2 text-xs text-gray-600">
                                  <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Technologies */}
                        {exp.technologies && exp.technologies.length > 0 && (
                          <div className="mb-4">
                            <h5 className="text-xs font-semibold text-gray-700 mb-2">Technologies:</h5>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, techIndex) => (
                                <span 
                                  key={techIndex} 
                                  className="px-2 py-1 text-xs text-gray-700 bg-gray-50 rounded-full border border-gray-100 hover:bg-gray-100 transition-colors"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Read More Button - Only show if there are responsibilities to show */}
                        {exp.responsibilities && exp.responsibilities.length > 0 && (
                          <button
                            onClick={() => toggleDescription(index)}
                            className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium flex items-center gap-1 transition-all duration-300 hover:gap-2"
                          >
                            {expandedDescriptions[index] ? 'Show Less' : 'Read More'}
                            <svg className={`w-4 h-4 transition-transform duration-300 ${expandedDescriptions[index] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        )}

                        {/* Certificate Button - Only show if certificateUrl exists */}
                        {exp.certificateUrl && (
                          <a
                            href={exp.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-md"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                            View Experience Certificate
                          </a>
                        )}
                      </div>

                      {/* Bottom indicator */}
                      <div className={`h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ${
                        hoveredExperience === index ? 'w-full' : 'w-0'
                      }`} />
                    </div>
                  </div>

                  {/* Timeline Dot - Hidden on mobile */}
                  <div className="hidden md:flex md:w-2/12 justify-center items-center">
                    <div className={`w-6 h-6 rounded-full border-4 transition-all duration-500 ${
                      hoveredExperience === index 
                        ? 'bg-blue-500 border-blue-200 scale-125' 
                        : exp.current 
                          ? 'bg-green-500 border-green-200' 
                          : 'bg-white border-gray-300'
                    }`}>
                      {exp.current && (
                        <div className="w-full h-full rounded-full bg-green-500 animate-ping opacity-75" />
                      )}
                    </div>
                  </div>

                  {/* Empty Space for alternating layout */}
                  <div className="hidden md:block md:w-5/12" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decorative line */}
        <div 
          className={`mt-20 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
        />
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
