import React, { useState, useEffect } from "react";

// Sample projects data
const projects = [
  {
    title: "INNOVEST",
    subtitle: "Bridging the Gap in the Startup Ecosystem",
    link: "https://www.ijmrsetm.com/admin/img/5_INNOVEST.pdf",
    description: "An innovative platform for collaboration and investment connecting startups with investors using AI-powered features and real-time communication.",
    img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["React", "Node.js", "Express", "MongoDB", "AI/ML"],
    features: ["AI-powered chatbot", "Video conferencing", "Live streaming", "News aggregation"]
  },
  {
    title: "CodeItUp",
    subtitle: "Documenting Coding Experiences",
    link: "https://codeitupblogs.netlify.app/",
    description: "A full-stack platform for documenting coding experiences and sharing solutions for real-world challenges with rich content creation tools.",
    img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    features: ["Rich-text editor", "Newsletter integration", "Cross-platform accessibility"]
  },
  {
    title: "Pothole Detection & Reward System",
    subtitle: "AI-Powered Crowdsourced Road Maintenance",
    link: "https://www.linkedin.com/posts/darshanjain912_hackathon-reactnative-mongodb-activity-7319200712595243008-4fCt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmENlcBTBp6uSdk__MNZfa7Whe55gKXyi0",
    description: "React Native app enabling users to report potholes using AI/ML detection, rewarding verified reports with public transport credits.",
    img: "https://townsquare.media/site/696/files/2019/02/Potholes.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89",
    tags: ["React Native", "Node.js", "MongoDB", "AI/ML"],
    features: ["AI pothole detection", "Reward system", "Real-time tracking", "Official dashboard"]
  },
  {
    title: "Attendify",
    subtitle: "Smart Attendance Management System",
    link: "https://www.linkedin.com/posts/darshanjain912_attendify-tantravihar-techfest-activity-7319597990594146306-4Ms8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmENlcBTBp6uSdk__MNZfa7Whe55gKXyi0",
    description: "Flutter-based attendance system using BLE technology and dynamic QR codes to eliminate proxy attendance with advanced authentication.",
    img: "https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Flutter", "Firebase", "BLE", "QR Code"],
    features: ["Device ID verification", "BLE scanning", "Dynamic QR codes", "Server-side validation"]
  }
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const projectsSection = document.getElementById('projects');
    if (projectsSection) observer.observe(projectsSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="min-h-screen bg-white py-20 relative overflow-hidden">
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
            Projects
          </h2>
          <div className="w-16 h-0.5 bg-black mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my development skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms` 
              }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => window.open(project.link, '_blank')}
            >
              <div className="h-full bg-white border border-gray-100 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-gray-200 hover:-translate-y-2 flex flex-col">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                    hoveredProject === index ? 'opacity-20' : 'opacity-0'
                  }`} />
                  
                  {/* View Project Button */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                    hoveredProject === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="px-6 py-2 bg-white text-gray-900 text-sm font-medium rounded-sm transform transition-all duration-300 hover:scale-105">
                      View Project
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-3">
                    <h3 className="text-xl font-medium text-gray-900 group-hover:text-gray-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-sm text-gray-500 mt-1">{project.subtitle}</p>
                    )}
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  {project.features && (
                    <div className="mb-4">
                      <p className="text-xs font-medium text-gray-700 mb-2">Key Features:</p>
                      <div className="grid grid-cols-2 gap-1">
                        {project.features.slice(0, 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-xs text-gray-600">
                            <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1 text-xs text-gray-600 bg-gray-50 rounded-full border border-gray-100 transition-all duration-300 hover:bg-gray-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom indicator */}
                <div className={`h-0.5 bg-black transition-all duration-500 ${
                  hoveredProject === index ? 'w-full' : 'w-0'
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

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}