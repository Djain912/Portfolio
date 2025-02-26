import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

// Sample projects data
const projects = [
  {
    title: "Blog App for My client",
    link: "https://jaintrades.netlify.app/",
    description: "Get expert stock tips, daily insights, and strategies for smart trading decisions.",
    img: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["React", "NextUI", "Trading"]
  },
  {
    title: "Blog App",
    link: "https://codeitupblogs.netlify.app/",
    description: "Documenting my coding experiences and solutions to real-world problems.",
    img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["React", "CSS", "JavaScript"]
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-white relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            My Projects
          </span>
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              key={index}
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              className="no-underline"
            >
              <Card 
                className="h-full bg-gray-800 border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/20"
                isHoverable
              >
                <CardBody className="p-0 overflow-hidden">
                  <div className="relative overflow-hidden h-48">
                    <Image
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      radius="none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <h3 className="text-xl font-bold text-white p-4">{project.title}</h3>
                    </div>
                  </div>
                </CardBody>
                <CardFooter className="flex flex-col items-start gap-2 p-4 bg-gray-800">
                  <p className="text-gray-300 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-2 py-1 text-xs bg-gray-700 text-purple-300 rounded-full"
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