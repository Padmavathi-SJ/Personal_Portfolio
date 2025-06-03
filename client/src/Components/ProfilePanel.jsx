import resumePDF from "../assets/resume.pdf";
import profileImage from "../assets/padma.jpeg";
import phoneIcon from "../assets/call.png";
import emailIcon from "../assets/gmail.png";
import './global.css';

const ProfilePanel = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[9998]"
          onClick={onClose}
        ></div>
      )}

      {/* Profile Panel - Now responsive to viewport height */}
      <div
        className={`fixed top-0 left-0 w-full h-[100dvh] bg-gray-900 text-white shadow-xl
        transition-transform duration-300 ease-in-out z-[10000] p-4 overflow-y-auto
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:w-1/2 lg:w-1/3 xl:w-1/4 md:h-full md:border-r md:border-gray-700`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl cursor-pointer rounded-full w-8 h-8 flex items-center justify-center transition hover:bg-gray-700"
        >
          ✕
        </button>

        {/* Main Content Container */}
        <div className="flex flex-col items-center h-full justify-between py-4">
          {/* Top Section */}
          <div className="w-full flex flex-col items-center">
            {/* Profile Image */}
            <div className="w-28 h-36 md:w-48 md:h-60 overflow-hidden rounded-lg shadow-lg">
              <img 
                src={profileImage} 
                alt="Developer Profile" 
                className="w-full h-full object-cover rounded-md" 
              />
            </div>

            {/* Contact Details */}
            <div className="mt-4 text-center w-full px-2">
              <h3 className="text-lg font-semibold text-blue-400">PADMAVATHI S J</h3>
              <h4 className="text-sm font-semibold text-gray-300 mt-1">Computer Science and Engineering</h4>
              <p className="text-xs text-gray-400 mt-1">Bannari Amman Institute of Technology</p>
              <p className="text-xs text-gray-400 mt-1">Sathyamangalam, Erode-638401, Tamil Nadu, India</p>
            </div>

            {/* Contact Icons */}
            <div className="mt-4 flex flex-col items-center space-y-2 w-full px-4">
              <div className="flex items-center space-x-2 w-full justify-center">
                <img src={phoneIcon} alt="Phone" className="w-5 h-5" />
                <span className="text-sm text-gray-300">+91 8300770817</span>
              </div>
              <div className="flex items-center space-x-2 w-full justify-center">
                <img src={emailIcon} alt="Email" className="w-5 h-5" />
                <span className="text-sm text-gray-300 break-all">padmavathisj2005@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="w-full mt-auto">
            <div className="text-center border-t border-gray-700 pt-4 w-full">
              <p className="text-xs md:text-sm text-gray-400 px-2">
                Passionate Full Stack Developer skilled in React, Node.js, and Cloud Technologies.
              </p>
              <p className="text-xs md:text-sm text-gray-400 mt-1 px-2">
                Building scalable and efficient applications with modern web technologies.
              </p>
              <div className="mt-4 mb-2">
                <a
                  href={resumePDF}
                  download="Padmavathi_SJ_Resume.pdf"
                  className="inline-block bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md text-white text-sm md:text-base transition transform hover:scale-105"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePanel;