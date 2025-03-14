import { useEffect } from "react";
import TopBar from "./TopBar";
import Sidebar from "./SideBar";
import HomeBanner from "./HomeBanner";
import Profile from "./Profile";
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
        {/* TopBar */}
        <TopBar />

        {/* Quote - Single Line Below TopBar */}
        <p className="text-center text-lg md:text-xl font-semibold text-[var(--accent-color)] mt-4">
          <span className="text-3xl md:text-4xl text-yellow-400 font-extrabold">“</span>
          If you <span className="text-yellow-400 font-extrabold">shine</span> like a 
          <span className="text-orange-500 font-extrabold"> Sun</span>, first 
          <span className="text-red-500 font-extrabold"> burn</span> like a 
          <span className="text-orange-500 font-extrabold"> Sun</span>.
          <span className="text-3xl md:text-4xl text-yellow-400 font-extrabold">”</span>
        </p>

        {/* Main content area */}
        <div className="h-full p-6">
          {/* Home Section */}
          <section id="home" className="min-h-screen bg-transparent flex items-center justify-center">
            <HomeBanner />
          </section>

          <hr className="border-[var(--accent-color)] opacity-50 w-full" />

          {/* About Section */}
          <section id="about" className="min-h-screen bg-transparent flex items-center justify-center">
            <Profile />
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
