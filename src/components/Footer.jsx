import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaHeart, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/Djain912",
      hoverColor: "hover:bg-gray-900"
    },
    {
      name: "LinkedIn", 
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/darshanjain912/",
      hoverColor: "hover:bg-blue-600"
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/darshanjain912",
      hoverColor: "hover:bg-pink-500"
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: "https://wa.me/9321176546",
      hoverColor: "hover:bg-green-500"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Awards", href: "#awards" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative bg-gray-50 border-t border-gray-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-medium text-gray-900 mb-4">Darshan Jain</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Passionate web developer focused on creating beautiful and functional web experiences with modern technologies.
            </p>
            <div className="flex justify-center md:justify-start space-x-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group bg-white border border-gray-200 p-3 rounded-sm text-gray-600 transition-all duration-300 hover:text-white hover:-translate-y-1 hover:shadow-lg"
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  style={{
                    backgroundColor: hoveredSocial === index ? (
                      social.name === 'GitHub' ? '#1f2937' :
                      social.name === 'LinkedIn' ? '#2563eb' :
                      social.name === 'Instagram' ? '#ec4899' :
                      social.name === 'WhatsApp' ? '#10b981' : '#ffffff'
                    ) : '#ffffff'
                  }}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-2xl font-medium text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-medium text-gray-900 mb-4">Get in Touch</h3>
            <div className="space-y-2 mb-6">
              <p className="text-gray-600 text-sm">Mumbai, Maharashtra</p>
              <p className="text-gray-600 text-sm">+91 9321176546</p>
              <p className="text-gray-600 text-sm">djain93260@gmail.com</p>
            </div>
            <a 
              href="mailto:djain93260@gmail.com" 
              className="inline-block px-6 py-3 bg-gray-900 text-white text-sm rounded-sm font-medium hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Send Message
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-12"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Darshan Jain. All rights reserved.
          </p>
          <p className="text-gray-500 flex items-center">
            Made with <FaHeart className="text-red-500 mx-2 text-xs" /> in Mumbai
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop} 
        className="fixed right-6 bottom-6 bg-gray-900 p-3 rounded-sm text-white shadow-lg hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl z-50 group"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-sm group-hover:scale-110 transition-transform duration-300" />
      </button>
    </footer>
  );
}