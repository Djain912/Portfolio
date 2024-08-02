import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

// Sample projects data
const projects = [
  {
    title: "Frontend Radio",
    description: "A daily mix of 12 tracks to boost your coding sessions.",
    img: "https://nextui.org/images/hero-card-complete.jpeg",
  },
  {
    title: "Backend Beats",
    description: "Groovy beats for backend development.",
    img: "https://nextui.org/images/card-example-2.jpeg",
  },
  {
    title: "Fullstack Fiesta",
    description: "An all-in-one fullstack project.",
    img: "https://nextui.org/images/card-example-3.jpeg",
  },
  {
    title: "Machine Learning Magic",
    description: "Harness the power of machine learning.",
    img: "https://nextui.org/images/card-example-4.jpeg",
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
        <p className="text-center text-white mb-12" data-aos="fade-up">Projects will be uploaded soon...</p>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}
