import React from "react";
const projects = [
  {
    title: "Crypto Investment Site",
    description: "A secure broker platform built with Node.js, PostgreSQL, and Express.",
    link: "#",
  },
  {
    title: "Campus Buddy",
    description: "An interactive student helper with reminders, campus map, and study tracker.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-100 dark:bg-[#1e293b] py-20 px-6 text-center text-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
        {projects.map((project, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 font-medium"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
