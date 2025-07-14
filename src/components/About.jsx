
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

import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';

export default function About() {
  return (
    <section className="dark:bg-gradient-to-b from-[#000000] to-[#0f172b]  py-20 px-6 text-center text-gray-800 dark:text-white rounded-3xl">
      <h2 className="text-3xl font-bold mb-6">
        <DecryptedText
text="About Me"
speed={70}
maxIterations={20}
characters="AboutMeAboutMeAboutMeAboutMe!@#$%^&*"
className="revealed "
parentClassName="all-letters"
encryptedClassName="encrypted"
animateOn='view'
        />
        </h2>
      <p className="max-w-2xl mx-auto text-lg">
        I'm a Full-Stack Developer passionate about building efficient, scalable, and beautiful digital solutions.
        With a strong foundation in JavaScript, React, Node.js, and PostgreSQL, I enjoy solving real-world problems and constantly learning new tech.
      </p>
    </section>
  );
}
