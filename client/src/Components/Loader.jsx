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

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  const iconVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: { duration: 2, ease: "easeOut" },
    },
  };

  const text = "<Padmavathi />".split("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        <motion.div variants={iconVariants}>
          <Code size={100} className="text-blue-500 mb-4" />
        </motion.div>
        <div className="text-3xl font-mono text-blue-400">
          {text.map((char, i) => (
            <motion.span key={i} variants={textVariants} initial="hidden" animate="visible" custom={i}>
              {char}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Loader;
