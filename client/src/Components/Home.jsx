import { useEffect } from "react";
import TopBar from "./TopBar";
import Sidebar from "./SideBar";
import Skills from "./Skills";
import Projects from "./Projects";
import Certifications from "./Certifications";
import Contact from "./Contact";
import "./global.css";

const Home = () => {
  return (
    <div className="relative flex">
      {/* Sidebar - Fixed */}
      <Sidebar />

      <div className="flex flex-col w-full ml-16">
        {/* TopBar - No Overlapping, No Extra Space */}
        <TopBar />

        {/* Main content area without extra margins */}
        <div className="h-full p-6">
          <section id="home" className="min-h-screen bg-transparent"></section>

          <hr className="border-[var(--accent-color)] opacity-50 w-full" />

          <section id="skills" className="min-h-screen bg-transparent">
            <Skills />
          </section>

          <hr className="border-[var(--accent-color)] opacity-50 w-full" />

          <section id="projects" className="min-h-screen bg-transparent">
            <Projects />
          </section>

          <hr className="border-[var(--accent-color)] opacity-50 w-full" />

          <section id="certifications" className="min-h-screen bg-transparent">
            <Certifications />
          </section>

          <hr className="border-[var(--accent-color)] opacity-50 w-full" />

          <section id="contact" className="min-h-screen bg-transparent">
            <Contact />
          </section>

          <hr className="border-[var(--accent-color)] opacity-50 w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
