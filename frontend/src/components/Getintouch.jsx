import { IoLogoLinkedin } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

const GetInTouch = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col md:flex-row justify-center gap-8">

        {/* Email */}
        <div className="flex-1 h-52 bg-gray-800 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-gray-1200 flex flex-col items-center justify-center">
          <MdOutlineEmail className="text-3xl mb-2" />
          <a href="mailto:sujalkarki1904@gmail.com" className="text-lg font-semibold">
            Email
          </a>
          <p className="text-gray-400 mt-1">sujalkarki1904@gmail.com</p>
        </div>

        {/* LinkedIn */}
        <div className="flex-1 h-52 bg-gray-800 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-gray-1200 flex flex-col items-center justify-center">
          <IoLogoLinkedin className="text-3xl mb-2" />
          <a
            href="https://www.linkedin.com/in/sujal-karki-33479530b/"
            className="text-lg font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <p className="text-gray-400 mt-1">Sujal Karki</p>
        </div>

        {/* GitHub */}
        <div className="flex-1 h-52 bg-gray-800 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-gray-1200 flex flex-col items-center justify-center">
          <FaGithub className="text-3xl mb-2" />
          <a
            href="https://github.com/sujalkarkiii"
            className="text-lg font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <p className="text-gray-400 mt-1">sujalkarkiii</p>
        </div>

      </div>
    </section>
  );
};

export default GetInTouch;
