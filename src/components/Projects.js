import React from "react";


const projects = [
  {
    title: "VideoCall App",
    description: "Developed a video calling application using React.js and PeerJS for real-time peer-to-peer communication.",
    techStack: ["React", "PeerJS", "JavaScript"],
    liveDemoLink: "https://mittalsuthar.github.io/videocall/",
    githubLink: "https://github.com/mittalsuthar/videocall",
    image: "VideoChat.png", 
  },
  {
    title: "Bug Blaster",
    description: "Ticket generator application using ReactJs. A simple web app to track and generate bug tickets for projects.",
    techStack: ["React", "JavaScript", "CSS"],
    liveDemoLink: "https://mittalsuthar.github.io/bug-blaster/",
    githubLink: "https://github.com/mittalsuthar/bug-blaster",
    image: "Ticket.png", 
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my projects, skills, and contact details.",
    techStack: ["React", "TailwindCSS", "JavaScript"],
    liveDemoLink: "https://portfolio-mittalsuthars-projects.vercel.app/",
    githubLink: "https://github.com/mittalsuthar/portfolio",
    image: "portfolio.png", 
  },
];



const Projects = () => {
    return (
      <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-blue-500 font-semibold mb-8">
          My Projects
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 container mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-blue-500 font-semibold mt-4">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{project.description}</p>
  
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
  
              <div className="mt-6 flex justify-between items-center">
                <a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-gray-900 dark:text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-grey-800 text-gray-900 dark:text-white py-2 px-4 rounded-lg hover:bg-grey-600"
                >
                  See Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  

export default Projects;
