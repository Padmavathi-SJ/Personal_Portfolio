import { useState } from "react";
import LearningCertificates from "./LearningCertifications";
import EventsCertificates from "./EventsCertifications";
import InternshipsCertificates from "./InternshipsCertifications";

/* Importing Images from Assets */
import learningIcon from "../assets/learning.png";
import eventsIcon from "../assets/events.png";
import internshipIcon from "../assets/internship.png";

const Certifications = () => {
  const [activeTab, setActiveTab] = useState("learning");

  return (
    <div className="flex flex-col items-center w-full px-4 sm:px-6">
      <div className="text-center mb-4 sm:mb-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-200 mt-6 sm:mt-10 mb-6 sm:mb-12">
          Certifications
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row h-auto sm:h-[400px] md:h-[500px] bg-transparent relative w-full max-w-5xl">
        {/* Mobile Tabs */}
        <div className="sm:hidden flex justify-center space-x-4 mb-4 w-full">
          <button
            onClick={() => setActiveTab("learning")}
            className={`px-4 py-2 rounded-lg ${activeTab === "learning" ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}
          >
            Learning
          </button>
          <button
            onClick={() => setActiveTab("events")}
            className={`px-4 py-2 rounded-lg ${activeTab === "events" ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}
          >
            Events
          </button>
          <button
            onClick={() => setActiveTab("internships")}
            className={`px-4 py-2 rounded-lg ${activeTab === "internships" ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}
          >
            Internships
          </button>
        </div>

        {/* Desktop Sidebar */}
        <div className="hidden sm:flex absolute sm:relative left-0 sm:left-auto top-0 sm:top-auto transform sm:transform-none -translate-y-0 sm:w-20 bg-transparent flex-col items-center py-2 space-y-4 sm:space-y-6">
          <SidebarImage imgSrc={learningIcon} text="Learning" onClick={() => setActiveTab("learning")} active={activeTab === "learning"} />
          <SidebarImage imgSrc={eventsIcon} text="Events" onClick={() => setActiveTab("events")} active={activeTab === "events"} />
          <SidebarImage imgSrc={internshipIcon} text="Internships" onClick={() => setActiveTab("internships")} active={activeTab === "internships"} />
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4 sm:p-6 bg-transparent sm:ml-10 md:ml-16 flex flex-col justify-center items-center w-full">
          {activeTab === "learning" && <LearningCertificates />}
          {activeTab === "events" && <EventsCertificates />}
          {activeTab === "internships" && <InternshipsCertificates />}

          <input
            type="text"
            value={activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            readOnly
            className="mt-4 px-4 py-2 border border-white text-white bg-transparent text-sm sm:text-base rounded-md text-center w-36 sm:w-48 outline-none"
          />
        </div>
      </div>
    </div>
  );
};

const SidebarImage = ({ imgSrc, text, onClick, active }) => (
  <div className="group relative flex flex-col items-center cursor-pointer" onClick={onClick}>
    <img
      src={imgSrc}
      alt={text}
      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg transition-all duration-300 opacity-80 hover:opacity-100 ${active ? "border-2 border-blue-500 p-1" : ""}`}
    />
    <span className="absolute left-12 sm:left-14 opacity-0 group-hover:opacity-100 bg-gray-900 text-white px-2 py-1 rounded-md transition-all duration-300 text-xs sm:text-sm whitespace-nowrap">
      {text}
    </span>
  </div>
);

export default Certifications;
