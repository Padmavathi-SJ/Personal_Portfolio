import resumePDF from "../assets/resume.pdf";
import profileImage from "../assets/padma.jpeg";
import phoneIcon from "../assets/call.png";
import emailIcon from "../assets/gmail.png";

const ProfilePanel = ({ isOpen, onClose }) => {
  return (
    <>
      {/* 🔹 Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[9998]"
          onClick={onClose}
        ></div>
      )}

      {/* 🔹 Profile Panel - Two Column Layout with Bottom Full Section */}
      <div
        className={`fixed top-0 left-0 w-1/4 h-full bg-gray-900 text-white shadow-xl border-r border-gray-700 
        transition-transform duration-500 ease-in-out z-[10000] p-6
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-1xl cursor-pointer  rounded-full w-8 h-8 flex items-center justify-center transition"
        >
          ✕
        </button>

        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="w-48 h-60 overflow-hidden rounded-lg shadow-lg">
            <img src={profileImage} alt="Developer Profile" className="w-full h-full object-cover rounded-md" />
          </div>
        </div>

        {/* Contact Details */}
        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold text-blue-400">PADMAVATHI S J</h3>
          <h4 className="text-lg font-semibold text-gray-300">Computer Science and Engineering</h4>
          <p className="text-md text-gray-400 mt-1">Bannari Amman Institute of Technology</p>
          <p className="text-md text-gray-400 mt-1">Sathyamangalam, Erode-638401, Tamil Nadu, India</p>
        </div>

        {/* Contact Icons */}
        <div className="mt-4 flex flex-col items-center space-y-3">
          <div className="flex items-center space-x-3">
            <img src={phoneIcon} alt="Phone" className="w-6 h-6" />
            <span className="text-md text-gray-300">+91 8300770817</span>
          </div>
          <div className="flex items-center space-x-3">
            <img src={emailIcon} alt="Email" className="w-6 h-6" />
            <span className="text-md text-gray-300">padmavathisj2005@gmail.com</span>
          </div>
        </div>

        {/* Full Width Bottom Section */}
        <div className="mt-6 text-center border-t border-gray-700 pt-4">
          <p className="text-md text-gray-400">
            Passionate Full Stack Developer skilled in React, Node.js, and Cloud Technologies.
          </p>
          <p className="text-md text-gray-400 mt-1">
            Building scalable and efficient applications with modern web technologies.
          </p>
          <div className="mt-4">
            <a
              href={resumePDF}
              download="Padmavathi_SJ_Resume.pdf"
              className="inline-block bg-blue-500 py-2 px-6 rounded-md text-white text-lg hover:bg-blue-700 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePanel;
