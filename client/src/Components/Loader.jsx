import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="flex flex-col items-center"
      >
        <Code size={80} className="text-blue-500 mb-4" />
      </motion.div>
    </div>
  );
};

export default Loader;