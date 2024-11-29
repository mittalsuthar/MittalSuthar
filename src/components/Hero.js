import React from "react";
import { FaJava, FaReact, FaJsSquare, FaDatabase, FaGitAlt } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 text-center py-20 px-5">
            <div className="max-w-4xl mx-auto">
                {/* Main Name with Styling */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate__animated animate__fadeIn font-spartan">
                    Hi, I'm Mittal Suthar
                </h1>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-400 mt-6 text-lg md:text-xl animate__animated animate__fadeIn animate__delay-1s font-spartan">
                    A passionate <span className="text-blue-500 font-semibold">Software Developer</span> skilled in
                    <span className="text-purple-500 font-semibold"> React.js</span> and modern UI/UX design.
                </p>

                {/* Decorative Line */}
                <div className="mt-4 mb-8 h-1 w-full mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>



            </div>

            {/* Skills Section */}
            <div className="mt-10">
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-blue-500 font-semibold mb-6 animate__animated animate__fadeIn animate__delay-2s font-spartan">
                    My Skills
                </h2>
                <ul className="flex flex-wrap justify-center items-center gap-6">
                    <li className="flex items-center justify-center text-lg transition-transform transform hover:scale-105 hover:text-blue-500">
                        <FaJava className="text-yellow-600 text-3xl mr-2" />
                        <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-full font-spartan">
                            Core Java
                        </span>
                    </li>
                    <li className="flex items-center justify-center text-lg transition-transform transform hover:scale-105 hover:text-blue-500">
                        <FaReact className="text-blue-500 text-3xl mr-2" />
                        <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-full font-spartan">
                            ReactJs
                        </span>
                    </li>
                    <li className="flex items-center justify-center text-lg transition-transform transform hover:scale-105 hover:text-blue-500">
                        <FaJsSquare className="text-yellow-500 text-3xl mr-2" />
                        <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-full font-spartan">
                            JavaScript
                        </span>
                    </li>
                    <li className="flex items-center justify-center text-lg transition-transform transform hover:scale-105 hover:text-blue-500">
                        <FaDatabase className="text-green-500 text-3xl mr-2" />
                        <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-full font-spartan">
                            SQL
                        </span>
                    </li>
                    <li className="flex items-center justify-center text-lg transition-transform transform hover:scale-105 hover:text-blue-500">
                        <FaGitAlt className="text-red-500 text-3xl mr-2" />
                        <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-full font-spartan">
                            Git
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Hero;
