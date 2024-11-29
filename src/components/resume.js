import React from "react";
import { FaFileDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-100 dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">My Resume</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Click the button below to view or download my resume.
      </p>
      <a
        href="/resume/Mittal_Suthar_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg text-lg shadow hover:bg-blue-700 transition-colors duration-300"
      >
        <FaFileDownload className="mr-2" />
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
