import { div } from "framer-motion/client";
import React from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaGitAlt,
    FaCode,
    FaPython,
} from "react-icons/fa";
import { SiVite } from "react-icons/si";

export default function Skills() {
    const Skills = [
        { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
        { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" /> },
        { name: 'React', icon: <FaReact className="text-blue-500" /> },
        { name: 'NodeJs', icon: <FaNodeJs className="text-green-500" /> },
        { name: 'Express.js', icon: <FaNodeJs className="text-green-500" /> },
        { name: 'PostgreSQL', icon: <FaDatabase className="text-blue-500" /> },
        { name: 'TailwindCSS', icon: <FaCss3Alt className="text-blue-500" /> },
        { name: 'Git & GitHub', icon: <FaGitAlt className="text-orange-500" /> },
        { name: 'Vite', icon: <SiVite className="text-blue-500" /> },
        { name: 'REST APIs', icon: <FaCode className="text-yellow-500" /> },
        { name: 'Python', icon: <FaPython className="text-blue-500" /> },
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
                 space-y-8
                 shadow hover:scale-105 
                transition-transform" 
                data-aos="zoom-in" 
                data-aos-delay={index * 100} data-aos-duration="500"
                >{skill.icon}{skill.name}</div>
            ))}
        </section>
    )
}