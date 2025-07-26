import React, { useState, useEffect } from "react";

// Awards data
const awards = [
  {
    title: "Excellence in Academics",
    issuer: "Vidyalankar Polytechnic",
    date: "2023",
    description: "Awarded for achieving the highest percentage in Diploma in Information Technology at Vidyalankar Polytechnic. Semester 3rd - 87.63%, Semester 4th - 88.88%, Semester 5th - 91.29%.",
    certificateUrl: "#"
  },
  {
    title: "Runner Up Award in College Project Exhibition",
    issuer: "Vidyalankar Polytechnic",
    date: "Mar 2024",
    description: "Awarded Runner ups place in the College Project Exhibition for the innovative project \"Bridging the Gap in the Startup Ecosystem.\" This project developed a platform fostering collaboration between public users, startups, and investors. Key features included AI-powered chatbot assistance, user testing opportunities, and mentorship programs. This award recognizes the project's contribution to enhancing communication, innovation, and entrepreneurial opportunities within the startup ecosystem.",
    certificateUrl: "https://imgcdn.dev/i/Yj6B5T"
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
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
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