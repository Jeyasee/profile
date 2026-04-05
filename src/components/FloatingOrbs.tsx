import { motion } from "framer-motion";

const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large Cyan Orb */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-primary/20 blur-3xl"
        style={{ top: "10%", left: "10%" }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Medium Purple Orb */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-accent/20 blur-3xl"
        style={{ top: "60%", right: "15%" }}
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 30, -20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      {/* Small Blue Orb */}
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-neon-blue/15 blur-2xl"
        style={{ bottom: "20%", left: "25%" }}
        animate={{
          x: [0, 60, -20, 0],
          y: [0, -30, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Extra Orb Top Right */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-primary/10 blur-3xl"
        style={{ top: "30%", right: "5%" }}
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 50, -30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
};

export default FloatingOrbs;
