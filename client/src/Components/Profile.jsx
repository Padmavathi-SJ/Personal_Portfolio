import devImage from "../assets/about.jpg"; // Add your image

const Profile = () => {
  return (
    <div className="flex items-center justify-center w-full py-16 bg-transparent">
      <div className="flex w-3/4 max-w-6xl items-center justify-between">
        {/* Left Content (About Section) */}
        <div className="w-3/4 pr-10">
          <h2 className="text-4xl font-semibold text-gray-200 mb-6">
            About <span className="text-[#00FFC6]">Padmavathi SJ</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            I am a <span className="text-[#00FFC6] font-semibold">Full Stack Developer</span>  
            with strong expertise in <span className="text-yellow-400 font-semibold">problem-solving, data structures, and algorithms</span>. 
            My focus is on building <span className="text-gray-400 text-lg leading-relaxed">scalable and high-performance web applications</span>  
            using <span className="text-cyan-400 font-semibold">React, Node.js, and AWS</span>.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mt-4">
            Beyond development, I am passionate about  
            <span className="text-gray-400 text-lg leading-relaxed"> competitive programming</span>, 
            <span className="text-gray-400 text-lg leading-relaxed"> open-source contributions</span>,  
            and staying up-to-date with the  
            <span className="text-cyan-400 font-semibold"> latest technology trends</span>.  
            My goal is to develop <span className="text-yellow-400 font-semibold">efficient and innovative solutions</span>  
            while continuously sharpening my skills.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mt-4">
            Let’s <span className="text-[#00FFC6] font-semibold">connect and collaborate</span> to build something impactful! 🚀
          </p>
        </div>

        {/* Right Image & Text Box Section */}
        <div className="relative flex flex-col items-center">
          {/* Developer Image - Adjusted Size for Balance */}
          <div className="relative w-56 h-56 rounded-xl overflow-hidden border border-gray-500 shadow-[0_0_25px_#1E90FF]">
            <img
              src={devImage}
              alt="Developer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name Box - Below Image */}
          <div className="mt-6 px-6 py-2 text-lg font-semibold text-gray-200 border border-gray-500 rounded-md w-52 text-center shadow-[0_0_15px_#00BFFF]">
            Padmavathi SJ
          </div>

          {/* Passion Box - Offset from Middle of Name Box */}
          <div className="mt-3 px-6 py-2 text-md font-medium text-gray-200 border border-blue-500 rounded-md w-56 text-center shadow-[0_0_15px_#FF4500] relative -left-6">
            Full Stack Developer
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
