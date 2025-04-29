import { Typewriter } from "react-simple-typewriter";
import devImage from "../assets/home3.jpg";
import cImage from "../assets/letter-c.png";
import javaImage from "../assets/java.png";
import sqlImage from "../assets/sql-server.png";
import awsImage from "../assets/AWS.png";
import dockerImage from "../assets/docker.png";
import reactImage from "../assets/react.png";
import nodeImage from "../assets/nodejs.png";
import mongoImage from "../assets/java-script.png";
import tsImage from "../assets/git.png";
import pythonImage from "../assets/mysql.png";
import kubernetesImage from "../assets/html-5.png";

const HomeBanner = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen bg-transparent pt-16 md:pt-0 px-4">

      {/* Quote Box - Adjusted for mobile */}
      <div className="absolute top-16 md:top-10 flex justify-center w-full px-2">
        <div className="text-white px-4 py-2 rounded-lg shadow-md text-center text-sm md:text-lg font-semibold border border-gray-500">
          <span className="text-xl md:text-3xl text-yellow-300 font-bold">
            <Typewriter
              words={["If you want to shine like a Sun, first burn like a Sun!"]}
              loop={true}
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </span>
        </div>
      </div>

      {/* Main Banner Section - Stacked on mobile, side-by-side on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-3/4 max-w-6xl items-center mt-20 md:mt-0">
        
        {/* Left Side - Developer Info */}
        <div className="flex flex-col space-y-4 text-white order-2 md:order-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Hi, I'm <span className="text-blue-400">Padmavathi SJ</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-yellow-200">
            Full Stack Developer
          </h2>
          <p className="text-sm md:text-base text-white">
            I build dynamic, scalable web applications using 
            <span className="text-blue-400 font-semibold"> React, Node.js,</span> and 
            <span className="text-blue-400 font-semibold"> cloud technologies</span>. 
            Passionate about problem-solving, backend optimization, and deploying 
            efficient solutions in the cloud.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="https://github.com/Padmavathi-SJ/PadmavathiSJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold px-4 py-2 text-sm md:text-base md:px-5 md:py-2 rounded-lg shadow-lg border border-blue-500 transition-all duration-300"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Right Side - Main Image & Skills */}
        <div className="relative flex justify-center items-center order-1 md:order-2">
          
          {/* Main Image - Smaller on mobile */}
          <div className="relative w-64 h-80 md:w-80 md:h-96 transition-transform duration-700 transform hover:scale-110 hover:rotate-3 hover:shadow-2xl animate-floatSlow">
            <img
              src={devImage}
              alt="Developer"
              className="w-full h-full object-cover rounded-lg shadow-2xl border border-gray-500"
            />

            {/* Skill Images on Main Image - Smaller on mobile */}
            <img src={reactImage} alt="React" className="absolute top-2 left-8 w-10 h-10 md:w-14 md:h-14 shadow-lg animate-spinSlow" />
            <img src={nodeImage} alt="Node.js" className="absolute bottom-2 right-6 w-12 h-12 md:w-16 md:h-16 shadow-lg animate-floatFast" />
          </div>

          {/* Floating Skill Images - Fewer on mobile */}
          <div className="hidden md:flex absolute flex-wrap justify-center items-center w-full h-full">
            <img src={cImage} alt="C" className="absolute top-0 left-8 w-14 h-14 shadow-lg animate-bounceSlow" />
            <img src={javaImage} alt="Java" className="absolute bottom-30 right-10 w-16 h-16 shadow-lg animate-pulseFast" />
            <img src={sqlImage} alt="SQL" className="absolute bottom-30 left-6 w-14 h-14 shadow-lg animate-spinSlow" />
            <img src={awsImage} alt="AWS" className="absolute bottom-4 left-16 w-16 h-16 shadow-lg animate-floatFast" />
            <img src={dockerImage} alt="Docker" className="absolute top-24 right-8 w-14 h-14 shadow-lg animate-wiggle" />
            <img src={tsImage} alt="TypeScript" className="absolute top-52 left-20 w-14 h-14 shadow-lg animate-pulseFast" />
            <img src={mongoImage} alt="MongoDB" className="absolute bottom-6 right-12 w-16 h-16 shadow-lg animate-floatMid" />
            <img src={pythonImage} alt="Python" className="absolute top-40 left-32 w-16 h-16 shadow-lg animate-bounceSlow" />
            <img src={kubernetesImage} alt="Kubernetes" className="absolute top-4 right-20 w-14 h-14 shadow-lg animate-spinSlow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;