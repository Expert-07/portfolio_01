import { div } from "framer-motion/client";
import React from "react";

export default function Skills() {
    const Skills = [
        'HTML', 'CSS', 'JavaScript', 'React', 'NodeJs', 'Express.js', 'PostgreSQL', 'TailwindCSS', 'Git & GitHub', 'Vite', 'REST APIs'
    ];

    return (
        <section className="min-h-[60vh] px-4 py-16 bg-white dark:bg-black transition-colors">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Skills</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center"></div>
            {Skills.map((skill, index) => (
                <div
                key={index}
                className="bg-gray-100 
                dark:bg-gray-800 
                text-gray-800
                 dark:text-white
                 p-4 rounded-lg
                 shadow hover:scale-105 
                transition-transform" 
                data-aos="zoom-in" 
                data-aos-delay={index * 100} data-aos-duration="500"
                >{skill}</div>
            ))}
        </section>
    )
}