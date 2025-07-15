import React from "react"
import { FaLinkedin, FaInstagram, FaGithub} from "react-icons/fa"

export default function ContactLinks() {
    return(
<div className="mt-16 text-gray-900 dark:text-white text-center bg-white dark:bg-gray-900/20 backdrop-blur-md p-6 rounded-lg shadow-lg">
        <ul className="flex space-x-4">
            <li>
                <a href="https://www.linkedin.com/in/gideonsoala/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:scale-105 transition-transform duration- 300 ">
                    <FaLinkedin className="text-gray-500" />
                    <span className="text-gray-900 dark:text-gray-400">LinkedIn</span>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/gideonsoala/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:scale-105 transition-transform duration- 300 ">
                    <FaInstagram className="text-gray-500" />
                    <span>Instagram</span>
                </a>
            </li>
            <li>
                <a href="https://github.com/gideonsoala" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:scale-105 transition-transform duration- 300 ">
                    <FaGithub className="text-gray-800" />
                    <span>GitHub</span>
                </a>
            </li>
        </ul>
    </div>
    )
}