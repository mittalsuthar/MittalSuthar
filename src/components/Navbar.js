import React from "react";
import { Link } from "react-router-dom"; 

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex items-center justify-between">
      {/* Main Name Section */}
      <ul className="flex space-x-4">
        <li>
          <Link
            to="/"
            className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Portfolio
          </Link>
        </li>
      </ul>

      {/* Section for buttons aligned to the right */}
      <div className="ml-auto flex space-x-4">
        {/* Dark mode toggle button */}
        <button
          onClick={toggleTheme}
          className="bg-transparent text-white p-2 rounded transition duration-300 ease-in-out transform hover:scale-110 hover:text-yellow-400"
        >
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
        <Link
          to="/resume/Mittal_Suthar_Resume.pdf"
          target="_blank"
          className="text-white p-2 rounded transition duration-300 ease-in-out transform hover:scale-110 hover:text-green-400"
        >
          Resume
        </Link>

        {/* Contact button */}
        <Link
          to="/contact"
          className="text-white p-2 rounded transition duration-300 ease-in-out transform hover:scale-110 hover:text-green-400"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
