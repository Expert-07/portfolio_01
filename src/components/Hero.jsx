//import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter"; 
import React, { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";


import DecryptedText from './DecryptedText';

{/* Example 1: Defaults (hover to decrypt) */}
<DecryptedText text="Hover me!" />

{/* Example 2: Customized speed and characters */}
<DecryptedText
text="Customize me"
speed={100}
maxIterations={20}
characters="ABCD1234!?"
className="revealed"
parentClassName="all-letters"
encryptedClassName="encrypted"
/>

{/* Example 3: Animate on view (runs once) */}
<div style={{ marginTop: '4rem' }}>
<DecryptedText
  text="This text animates when in view"
  animateOn="view"
  revealDirection="center"
/>
</div>

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const opacity = Math.max(1 - scrollY / 300, 0);
  const scale = Math.max(1 - scrollY / 1000, 0.8);

  return (
    <section className="min-h-screen 
    flex items-center justify-center 
    bg-gradient-to-b from-[#031531] 
    to-black px-6 text-white sticky top-0 z-0" style={{ opacity, transition: "opacity 0.02s ease-in-out",
     }}>
      <Parallax speed={-20}>
      <div className="text-center max-w-2xl z-inset-0">
      {/*<Parallax speed={-20}>*/}

        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold"
        >
            <h1 className="text-4xl md:text-6xl font-orbitron" style={{ transform: `scale(${scale})` }} >Hi, I’m Gideon</h1>

        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg md:text-xl text-gray-300"
        >
        <p className="font-sans" style={{ transform: `scale(${scale})` }} >A passionate Full‑Stack Developer who loves building beautiful web experiences.</p>
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
     {/* </Parallax>*/}
      </div>
      </Parallax>
    <p className="absolute bottom-10 animate-bounce text-gray-400 text-sm">Scroll Down</p>
    </section>
  );

}
