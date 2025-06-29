import React from "react";

export default function Contact() {
  return (
    <section className="bg-white dark:bg-[#0f172a] py-20 px-6 text-center text-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
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
    </section>
  );
}
