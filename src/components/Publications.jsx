import React, { useState, useEffect } from "react";

// Publications data with your INNOVEST paper
const publications = [
  {
    title: "INNOVEST: Bridging the Gap in the Startup Ecosystem",
    journal: "IJMRSETM",
    date: "Apr 4, 2024",
    link: "https://www.ijmrsetm.com/admin/img/5_INNOVEST.pdf",
    description: "This research explores the development of an innovative platform that connects investors, startups, and the general public within the startup ecosystem. The platform fosters collaboration, innovation, and job creation by enabling public users to engage in projects and product testing with startups.",
    img: "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Startup Ecosystem", "AI", "Innovation Platform"]
  }
];

export default function Publications() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPublication, setHoveredPublication] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const publicationsSection = document.getElementById('publications');
    if (publicationsSection) observer.observe(publicationsSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="publications" className="min-h-screen bg-gray-50 py-20 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(0deg, black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)`,
          backgroundSize: '25px 25px'
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
            Publications
          </h2>
          <div className="w-16 h-0.5 bg-black mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Research contributions and academic publications
          </p>
        </div>

        {/* Publications Grid */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            {publications.map((publication, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms` 
                }}
                onMouseEnter={() => setHoveredPublication(index)}
                onMouseLeave={() => setHoveredPublication(null)}
                onClick={() => window.open(publication.link, '_blank')}
              >
                <div className="bg-white border border-gray-100 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-gray-200 hover:-translate-y-2">
                  {/* Publication Image */}
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img
                      src={publication.img}
                      alt={publication.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                      hoveredPublication === index ? 'opacity-20' : 'opacity-0'
                    }`} />
                    
                    {/* Read Paper Button */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                      hoveredPublication === index ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="px-6 py-2 bg-white text-gray-900 text-sm font-medium rounded-sm transform transition-all duration-300 hover:scale-105 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Read Paper
                      </div>
                    </div>
                  </div>

                  {/* Publication Info */}
                  <div className="p-8">
                    <div className="mb-4">
                      <h3 className="text-2xl font-medium text-gray-900 mb-2 group-hover:text-gray-600 transition-colors duration-300 leading-tight">
                        {publication.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500 space-x-3">
                        <span className="font-medium">{publication.journal}</span>
                        <span>•</span>
                        <span>{publication.date}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                      {publication.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {publication.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="px-3 py-1 text-sm text-gray-600 bg-gray-50 rounded-full border border-gray-100 transition-all duration-300 hover:bg-gray-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Publication Link */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        View Full Publication
                      </div>
                    </div>
                  </div>

                  {/* Bottom indicator */}
                  <div className={`h-0.5 bg-black transition-all duration-500 ${
                    hoveredPublication === index ? 'w-full' : 'w-0'
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note for future publications */}
        <div 
          className={`text-center mt-12 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-gray-500 text-sm">
            More publications coming soon...
          </p>
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