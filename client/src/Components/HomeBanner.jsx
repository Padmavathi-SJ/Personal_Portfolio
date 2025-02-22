import devImage from "../assets/home3.jpg";
import cImage from "../assets/letter-c.png";
import javaImage from "../assets/java.png";
import sqlImage from "../assets/sql-server.png";
import awsImage from "../assets/AWS.png";
import dockerImage from "../assets/docker.png";
import reactImage from "../assets/react.png";
import nodeImage from "../assets/nodejs.png";
import githubImage from "../assets/github.png";
import mongoImage from "../assets/java-script.png";
import tsImage from "../assets/git.png";
import pythonImage from "../assets/mysql.png";
import kubernetesImage from "../assets/html-5.png";

const HomeBanner = () => {
  return (
    <div className="flex items-center justify-center w-full py-16 bg-transparent">
      <div className="grid grid-cols-2 gap-8 w-3/4 max-w-6xl items-center">
        
        {/* Left Side (To Be Implemented Next) */}
        <div className="flex flex-col"></div>

        {/* Right Side - Main Image & Skills */}
        <div className="relative flex justify-center items-center">
          
          {/* Main Image with Floating & Hover Effects */}
          <div className="relative w-80 h-96 transition-transform duration-700 transform hover:scale-110 hover:rotate-3 hover:shadow-2xl animate-floatSlow">
            <img
              src={devImage}
              alt="Developer"
              className="w-full h-full object-cover rounded-lg shadow-2xl border border-gray-500"
            />
          </div>

          {/* Skill Images - More Dynamic Positions & Animations */}
          <div className="absolute flex flex-wrap justify-center items-center w-full h-full">
            <img src={cImage} alt="C" className="absolute top-0 left-10 w-14 h-14 shadow-lg animate-bounceSlow" />
            <img src={javaImage} alt="Java" className="absolute top-12 right-14 w-16 h-16 shadow-lg animate-pulseFast" />
            <img src={sqlImage} alt="SQL" className="absolute bottom-14 left-6 w-14 h-14 shadow-lg animate-spinSlow" />
            <img src={awsImage} alt="AWS" className="absolute bottom-0 left-14 w-16 h-16 shadow-lg animate-floatFast" />
            <img src={dockerImage} alt="Docker" className="absolute top-28 left-20 w-14 h-14 shadow-lg animate-wiggle" />
            <img src={reactImage} alt="React" className="absolute top-44 right-10 w-14 h-14 shadow-lg animate-rotateFast" />
            <img src={nodeImage} alt="Node.js" className="absolute bottom-28 right-24 w-16 h-16 shadow-lg animate-floatMid" />
            <img src={githubImage} alt="GitHub" className="absolute top-4 right-4 w-14 h-14 shadow-lg animate-shake" />
            <img src={mongoImage} alt="MongoDB" className="absolute bottom-10 right-16 w-16 h-16 shadow-lg animate-floatMid" />
            <img src={tsImage} alt="TypeScript" className="absolute top-36 left-5 w-14 h-14 shadow-lg animate-pulseFast" />
            <img src={pythonImage} alt="Python" className="absolute bottom-6 left-40 w-16 h-16 shadow-lg animate-bounceSlow" />
            <img src={kubernetesImage} alt="Kubernetes" className="absolute top-20 right-20 w-14 h-14 shadow-lg animate-spinSlow" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeBanner;
