import devImage from "../assets/about.jpg"; // Add your image

const Profile = () => {
  return (
    <div className="flex items-center justify-center w-full py-12 bg-transparent">
      <div className="flex w-3/4 max-w-6xl">
        {/* Left Content (3/4 Width) */}
        <div className="w-3/4 pr-8">
          <h2 className="text-4xl font-semibold text-gray-200 mb-6">About Me</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            I am a passionate Full Stack & Cloud Developer specializing in modern web technologies.
            My expertise includes building scalable applications using React, Node.js, and cloud services like AWS.
            With a strong foundation in problem-solving and data structures, I strive to develop efficient and optimized solutions.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mt-4">
            I enjoy contributing to open-source projects, staying up-to-date with the latest tech trends, and continuously improving my skills.
            Let’s connect and collaborate to build amazing projects together!
          </p>
        </div>

        {/* Right Image Section (1/4 Width) */}
        <div className="w-1/4 flex justify-center relative">
          <div className="relative">
            {/* Decorative Background Shapes */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-blue-600 opacity-30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-pink-500 opacity-40 rounded-full animate-bounce"></div>
            
            {/* Developer Image */}
            <img
              src={devImage}
              alt="Developer"
              className="relative z-10 w-40 h-40 rounded-full shadow-lg border-4 border-gray-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
