import React, { useState, useEffect } from "react";
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

  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const contactSection = document.getElementById('contact');
    if (contactSection) observer.observe(contactSection);

    return () => observer.disconnect();
  }, []);

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
      name: "Twitter",
      icon: FaTwitter,
      url: "https://x.com/djain93260",
      hoverColor: "hover:bg-gray-900"
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: "https://wa.me/9321176546",
      hoverColor: "hover:bg-green-500"
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/darshanjain912?igsh=Y2tpa2NqMmhneWFv",
      hoverColor: "hover:bg-pink-500"
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:djain93260@gmail.com",
      hoverColor: "hover:bg-red-500"
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-white py-20 relative overflow-hidden">
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
            Contact
          </h2>
          <div className="w-16 h-0.5 bg-black mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to collaborate? Let's connect and discuss your next project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Contact Information */}
          <div 
            className={`lg:col-span-2 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-white border border-gray-100 rounded-sm p-8 transition-all duration-500 hover:shadow-xl hover:border-gray-200 hover:-translate-y-1">
              <h3 className="text-2xl font-medium text-gray-900 mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-50 p-3 rounded-sm border border-gray-100">
                    <FaMapMarkerAlt className="text-lg text-gray-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Location</p>
                    <p className="text-gray-900 font-medium">Mumbai, Maharashtra</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gray-50 p-3 rounded-sm border border-gray-100">
                    <FaPhone className="text-lg text-gray-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Phone</p>
                    <a href="tel:+919321176546" className="text-gray-900 font-medium hover:text-gray-600 transition-colors">
                      +91 9321176546
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gray-50 p-3 rounded-sm border border-gray-100">
                    <FaEnvelope className="text-lg text-gray-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Email</p>
                    <a href="mailto:djain93260@gmail.com" className="text-gray-900 font-medium hover:text-gray-600 transition-colors">
                      djain93260@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gray-50 p-3 rounded-sm border border-gray-100">
                    <FaWhatsapp className="text-lg text-gray-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">WhatsApp</p>
                    <a href="https://wa.me/9321176546" className="text-gray-900 font-medium hover:text-gray-600 transition-colors">
                      +91 9321176546
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="text-gray-500 text-sm mb-4">Connect with me</p>
                <div className="grid grid-cols-3 gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center"
                      onMouseEnter={() => setHoveredSocial(index)}
                      onMouseLeave={() => setHoveredSocial(null)}
                    >
                      <div className={`bg-gray-50 border border-gray-100 p-3 rounded-sm transition-all duration-300 group-hover:bg-gray-900 group-hover:text-white group-hover:-translate-y-1 ${social.hoverColor}`}>
                        <social.icon className="text-lg" />
                      </div>
                      <span className="text-xs text-gray-500 mt-2 group-hover:text-gray-900 transition-colors">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div 
            className={`lg:col-span-3 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-white border border-gray-100 rounded-sm p-8 transition-all duration-500 hover:shadow-xl hover:border-gray-200 hover:-translate-y-1">
              <h3 className="text-2xl font-medium text-gray-900 mb-8">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-sm p-3 text-gray-900 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-sm p-3 text-gray-900 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full border border-gray-200 rounded-sm p-3 text-gray-900 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  ></textarea>
                </div>
                
                {/* Status message */}
                {formStatus.message && (
                  <div className={`rounded-sm p-3 text-sm border ${
                    formStatus.isError 
                      ? 'bg-red-50 text-red-600 border-red-200' 
                      : 'bg-green-50 text-green-600 border-green-200'
                  }`}>
                    {formStatus.message}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  disabled={formStatus.isSubmitting}
                  className={`bg-gray-900 text-white px-8 py-3 rounded-sm transition-all duration-300 hover:bg-gray-700 hover:scale-105 ${
                    formStatus.isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
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