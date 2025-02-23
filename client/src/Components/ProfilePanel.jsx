import profileImage from "../assets/padma.png"; // Developer's Profile
import resumePDF from "../assets/resume.pdf"; // Resume File

const ProfilePanel = ({ isOpen }) => {
  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-[var(--primary-bg)] text-white p-6 shadow-xl transition-transform duration-500 ${
        isOpen ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center space-y-4">
        {/* Profile Image */}
        <img src={profileImage} alt="Developer" className="w-24 h-24 rounded-full shadow-lg" />

        {/* Name and Role */}
        <h2 className="text-xl font-bold">Padmavathi SJ</h2>
        <p className="text-md text-gray-300 italic">Full Stack Developer | Cloud Enthusiast</p>

        {/* Resume Section */}
        <div className="w-full bg-[#B0C4DE] p-3 rounded-lg text-center shadow-md">
          <h3 className="text-lg font-semibold text-black">Highlighted Resume</h3>
        </div>

        {/* Download Button */}
        <a
          href={resumePDF}
          download="Padmavathi_SJ_Resume.pdf"
          className="px-6 py-2 bg-blue-500 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default ProfilePanel;
