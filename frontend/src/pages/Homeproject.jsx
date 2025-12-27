const Homeproject = () => {
  return (
    <>
      <section>
        <div className="bg-black text-white min-h-screen w-full py-8">


          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Projects</h2>
            <p className="text-gray-400 text-lg">
              Some of the things I’ve built using modern technologies.
            </p>
          </div>

          {/* Projects Container */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col gap-8">

            {/* Project 1 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 bg-gray-800 rounded-xl shadow-lg transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:bg-gray-1200">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Classic Game GUI</h3>
                <p className="text-gray-400 mb-4">
                  High-performance 2D game engine with modern C++ and SFML graphics library.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["C++", "SFML", "Game Dev"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-gray-700 rounded-full transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-600 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 bg-gray-800 rounded-xl shadow-lg transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:bg-gray-1200">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Recipe Sharing App</h3>
                <p className="text-gray-400 mb-4">
                  A full-stack app where users can share and discover recipes.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["MongoDB", "Express", "Node.js", "React"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-gray-700 rounded-full transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-600 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Homeproject;
