import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4" data-aos="fade-up">
      <div className="container mx-auto text-center">
        <h2 className="text-6xl font-bold text-[#00FFFF] mb-8">Contact Me</h2>
        <p className="text-xl text-white mb-12">
          Feel free to reach out to me through any of the following channels:
        </p>

        <div className=" gap-2 grid grid-cols-1 sm:grid-cols-2">
          {/* Contact Information */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto " data-aos="fade-left">
            <h3 className="text-2xl font-bold text-[#00FFFF] mb-4">Get in Touch</h3>
            <p className="text-lg text-white mb-2  text-left">
              <strong>Name:</strong> Darshan Jain
            </p>
            <p className="text-lg text-white mb-2  text-left">
              <strong>Phone:</strong> +91 9321176546
            </p>
            <p className="text-lg text-white mb-2  text-left">
            <strong>Location:</strong> Mumbai,Maharashtra
            </p>

            <p className="text-lg text-white mb-2  text-left">
              <strong>Email:</strong> <a href="mailto:djain93260@gmail.com" className="text-[#00FFFF] hover:underline">djain93260@gmail.com</a>
            </p>
            <p className="text-lg text-white mb-2  text-left">
              <strong>WhatsApp:</strong> <a href="https://wa.me/9321176546" className="text-[#00FFFF] hover:underline">+91 9321176546</a>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center mt-6 gap-2" data-aos="fade-right">
            <h3 className="text-2xl font-bold text-[#00FFFF] mb-4">Connect with Me</h3>
            <div className="flex gap-6 text-3xl">
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
              <a href="mailto:djain93260@gmail.com" className="text-[#00FFFF] text-4xl hover:text-white" aria-label="Email">
                <FaEnvelope />
              </a>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
