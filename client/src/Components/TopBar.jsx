import { useState } from "react";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import telegramIcon from "../assets/telegram.png";
import emailIcon from "../assets/gmail.png";
import profileIcon from "../assets/graduation.png"; // Special Icon
import ProfilePanel from "./ProfilePanel"; // Importing the new Profile Panel Component

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* TopBar */}
      <div className="fixed top-0 left-16 w-[calc(100%-4rem)] flex items-center justify-between bg-[var(--secondary-bg)] shadow-md px-2 py-2 z-50">
        
        {/* Logo and Title */}
        <div className="flex flex-col">
          <h1 className="text-[#B0C4DE] font-semibold text-4xs tracking-wide">
            &lt;Padmavathi SJ /&gt;
          </h1>
          <span className="text-[#B0C4DE] text-[14px] font-medium italic">
            {"{Full Stack Developer}"}
          </span>
        </div>

        {/* Right-Side Icons */}
        <div className="flex space-x-5 items-center">
          {/* Special Profile Icon - Animated */}
          <div
            className="relative cursor-pointer group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={profileIcon}
              alt="Profile"
              className="w-10 h-10 animate-bounce group-hover:scale-110 transition-transform duration-300"
            />
            <span className="absolute top-[-10px] left-[50%] transform -translate-x-[50%] text-xs bg-[var(--secondary-bg)] text-[#B0C4DE] px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              About Me
            </span>
          </div>

          {/* Social Media Icons */}
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 hover:opacity-80 transition duration-300" />
          </a>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="w-8 h-8 hover:opacity-80 transition duration-300" />
          </a>
          <a href="https://t.me/your-telegram" target="_blank" rel="noopener noreferrer">
            <img src={telegramIcon} alt="Telegram" className="w-8 h-8 hover:opacity-80 transition duration-300" />
          </a>
          <a href="mailto:your-email@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={emailIcon} alt="Gmail" className="w-8 h-9 hover:opacity-80 transition duration-300" />
          </a>
        </div>
      </div>

      {/* Personal Info Panel Component */}
      <ProfilePanel isOpen={isOpen} />
    </>
  );
};

export default TopBar;
