import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

// Publications data with your INNOVEST paper
const publications = [
  {
    title: "INNOVEST: Bridging the Gap in the Startup Ecosystem",
    journal: "IJMRSETM",
    date: "Apr 4, 2024",
    link: "https://www.ijmrsetm.com/admin/img/5_INNOVEST.pdf", // Replace with actual publication link
    description: "This research explores the development of an innovative platform that connects investors, startups, and the general public within the startup ecosystem. The platform fosters collaboration, innovation, and job creation by enabling public users to engage in projects and product testing with startups.",
    img: "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Startup Ecosystem", "AI", "Innovation Platform"]
  }
];

export default function Publications() {
  return (
    <section id="publications" className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-white relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-600">
            My Publications
          </span>
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-blue-400 to-teal-600 rounded-full"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((publication, index) => (
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="no-underline"
            >
              <Card
                className="h-full bg-gray-800 border border-gray-700 hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-teal-500/20"
                isHoverable
              >
                <CardBody className="p-0 overflow-hidden">
                  <div className="relative overflow-hidden h-48">
                    <Image
                      src={publication.img}
                      alt={publication.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      radius="none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4">
                        <h3 className="text-xl font-bold text-white">{publication.title}</h3>
                        <p className="text-teal-300 text-sm mt-1">{publication.journal} · {publication.date}</p>
                      </div>
                    </div>
                  </div>
                </CardBody>
                <CardFooter className="flex flex-col items-start gap-2 p-4 bg-gray-800">
                  <p className="text-gray-300 text-sm">{publication.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {publication.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs bg-gray-700 text-teal-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}