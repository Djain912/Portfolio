import React, { useState, useEffect } from "react";

// Sample projects data
const projects = [
  {
    title: "LeadVault 🏆",
    subtitle: "Secure Lead Management System - Hackathon Winner",
    link: "https://github.com/AnishBandal/codeissance-2025",
    githubLink: "https://github.com/AnishBandal/codeissance-2025",
    description: "🏆 Hackathon-winning enterprise-grade lead management system with Two-Factor Authentication, role-based access control, and PWA capabilities. Features offline lead creation, AI-powered lead scoring, and comprehensive security.",
    fullDescription: `LeadVault is an enterprise-grade lead management platform that revolutionizes how businesses handle their sales pipeline. Built with cutting-edge security features including Two-Factor Authentication (2FA) and role-based access control (RBAC), this hackathon-winning project ensures your sensitive business data remains protected.

The system features a Progressive Web App (PWA) architecture, enabling offline functionality for lead creation and management even without internet connectivity. Once back online, all data automatically syncs with the cloud, ensuring no lead is ever lost.

Our AI-powered lead scoring engine analyzes multiple data points to prioritize leads, helping sales teams focus on high-value opportunities. The intuitive dashboard provides real-time analytics, conversion tracking, and detailed reporting to optimize your sales strategy.

Key capabilities include: automated lead assignment, customizable workflows, email integration, mobile-responsive design, export functionality, and comprehensive audit logs. The platform was designed with scalability in mind, supporting teams from startups to enterprise-level organizations.`,
    img: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["React", "Node.js", "MongoDB", "TypeScript", "2FA", "PWA"],
    features: ["Two-Factor Authentication", "Role-Based Access Control", "Offline PWA", "AI Lead Scoring", "Real-time Analytics", "Automated Workflows"],
    badges: ["🏆 Winner", "🔐 Enterprise"],
    techStack: "React, Node.js, Express, MongoDB, TypeScript, Redis, JWT, Socket.io",
    team: "Anish Bandal, Team Members"
  },
  {
    title: "CivicConnect",
    subtitle: "Smart Civic Issue Reporting Platform - SIH 2025",
    link: "https://github.com/atharvagitaye/SIH-2025",
    githubLink: "https://github.com/atharvagitaye/SIH-2025",
    description: "Revolutionary civic engagement platform for Smart India Hackathon 2025. Features AI-powered issue detection, GPS tracking, real-time updates, and interactive dashboards for citizens to report infrastructure issues.",
    fullDescription: `CivicConnect is a revolutionary civic engagement platform developed for Smart India Hackathon 2025, designed to bridge the gap between citizens and local authorities. The platform empowers citizens to report infrastructure issues, track resolution progress, and contribute to building smarter, more responsive communities.

Using advanced AI and Machine Learning algorithms, CivicConnect automatically categorizes and prioritizes reported issues based on severity, location, and historical data. The computer vision module can detect potholes, broken streetlights, and other infrastructure problems from user-submitted photos, reducing manual classification time.

The mobile app features real-time GPS tracking, allowing users to submit geo-tagged reports with photos and descriptions. Citizens receive live status updates as authorities work on resolving issues. The admin dashboard provides comprehensive analytics, heat maps of problem areas, and resource allocation tools for municipal authorities.

Key features include: AI-powered image recognition, automatic issue categorization, priority-based ticketing system, real-time progress tracking, community voting on issues, multi-language support, offline report creation, and detailed analytics dashboard. The platform also includes gamification elements to encourage citizen participation, with reward points and achievement badges.

Built with scalability in mind, CivicConnect can serve cities of any size and integrates seamlessly with existing municipal management systems.`,
    img: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["React Native", "Expo", "Redux", "AI/ML", "Maps"],
    features: ["AI Issue Detection", "GPS Tracking", "Real-time Status", "Admin Dashboard", "Community Voting", "Gamification"],
    badges: ["🎯 SIH 2025", "🤖 AI-Powered"],
    techStack: "React Native, Expo, Redux, TensorFlow, Node.js, MongoDB, Google Maps API",
    team: "Atharva Gitaye, Team Members"
  },
  {
    title: "Python Typing Speed Test",
    subtitle: "Interactive Typing Practice Application",
    link: "https://github.com/Djain912/python-typing-speed-test",
    githubLink: "https://github.com/Djain912/python-typing-speed-test",
    description: "Modern typing speed test application with dynamic Wikipedia text, real-time performance tracking, light/dark mode, and detailed analytics. Track your WPM, accuracy, and high scores with motivational feedback.",
    fullDescription: `Python Typing Speed Test is an engaging desktop application designed to help users improve their typing speed and accuracy through practice with dynamic, real-world content. Unlike traditional typing tests with static text, this application fetches random articles from Wikipedia, providing fresh and interesting content for every practice session.

The application features a sleek, modern GUI built with Tkinter, offering both light and dark mode themes for comfortable practice in any lighting condition. Real-time performance metrics display your Words Per Minute (WPM) and accuracy percentage as you type, providing instant feedback on your progress.

The intelligent color-coding system highlights correct characters in green and incorrect ones in red, helping users identify and correct mistakes quickly. The application includes a comprehensive high score tracking system that saves your best performances locally, motivating continuous improvement.

Advanced features include: customizable test duration, difficulty levels, detailed performance analytics with graphs, keyboard shortcut support, error pattern analysis, practice history tracking, and motivational feedback messages based on performance. The app also includes typing lessons for beginners and advanced exercises for experienced typists.

Built with clean, maintainable Python code, the application demonstrates best practices in GUI development, API integration, and data persistence. It's perfect for students, professionals, and anyone looking to improve their typing skills.`,
    img: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Python", "Tkinter", "Wikipedia API", "GUI"],
    features: ["Dynamic Text", "Real-time WPM", "Light/Dark Mode", "High Score Tracking", "Error Analysis", "Progress Graphs"],
    badges: ["🐍 Python", "⚡ Interactive"],
    techStack: "Python 3.x, Tkinter, Wikipedia API, JSON",
    team: "Darshan Jain (Solo Project)"
  },
  {
    title: "INNOVEST",
    subtitle: "Bridging the Gap in the Startup Ecosystem",
    link: "https://www.ijmrsetm.com/admin/img/5_INNOVEST.pdf",
    description: "An innovative platform for collaboration and investment connecting startups with investors using AI-powered features and real-time communication.",
    fullDescription: `INNOVEST is a comprehensive startup ecosystem platform designed to bridge the gap between innovative startups and potential investors. Published in the International Journal of Multidisciplinary Research, this platform addresses the critical challenge of connecting entrepreneurs with the right funding sources.

The platform features an intelligent matchmaking system powered by AI that analyzes startup profiles, business models, and investor preferences to suggest optimal connections. Startups can create detailed profiles showcasing their products, team, market analysis, and funding requirements, while investors can browse, filter, and discover promising opportunities aligned with their investment thesis.

Real-time communication tools include integrated video conferencing for pitch meetings, live streaming capabilities for virtual demo days, and an AI-powered chatbot that answers common questions about fundraising, valuation, and investment processes. The platform aggregates relevant news, market trends, and industry insights to keep all users informed.

Key features include: AI-powered startup-investor matching, secure document sharing with NDA protection, pitch deck repository, funding stage tracking, investor relations management, deal pipeline management, analytics dashboard, networking events calendar, and expert advisor marketplace.

The platform also provides educational resources, legal templates, and fundraising guides to help startups navigate the complex investment landscape. With robust security measures and compliance with financial regulations, INNOVEST creates a trusted environment for both startups and investors.`,
    img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["React", "Node.js", "Express", "MongoDB", "AI/ML"],
    features: ["AI-powered chatbot", "Video conferencing", "Live streaming", "News aggregation", "Matchmaking Algorithm", "Secure Document Sharing"],
    badges: ["📄 Published"],
    techStack: "React, Node.js, Express, MongoDB, WebRTC, Socket.io, Natural Language Processing",
    team: "Research Team"
  },
  {
    title: "CodeItUp",
    subtitle: "Documenting Coding Experiences",
    link: "https://codeitupblogs.netlify.app/",
    description: "A full-stack platform for documenting coding experiences and sharing solutions for real-world challenges with rich content creation tools.",
    fullDescription: `CodeItUp is a modern blogging platform specifically designed for developers to document their coding journey, share technical insights, and build their personal brand. The platform combines the simplicity of Medium with developer-focused features like syntax highlighting and code snippet embedding.

The rich-text editor supports Markdown formatting, code blocks with syntax highlighting for multiple programming languages, embedded images and videos, and interactive elements. Writers can categorize posts by technology stack, difficulty level, and topics, making content easily discoverable by readers.

The platform includes a comprehensive newsletter system that automatically sends new posts to subscribers, helping developers build an engaged audience. Advanced analytics show post views, read time, engagement metrics, and reader demographics, providing valuable insights for content creators.

Key features include: Markdown-based rich text editor with live preview, syntax highlighting for 50+ programming languages, code snippet embedding from GitHub Gists, responsive design for all devices, SEO optimization, social media sharing, comment system with threading, bookmarking and reading lists, search functionality with filters, and author profile pages with portfolio showcase.

Built with performance in mind, CodeItUp features lazy loading, image optimization, and PWA capabilities for offline reading. The platform fosters a community where developers can learn from each other's experiences, discover solutions to common problems, and stay updated with the latest industry trends.`,
    img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    features: ["Rich-text editor", "Newsletter integration", "Cross-platform accessibility", "Syntax Highlighting", "SEO Optimization", "Analytics Dashboard"],
    badges: ["🚀 Live"],
    techStack: "React, Node.js, Express, MongoDB, Markdown, JWT, Nodemailer",
    team: "Darshan Jain, Contributors"
  },
//   {
//     title: "Pothole Detection & Reward System",
//     subtitle: "AI-Powered Crowdsourced Road Maintenance",
//     link: "https://www.linkedin.com/posts/darshanjain912_hackathon-reactnative-mongodb-activity-7319200712595243008-4fCt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmENlcBTBp6uSdk__MNZfa7Whe55gKXyi0",
//     description: "React Native app enabling users to report potholes using AI/ML detection, rewarding verified reports with public transport credits.",
//     fullDescription: `The Pothole Detection & Reward System is an innovative crowdsourced solution to urban road maintenance challenges. This AI-powered mobile application transforms citizens into active participants in improving road infrastructure while being rewarded for their contributions.

// Using advanced computer vision and machine learning algorithms, the app automatically detects potholes from user-captured photos with high accuracy. The AI model was trained on thousands of images to distinguish between potholes, road cracks, and normal road conditions, reducing false positives and ensuring data quality.

// When users report a pothole, the app captures the GPS location, captures photos, and assesses the severity level. The AI validates the report, and once verified by municipal authorities, users earn credits that can be redeemed for public transport passes, parking vouchers, or donated to community projects. This gamified approach encourages widespread participation and rapid issue identification.

// The comprehensive admin dashboard provides municipal authorities with heat maps of problem areas, severity analysis, resource allocation tools, and progress tracking. Officials can assign repair teams, update status, and communicate resolution timelines to reporters, ensuring transparency and accountability.

// Key features include: Real-time AI pothole detection with 95% accuracy, GPS-based automatic location tagging, severity assessment (low/medium/high), photo documentation, reward points system, leaderboards for community engagement, push notifications for report updates, historical data analytics, repair crew management tools, budget tracking, and citizen feedback system.

// The platform has successfully identified and resolved over 1,000 potholes in pilot programs, demonstrating significant cost savings and improved road safety through community participation.`,
//     img: "https://townsquare.media/site/696/files/2019/02/Potholes.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89",
//     tags: ["React Native", "Node.js", "MongoDB", "AI/ML"],
//     features: ["AI pothole detection", "Reward system", "Real-time tracking", "Official dashboard", "Gamification", "Heat Maps"],
//     badges: ["🤖 AI/ML"],
//     techStack: "React Native, TensorFlow Lite, Node.js, MongoDB, Google Maps API, Firebase",
//     team: "Darshan Jain, Hackathon Team"
//   },
  {
    title: "Attendify 🌟",
    subtitle: "Smart Attendance Management System - Tantravihar Tech Fest",
    link: "https://www.linkedin.com/posts/darshanjain912_attendify-tantravihar-techfest-activity-7319597990594146306-4Ms8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmENlcBTBp6uSdk__MNZfa7Whe55gKXyi0",
    description: "Revolutionary attendance system eliminating proxy attendance through Unique Device ID verification, facial recognition, and one-tap BLE scanning. Presented at Tantravihar state-level tech fest with implementation opportunities at broader levels.",
    fullDescription: `Attendify is more than just an attendance app — it's our answer to eliminating proxy attendance and streamlining the attendance process for teachers and students alike. Presented at Tantravihar, a prestigious state-level tech fest hosted at our college, this project opened doors to implementation opportunities we never imagined.

🔐 ADVANCED SECURITY FEATURES:
The system implements a strict one-student-one-device policy using Unique Device ID verification, making it impossible for students to mark attendance from multiple devices. Each student's device is registered in the system, and any attempt to mark attendance from an unregistered device is automatically blocked.

Enhanced security through Facial Recognition technology ensures that the person marking attendance is actually present. The ML-powered face verification system compares real-time camera captures with registered student photos, adding an additional layer of authentication beyond device verification.

📲 SEAMLESS USER EXPERIENCE:
Teachers can start marking attendance with literally one tap. The "Start Scanning" feature activates BLE (Bluetooth Low Energy) scanning that instantly detects only nearby students from their assigned class. This proximity-based approach ensures students must be physically present in the classroom, eliminating long-distance proxy attempts.

The intuitive interface displays real-time attendance status, showing which students have successfully marked their attendance and who's still pending. Teachers can manually override entries for legitimate cases like device issues or late arrivals with proper authorization.

🛠 COMPREHENSIVE ADMIN CONTROL:
The powerful admin panel provides complete system management capabilities including: device reset functionality for students changing phones, class-teacher assignment management, dynamic timetable configuration, bulk student data import/export, attendance report generation with various filters, analytics dashboard showing attendance trends, and real-time monitoring of all active sessions.

Administrators can manage multiple departments, semesters, and divisions with role-based access control. The system automatically generates attendance reports by date range, subject, or individual student, exportable in Excel or PDF formats.

📊 INTELLIGENT FEATURES:
- Automatic lecture scheduling based on timetable
- Geofencing to ensure attendance within campus premises
- Low attendance alerts for students and parents
- Historical attendance analytics with trend graphs
- Integration with existing student management systems
- Multi-language support for inclusive accessibility
- Offline mode with automatic sync when connectivity returns
- Biometric backup options for enhanced security

🎯 IMPACT & RECOGNITION:
Thanks to this project showcased at Tantravihar tech fest, we had the incredible opportunity to network with inspiring professionals and receive amazing feedback. Most importantly, we unlocked implementation opportunities at a much broader level than we ever expected. The project demonstrated significant potential for deployment across educational institutions, addressing a universal challenge in attendance management.

The system has been designed with scalability in mind, capable of handling thousands of concurrent users while maintaining sub-second response times. Future roadmap includes integration with learning management systems, parent mobile app, smartwatch support, and AI-powered attendance prediction to identify at-risk students early.`,
    img: "https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Flutter", "Firebase", "BLE", "Face Recognition", "ML"],
    features: ["Unique Device ID", "Facial Recognition", "One-Tap BLE Scanning", "Admin Dashboard", "Geofencing", "Real-time Analytics"],
    badges: ["🌟 Tantravihar", "🔐 Anti-Proxy"],
    techStack: "Flutter, Firebase, BLE, TensorFlow Lite, Node.js, MongoDB, ML Kit",
    team: "Darshan Jain, Yash Jadhav, Chetna Padhi",
    mentors: "Shashikant Mahajan, Kanchan Dhuri, Rasika Ransing"
  }
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = (project, e) => {
    e.stopPropagation();
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
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
                <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-100">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                    hoveredProject === index ? 'opacity-20' : 'opacity-0'
                  }`} />
                  
                  {/* Badges Overlay */}
                  {project.badges && (
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      {project.badges.map((badge, badgeIndex) => (
                        <span 
                          key={badgeIndex}
                          className="px-2 py-1 text-xs font-semibold bg-white/90 backdrop-blur-sm text-gray-900 rounded-full shadow-md"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {/* View Project Buttons */}
                  <div className={`absolute inset-0 flex flex-col items-center justify-center gap-3 transition-all duration-500 ${
                    hoveredProject === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.link, '_blank');
                      }}
                      className="px-4 sm:px-6 py-2 bg-white text-gray-900 text-xs sm:text-sm font-medium rounded-sm transform transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg"
                    >
                      View Project
                    </div>
                    {project.githubLink && (
                      <div 
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubLink, '_blank');
                        }}
                        className="px-4 sm:px-6 py-2 bg-gray-900 text-white text-xs sm:text-sm font-medium rounded-sm transform transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <div className="mb-3">
                    <h3 className="text-lg sm:text-xl font-medium text-gray-900 group-hover:text-gray-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">{project.subtitle}</p>
                    )}
                  </div>
                  
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Read More Button */}
                  {project.fullDescription && (
                    <button
                      onClick={(e) => openModal(project, e)}
                      className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium mb-4 flex items-center gap-1 transition-all duration-300 hover:gap-2"
                    >
                      Read More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}

                  {/* Key Features */}
                  {project.features && (
                    <div className="mb-4">
                      <p className="text-xs font-medium text-gray-700 mb-2">Key Features:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                        {project.features.slice(0, 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-xs text-gray-600">
                            <div className="w-1 h-1 bg-gray-400 rounded-full mr-2 flex-shrink-0"></div>
                            <span className="line-clamp-1">{feature}</span>
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
                        className="px-2 sm:px-3 py-1 text-xs text-gray-600 bg-gray-50 rounded-full border border-gray-100 transition-all duration-300 hover:bg-gray-100"
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

      {/* Project Details Modal */}
      {isModalOpen && selectedProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-48 sm:h-64 overflow-hidden">
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <svg className="w-6 h-6 text-gray-700 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedProject.badges?.map((badge, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs font-semibold bg-white/90 text-gray-900 rounded-full">
                      {badge}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {selectedProject.title}
                </h3>
                <p className="text-white/90 text-sm sm:text-base">
                  {selectedProject.subtitle}
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(90vh-16rem)] custom-scrollbar">
              {/* Full Description */}
              <div className="prose prose-sm sm:prose max-w-none mb-6">
                {selectedProject.fullDescription.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tech Stack */}
              {selectedProject.techStack && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Technology Stack
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">{selectedProject.techStack}</p>
                </div>
              )}

              {/* Team & Mentors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {selectedProject.team && (
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Team
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm">{selectedProject.team}</p>
                  </div>
                )}
                
                {selectedProject.mentors && (
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      Mentors
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm">{selectedProject.mentors}</p>
                  </div>
                )}
              </div>

              {/* All Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">All Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.features?.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-black text-white text-center rounded-lg hover:bg-gray-800 transition-colors duration-300 text-sm font-medium"
                >
                  View Project
                </a>
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 border-2 border-black text-black text-center rounded-lg hover:bg-black hover:text-white transition-all duration-300 text-sm font-medium flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </section>
  );
}