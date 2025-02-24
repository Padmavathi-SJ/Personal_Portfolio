import { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaSearchPlus } from "react-icons/fa"; // Icons for close & zoom

import project1Img from "../assets/aws.png";
import project2Img from "../assets/css-3.png";
import project3Img from "../assets/github.png";
import project4Img from "../assets/docker.png";
import project5Img from "../assets/sql-server.png";

import ncc1 from "../assets/ncc/ncc1.png";
import ncc2 from "../assets/ncc/ncc2.png";
import ncc3 from "../assets/ncc/ncc3.png";
import ncc4 from "../assets/ncc/ncc4.png";
import ncc5 from "../assets/ncc/ncc5.png";
import ncc6 from "../assets/ncc/ncc6.png";

const projects = [
  {
    name: "Project One",
    description: "A web application built with modern technologies.",
    image: project1Img,
    gallery: [ncc1, ncc2, ncc3, ncc4, ncc5, ncc6],
  },
  {
    name: "Project Two",
    description: "A full-stack project with backend integration.",
    image: project2Img,
    gallery: [],
  },
  {
    name: "Project Three",
    description: "A cloud-based solution using AWS services.",
    image: project3Img,
    gallery: [],
  },
  {
    name: "Project Four",
    description: "A containerized application using Docker.",
    image: project4Img,
    gallery: [],
  },
  {
    name: "Project Five",
    description: "A database management system with SQL Server.",
    image: project5Img,
    gallery: [],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);

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
              <h3 className="text-lg font-medium text-gray-100">{project.name}</h3>
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
            className="bg-[rgba(255,255,255,0.08)] backdrop-blur-lg p-6 rounded-xl shadow-lg max-w-4xl w-full relative 
              border border-[#99c2ff] hover:shadow-blue-400/60"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 bg-transparent text-white text-2xl cursor-pointer"
              onClick={() => setSelectedProject(null)}
            >
              <FaTimes className="hover:text-gray-300" />
            </button>

            <h3 className="text-2xl font-bold text-center mb-4 text-gray-200">
              {selectedProject.name} Gallery
            </h3>

            {/* Scrollable Image Container */}
            <div className="flex overflow-x-auto space-x-4 p-2">
              {selectedProject.gallery.map((img, idx) => (
                <motion.div
                  key={idx}
                  className="relative flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={img}
                    alt={selectedProject.name}
                    className="w-72 h-56 object-cover rounded-lg shadow-md border border-[#99c2ff]"
                  />
                  {/* Zoom Button */}
                  <button
                    className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                    onClick={() => setZoomedImage(img)}
                  >
                    <FaSearchPlus className="text-lg" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Zoomed Image Modal */}
      {zoomedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setZoomedImage(null)}
        >
          <motion.div
            className="relative max-w-4xl w-full p-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Zoom Button */}
            <button
              className="absolute top-4 right-4 bg-black bg-opacity-70 text-white text-2xl p-2 rounded-full"
              onClick={() => setZoomedImage(null)}
            >
              <FaTimes />
            </button>
            <img
              src={zoomedImage}
              alt="Zoomed"
              className="w-full max-h-[90vh] object-contain rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
