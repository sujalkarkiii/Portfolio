import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-black text-white py-16 border-t border-b border-white/20"
    >
      {/* Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Projects</h2>
        <p className="text-gray-400 text-lg">
          Some of the things I’ve built using modern technologies.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Project 1 */}
        <div className="p-6 bg-gray-800 rounded-xl shadow-lg transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:bg-gray-1200">
          <h3 className="text-xl font-bold mb-2">Classic Game GUI</h3>
          <p className="text-gray-400 mb-4">
            High-performance 2D game engine with modern C++ and SFML graphics library.
          </p>

          <div className="flex flex-wrap gap-2">
            {["C++", "SFML", "Game Dev"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-gray-700 rounded-full transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-600 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Project 2 */}
        <div className="p-6 bg-gray-800 rounded-xl shadow-lg transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:bg-gray-1200">
          <h3 className="text-xl font-bold mb-2">Recipe Sharing App</h3>
          <p className="text-gray-400 mb-4">
            A full-stack app where users can share and discover recipes.
          </p>

          <div className="flex flex-wrap gap-2">
            {["MongoDB", "Express", "Node.js", "React"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-gray-700 rounded-full transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-600 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Centered Button */}
      <div className="flex justify-center mt-8">
        <Link to="/projects">
          <button className="px-6 py-2 bg-gray-800 text-white rounded-xl shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-700">
            View All Projects
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
