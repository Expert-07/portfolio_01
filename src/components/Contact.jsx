import React from "react";
import { Parallax } from "react-scroll-parallax";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen  bg-white dark:bg-[#000510] py-20 px-20 text-center text-gray-900 dark:text-white">
      {/*<Parallax speed={300}>*/}
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="mb-10 text-gray-600 dark:text-gray-400">
          I’d love to hear from you! Whether you have a question, want to work together, or just want to say hi, feel free to drop me a message.
        </p>

 
        <form className="max-w-xl mx-auto grid gap-4">
          <input
            type="text"
            placeholder="Your Name"
          className="p-3 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
          required
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-3 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
          required
        />
        <button type="submit" className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
      {/*</Parallax>*/}
    </section>
  );
}
