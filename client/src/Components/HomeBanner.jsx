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
    <div className="flex items-center justify-center w-full py-16 bg-transparent">
      <div className="grid grid-cols-2 gap-8 w-3/4 max-w-6xl items-center">
        
        {/* Left Side - Developer Info */}
        <div className="flex flex-col space-y-4 text-white">
          <h1 className="text-4xl font-bold text-gray-200">
            Hi, I'm <span className="text-[#00FFC6]">Padmavathi SJ</span>
          </h1>
          <h2 className="text-2xl font-semibold text-gray-300">
            Full Stack & Cloud Developer
          </h2>
          <p className="text-sm text-gray-400">
            Passionate about building high-performance, scalable applications using modern web and cloud technologies.
            Specializing in React, Node.js, and AWS to deliver seamless digital solutions.
          </p>
          <div>
            <a
              href="https://your-portfolio-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00FFC6] text-gray-900 font-semibold px-5 py-2 rounded-lg shadow-lg hover:bg-[#00E6B0] transition-all duration-300"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Right Side - Main Image & Skills */}
        <div className="relative flex justify-center items-center">
          
          {/* Main Image with Floating & Hover Effects */}
          <div className="relative w-80 h-96 transition-transform duration-700 transform hover:scale-110 hover:rotate-3 hover:shadow-2xl animate-floatSlow">
            <img
              src={devImage}
              alt="Developer"
              className="w-full h-full object-cover rounded-lg shadow-2xl border border-gray-500"
            />

            {/* Skill Images on Main Image */}
            <img src={reactImage} alt="React" className="absolute top-2 left-10 w-14 h-14 shadow-lg animate-spinSlow" />
            <img src={nodeImage} alt="Node.js" className="absolute bottom-2 right-8 w-16 h-16 shadow-lg animate-floatFast" />
          </div>

          {/* Floating Skill Images Around Main Image */}
          <div className="absolute flex flex-wrap justify-center items-center w-full h-full">
            <img src={cImage} alt="C" className="absolute top-0 left-8 w-14 h-14 shadow-lg animate-bounceSlow" />
            <img src={javaImage} alt="Java" className="absolute bottom-30 right-10 w-16 h-16 shadow-lg animate-pulseFast" />
            <img src={sqlImage} alt="SQL" className="absolute bottom-30 left-6 w-14 h-14 shadow-lg animate-spinSlow" />
            <img src={awsImage} alt="AWS" className="absolute bottom-4 left-16 w-16 h-16 shadow-lg animate-floatFast" />
            
            {/* 🔄 Moved Docker to the Right Side */}
            <img src={dockerImage} alt="Docker" className="absolute top-24 right-8 w-14 h-14 shadow-lg animate-wiggle" />
            
            {/* 🔄 Moved TypeScript to the Right Side */}
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
