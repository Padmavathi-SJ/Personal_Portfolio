import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


/* Importing Images from Assets */
import event1 from "../assets/idea.png";
import event2 from "../assets/java.png";
import event3 from "../assets/ncc.jpeg";

const eventCertificates = [event1, event2, event3];

const EventsCertificates = () => {
  const [index, setIndex] = useState(0);

  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? eventCertificates.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex === eventCertificates.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-5xl h-80 flex justify-center items-center backdrop-blur-lg p-6">
      <button className="absolute left-4 text-white bg-blue-600 p-2 rounded-full hover:bg-blue-400" onClick={prevImage}>
        <FaChevronLeft />
      </button>
      <img src={eventCertificates[index]} alt="Event Certificate" className="h-80 w-auto rounded-lg shadow-md" />
      <button className="absolute right-4 text-white bg-blue-600 p-2 rounded-full hover:bg-blue-400" onClick={nextImage}>
        <FaChevronRight />
      </button>
    </div>
  );
};


export default EventsCertificates;
