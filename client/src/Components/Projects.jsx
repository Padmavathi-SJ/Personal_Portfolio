import { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight, FaSearchPlus } from "react-icons/fa";

import project1Img from "../assets/ems.jpg";
import project2Img from "../assets/ncc.jpg";
import project3Img from "../assets/compiler.jpg";
import project4Img from "../assets/e-cart.jpg"

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

import compiler1 from '../assets/compiler/compiler1.png';
import compiler2 from '../assets/compiler/compiler2.png';
import compiler3 from '../assets/compiler/compiler3.png';
import compiler4 from '../assets/compiler/compiler4.png';
import compiler5 from '../assets/compiler/compiler5.png';
import compiler6 from '../assets/compiler/compiler6.png';
import compiler7 from '../assets/compiler/compiler7.png';

import ecart1 from '../assets/e-cart/ecart-1.png';
import ecart2 from '../assets/e-cart/ecart-2.png';
import ecart3 from '../assets/e-cart/ecart-3.png';
import ecart4 from '../assets/e-cart/ecart-4.png';


const projects = [
  {
    name: "Interns Tracking Portal",
    description: "Interns Tracking Portal streamlines intern management for industries and institutions with task allocation, team collaboration, leave tracking, and feedback management. Users get a personalized dashboard to monitor work, update tasks, and manage personal details efficiently.",
    image: project1Img,
    gallery: [ems1, ems2, ems3, ems4, ems5, ems6, ems7, ems8],
    repoLink: "https://github.com/Padmavathi-SJ/Interns-Tracking-System",
    role: "Worked as FullStack Developer (React JS, Node JS, Express JS, MySQL)"
  },

  {
    name: "Online Coding Space",
    description: "Online Coding Space is a platform for academic institutions, enabling students to practice faculty-assigned problems regularly. It features an integrated compiler for popular languages and allows admins to track and evaluate student submissions efficiently.",
    image: project3Img,
    gallery: [compiler1, compiler2, compiler3, compiler4, compiler5, compiler6, compiler7],
    repoLink: "https://github.com/Padmavathi-SJ/Online_Code_Space",
    role: "Worked as Frontend Developer (React JS)"
  },

  {
    name: "Campus Chronicles",
    description: "College Events & Clubs Gallery is a digital space for students to upload and cherish their event memories. Users can share images, videos, and quotes, organizing them into personal folders to preserve unforgettable moments for the future.",
    image: project2Img,
    gallery: [ncc1, ncc2, ncc3, ncc4, ncc5, ncc6],
    repoLink: "https://github.com/Padmavathi-SJ/NCC_Memoria",
    role: "Worked as FullStack Developer (React JS, Node JS, Express JS, MySQL)"
  },
  {
    name: "Smart E-Cart Application - Ongoing",
    description: "Smart E-Cart Application empowers small sellers to effortlessly manage and sell their products online. With features like product listing, inventory control, customer orders, and wishlists, it streamlines the entire selling process. Sellers can track orders, update stock, and manage their store from a centralized dashboard, while customers enjoy a smooth and personalized shopping experience.",
    image: project4Img,
    gallery: [ecart1, ecart2, ecart3, ecart4],
    repoLink: "https://github.com/Padmavathi-SJ/E-Cart-Application-",
    role: "Working as FullStack Developer (React JS, Node JS, Express JS, MySQL)"
  },
];



const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState(null);

  const handleNext = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === selectedProject.gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === 0 ? selectedProject.gallery.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center py-8 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-transparent">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-200 mb-6 md:mb-12">Projects</h2>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative flex items-center border border-[#99c2ff] rounded-lg sm:rounded-xl p-2 sm:p-3
              bg-[rgba(255,255,255,0.05)] backdrop-blur-lg shadow-sm md:shadow-md transition-all 
              transform hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/50"
            onClick={() => {
              setSelectedProject(project);
              setCurrentImageIndex(0);
            }}
          >
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-md shadow-sm mr-3 sm:mr-4" 
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-100 truncate">{project.name}</h3>
              <p className="text-gray-400 text-xs sm:text-sm line-clamp-2">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
          <div className="bg-[rgba(255,255,255,0.08)] backdrop-blur-lg p-4 sm:p-5 rounded-lg shadow-lg max-w-full w-full sm:max-w-2xl md:max-w-3xl relative border border-[#99c2ff] max-h-[90vh] overflow-y-auto">
            <a
              href={selectedProject.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-2 left-2 px-2 py-1 sm:px-3 sm:py-1.5 border border-blue-400 text-white rounded-md text-xs sm:text-sm transition-all hover:bg-blue-400 hover:text-black hover:shadow-md hover:shadow-blue-500/50"
            >
              View GitHub
            </a>

            <button 
              className="absolute top-2 right-2 text-white text-xl sm:text-2xl p-1 sm:p-1.5 hover:bg-gray-700 rounded-full transition-colors"
              onClick={() => setSelectedProject(null)}
            >
              <FaTimes />
            </button>

            <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-200 mt-6 sm:mt-0">{selectedProject.name}</h3>
            <p className="mt-2 sm:mt-4 text-white text-sm sm:text-base text-center">{selectedProject.role}</p>

            <div className="relative w-full h-auto mt-4 sm:mt-6">
              <button 
                className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 text-white p-2 sm:p-3 bg-blue-600 rounded-full hover:bg-blue-500 z-10 transition-all shadow-md hover:shadow-lg hover:scale-105"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
              >
                <FaChevronLeft className="text-sm sm:text-base md:text-lg" />
              </button>
              
              <div className="relative w-full flex justify-center">
                <img
                  src={selectedProject.gallery[currentImageIndex]}
                  alt={selectedProject.name}
                  className="w-full max-w-md h-auto max-h-[300px] sm:max-h-[350px] md:max-h-[400px] object-contain rounded-lg shadow-md border border-[#99c2ff] cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setZoomedImage(selectedProject.gallery[currentImageIndex])}
                />
              </div>
              
              <button 
                className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 text-white p-2 sm:p-3 bg-blue-600 rounded-full hover:bg-blue-500 z-10 transition-all shadow-md hover:shadow-lg hover:scale-105"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
              >
                <FaChevronRight className="text-sm sm:text-base md:text-lg" />
              </button>
            </div>

            <div className="mt-4 text-center text-xs sm:text-sm text-gray-300">
              {currentImageIndex + 1} of {selectedProject.gallery.length}
            </div>

            <div className="mt-4 flex justify-center">
              <button 
                className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md text-xs sm:text-sm transition-all"
                onClick={() => setZoomedImage(selectedProject.gallery[currentImageIndex])}
              >
                <FaSearchPlus className="text-xs sm:text-sm" />
                Zoom Image
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Zoomed Image Modal */}
      {zoomedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-[60] p-4">
          <div className="relative max-w-full max-h-full">
            <img 
              src={zoomedImage} 
              alt="Zoomed" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <button 
              className="absolute top-2 right-2 text-white text-xl sm:text-2xl bg-black bg-opacity-50 rounded-full p-2 sm:p-3 hover:bg-opacity-70 transition-colors"
              onClick={() => setZoomedImage(null)}
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;