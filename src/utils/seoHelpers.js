// SEO Helper Component for Enhanced Search Engine Optimization
import { useEffect } from 'react';

export const useSEO = ({ title, description, keywords, ogImage, canonical }) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update or create meta tags
    const updateMetaTag = (property, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    if (description) {
      updateMetaTag('description', description);
      updateMetaTag('og:description', description, true);
      updateMetaTag('twitter:description', description);
    }

    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    if (ogImage) {
      updateMetaTag('og:image', ogImage, true);
      updateMetaTag('twitter:image', ogImage);
    }

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    // Cleanup function
    return () => {
      // Optionally reset to default values
    };
  }, [title, description, keywords, ogImage, canonical]);
};

// Structured Data Component
export const StructuredData = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

// Common SEO configurations for different sections
export const SEO_CONFIG = {
  home: {
    title: "Darshan Jain | Full Stack Developer | React Node.js Expert | Mumbai",
    description: "Award-winning Full Stack Developer Darshan Jain from Mumbai. Codeissance Hackathon Winner 🏆 | ZootechX Intern | Expert in React, Node.js, MongoDB, Flutter, React Native. 15+ projects.",
    keywords: "Darshan Jain, Darshan Jain developer, Darshan Jain Mumbai, Full Stack Developer, React developer, Node.js expert, MongoDB, hackathon winner, web developer",
    ogImage: "https://darshanjainportfolio.netlify.app/og-image.png",
    canonical: "https://darshanjainportfolio.netlify.app/"
  },
  about: {
    title: "About Darshan Jain | Full Stack Developer | Professional Background",
    description: "Learn about Darshan Jain - Full Stack Developer from Mumbai with expertise in React, Node.js, MongoDB. ZootechX Intern, Elight Labs experience. Passionate about building scalable web applications.",
    keywords: "Darshan Jain about, Darshan Jain background, Darshan Jain experience, Full Stack Developer Mumbai, React developer India, software engineer",
    canonical: "https://darshanjainportfolio.netlify.app/#about-me"
  },
  projects: {
    title: "Projects by Darshan Jain | LeadVault, CivicConnect, Web Apps | Portfolio",
    description: "Explore 15+ innovative projects by Darshan Jain including LeadVault (Hackathon Winner), CivicConnect (SIH 2025), Attendify, INNOVEST. React, Node.js, Flutter, AI/ML projects.",
    keywords: "Darshan Jain projects, LeadVault, CivicConnect, web development projects, mobile apps, React projects, Node.js applications, hackathon projects, portfolio",
    canonical: "https://darshanjainportfolio.netlify.app/#projects"
  },
  experience: {
    title: "Work Experience - Darshan Jain | ZootechX | Elight Labs | Internships",
    description: "Darshan Jain's professional experience at ZootechX (Current), Elight Labs internship. Full Stack Developer with hands-on experience in React, Node.js, MongoDB, REST APIs.",
    keywords: "Darshan Jain experience, ZootechX intern, Elight Labs, work experience, developer internship, professional background",
    canonical: "https://darshanjainportfolio.netlify.app/#experience"
  },
  contact: {
    title: "Contact Darshan Jain | Hire Full Stack Developer | Get In Touch",
    description: "Get in touch with Darshan Jain for web development, mobile app development, or freelance projects. Available for full-time roles and consulting. Email: djain93260@gmail.com",
    keywords: "Contact Darshan Jain, hire Darshan Jain, Darshan Jain email, Darshan Jain phone, freelance developer, hire full stack developer",
    canonical: "https://darshanjainportfolio.netlify.app/#contact"
  }
};

// Generate structured data for projects
export const generateProjectStructuredData = (projects) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.description,
        "url": project.link,
        "author": {
          "@type": "Person",
          "name": "Darshan Jain"
        },
        "keywords": project.tags.join(", "),
        "image": project.img
      }
    }))
  };
};

// Generate FAQ structured data
export const generateFAQStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is Darshan Jain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Darshan Jain is an award-winning Full Stack Developer from Mumbai, India, specializing in React, Node.js, MongoDB, Flutter, and React Native. He is a Codeissance Hackathon Winner and currently works as an intern at ZootechX."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies does Darshan Jain specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Darshan Jain specializes in Full Stack Development with expertise in React.js, Node.js, Express.js, MongoDB, MySQL, Flutter, React Native, TypeScript, JavaScript, Python, REST APIs, Redux, Firebase, and modern web technologies."
        }
      },
      {
        "@type": "Question",
        "name": "What are Darshan Jain's notable projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Darshan Jain's notable projects include LeadVault (Codeissance Hackathon Winner), CivicConnect (Smart India Hackathon 2025), Attendify (Tantravihar Tech Fest), INNOVEST (Published research), CodeItUp blogging platform, and Python Typing Speed Test application."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact Darshan Jain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact Darshan Jain via email at djain93260@gmail.com, phone at +91-8591496182, or through his social media profiles on LinkedIn (darshanjain912), GitHub (Djain912), and Twitter (@djain93260)."
        }
      },
      {
        "@type": "Question",
        "name": "Is Darshan Jain available for freelance work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Darshan Jain is available for freelance web development and mobile app development projects. He specializes in building scalable, responsive applications using modern technologies like React, Node.js, and Flutter."
        }
      }
    ]
  };
};

export default { useSEO, StructuredData, SEO_CONFIG, generateProjectStructuredData, generateFAQStructuredData };
