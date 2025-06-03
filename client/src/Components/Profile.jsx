import devImage from "../assets/about.jpg";
import "./global.css";

const Profile = () => {
  return (
    <div className="flex items-center justify-center w-full py-8 md:py-16 bg-transparent px-4">
      <div className="flex flex-col md:flex-row w-full md:w-3/4 max-w-6xl items-center justify-between gap-8">
        {/* Right Image & Text Box Section - Now comes first on mobile */}
        <div className="relative flex flex-col items-center order-1 md:order-2 w-full md:w-auto">
          {/* Developer Image */}
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-xl overflow-hidden border border-gray-500 shadow-[0_0_25px_#1E90FF]">
            <img
              src={devImage}
              alt="Developer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name Box */}
          <div className="mt-4 md:mt-6 px-4 py-2 text-base md:text-lg font-semibold text-gray-200 border border-gray-500 rounded-md w-full max-w-[208px] text-center shadow-[0_0_15px_#00BFFF]">
            Padmavathi SJ
          </div>

          {/* Passion Box */}
          <div className="mt-2 md:mt-3 px-4 py-2 text-sm md:text-md font-medium text-gray-200 border border-blue-500 rounded-md w-full max-w-[224px] text-center shadow-[0_0_15px_#FF4500] md:relative md:-left-6">
            Full Stack Developer
          </div>
        </div>

        {/* Left Content (About Section) - Comes after image on mobile */}
        <div className="order-2 md:order-1 w-full md:w-3/4 md:pr-10">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-200 mb-4 md:mb-6">
            I'm <span className="text-[#00FFC6]">Padmavathi SJ</span>
          </h2>

          <p className="text-white text-sm md:text-base leading-relaxed">
            I am a Computer Science and Engineering student with a 
            strong passion for Full Stack Development, specializing 
            in React.js, Node.js, Express.js, and MySQL. I focus on 
            building scalable, high-performance web applications while 
            continuously refining my skills in modern web technologies. 
            With a keen eye for clean, maintainable code and a user-centric 
            approach, I strive to develop seamless and efficient digital solutions.
          </p>

          <br />

          <h2 className="text-2xl md:text-4xl font-semibold text-gray-200 mb-4 md:mb-6">
            Why To Choose Me?
          </h2>

          <p className="text-white text-sm md:text-base leading-relaxed">
            I specialize in full-stack development with expertise in React.js, 
            Node.js, Express.js, and MySQL, ensuring seamless integration and 
            high-performance applications. Committed to continuous learning, I 
            stay updated with the latest web development trends to build scalable, 
            efficient, and user-friendly solutions tailored to business needs.
          </p>

          <p className="text-white text-base md:text-lg leading-relaxed mt-4">
            Let's <span className="text-[#00FFC6] font-semibold">connect and collaborate</span> to build something impactful! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;