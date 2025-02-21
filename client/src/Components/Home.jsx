import { useEffect } from "react";
import TopBar from "./TopBar";
import Sidebar from "./SideBar";

import HomeBanner from "./HomeBanner"; // Home section banner
import Profile from "./Profile"; // About section
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
          {/* Home Section */}
          <section id="home" className="min-h-screen bg-transparent flex items-center justify-center">
            <HomeBanner /> {/* Default Home Component */}
          </section>

          <hr className="border-[var(--accent-color)] opacity-50 w-full" />

          {/* About Section */}
          <section id="about" className="min-h-screen bg-transparent flex items-center justify-center">
            <Profile /> {/* About Developer Component */}
          </section>

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
