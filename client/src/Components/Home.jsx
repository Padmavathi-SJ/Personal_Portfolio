import { useEffect } from "react";
import TopBar from "./TopBar";
import Sidebar from "./SideBar";
import HomeBanner from "./HomeBanner";
import Profile from "./Profile";
import Skills from "./Skills";
import Projects from "./Projects";
//import Certifications from "./Certifications";
import Contact from "./Contact";
import "./global.css";

const Home = () => {
  return (
    <div className="relative flex flex-col md:flex-row">
      <Sidebar />

      <div className="flex flex-col w-full md:ml-16">
        <TopBar />

        {/* Responsive quote */}
        <p className="text-center text-sm sm:text-base md:text-lg font-semibold text-[var(--accent-color)] mt-2 sm:mt-4 px-2 sm:px-4">
          <span className="text-xl sm:text-2xl md:text-3xl text-yellow-400 font-extrabold">"</span>
          If you <span className="text-yellow-400 font-bold">shine</span> like a 
          <span className="text-orange-500 font-bold"> Sun</span>, first 
          <span className="text-red-500 font-bold"> burn</span> like a 
          <span className="text-orange-500 font-bold"> Sun</span>.
          <span className="text-xl sm:text-2xl md:text-3xl text-yellow-400 font-extrabold">"</span>
        </p>

        {/* Main content with responsive padding */}
        <div className="h-full p-2 sm:p-4 md:p-6">
          <section id="home" className="min-h-[90vh] sm:min-h-screen bg-transparent flex items-center justify-center">
            <HomeBanner />
          </section>

          <hr className="border-[var(--accent-color)] opacity-30 my-2 sm:my-4 w-full" />

          <section id="about" className="min-h-[90vh] sm:min-h-screen bg-transparent flex items-center justify-center py-4">
            <Profile />
          </section>

          <hr className="border-[var(--accent-color)] opacity-30 my-2 sm:my-4 w-full" />

          <section id="skills" className="min-h-[90vh] sm:min-h-screen bg-transparent py-4">
            <Skills />
          </section>

          <hr className="border-[var(--accent-color)] opacity-30 my-2 sm:my-4 w-full" />

          <section id="projects" className="min-h-[90vh] sm:min-h-screen bg-transparent py-4">
            <Projects />
          </section>

          <hr className="border-[var(--accent-color)] opacity-30 my-2 sm:my-4 w-full" />

          <section id="contact" className="min-h-[90vh] sm:min-h-screen bg-transparent py-4">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;