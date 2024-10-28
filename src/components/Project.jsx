import React from "react";
import { Card, CardBody, CardFooter, Image, link } from "@nextui-org/react";

// Sample projects data
const projects = [
  {
    title: "Blog App for My client",
    link:"https://jaintrades.netlify.app/",
    description: "Get expert stock tips, daily insights, and strategies for smart trading decisions.",
  img:"https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Blog App",
    link: "https://codeitupblogs.netlify.app/",
    description: "Documenting my coding experiences and solutions to real-world problems.",
    img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

 
  // Add more projects here
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-950 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-[#00FFFF] text-center mb-12" data-aos="fade-up">
          My Projects
        </h2>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
            <Card
              shadow="sm"
              key={index}
              isPressable
              onPress={() => console.log(project.title)}
              data-aos="fade-up"
              className="transition-transform transform hover:-translate-y-2 hover:shadow-lg"
            >
              <CardBody className="overflow-visible p-0" data-aos="fade-right">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={project.title}
                  className="w-full object-cover h-[200px] transition-transform transform hover:scale-105"
                  src={project.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-between p-4" data-aos="fade-left">
                <div>
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className=" text-default-900">{project.description}</p>
                </div>
              </CardFooter>
            </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
