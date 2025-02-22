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
    <div className="flex flex-col items-center w-full">
      {/* Title & Description */}
      <div className="text-center mb-6">
        <h2 className="text-4xl font-semibold text-gray-200 mb-12 mt-10">Certifications</h2>

      </div>

      {/* Certifications Section */}
      <div className="flex h-[500px] bg-transparent relative w-full max-w-5xl">
        {/* Sidebar - Moved Further Left */}
        <div className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 w-20 bg-transparent flex flex-col items-center py-2 space-y-6">
          <SidebarImage imgSrc={learningIcon} text="Learning" onClick={() => setActiveTab("learning")} active={activeTab === "learning"} />
          <SidebarImage imgSrc={eventsIcon} text="Events" onClick={() => setActiveTab("events")} active={activeTab === "events"} />
          <SidebarImage imgSrc={internshipIcon} text="Internships" onClick={() => setActiveTab("internships")} active={activeTab === "internships"} />
        </div>

        {/* Content Section - Centered & Wider */}
        <div className="flex-1 p-6 bg-transparent ml-40 flex flex-col justify-center items-center w-[85%]">
          {activeTab === "learning" && <LearningCertificates />}
          {activeTab === "events" && <EventsCertificates />}
          {activeTab === "internships" && <InternshipsCertificates />}

          {/* Active Section Textbox */}
          <input
            type="text"
            value={activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            readOnly
            className="mt-4 px-4 py-2 border border-white text-white bg-transparent text-lg rounded-md text-center w-48 outline-none"
          />
        </div>
      </div>
    </div>
  );
};

/* Sidebar Image Component */
const SidebarImage = ({ imgSrc, text, onClick, active }) => (
  <div className="group relative flex flex-col items-center cursor-pointer" onClick={onClick}>
    <img
      src={imgSrc}
      alt={text}
      className={`w-10 h-10 rounded-lg transition-all duration-300 opacity-80 hover:opacity-100 ${active ? "border-2 border-blue-500 p-1" : ""}`}
    />
    <span className="absolute left-14 opacity-0 group-hover:opacity-100 bg-gray-900 text-white px-2 py-1 rounded-md transition-all duration-300">
      {text}
    </span>
  </div>
);

export default Certifications;
