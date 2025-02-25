import resumePDF from "../assets/resume.pdf";
import profileImage from "../assets/padma.jpeg";

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

      {/* 🔹 Profile Panel - Wider with Sliding Effect */}
      <div
        className={`fixed top-0 left-0 w-97 h-full bg-[var(--primary-bg)] text-white shadow-lg border-r border-gray-600 
        transition-transform duration-500 ease-in-out z-[10000] p-6
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl cursor-pointer bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-500 transition"
        >
          ✕
        </button>

        {/* Profile Image (Now Larger & Square) */}
        <div className="flex flex-col items-center mt-6">
          <div className="w-70 h-80 overflow-hidden  shadow-lg">
            <img src={profileImage} alt="Developer Profile" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-2xl font-bold mt-3">Padmavathi SJ</h2>
          <p className="text-lg text-gray-300 italic">Full Stack Developer</p>
        </div>

        {/* Divider */}
        <div className="mt-4 border-t border-gray-600"></div>

        {/* About Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold">About Me</h3>
          <p className="text-md text-gray-400 mt-2">
            Passionate Full Stack Developer skilled in React, Node.js, and Cloud Technologies.
          </p>
        </div>

        {/* Resume Download */}
        <div className="mt-6">
          <a
            href={resumePDF}
            download="Padmavathi_SJ_Resume.pdf"
            className="block text-center bg-blue-500 py-3 rounded-md text-white text-lg hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default ProfilePanel;
