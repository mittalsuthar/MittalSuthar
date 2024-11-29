import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6 p-4 bg-gray-800 rounded-xl shadow-lg">
      <a
        href="https://www.linkedin.com/in/mittal-suthar-50943a136/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-4xl transform transition-transform duration-300 hover:scale-110 hover:bg-blue-600 p-2 rounded-full hover:text-white"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://github.com/mittalsuthar"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-4xl transform transition-transform duration-300 hover:scale-110 hover:bg-gray-700 p-2 rounded-full hover:text-white"
      >
        <FaGithub />
      </a>

      <a
        href="https://wa.me/7340193477"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-4xl transform transition-transform duration-300 hover:scale-110 hover:bg-green-500 p-2 rounded-full hover:text-white"
      >
        <FaWhatsapp />
      </a>

      <a
        href="mailto:mittalsuthar55@gmail.com"
        className="text-white text-4xl transform transition-transform duration-300 hover:scale-110 hover:bg-red-500 p-2 rounded-full hover:text-white"
      >
        <FaEnvelope />
      </a>
    </div>
  );
};

export default SocialLinks;