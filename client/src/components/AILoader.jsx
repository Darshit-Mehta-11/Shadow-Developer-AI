import { motion } from "framer-motion";

const loadingTexts = [
  "Scanning GitHub repositories...",
  "Analyzing coding behavior...",
  "Detecting developer patterns...",
  "Building AI personality model...",
  "Calculating internship readiness...",
];

const AILoader = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">

      {/* Rotating Circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
        className="w-24 h-24 border-4 border-cyan-400 border-t-transparent rounded-full"
      />

      {/* Loading Texts */}
      <div className="mt-10 space-y-4">

        {loadingTexts.map((text, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.5, 1] }}
            transition={{
              duration: 2,
              delay: index * 0.5,
              repeat: Infinity,
            }}
            className="text-cyan-300 text-lg tracking-wide"
          >
            {text}
          </motion.p>
        ))}

      </div>

    </div>
  );
};

export default AILoader;