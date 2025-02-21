import { useEffect } from "react";
import TopBar from "./TopBar";
import Sidebar from "./SideBar";
import Skills from "./Skills";
import Projects from "./Projects";
import Certifications from "./Certifications";
import Contact from "./Contact";
import "./global.css";

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 150; // Adjusted for visibility

      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          section.classList.add("fade-in");
        } else {
          section.classList.remove("fade-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex">
      {/* Sidebar - Fixed */}
      <Sidebar />

      <div className="flex flex-col w-full ml-16">
        {/* TopBar - Adjusted to not overlap with Sidebar */}
        <TopBar />

        {/* Main content area with Smooth Scrolling */}
        <div className="p-8 mt-16">
          <section id="home" className="min-h-screen bg-transparent fade-in"></section>

          <hr className="border-[var(--accent-color)] opacity-50 w-full" />

          <section id="skills" className="min-h-screen bg-transparent fade-in">
            <Skills />
          </section>

          <hr className="border-[var(--accent-color)] opacity-50 w-full" />

          <section id="projects" className="min-h-screen bg-transparent fade-in">
            <Projects />
          </section>

          <hr className="border-[var(--accent-color)] opacity-50 w-full" />

          <section id="certifications" className="min-h-screen bg-transparent fade-in">
            <Certifications />
          </section>

          <hr className="border-[var(--accent-color)] opacity-50 w-full" />

          <section id="contact" className="min-h-screen bg-transparent fade-in">
            <Contact />
          </section>

          <hr className="border-[var(--accent-color)] opacity-50 w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
