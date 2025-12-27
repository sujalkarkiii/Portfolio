const Skills = () => {
  return (
    <section className="bg-black text-white border-t border-b border-white/20 py-16">
      
      {/* Section Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Skill Set</h2>
        <p className="text-gray-400 text-lg">
          Technologies and tools I work with across Backend, DevOps, and Databases.
        </p>
      </div>

      {/* Skill Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Backend */}
        <div className="p-6 bg-gray-800 rounded-xl shadow-lg transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:bg-gray-1200">
          <h3 className="font-bold text-xl mb-4">Backend</h3>
          <div className="flex flex-wrap gap-2">
            {["Node.js", "Express.js", "Golang"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm bg-gray-700 rounded-full transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-600 cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools / DevOps */}
        <div className="p-6 bg-gray-800 rounded-xl shadow-lg transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:bg-gray-1200">
          <h3 className="font-bold text-xl mb-4">Tools / DevOps</h3>
          <div className="flex flex-wrap gap-2">
            {["VS Code", "Git"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm bg-gray-700 rounded-full transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-600 cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div className="p-6 bg-gray-800 rounded-xl shadow-lg transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:bg-gray-1200">
          <h3 className="font-bold text-xl mb-4">Databases</h3>
          <div className="flex flex-wrap gap-2">
            {["MongoDB / Mongoose", "SQL"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm bg-gray-700 rounded-full transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-600 cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;
