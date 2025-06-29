import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter"; 


export default function Hero() {
  return (
    <section className="min-h-screen 
    flex items-center justify-center 
    bg-gradient-to-b from-[#031531] 
    to-black px-6 text-white">
      <div className="text-center max-w-2xl">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Hi, I’m Gideon
        </motion.h1>
    
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg md:text-xl text-gray-300"
        >
          A passionate Full‑Stack Developer who loves building beautiful web experiences.
        </motion.p>

        <motion.a
          href="#projects"
          whileHover={{ scale: 1.1 }}
          className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-2xl shadow-lg transition-all"
        >
          View My Work
        </motion.a>
        <h2 className="text-2xl md:text-3xl font-bold mt-12">
          <Typewriter
            words={["Web Developer", "UI/UX Designer", "Tech Enthusiast"]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
      </div>
    </section>
  );
}
