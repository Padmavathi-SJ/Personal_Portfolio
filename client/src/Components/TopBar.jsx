import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import telegramIcon from "../assets/telegram.png";
import emailIcon from "../assets/gmail.png";

const TopBar = () => {
  return (
    <div className="fixed top-0 left-16 w-[calc(100%-4rem)] flex items-center justify-between bg-[var(--secondary-bg)] shadow-md px-2 py-2 z-40">
      {/* Logo and Title */}
      <div className="flex flex-col">
        <h1 className="text-[#B0C4DE] font-semibold text-4xs tracking-wide">
          &lt;Padmavathi SJ /&gt;
        </h1>
        <span className="text-[#B0C4DE] text-[14px] font-medium italic">{"{Full Stack Developer}"}</span>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-5">
        <a href="https://www.linkedin.com/in/padmavathisj/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 hover:opacity-80 transition duration-300" />
        </a>
        <a href="https://github.com/Padmavathi-SJ" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="w-8 h-8 hover:opacity-80 transition duration-300" />
        </a>
        <a href="https://t.me/your-telegram" target="_blank" rel="noopener noreferrer">
          <img src={telegramIcon} alt="Telegram" className="w-8 h-8 hover:opacity-80 transition duration-300" />
        </a>
        <a href="mailto:padmavathisj2005@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={emailIcon} alt="Gmail" className="w-8 h-9 hover:opacity-80 transition duration-300" />
        </a>
      </div>
    </div>
  );
};

export default TopBar;

