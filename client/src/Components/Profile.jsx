import devImage from "../assets/about.jpg"; // Add your image

const Profile = () => {
  return (
    <div className="flex items-center justify-center w-full py-16 bg-transparent">
      <div className="flex w-3/4 max-w-6xl items-center justify-between">
        {/* Left Content (About Section) */}
        <div className="w-3/4 pr-10">
          <h2 className="text-4xl font-semibold text-gray-200 mb-6">
            I'm <span className="text-[#00FFC6]">Padmavathi SJ</span>
          </h2>

          <p className="text-white text-1xl leading-relaxed">
          I am a Computer Science and Engineering student with a 
          strong passion for Full Stack Development, specializing 
          in React.js, Node.js, Express.js, and MySQL. I focus on 
          building scalable, high-performance web applications while 
          continuously refining my skills in modern web technologies. 
          With a keen eye for clean, maintainable code and a user-centric 
          approach, I strive to develop seamless and efficient digital solutions.
          </p>
          <br></br>

          <h2 className="text-4xl font-semibold text-gray-200 mb-6">
            Why To Choose Me?
          </h2>

          <p className="text-white text-1xl leading-relaxed mt-4">
          I specialize in full-stack development with expertise in React.js, 
          Node.js, Express.js, and MySQL, ensuring seamless integration and 
          high-performance applications. Committed to continuous learning, I 
          stay updated with the latest web development trends to build scalable, 
          efficient, and user-friendly solutions tailored to business needs.
          </p>

          <p className="text-white text-lg leading-relaxed mt-4">
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
