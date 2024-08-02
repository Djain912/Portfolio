import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram,FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-8" data-aos="fade-down">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://github.com/Djain912"target='_blank' className="text-4xl text-[#00FFFF] hover:text-white transition-colors duration-200">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/darshanjain912/" target='_blank' className="text-4xl text-[#00FFFF] hover:text-white transition-colors duration-200">
            <FaLinkedin />
          </a>
          <a href="https://wa.me/9321176546" target='_blank' className="text-4xl text-[#00FFFF] hover:text-white transition-colors duration-200">
          <FaWhatsapp/></a>
          <a target='_blank' href="https://www.instagram.com/darshanjain912?igsh=Y2tpa2NqMmhneWFv" className="text-4xl text-[#00FFFF] hover:text-white transition-colors duration-200">
          <FaInstagram/></a>
       
        </div>
        <p className="text-center text-[#00FFFF] text-lg">
          &copy; {new Date().getFullYear()} Darshan Jain. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
