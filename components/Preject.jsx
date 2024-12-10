import Image from "next/image";
import React from "react";

const projects = [
  {
    src: "/assets/zentry.png",
    alt: "Get Shit Done",
    link: "https://zentry-mu.vercel.app/",
    name: "Get Shit Done",
    description: "A productivity app to manage tasks and projects efficiently.",
  },
  {
    src: "/assets/liveDocs.png",
    alt: "Design for Simplicity",
    link: "https://live-docs-pied.vercel.app/sign-in",
    name: "Live Docs",
    description: "A simple and intuitive document management system, focused on streamlining document handling and collaboration.",
  },
  {
    src: "/assets/project3.png",
    alt: "Change by Design",
    link: "https://thirtysixstudios-eta.vercel.app/",
    name: "Thirty Six Studios",
    description: "A portfolio website showcasing my skills and the three core elements of my work at ThirtySix Studios.",
  },
  {
    src: "/assets/project4.png",
    alt: "Colorful Concepts",
    link: "https://modern-website-iota-drab.vercel.app/",
    name: "Colorful Concepts",
    description: "A website showcasing colorful, modern design concepts.",
  },
];

const Projects = () => {
  return (
    <section className="p-10 sm:p-14 lg:p-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Our <span className="text-[#ffc300]">Projects</span>
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden w-full h-[400px] lg:h-[450px] group"
            >
              {/* Project Image */}
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover transition duration-300 group-hover:opacity-50"
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
                <div className="text-center px-6 py-4">
                  <h3 className="text-xl text-white font-bold mb-2">{project.name}</h3>
                  <p className="text-white mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#ffc300] text-white font-bold rounded-lg shadow-md hover:bg-black transition duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
