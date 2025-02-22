import homeIcon from "../assets/home-button.png";
import userIcon from "../assets/information.png";
import skillsIcon from "../assets/pencil.png";
import projectsIcon from "../assets/idea.png";
import certificationsIcon from "../assets/medal.png";
import contactIcon from "../assets/contact-us.png";
import profileImage from "../assets/padma.png"; // Developer's Profile Image

const Sidebar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 20, // Adjust offset if needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col items-center bg-[var(--secondary-bg)] shadow-lg">
      {/* Developer's Profile Image (placed at the top) */}
      <div className="mt-3 w-10 h-10 rounded-full overflow-hidden">
        <img src={profileImage} alt="Developer Profile" className="w-full h-full object-cover" />
      </div>

      {/* Sidebar Icons (Centered) */}
      <div className="flex flex-col flex-1 justify-center space-y-6 items-center">
        <button onClick={() => handleScroll("home")} className="hover:opacity-80 transition duration-300 flex justify-center">
          <img src={homeIcon} alt="Home" className="w-6 h-6" />
        </button>
        <button onClick={() => handleScroll("about")} className="hover:opacity-80 transition duration-300 flex justify-center">
          <img src={userIcon} alt="Profile" className="w-6 h-6" />
        </button>
        <button onClick={() => handleScroll("skills")} className="hover:opacity-80 transition duration-300 flex justify-center">
          <img src={skillsIcon} alt="Skills" className="w-6 h-6" />
        </button>
        <button onClick={() => handleScroll("projects")} className="hover:opacity-80 transition duration-300 flex justify-center">
          <img src={projectsIcon} alt="Projects" className="w-6 h-6" />
        </button>
        <button onClick={() => handleScroll("certifications")} className="hover:opacity-80 transition duration-300 flex justify-center">
          <img src={certificationsIcon} alt="Certifications" className="w-6 h-6" />
        </button>
        <button onClick={() => handleScroll("contact")} className="hover:opacity-80 transition duration-300 flex justify-center">
          <img src={contactIcon} alt="Contact" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
