import { useState } from "react";
import { Link } from 'react-router-dom';
import homeIcon from "../assets/home-button.png";
import userIcon from "../assets/information.png";
import skillsIcon from "../assets/pencil.png";
import projectsIcon from "../assets/idea.png";
//import certificationsIcon from "../assets/medal.png";
import contactIcon from "../assets/contact-us.png";
import profileImage from "../assets/padma-clg.png";
import ProfilePanel from "./ProfilePanel";
import profileIcon from "../assets/graduation.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar Navigation */}
      <div className="fixed top-0 left-0 h-screen w-16 flex flex-col items-center bg-[var(--secondary-bg)] shadow-lg">
        {/* Developer's Profile Image */}
        <div className="mt-3 w-10 h-10 rounded-full overflow-hidden">
          <img src={profileImage} alt="Developer Profile" className="w-full h-full object-cover" />
        </div>

{/* Profile Icon Below Profile Image */}
<div className="relative mt-3 w-8 h-8 cursor-pointer group" onClick={() => setIsOpen(true)}>
  {/* Profile Icon */}
  <img
    src={profileIcon}
    alt="Profile Panel"
    className="w-full h-full object-cover hover:opacity-80 transition"
  />

  {/* Tooltip - "Hire Me" */}
  <span className="absolute left-12 top-1/2 -translate-y-1/2 text-white text-sm px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
    Hire Me
  </span>
</div>




        {/* Sidebar Icons */}
        <div className="flex flex-col flex-1 justify-center space-y-6 items-center mt-6">

          <Link to="/" className="hover:opacity-80 transition duration-300">
            <img src={homeIcon} alt="Home" className="w-6 h-6" />
          </Link>

          <Link to="/profile" className="hover:opacity-80 transition duration-300">
            <img src={userIcon} alt="Profile" className="w-6 h-6" />
          </Link>

          <Link to="/skills" className="hover:opacity-80 transition duration-300">
            <img src={skillsIcon} alt="Skills" className="w-6 h-6" />
          </Link>

          <Link to="/projects" className="hover:opacity-80 transition duration-300">
            <img src={projectsIcon} alt="Projects" className="w-6 h-6" />
          </Link>

          {/*
          <Link to="/certifications" className="hover:opacity-80 transition duration-300">
            <img src={certificationsIcon} alt="Certifications" className="w-6 h-6" />
          </Link>
          */}

          <Link to="/contact" className="hover:opacity-80 transition duration-300">
            <img src={contactIcon} alt="Contact" className="w-6 h-6" />
          </Link>
          
        </div>
      </div>

      {/* Profile Panel Component */}
      <ProfilePanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Sidebar;
