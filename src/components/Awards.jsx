import React, { useState, useEffect } from "react";

// Awards data
const awards = [
  {
    title: "🏆 Hackathon Winner - Industry Domain",
    issuer: "Codeissance, Thadomal Shahani Engineering College",
    date: "2025",
    description: "Won the Hackathon in the Industry Domain at Codeissance, a prestigious tech event organized by Thadomal Shahani Engineering College. Secured first place for developing LeadVault, an enterprise-grade lead management system featuring Two-Factor Authentication (2FA), role-based access control (RBAC), and Progressive Web App (PWA) capabilities with offline functionality. The project impressed judges with its robust security architecture, AI-powered lead scoring engine, real-time analytics dashboard, and scalable design suitable for both startups and enterprise-level organizations. LeadVault demonstrated excellence in solving real-world business challenges through innovative technology solutions, automated workflows, and comprehensive data protection measures that set new standards in secure lead management systems.",
    certificateUrl: "https://go.screenpal.com/watch/cTlniwnqdcl",
    projectName: "LeadVault",
    projectLink: "https://github.com/AnishBandal/codeissance-2025",
    badges: ["🏆 Winner", "💼 Industry Domain"]
  },
  {
    title: "Excellence in Academics",
    issuer: "Vidyalankar Polytechnic",
    date: "2023",
    description: "Awarded for achieving the highest percentage in Diploma in Information Technology at Vidyalankar Polytechnic. Semester 3rd - 87.63%, Semester 4th - 88.88%, Semester 5th - 91.29%.",
    certificateUrl: "https://go.screenpal.com/watch/cTlniFnqJRC",
    badges: ["📚 Academic Excellence"]
  },
  {
    title: "Runner Up Award in College Project Exhibition",
    issuer: "Vidyalankar Polytechnic",
    date: "Mar 2024",
    description: "Awarded Runner ups place in the College Project Exhibition for the innovative project \"Bridging the Gap in the Startup Ecosystem.\" This project developed a platform fostering collaboration between public users, startups, and investors. Key features included AI-powered chatbot assistance, user testing opportunities, and mentorship programs. This award recognizes the project's contribution to enhancing communication, innovation, and entrepreneurial opportunities within the startup ecosystem.",
    certificateUrl: "https://go.screenpal.com/watch/cTlniFnqJRC",
    projectName: "INNOVEST",
    projectLink: "https://www.ijmrsetm.com/admin/img/5_INNOVEST.pdf",
    badges: ["🥈 Runner Up", "🚀 Innovation"]
  },
  {
    title: "🌟 Tantravihar Tech Fest - Project Showcase",
    issuer: "State-Level Tech Fest",
    date: "2025",
    description: "Presented Attendify, a revolutionary smart attendance management system at Tantravihar state-level tech fest. The project eliminates proxy attendance through Unique Device ID verification, facial recognition, and one-tap BLE scanning. Opened doors to implementation opportunities at broader levels and received amazing feedback from industry professionals.",
    certificateUrl: "https://www.linkedin.com/posts/darshanjain912_attendify-tantravihar-techfest-activity-7319597990594146306-4Ms8",
    projectName: "Attendify",
    projectLink: "https://www.linkedin.com/posts/darshanjain912_attendify-tantravihar-techfest-activity-7319597990594146306-4Ms8",
    badges: ["🌟 Featured", "🔐 Anti-Proxy System"]
  }
];

export default function Awards() {
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [hoveredAward, setHoveredAward] = useState(null);
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

    const awardsSection = document.getElementById('awards');
    if (awardsSection) observer.observe(awardsSection);

    return () => observer.disconnect();
  }, []);

  const toggleDescription = (index) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const openCertificate = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section id="awards" className="min-h-screen bg-white py-20 relative overflow-hidden">
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
            Honors & Awards
          </h2>
          <div className="w-16 h-0.5 bg-black mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Recognition for academic excellence and innovative contributions
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms` 
              }}
              onMouseEnter={() => setHoveredAward(index)}
              onMouseLeave={() => setHoveredAward(null)}
            >
              <div className="h-full bg-white border border-gray-100 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-gray-200 hover:-translate-y-1">
                {/* Award Header */}
                <div className="p-8 pb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-medium text-gray-900 group-hover:text-gray-600 transition-colors duration-300 mb-2">
                        {award.title}
                      </h3>
                      
                      {/* Badges */}
                      {award.badges && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {award.badges.map((badge, badgeIndex) => (
                            <span 
                              key={badgeIndex}
                              className="px-2 py-1 text-xs font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 rounded-full shadow-sm"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-sm text-gray-600 px-3 py-1 bg-gray-50 rounded-full border border-gray-100">
                          {award.issuer}
                        </span>
                        <span className="text-sm text-gray-500">
                          {award.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {expandedDescriptions[index] 
                        ? award.description 
                        : `${award.description.substring(0, 200)}...`}
                    </p>
                    
                    {/* Project Link if available */}
                    {award.projectName && award.projectLink && (
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <p className="text-xs text-gray-600 mb-1">Winning Project:</p>
                        <a 
                          href={award.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-2 transition-colors"
                        >
                          {award.projectName}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <button
                      className="px-4 py-2 text-sm text-gray-600 bg-gray-50 rounded-sm border border-gray-100 transition-all duration-300 hover:bg-gray-100 hover:border-gray-200"
                      onClick={() => toggleDescription(index)}
                    >
                      {expandedDescriptions[index] ? "Read Less" : "Read More"}
                    </button>
                    
                    <button
                      className="px-4 py-2 text-sm text-white bg-gray-900 rounded-sm transition-all duration-300 hover:bg-gray-700 hover:scale-105"
                      onClick={() => openCertificate(award.certificateUrl)}
                    >
                      View Certificate
                    </button>
                    
                    {award.projectLink && (
                      <a
                        href={award.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm text-blue-600 bg-blue-50 rounded-sm border border-blue-200 transition-all duration-300 hover:bg-blue-100 hover:border-blue-300 flex items-center gap-2"
                      >
                        View Project
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Bottom indicator */}
                <div className={`h-0.5 bg-black transition-all duration-500 ${
                  hoveredAward === index ? 'w-full' : 'w-0'
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
    </section>
  );
}