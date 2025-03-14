import { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight, FaSearchPlus } from "react-icons/fa";

import project1Img from "../assets/aws.png";
import project2Img from "../assets/css-3.png";
import project3Img from "../assets/github.png";


import ncc1 from "../assets/ncc/ncc1.png";
import ncc2 from "../assets/ncc/ncc2.png";
import ncc3 from "../assets/ncc/ncc3.png";
import ncc4 from "../assets/ncc/ncc4.png";
import ncc5 from "../assets/ncc/ncc5.png";
import ncc6 from "../assets/ncc/ncc6.png";

import ems1 from '../assets/EMS/ems1.png';
import ems2 from '../assets/EMS/ems2.png';
import ems3 from '../assets/EMS/ems3.png';
import ems4 from '../assets/EMS/ems4.png';
import ems5 from '../assets/EMS/ems5.png';
import ems6 from '../assets/EMS/ems6.png';
import ems7 from '../assets/EMS/ems7.png';
import ems8 from '../assets/EMS/ems8.png';


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
    gallery: [ems1, ems2, ems3, ems4, ems5, ems6, ems7, ems8],
  },
  {
    name: "Project Three",
    description: "A cloud-based solution using AWS services.",
    image: project3Img,
    gallery: [],
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState(null);

  const handleNext = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.gallery.length);
    }
  };

  const handlePrev = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedProject.gallery.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div className="flex flex-col items-center py-16 px-6 md:px-16 bg-transparent">
      <h2 className="text-4xl font-semibold text-gray-200 mb-12">Projects</h2>

      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative flex items-center border border-[#99c2ff] rounded-xl p-6 
              bg-[rgba(255,255,255,0.05)] backdrop-blur-lg shadow-md transition-all 
              transform hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/50"
            onClick={() => {
              setSelectedProject(project);
              setCurrentImageIndex(0);
            }}
          >
            <img src={project.image} alt={project.name} className="w-20 h-20 object-cover rounded-md shadow-sm mr-4" />
            <div>
              <h3 className="text-lg font-medium text-gray-100">{project.name}</h3>
              <p className="text-gray-400 text-sm">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {selectedProject && selectedProject.gallery.length > 0 && (
        <motion.div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <motion.div className="bg-[rgba(255,255,255,0.08)] backdrop-blur-lg p-5 rounded-xl shadow-lg  max-w-3xl w-full relative border border-[#99c2ff]">
            <button className="absolute top-3 right-3 text-white text-1xl" onClick={() => setSelectedProject(null)}>
              <FaTimes className="hover:text-black-600" />
            </button>

            <h3 className="text-2xl font-bold text-center text-gray-200">{selectedProject.name} Gallery</h3>

            <div className="flex items-center justify-center relative w-full h-[350px]">
              <button
                className="absolute left-2 text-white p-3"
                onClick={handlePrev}
              >
                <FaChevronLeft className="text-2xl" />
              </button>
              <div className="relative">
                <img
                  src={selectedProject.gallery[currentImageIndex]}
                  alt={selectedProject.name}
                  className="w-[520px] max-w-lg h-[250px] object-cover rounded-lg shadow-md border border-[#99c2ff] cursor-pointer"
                  onClick={() => setZoomedImage(selectedProject.gallery[currentImageIndex])}
                />
                <FaSearchPlus 
                  className="absolute bottom-2 right-2 text-black text-xl bg-black bg-opacity-50 p-1 rounded p-1 cursor-pointer"
                  onClick={() => setZoomedImage(selectedProject.gallery[currentImageIndex])}
                />
              </div>
              <button
                className="absolute right-2 text-white p-3 "
                onClick={handleNext}
              >
                <FaChevronRight className="text-2xl" />
              </button>
            </div>

            <div className="flex justify-center mt-4">
              {selectedProject.gallery.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 mx-1 rounded-full ${index === currentImageIndex ? "bg-blue-400" : "bg-gray-500"}`}
                ></div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}

{zoomedImage && (
  <div 
    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50" 
    onClick={() => setZoomedImage(null)}
  >
    <div className="relative">
      {/* Zoomed Image */}
      <img 
        src={zoomedImage} 
        alt="Zoomed" 
        className="max-w-5xl max-h-[85vh] rounded-lg shadow-lg border border-[#99c2ff] pointer-events-auto"
      />
      {/* Close Button */}
      <button 
        className="absolute top-4 right-4 text-black text-2xl"
        onClick={(e) => {
          e.stopPropagation(); // Prevent closing when clicking inside
          setZoomedImage(null);
        }}
      >
        <FaTimes className="hover:text-black-300" />
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default Projects;
