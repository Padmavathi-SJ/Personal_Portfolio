import devImage from "../assets/Home.jpg";
import cImage from "../assets/letter-c.png";
import javaImage from "../assets/java.png";
import sqlImage from "../assets/sql-server.png";
import awsImage from "../assets/AWS.png";
import dockerImage from "../assets/docker.png";

const HomeBanner = () => {
  return (
    <div className="w-full flex items-center justify-center py-16 bg-transparent">
      <div className="grid grid-cols-2 gap-8 w-3/4 max-w-6xl">
        {/* Right Side - Main Image with Surrounding Skills */}
        <div className="relative flex items-center justify-center">
          {/* Main Developer Image */}
          <div className="relative w-60 h-60 rounded-full overflow-hidden border-4 border-gray-500 shadow-lg">
            <img
              src={devImage}
              alt="Developer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Surrounding Skill Images */}
          <div className="absolute w-full h-full flex items-center justify-center">
            {/* Skill Icons Positioned Around the Main Image */}
            <img
              src={cImage}
              alt="C"
              className="absolute top-0 left-10 w-12 h-12 drop-shadow-lg"
            />
            <img
              src={javaImage}
              alt="Java"
              className="absolute top-10 right-0 w-14 h-14 drop-shadow-lg"
            />
            <img
              src={sqlImage}
              alt="SQL"
              className="absolute bottom-0 left-14 w-12 h-12 drop-shadow-lg"
            />
            <img
              src={awsImage}
              alt="AWS"
              className="absolute bottom-10 right-10 w-16 h-16 drop-shadow-lg"
            />
            <img
              src={dockerImage}
              alt="Docker"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-14 h-14 drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
