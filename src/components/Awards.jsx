import React, { useState } from "react";
import { Card, CardBody, Button } from "@nextui-org/react";

// Awards data
const awards = [
  {
    title: "Excellence in Academics",
    issuer: "Vidyalankar Polytechnic",
    date: "2023",
    description: "Awarded for achieving the highest percentage in Diploma in Information Technology at Vidyalankar Polytechnic. Semester 3rd - 87.63%, Semester 4th - 88.88%, Semester 5th - 91.29%.",
    certificateUrl: "#"
  },
  {
    title: "Runner Up Award in College Project Exhibition",
    issuer: "Vidyalankar Polytechnic",
    date: "Mar 2024",
    description: "Awarded Runner ups place in the College Project Exhibition for the innovative project \"Bridging the Gap in the Startup Ecosystem.\" This project developed a platform fostering collaboration between public users, startups, and investors. Key features included AI-powered chatbot assistance, user testing opportunities, and mentorship programs. This award recognizes the project's contribution to enhancing communication, innovation, and entrepreneurial opportunities within the startup ecosystem.",
    certificateUrl: "https://imgcdn.dev/i/Yj6B5T"
  }
];

export default function Awards() {
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleDescription = (index) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const openCertificate = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section id="awards" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold text-center mb-16 text-white relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-600">
            Honors & Awards
          </span>
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-32 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full"></div>
        </h2>
        
        <div className="grid grid-cols-1 gap-12">
          {awards.map((award, index) => (
            <Card
              key={index}
              className="bg-gray-800 border border-gray-700 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardBody className="p-8">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-1 bg-gradient-to-b from-amber-400 to-yellow-600 rounded-full mr-3"></div>
                  <h3 className="text-2xl font-bold text-white">{award.title}</h3>
                </div>
                
                <div className="flex items-center mb-6">
                  <span className="text-amber-400 text-sm font-medium px-3 py-1 bg-amber-400/10 rounded-full mr-3">
                    {award.issuer}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {award.date}
                  </span>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-300 leading-relaxed">
                    {expandedDescriptions[index] 
                      ? award.description 
                      : `${award.description.substring(0, 150)}...`}
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <Button
                    className="bg-transparent text-amber-400 border border-amber-400/30 text-sm px-4"
                    size="sm"
                    radius="full"
                    onClick={() => toggleDescription(index)}
                  >
                    {expandedDescriptions[index] ? "Read Less" : "Read More"}
                  </Button>
                  
                  <Button
                    className="bg-amber-500 text-gray-900 text-sm px-4"
                    size="sm"
                    radius="full"
                    onClick={() => openCertificate(award.certificateUrl)}
                  >
                    View Certificate
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}