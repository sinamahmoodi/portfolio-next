import { motion } from "framer-motion";

export default function HeroIcons() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-indigo-600 to-purple-600 overflow-hidden">
      {/* Hero Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Sina</h1>
        <p className="text-xl">Frontend Developer 💻</p>
      </div>

      {/* Floating Emojis */}
      <motion.div
        className="absolute text-6xl"
        style={{ top: "10%", left: "5%" }}
        animate={{ y: [0, 20, 0], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
      >
        ⚛️
      </motion.div>

      <motion.div
        className="absolute text-6xl"
        style={{ top: "30%", left: "70%" }}
        animate={{ y: [0, -20, 0], rotate: [0, -15, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
      >
        🚀
      </motion.div>

      <motion.div
        className="absolute text-6xl"
        style={{ top: "60%", left: "20%" }}
        animate={{ y: [0, 25, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "loop" }}
      >
       💻
      </motion.div>

      <motion.div
        className="absolute text-6xl"
        style={{ top: "80%", left: "50%" }}
        animate={{ y: [0, -15, 0], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, repeatType: "loop" }}
      >
         🔥
      </motion.div>
    </div>
  );
}
