import { motion } from "framer-motion";

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">

      {/* Blob 1 */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"
      />

      {/* Blob 2 */}
      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"
      />

      {/* Blob 3 */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute top-[40%] left-[40%] w-80 h-80 bg-blue-500/10 blur-3xl rounded-full"
      />

    </div>
  );
};

export default BackgroundEffects;