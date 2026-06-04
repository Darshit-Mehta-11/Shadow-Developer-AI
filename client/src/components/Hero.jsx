import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center mt-28 px-6"
    >

      <motion.h1
        animate={{
          textShadow: [
            "0px 0px 20px #06b6d4",
            "0px 0px 60px #06b6d4",
            "0px 0px 20px #06b6d4",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="text-8xl font-extrabold leading-tight tracking-wide"
      >
        SHADOW
        <br />
        DEVELOPER AI
      </motion.h1>

      <p className="text-gray-400 mt-10 text-2xl max-w-4xl mx-auto leading-relaxed">
        Futuristic AI system that analyzes developer behavior,
        coding psychology, burnout risk, productivity patterns,
        and internship readiness through GitHub intelligence.
      </p>

    </motion.div>
  );
};

export default Hero;