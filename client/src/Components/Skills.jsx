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
import dockerIcon from "../assets/docker.png";
import awsIcon from "../assets/aws-cloud.png";
import "./global.css";


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
  { name: "Docker", icon: dockerIcon, level: 80 },
  { name: "AWS", icon: awsIcon, level: 80 },


];

const Skills = () => {
  return (
    <div className="py-8 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-transparent">
      <div className="text-center mb-6 md:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200">Technical Skills</h2>
      </div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="relative flex items-center border border-[#99c2ff] rounded-lg p-2 sm:p-3 md:p-4
              bg-[rgba(255,255,255,0.05)] backdrop-blur-lg shadow-sm md:shadow-md transition-all 
              transform hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/50"
            whileHover={{ scale: 1.02 }}
          >
            <img src={skill.icon} alt={skill.name} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-cover rounded-md shadow-sm mr-2 sm:mr-3 md:mr-4" />
            <div className="flex-1 min-w-0">
              <h3 className="text-xs sm:text-sm md:text-base font-medium text-gray-100 truncate">{skill.name}</h3>
              <div className="w-full bg-gray-300 rounded-full h-1 sm:h-1.5 md:h-2 mt-1 sm:mt-2">
                <div
                  className="bg-[#99c2ff] h-full rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-400">{skill.level}%</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
export default Skills;
