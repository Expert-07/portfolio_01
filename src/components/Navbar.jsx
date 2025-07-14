import React, { useState } from "react";
import { Menu, X} from 'react-feather';
export default function Navbar() {
    const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <nav className="fixed
        top-0
        w-full
        z-50
        bg-white/80
        dark:bg-gray-900/80
        backdrop-blur shadow-sm
        ">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-xl text-blue-600 dark:text-blue-400">{"</Web Developer>"}</h1>
            <ul className="hidden md:flex space-x-6 font-medium">
                {navItems.map((item) => (
                    <li key={item}>
                        <a href={`#${item.toLowerCase()}`}
                        className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"        
                        >{item}</a>
                    </li>
                ))}
            </ul>
            {/*mobile view*/}
            <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 dark:text-gray-200">
                    {menuOpen ? <X size={24} /> : <Menu />}
                </button>
                {menuOpen && (
                    <ul className="py-4 space-y-3">
                        {navItems.map((item) => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase()}`}
                                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"        
                                >{item}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            </div>

        </nav>
    )
}