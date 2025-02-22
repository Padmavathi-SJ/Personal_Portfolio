import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import telegramIcon from "../assets/telegram.png";
import emailIcon from "../assets/gmail.png";

const TopBar = () => {
  return (
    <div className="fixed top-0 left-16 w-[calc(100%-4rem)] flex items-center justify-between bg-[var(--secondary-bg)] shadow-md px-3 py-3 z-50">
      {/* Logo and Title */}
      <div className="flex flex-col">
        <h1 className="text-[var(--primary-text)] font-semibold text-xl tracking-wide">
          &lt;Padmavathi SJ /&gt;
        </h1>
        <span className="text-[var(--secondary-text)] text-sm font-medium">Full Stack Developer</span>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-5">
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 hover:opacity-80 transition duration-300" />
        </a>
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="w-8 h-8 hover:opacity-80 transition duration-300" />
        </a>
        <a href="https://t.me/your-telegram" target="_blank" rel="noopener noreferrer">
          <img src={telegramIcon} alt="Telegram" className="w-8 h-8 hover:opacity-80 transition duration-300" />
        </a>
        <a href="https://t.me/your-telegram" target="_blank" rel="noopener noreferrer">
          <img src={emailIcon} alt="Gmail" className="w-8 h-9 hover:opacity-80 transition duration-300" />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
