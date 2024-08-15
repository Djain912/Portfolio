import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram,FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-8"  >
    
        <p className="px-4 text-center text-[#00FFFF] text-lg">
          &copy; {new Date().getFullYear()} Darshan Jain. All rights reserved.
        </p>
    </footer>
  );
}
