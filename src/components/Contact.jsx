import React from "react";
import { Parallax } from "react-scroll-parallax";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen dark:bg-gradient-to-b from-[#000000] to-[#0f172b] py-20 px-20 text-center text-gray-900 dark:text-white rounded-3xl z-10">
      {/*<Parallax speed={300}>*/}
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="mb-10 text-gray-600 dark:text-gray-400 animate-bounce">
          I’d love to hear from you! Whether you have a question, want to work together, or just want to say hi, feel free to drop me a message.
        </p>

 
        <form className="max-w-xl mx-auto grid gap-4">
          <input
            type="text"
            placeholder="Your Name"
          className="p-3 rounded bg-black text-black dark:text-white font-mono"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded bg-black text-black dark:text-white font-mono"
          required
        />
        <textarea
          placeholder="Your Message"
          rows="15"
          className="p-3 rounded dark:bg-gradient-to-b from-black to-[#0f172b] text-black dark:text-white font-mono"
          required
          
        />
        <button type="submit" className="bg-blue-700 text-white py-3 rounded hover:bg-blue-600">
          Send Message
        </button>
      </form>
      {/*</Parallax>*/}
    </section>
  );
}
