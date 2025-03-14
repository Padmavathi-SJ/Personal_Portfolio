import { motion } from "framer-motion";
import cIcon from "../assets/letter-c.png";
import javaIcon from "../assets/java.png";
import htmlIcon from "../assets/html-5.png";
import cssIcon from "../assets/css-3.png";
import jsIcon from "../assets/java-script.png";
import reactIcon from "../assets/react.png";
import nodeIcon from "../assets/nodejs.png";
import expressIcon from "../assets/express.png";
import sqlIcon from "../assets/sql-server.png";
import mysqlIcon from "../assets/mysql.png";
import gitIcon from "../assets/git.png";
import githubIcon from "../assets/github.png";


const skillsData = [
  { name: "C", icon: cIcon, level: 85 },
  { name: "Java", icon: javaIcon, level: 90 },
  { name: "HTML", icon: htmlIcon, level: 95 },
  { name: "CSS", icon: cssIcon, level: 95 },
  { name: "JavaScript", icon: jsIcon, level: 80 },
  { name: "React JS", icon: reactIcon, level: 85 },
  { name: "Node JS", icon: nodeIcon, level: 80 },
  { name: "Express JS", icon: expressIcon, level: 85 },
  { name: "SQL", icon: sqlIcon, level: 90 },
  { name: "MySQL", icon: mysqlIcon, level: 85 },
  { name: "Git", icon: gitIcon, level: 95 },
  { name: "GitHub", icon: githubIcon, level: 90 },

];

const Skills = () => {
  return (
    <div className="py-16 px-6 md:px-16 bg-transparent">
      {/* Title & Subtitle */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-200">Technical Skills</h2>
      </div>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="border border-[#99c2ff] rounded-lg bg-[rgba(255,255,255,0.05)] backdrop-blur-lg 
              shadow-md p-4 flex items-center space-x-4 transition-all transform 
              hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/50"
            whileHover={{ scale: 1.02 }}
          >
            {/* Skill Icon */}
            <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
            
            {/* Skill Details */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-100">{skill.name}</h3>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                <div
                  className="bg-[#99c2ff] h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              
              {/* Percentage Level */}
              <span className="text-sm text-gray-400">{skill.level}%</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
