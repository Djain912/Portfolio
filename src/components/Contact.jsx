import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: "Please fill in all fields"
      });
      return;
    }

    // Set submitting state
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: "Sending message..."
    });

    try {
      // Using Formspree instead of EmailJS
      const response = await fetch('https://formspree.io/f/xgvaezdp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Success state
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: "Message sent successfully!"
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({
          ...prev,
          isSubmitted: false,
          message: ""
        }));
      }, 5000);

    } catch (error) {
      console.error("Error sending message:", error);
      
      // Error state
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: "Failed to send message. Please try again later."
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-16 px-4 relative overflow-hidden" id="contact">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute h-64 w-64 rounded-full bg-cyan-500 blur-3xl -top-20 -left-20"></div>
        <div className="absolute h-64 w-64 rounded-full bg-purple-500 blur-3xl bottom-20 right-20"></div>
        <div className="absolute h-96 w-96 rounded-full bg-blue-500 blur-3xl top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto text-center relative z-10 max-w-6xl">
        <div data-aos="fade-up" data-aos-duration="800">
          <h2 className="text-6xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Contact Me</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to collaborate? I'm just a message away. Reach out through any of these channels:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          {/* Contact Information Card */}
          <div className="lg:col-span-2" data-aos="fade-right" data-aos-delay="200">
            <div className="bg-gray-800/60 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-700 h-full transform transition-all duration-300 hover:shadow-cyan-500/20 hover:border-cyan-500/50">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-left">
                  <div className="bg-gray-700 p-3 rounded-lg text-cyan-400">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">Mumbai, Maharashtra</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-left">
                  <div className="bg-gray-700 p-3 rounded-lg text-cyan-400">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium">+91 9321176546</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-left">
                  <div className="bg-gray-700 p-3 rounded-lg text-cyan-400">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:djain932110@gmail.com" className="text-white font-medium hover:text-cyan-400 transition-colors">djain93260@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-left">
                  <div className="bg-gray-700 p-3 rounded-lg text-cyan-400">
                    <FaWhatsapp className="text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">WhatsApp</p>
                    <a href="https://wa.me/9321176546" className="text-white font-medium hover:text-cyan-400 transition-colors">+91 9321176546</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Media Links and Contact Form */}
          <div className="lg:col-span-3" data-aos="fade-left" data-aos-delay="400">
            <div className="bg-gray-800/60 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-700 h-full transform transition-all duration-300 hover:shadow-cyan-500/20 hover:border-cyan-500/50">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">Connect with Me</h3>
              
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-8">
                <a 
                  href="https://github.com/Djain912" 
                  target='_blank' 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center group"
                >
                  <div className="bg-gray-700 p-4 rounded-lg text-white group-hover:bg-white group-hover:text-gray-900 transition-all duration-300 w-16 h-16 flex items-center justify-center mb-2 transform group-hover:-translate-y-1">
                    <FaGithub className="text-2xl" />
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors">GitHub</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/darshanjain912/" 
                  target='_blank' 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center group"
                >
                  <div className="bg-gray-700 p-4 rounded-lg text-white group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 w-16 h-16 flex items-center justify-center mb-2 transform group-hover:-translate-y-1">
                    <FaLinkedin className="text-2xl" />
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors">LinkedIn</span>
                </a>
                
                <a 
                  href="https://x.com/djain93260" 
                  target='_blank' 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center group"
                >
                  <div className="bg-gray-700 p-4 rounded-lg text-white group-hover:bg-black group-hover:text-white transition-all duration-300 w-16 h-16 flex items-center justify-center mb-2 transform group-hover:-translate-y-1">
                    <FaTwitter className="text-2xl" />
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors">Twitter</span>
                </a>
                
                <a 
                  href="https://wa.me/9321176546" 
                  target='_blank' 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center group"
                >
                  <div className="bg-gray-700 p-4 rounded-lg text-white group-hover:bg-green-500 group-hover:text-white transition-all duration-300 w-16 h-16 flex items-center justify-center mb-2 transform group-hover:-translate-y-1">
                    <FaWhatsapp className="text-2xl" />
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors">WhatsApp</span>
                </a>
                
                <a 
                  href="https://www.instagram.com/darshanjain912?igsh=Y2tpa2NqMmhneWFv" 
                  target='_blank' 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center group"
                >
                  <div className="bg-gray-700 p-4 rounded-lg text-white group-hover:bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 group-hover:text-white transition-all duration-300 w-16 h-16 flex items-center justify-center mb-2 transform group-hover:-translate-y-1">
                    <FaInstagram className="text-2xl" />
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors">Instagram</span>
                </a>
                
                <a 
                  href="mailto:djain93260@gmail.com" 
                  className="flex flex-col items-center group"
                >
                  <div className="bg-gray-700 p-4 rounded-lg text-white group-hover:bg-red-500 group-hover:text-white transition-all duration-300 w-16 h-16 flex items-center justify-center mb-2 transform group-hover:-translate-y-1">
                    <FaEnvelope className="text-2xl" />
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors">Email</span>
                </a>
              </div>
              
              {/* Quick Contact Form with Formspree */}
              <form className="space-y-4 mt-8" onSubmit={handleSubmit} action="https://formspree.io/f/xgvaezdp" method="POST">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name" 
                    className="bg-gray-900/80 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 w-full"
                  />
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email" 
                    className="bg-gray-900/80 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 w-full"
                  />
                </div>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message" 
                  rows="4" 
                  className="bg-gray-900/80 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 w-full"
                ></textarea>
                
                {/* Status message */}
                {formStatus.message && (
                  <div className={`rounded-lg p-3 text-sm ${formStatus.isError ? 'bg-red-500/20 text-red-200' : 'bg-green-500/20 text-green-200'}`}>
                    {formStatus.message}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  disabled={formStatus.isSubmitting}
                  className={`bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto ${formStatus.isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}