import resumePDF from "../assets/resume.pdf";
import profileImage from "../assets/padma.png";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const ProfilePanel = ({ isOpen, onClose }) => {
  return (
    <>
      {/* 🔹 Overlay - Ensures Background is Dimmed & Clicks Are Blocked */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[9998]" // Ensures Background Dim + Above All
          onClick={onClose} // Clicking Outside Closes Panel
        ></div>
      )}

      {/* 🔹 Profile Panel - Now Fully Centered and Above Everything */}
      <div
        className={`fixed top-1/2 left-1/2 w-2/5 h-3/4 bg-[var(--primary-bg)] text-white shadow-lg border border-gray-600 
      rounded-lg transition-transform duration-500 ease-in-out z-[10000] p-6 
      ${isOpen ? "opacity-100 scale-100 translate-x-[-50%] translate-y-[-50%]" : "opacity-0 scale-0"}`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl cursor-pointer bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-500 transition"
        >
          ✕
        </button>

        {/* Profile Image */}
        <div className="flex flex-col items-center mt-6">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img src={profileImage} alt="Developer Profile" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-xl font-bold mt-3">Padmavathi SJ</h2>
          <p className="text-sm text-gray-300 italic">Full Stack Developer</p>
        </div>

        {/* Divider */}
        <div className="mt-4 border-t border-gray-600"></div>

        {/* Personal Info */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">About Me</h3>
          <p className="text-sm text-gray-400 mt-2">
            Passionate Full Stack Developer skilled in React, Node.js, and Cloud Technologies.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Contact Info</h3>
          <div className="mt-3 space-y-3">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400" /> padmavathi@example.com
            </p>
            <p className="flex items-center gap-3">
              <FaPhone className="text-green-400" /> +91 98765 43210
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-400" /> Bengaluru, India
            </p>
            <p className="flex items-center gap-3">
              <FaLinkedin className="text-blue-500" /> linkedin.com/in/padmavathi
            </p>
            <p className="flex items-center gap-3">
              <FaGithub className="text-gray-400" /> github.com/padmavathi
            </p>
          </div>
        </div>

        {/* Resume Download */}
        <div className="mt-6">
          <a
            href={resumePDF}
            download="Padmavathi_SJ_Resume.pdf"
            className="block text-center bg-blue-500 py-2 rounded-md text-white hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
};



  
  

export default ProfilePanel;
