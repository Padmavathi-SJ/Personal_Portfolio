import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

/* Importing Images from Assets */
import intern1 from "../assets/html-5.png";
import intern2 from "../assets/css-3.png";
import intern3 from "../assets/gmail.png";


const internshipCertificates = [intern1, intern2, intern3];

const InternshipsCertificates = () => {
    const [index, setIndex] = useState(0);
  
    const prevImage = () => {
      setIndex((prevIndex) => (prevIndex === 0 ? internshipCertificates.length - 1 : prevIndex - 1));
    };
  
    const nextImage = () => {
      setIndex((prevIndex) => (prevIndex === internshipCertificates.length - 1 ? 0 : prevIndex + 1));
    };
  
    return (
      <div className="relative w-full max-w-5xl h-80 flex justify-center items-center backdrop-blur-lg p-6">
        <button className="absolute left-4 text-white bg-blue-600 p-2 rounded-full hover:bg-blue-400" onClick={prevImage}>
          <FaChevronLeft />
        </button>
        <img src={internshipCertificates[index]} alt="Internship Certificate" className="h-80 w-auto rounded-lg shadow-md" />
        <button className="absolute right-4 text-white bg-blue-600 p-2 rounded-full hover:bg-blue-400" onClick={nextImage}>
          <FaChevronRight />
        </button>
      </div>
    );
  };
  

export default InternshipsCertificates;
