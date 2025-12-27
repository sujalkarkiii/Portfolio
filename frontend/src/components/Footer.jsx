import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">


        {/* Links */}
        <div className="flex gap-4">
          <a href="#projects" className="hover:text-yellow-400 cursor-pointer flex items-center gap-1">
            <IoLogoLinkedin /> 
          </a>
          <a href="#skills" className="hover:text-yellow-400 cursor-pointer flex items-center gap-1">
            <MdOutlineEmail /> 
          </a>
          <a
            href="https://github.com/sujalkarkiii"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 cursor-pointer flex items-center gap-1"
          >
            <FaGithub /> 
          </a>
        </div>

        {/* Copyright */}
        <div className="text-gray-400 text-sm mt-2 md:mt-0">
          © {new Date().getFullYear()} Sujal Karki. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
