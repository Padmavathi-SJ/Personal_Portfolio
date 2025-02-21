import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

/* Importing Images from Assets */
import awsCert from "../assets/AWS.png";
import cert2 from "../assets/ncc.jpeg";
import cert3 from "../assets/sql-server.png";
import cert4 from "../assets/docker.png";

const learningCertificates = [awsCert, cert2, cert3, cert4];

const LearningCertificates = () => {
    const [index, setIndex] = useState(0);
  
    const prevImage = () => {
      setIndex((prevIndex) => (prevIndex === 0 ? learningCertificates.length - 1 : prevIndex - 1));
    };
  
    const nextImage = () => {
      setIndex((prevIndex) => (prevIndex === learningCertificates.length - 1 ? 0 : prevIndex + 1));
    };
  
    return (
      <div className="relative w-full max-w-5xl h-80 flex justify-center items-center backdrop-blur-lg p-6">
        <button className="absolute left-4 text-white bg-blue-600 p-3 rounded-full hover:bg-blue-400" onClick={prevImage}>
          <FaChevronLeft />
        </button>
        <img src={learningCertificates[index]} alt="Certificate" className="h-80 w-auto rounded-lg shadow-md" />
        <button className="absolute right-4 text-white bg-blue-600 p-3 rounded-full hover:bg-blue-400" onClick={nextImage}>
          <FaChevronRight />
        </button>
      </div>
    );
  };
  
export default LearningCertificates;

  

