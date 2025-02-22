import devImage from "../assets/home3.jpg";
import cImage from "../assets/letter-c.png";
import javaImage from "../assets/java.png";
import sqlImage from "../assets/sql-server.png";
import awsImage from "../assets/AWS.png";
import dockerImage from "../assets/docker.png";

const HomeBanner = () => {
  return (
    <div className="flex items-center justify-center w-full py-16 bg-transparent">
      <div className="grid grid-cols-2 gap-8 w-3/4 max-w-6xl items-center">
        {/* Right Side - Main Image & Skills */}
        <div className="relative flex justify-center items-center">
          {/* Main Image */}
          <div className="relative w-66 h-96 ">
            <img
              src={devImage}
              alt="Developer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Skill Images Positioned Around Main Image */}
          <div className="absolute flex flex-wrap justify-center items-center w-full h-full">
            <img src={cImage} alt="C" className="absolute top-4 left-0 w-14 h-14 shadow-lg" />
            <img src={javaImage} alt="Java" className="absolute top-8 right-2 w-16 h-16 shadow-lg" />
            <img src={sqlImage} alt="SQL" className="absolute bottom-12 left-4 w-14 h-14 shadow-lg" />
            <img src={awsImage} alt="AWS" className="absolute bottom-4 right-8 w-16 h-16 shadow-lg" />
            <img src={dockerImage} alt="Docker" className="absolute top-28 left-20 w-14 h-14 shadow-lg" />
          </div>
        </div>

        {/* Left Side (To Be Implemented Next) */}
        <div className="flex flex-col"></div>
      </div>
    </div>
  );
};

export default HomeBanner;
