import resumePDF from "../assets/resume.pdf"; // Resume File

const ProfilePanel = ({ isOpen }) => {
  return (
    <div
      className={`absolute left-0 top-16 w-48 bg-[var(--primary-bg)] text-white p-4 shadow-lg rounded-lg transition-transform duration-500 ${
        isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
      }`}
    >
      {/* Name and Role */}
      <h2 className="text-lg font-bold text-center">Padmavathi SJ</h2>
      <p className="text-sm text-gray-300 italic text-center">Full Stack Developer</p>

      {/* Divider */}
      <div className="my-2 border-t border-gray-600"></div>

      {/* Resume Download */}
      <a
        href={resumePDF}
        download="Padmavathi_SJ_Resume.pdf"
        className="block w-full text-center bg-blue-500 py-2 rounded-md text-white hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </div>
  );
};

export default ProfilePanel;
