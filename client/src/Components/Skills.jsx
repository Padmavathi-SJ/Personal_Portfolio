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
import awsIcon from "../assets/AWS.png"; // AWS Icon Added

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
  { name: "Docker", icon: dockerIcon, level: 60 },
  { name: "AWS Cloud", icon: awsIcon, level: 75 }, // AWS Cloud Service Added
];

const Skills = () => {
  return (
    <div className=""
>
      {/* Title & Subtitle */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[var(--primary-text)]">My Technical Skills</h2>
        <p className="text-lg text-gray-500 mt-2">Proficiency Levels in Various Technologies</p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-[var(--secondary-bg)] p-4 rounded-lg shadow-md flex items-center space-x-4"
          >
            {/* Skill Icon */}
            <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
            
            {/* Skill Details */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-[var(--primary-text)]">{skill.name}</h3>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                <div
                  className="bg-[var(--accent-color)] h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              
              {/* Percentage Level */}
              <span className="text-sm text-gray-500">{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
