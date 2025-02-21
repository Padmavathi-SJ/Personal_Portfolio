import { useState } from "react";
import { motion } from "framer-motion";
import project1Img from "../assets/aws.png";
import project2Img from "../assets/css-3.png";
import project3Img from "../assets/github.png";
import project4Img from "../assets/docker.png";
import project5Img from "../assets/sql-server.png";
import closeIcon from "../assets/close.png";

const projects = [
  {
    name: "Project One",
    description: "A web application built with modern technologies.",
    image: project1Img,
    gallery: ["../assets/project1-1.jpg", "../assets/project1-2.jpg"],
  },
  {
    name: "Project Two",
    description: "A full-stack project with backend integration.",
    image: project2Img,
    gallery: ["../assets/project2-1.jpg", "../assets/project2-2.jpg"],
  },
  {
    name: "Project Three",
    description: "A cloud-based solution using AWS services.",
    image: project3Img,
    gallery: ["../assets/project3-1.jpg", "../assets/project3-2.jpg"],
  },
  {
    name: "Project Four",
    description: "A containerized application using Docker.",
    image: project4Img,
    gallery: ["../assets/project4-1.jpg", "../assets/project4-2.jpg"],
  },
  {
    name: "Project Five",
    description: "A database management system with SQL Server.",
    image: project5Img,
    gallery: ["../assets/project5-1.jpg", "../assets/project5-2.jpg"],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="flex flex-col items-center py-16 px-6 md:px-16 bg-transparent">
      <h2 className="text-4xl font-semibold text-gray-200 mb-12">Projects</h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative flex items-center border border-[#99c2ff] rounded-xl p-6 
              bg-[rgba(255,255,255,0.05)] backdrop-blur-lg shadow-md transition-all 
              transform hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/50"
            onClick={() => setSelectedProject(project)}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-20 h-20 object-cover rounded-md shadow-sm mr-4"
            />
            <div>
              <h3 className="text-lg font-medium text-gray-100">
                {project.name}
              </h3>
              <p className="text-gray-400 text-sm">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="bg-[rgba(255,255,255,0.08)] backdrop-blur-lg p-6 rounded-xl shadow-lg max-w-3xl w-full relative 
              border border-[#99c2ff] hover:shadow-blue-400/60"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 bg-transparent border-none cursor-pointer"
              onClick={() => setSelectedProject(null)}
            >
              <img src={closeIcon} alt="Close" className="w-6 h-6 opacity-60 hover:opacity-100 transition" />
            </button>
            <h3 className="text-2xl font-bold text-center mb-4 text-gray-200">
              {selectedProject.name} Gallery
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {selectedProject.gallery.map((img, idx) => (
                <motion.img
                  key={idx}
                  src={img}
                  alt={selectedProject.name}
                  className="w-full h-40 object-cover rounded-lg shadow-sm border border-[#99c2ff] 
                    hover:shadow-md hover:shadow-blue-500/50 transition"
                  whileHover={{ scale: 1.05 }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
