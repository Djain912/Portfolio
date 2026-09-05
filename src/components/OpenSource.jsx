import React, { useState, useEffect } from "react";

// Open source contributions data
const contributions = [
  {
    project: "PinchTab",
    role: "Open Source Contributor",
    badge: "Private Organization Member",
    projectLink: "https://github.com/pinchtab",
    githubLink: "https://github.com/pinchtab",
    tagline: "Browser automation for AI agents — programmatic Chrome control over an HTTP API",
    img: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Contributed to PinchTab, a Go-based browser automation tool that gives AI agents and LLM-driven programs full programmatic control over Chrome through an HTTP API — used for scraping, automated testing, and agent-driven workflows.",
    fullDescription: `PinchTab is a Go-based browser automation tool that exposes Chrome to AI agents and LLM-driven programs through a clean HTTP API. Instead of each agent shipping its own brittle browser-driver integration, PinchTab provides a single, language-agnostic surface for navigating pages, reading the DOM, interacting with elements, and extracting content — making it a practical backbone for scraping pipelines, automated end-to-end testing, and autonomous agent workflows.

Working in a Go codebase built around browser internals and concurrent session handling meant reading and reasoning about unfamiliar production code before writing a single line — tracing request flow from the HTTP layer down to the browser protocol, and understanding the invariants the maintainers cared about.

Contributions spanned both bug fixes and feature additions, submitted as multiple pull requests through standard Git-based workflows: branching, focused commits, and pull requests scoped small enough to review properly. Each PR went through maintainer code review, which meant defending design decisions, responding to feedback, and iterating until the change met the project's standards rather than merely working.

Sustained, quality contributions and consistent collaboration with maintainers led to selection as a private organization member — an access level granted on the basis of demonstrated reliability and code quality, not applied for.

This work is a different discipline from greenfield development: the constraint is not "what should this be" but "how does this fit what already exists." It built practical experience in reading large unfamiliar codebases, matching an established project's conventions and idiom, communicating asynchronously with maintainers across time zones, and shipping changes into software other people depend on.`,
    highlights: [
      "Submitted multiple pull requests covering bug fixes and feature additions",
      "Participated in code reviews and iterated on maintainer feedback",
      "Collaborated with maintainers through Git-based workflows",
      "Selected as a private organization member for consistent, quality contributions"
    ],
    technologies: ["Go", "HTTP API", "Chrome DevTools Protocol", "Browser Automation", "Git/GitHub", "LLM Agents"]
  }
];

export default function OpenSource() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    // Guard: if IntersectionObserver is unavailable, reveal the content
    // immediately rather than leaving it stuck at opacity-0 forever.
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const openSourceSection = document.getElementById('open-source');
    if (openSourceSection) observer.observe(openSourceSection);
    else setIsVisible(true);

    return () => observer.disconnect();
  }, []);

  const toggleExpanded = (index) => {
    setExpanded(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="open-source" className="bg-gray-50 section-pad relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
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
          <h2 className="section-title mb-4">
            Open Source
          </h2>
          <div className="section-rule" />
          <p className="section-lede">
            Contributing to tools the developer community depends on
          </p>
        </div>

        {/* Contributions */}
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {contributions.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="h-full bg-white border border-gray-200/70 rounded-2xl overflow-hidden shadow-card transition-all duration-500 ease-out-expo hover:shadow-card-hover hover:border-gray-300/70 hover:-translate-y-1 group">
                {/* Card Header */}
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <img
                    src={item.img}
                    alt={item.project}
                    className="w-full h-full object-cover opacity-25 group-hover:opacity-35 transition-opacity duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-4">
                      <a
                        href={item.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-fluid-h2 font-display font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300 flex items-center gap-2 justify-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {item.project}
                        <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <p className="text-xs text-gray-600 mt-2 max-w-md mx-auto">{item.tagline}</p>
                    </div>
                  </div>

                  {/* Member Badge */}
                  {item.badge && (
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 text-xs font-semibold bg-gray-900 text-white rounded-full shadow-md flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 1l3.09 6.26L22 8.27l-5 4.87 1.18 6.88L12 16.77l-6.18 3.25L7 13.14 2 8.27l6.91-1.01L12 1z" />
                        </svg>
                        {item.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8">
                  {/* Role */}
                  <div className="mb-4">
                    <h3 className="text-fluid-h3 font-display font-medium text-gray-900 mb-2">
                      {item.role}
                    </h3>
                    <span className="px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full border border-blue-100">
                      Open Source
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-fluid-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Full Description */}
                  {expanded[index] && (
                    <div className="mb-4 animate-fadeIn">
                      <div className="text-gray-600 text-fluid-sm leading-relaxed space-y-3">
                        {item.fullDescription.split('\n\n').map((para, paraIndex) => (
                          <p key={paraIndex}>{para}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Highlights */}
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-gray-900 mb-2">Contribution Highlights:</h5>
                    <ul className="space-y-1">
                      {item.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start gap-2 text-xs text-gray-600">
                          <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h5 className="text-xs font-semibold text-gray-700 mb-2">Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs text-gray-700 bg-gray-50 rounded-full border border-gray-100 hover:bg-gray-100 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => toggleExpanded(index)}
                      className="text-blue-600 hover:text-blue-700 text-fluid-sm font-medium inline-flex items-center gap-1 py-2 -my-2 min-h-[40px] transition-all duration-300 hover:gap-2"
                    >
                      {expanded[index] ? 'Show Less' : 'Read More'}
                      <svg className={`w-4 h-4 transition-transform duration-300 ${expanded[index] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {item.githubLink && (
                      <a
                        href={item.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-md"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View Organization
                      </a>
                    )}
                  </div>
                </div>

                {/* Bottom indicator */}
                <div className={`h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ${
                  hoveredIndex === index ? 'w-full' : 'w-0'
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

      {/* SEO Content - Hidden visually but available to search engines */}
      <div className="sr-only">
        <h2>Darshan Jain - Open Source Contributions</h2>
        <p>
          Darshan Jain is an open source contributor to PinchTab, a Go-based browser automation tool that gives
          AI agents and LLM-driven programs programmatic control over Chrome via an HTTP API, used for web scraping,
          automated testing, and agent-driven workflows. He has submitted multiple pull requests covering bug fixes
          and feature additions, participated in code reviews, and collaborated with maintainers through Git-based
          workflows. He was selected as a private organization member of PinchTab for consistent, quality contributions.
        </p>
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
