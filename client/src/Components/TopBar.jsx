import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import telegramIcon from "../assets/telegram.png";
import emailIcon from "../assets/gmail.png";

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 md:left-16 w-full md:w-[calc(100%-4rem)] flex items-center justify-between bg-[var(--secondary-bg)] shadow-md px-4 py-2 z-40">
      {/* Logo and Title - Stacked on mobile, inline on desktop */}
      <div className="flex flex-col md:flex-row md:items-baseline space-y-1 md:space-y-0 md:space-x-3">
        <h1 className="text-[#B0C4DE] font-semibold text-sm md:text-base tracking-wide">
          &lt;Padmavathi SJ /&gt;
        </h1>
        <span className="text-[#B0C4DE] text-xs md:text-sm font-medium italic">
          {"{Full Stack Developer}"}
        </span>
      </div>

      {/* Social Media Icons - Smaller on mobile */}
      <div className="flex space-x-3 md:space-x-5">
        <a href="https://www.linkedin.com/in/padmavathisj/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 md:w-8 md:h-8 hover:opacity-80 transition duration-300" />
        </a>
        <a href="https://github.com/Padmavathi-SJ" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="w-6 h-6 md:w-8 md:h-8 hover:opacity-80 transition duration-300" />
        </a>
        <a href="https://t.me/your-telegram" target="_blank" rel="noopener noreferrer">
          <img src={telegramIcon} alt="Telegram" className="w-6 h-6 md:w-8 md:h-8 hover:opacity-80 transition duration-300" />
        </a>
        <a href="mailto:padmavathisj2005@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={emailIcon} alt="Gmail" className="w-6 h-6 md:w-8 md:h-9 hover:opacity-80 transition duration-300" />
        </a>
      </div>
    </div>
  );
};

export default TopBar;