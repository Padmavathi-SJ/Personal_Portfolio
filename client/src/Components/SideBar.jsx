import { Home, User, Briefcase, Award, Mail, Code } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="fixed top-40 left-20 h-50 w-16 flex flex-col items-center bg-gray-800 text-white shadow-lg p-4 space-y-6">
      <Home size={28} className="hover:text-blue-400 cursor-pointer" />
      <User size={28} className="hover:text-blue-400 cursor-pointer" />
      <Code size={28} className="hover:text-blue-400 cursor-pointer" />
      <Briefcase size={28} className="hover:text-blue-400 cursor-pointer" />
      <Award size={28} className="hover:text-blue-400 cursor-pointer" />
      <Mail size={28} className="hover:text-blue-400 cursor-pointer" />
    </div>
  );
};

export default Sidebar;
