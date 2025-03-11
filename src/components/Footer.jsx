import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaHeart, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gradient-to-t from-black to-gray-900 text-white">
      {/* Wave SVG - Fixed positioning */}
      

      {/* Main Footer Content */}
      <div className="container mx-auto pt-16 pb-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Darshan Jain</h3>
            <p className="text-gray-400 mb-4">Passionate web developer focused on creating beautiful and functional web experiences.</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://github.com/Djain912" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full text-white transition-all duration-300 hover:text-cyan-400 transform hover:-translate-y-1">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/darshanjain912/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full text-white transition-all duration-300 hover:text-cyan-400 transform hover:-translate-y-1">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/darshanjain912" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full text-white transition-all duration-300 hover:text-cyan-400 transform hover:-translate-y-1">
                <FaInstagram />
              </a>
              <a href="https://wa.me/9321176546" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full text-white transition-all duration-300 hover:text-cyan-400 transform hover:-translate-y-1">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Projects</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Skills</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Contact Me</h3>
            <p className="text-gray-400 mb-2">Mumbai, Maharashtra</p>
            <p className="text-gray-400 mb-2">+91 9321176546</p>
            <p className="text-gray-400 mb-2">djain93260@gmail.com</p>
            <a href="mailto:djain93260@gmail.com" className="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1">
              Send Message
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Darshan Jain. All rights reserved.
          </p>
          <p className="text-center md:text-right text-gray-400">
            Made with <FaHeart className="inline text-red-500 mx-1" /> in Mumbai
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop} 
        className="fixed right-4 bottom-4 bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full text-white shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1 z-50"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}